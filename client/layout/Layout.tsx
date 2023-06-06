import {
	Component as ReactComponent,
	ComponentType,
	useRef,
	FC,
	useState,
} from 'react'
import { Header } from './Header/Header'
import { LayoutProps } from './Layout.props'
import { motion } from 'framer-motion'
import { Navbar } from './Navbar/Navbar'
import { useAuth } from 'context/AuthContext'
import { useDimensions } from 'hooks/use-dimensions'
import { useResponse } from 'context/ResponseContext'
import axios from 'axios'
import styles from './Layout.module.css'
import { Footer } from './Footer/Footer'

const Layout: FC<LayoutProps> = ({ children }) => {
	const [isOpen, setOpen] = useState<boolean>(false)
	const containerRef = useRef(null)
	const { height } = useDimensions(containerRef)

	const { onChangeAuth, onChangeName } = useAuth()
	const { onChangeMessage, onChangeErrors } = useResponse()

	const logout = () => {
		onChangeAuth(false)
		onChangeName(undefined)
		const instance = axios.create({
			baseURL: 'http://localhost:4001/api',
			withCredentials: true,
		})

		instance
			.get('/auth/logout')
			.then(function (res) {
				onChangeMessage(res.data.message)
			})
			.catch(function (res) {
				onChangeErrors([res.response.data.errors])
			})
	}

	return (
		<motion.div
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			initial={false}
			ref={containerRef}
			className={styles.wrapper}>
			<Header
				className={styles.header}
				setOpen={setOpen}
				isOpen={isOpen}
				logout={logout}
			/>
			<Navbar isOpen={isOpen} toggle={setOpen} />
			<div className={styles.container}>
				<div className={styles.body}>{children}</div>
			</div>
			{/* <Sidebar className={styles.sidebar} />
            <div className={styles.body}>
                {children}
            </div> */}
			<Footer />
		</motion.div>
	)
}

export const withLayout = <P extends object>(Component: ComponentType<P>) =>
	class WithLayout extends ReactComponent<P> {
		render() {
			return (
				<Layout>
					<Component {...(this.props as P)} />
				</Layout>
			)
		}
	}
