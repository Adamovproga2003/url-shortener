import { withLayout } from 'layout/Layout'
import styles from './../styles/Pricing.module.css'
import { FC, useEffect } from 'react'
import { useAuth } from 'context/AuthContext'
import * as cookie from 'cookie'
import { GetServerSideProps } from 'next'
import axios from 'axios'

interface IPlan {
	title: string
	description: string[]
	price: number
	color: string
}

const plans = [
	{
		title: 'Beginner',
		description: ['url-shortener', 'authorization'],
		price: 10,
		color: '#EBBD32',
	},
	{
		title: 'Start',
		description: ['url-shortener', 'authorization', 'alias'],
		price: 15,
		color: '#ED8A30',
	},
	{
		title: 'VIP',
		description: ['url-shortener', 'authorization', 'alias', '🧪 QR code'],
		price: 30,
		color: '#EF542E',
	},
]

interface IProps {
	isAuth: boolean
	user?: {
		name: string
	}
	token: string
}

const Pricing: FC<IProps> = ({ isAuth, user }) => {
	const { onChangeAuth, onChangeName } = useAuth()

	useEffect(() => {
		if (isAuth) {
			onChangeAuth(isAuth)
			onChangeName(user?.name)
		}
	}, [isAuth])

	return (
		<div className={`${styles.pricing} overflow-hidden`}>
			<div className='row g-5'>
				{plans.map((p: IPlan, idx: number) => (
					<div className={`col-sm-12 col-md-6 col-lg-4`} key={`plan-${idx}`}>
						<div className={`p-3 rounded-3 ${styles.pricingCard}`}>
							<div>
								<h1 style={{ color: p.color }}>{p.title}</h1>
								<ul>
									{p.description.map((adv, index) => (
										<li key={'adv' + index}>{adv}</li>
									))}
								</ul>
							</div>
							<div>
								<h3>{p.price} $</h3>
								<div className={`d-grid`}>
									<button className={`btn ${styles.orderButton}`} type='button'>
										Order
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default withLayout(Pricing)

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
