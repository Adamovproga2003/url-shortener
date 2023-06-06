import styles from '@/styles/Home.module.css'
import { ReactNode, useState } from 'react'
import { withLayout } from 'layout/Layout'
import IconLink from 'components/IconLink/IconLink'
import IndexHeader from 'components/IndexHeader/IndexHeader'
import IndexForm from 'components/IndexForm/IndexForm'
import { useAlias } from 'context/AliasContext'
import { AnimatePresence } from 'framer-motion'
import Modal from 'components/Modal/Modal'
import useModal from 'hooks/use-modal'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import * as cookie from 'cookie'
import { useAuth } from 'context/AuthContext'
import { useEffect } from 'react'
import QRCodeContainer from './../../components/QRCodeContainer/QRCodeContainer'

type IProps = {
	isAuth: boolean
	user?: {
		name: string
	}
	token: string
}

function Home({ isAuth, user, token }: IProps): JSX.Element {
	const { alias } = useAlias()
	const { modalOpen, close, open } = useModal()
	const { onChangeAuth, onChangeName } = useAuth()
	const [typeOfUrl, setType] = useState<number>(0)

	useEffect(() => {
		if (isAuth) {
			onChangeAuth(isAuth)
			onChangeName(user?.name)
		}
	}, [isAuth])

	return (
		<div className={styles.index}>
			<div className={styles.inputContainer}>
				<IconLink typeOfUrl={typeOfUrl} setType={setType} close={close} />
				<IndexHeader />
				<div>
					<p>
						Our tool allows you to seamlessly track your audience with simple
						and easy-to-remember yet powerful links and provide your customers a
						unique tailored experience.
					</p>
				</div>
				<IndexForm handleOpen={open} token={token} />
				<div className={styles.infoContainer}>
					<button>Get Started</button>
					<button>Learn More</button>
				</div>
			</div>
			<ModalContainer>
				{modalOpen && typeOfUrl === 0 && (
					<Modal alias={alias} handleClose={close} />
				)}
			</ModalContainer>
			<QRContainer>
				{modalOpen && typeOfUrl === 1 && (
					<QRCodeContainer alias={alias} close={close} />
				)}
			</QRContainer>
		</div>
	)
}

type ModalContainerProps = {
	children: ReactNode
}

const ModalContainer = ({ children }: ModalContainerProps) => (
	<AnimatePresence initial={false} exitBeforeEnter={true}>
		{children}
	</AnimatePresence>
)

const QRContainer = ({ children }: ModalContainerProps) => (
	<AnimatePresence initial={false} exitBeforeEnter={true}>
		{children}
	</AnimatePresence>
)

export default withLayout(Home)

const getServerSideProps: GetServerSideProps = async context => {
	const cookies = cookie.parse(context.req.headers.cookie || '')

	if (!cookies.TOKEN) {
		return {
			props: { isAuth: false, user: null, token: null },
		}
	}
	axios.defaults.baseURL = 'http://localhost:4001/api'
	axios.defaults.withCredentials = true
	axios.defaults.headers['Authorization'] = `Bearer ${cookies.TOKEN}`

	try {
		const data = await axios.get('/auth/profile')
		return {
			props: {
				isAuth: true,
				user: {
					name: data.data.name,
				},
				token: cookies.TOKEN,
			},
		}
	} catch (err) {
		console.error(err)

		return {
			props: {
				isAuth: false,
			},
		}
	}
}
