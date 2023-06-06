import { withLayout } from 'layout/Layout'
import styles from './../styles/Features.module.css'
import {
	MdContentCut,
	MdDashboardCustomize,
	MdTimer10,
	MdPassword,
	MdQrCode,
} from 'react-icons/md'
import { useAuth } from 'context/AuthContext'
import { FC, useEffect } from 'react'
import axios from 'axios'
import * as cookie from 'cookie'
import { GetServerSideProps } from 'next'

interface IProps {
	isAuth: boolean
	user?: {
		name: string
	}
}

const Features: FC<IProps> = ({ isAuth, user }) => {
	const { onChangeAuth, onChangeName } = useAuth()

	useEffect(() => {
		if (isAuth) {
			onChangeAuth(isAuth)
			onChangeName(user?.name)
		}
	}, [isAuth])
	return (
		<div className={styles.features}>
			<div>
				<div>
					<MdContentCut />
				</div>
				<div>
					URL Shortening: The core functionality of the app, allowing users to
					input long URLs and generate shortened versions.
				</div>
			</div>
			<div>
				<div>
					<MdDashboardCustomize />
				</div>
				<div>
					Customizable Short URLs: Allowing users to choose their own custom
					short URLs instead of automatically generated ones.
				</div>
			</div>
			<div className={styles.inProgress}>
				<div className={styles.inProgressAbsolute}>
					<lord-icon
						src='https://cdn.lordicon.com/hbigeisx.json'
						trigger='loop'
						colors='primary:#fff'></lord-icon>
					<div>In progress</div>
				</div>
				<div className={styles.inProgressDiv}>
					<div>
						<MdQrCode />
					</div>
					<div>
						QR Code Generation: Generating QR codes for shortened URLs, enabling
						users to easily share and scan them using mobile devices.
					</div>
				</div>
			</div>
			<div>
				<div>
					<MdTimer10 />
				</div>
				<div>
					Link Expiration: Offering the option to set an expiration date for
					shortened URLs, after which they automatically expire and become
					inaccessible.
				</div>
			</div>
			<div>
				<div>
					<MdPassword />
				</div>
				<div>
					Password Protection: Allowing users to add password protection to
					their shortened URLs, ensuring that only those with the correct
					password can access the destination.
				</div>
			</div>
		</div>
	)
}

export default withLayout(Features)

export const getServerSideProps: GetServerSideProps = async context => {
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
