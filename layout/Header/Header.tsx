import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Header.module.css'
import { HeaderProps } from './Header.props'
import cn from 'classnames'
import Image from 'next/image'
import fluidPic from 'public/fluid.svg'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MenuToggle } from './components/Menu/MenuToggle'
import { Size, useWindowSize } from 'hooks/use-window-size'
import { useAuth } from 'context/AuthContext'

export const Header = ({
	children,
	setOpen,
	isOpen,
	logout,
}: HeaderProps): JSX.Element => {
	const router = useRouter()
	const size: Size = useWindowSize()
	const { isAuth, name } = useAuth()
	const [menu, showMenu] = useState<boolean>(false)

	useEffect(() => {
		if (size.width !== undefined && size.width > 997 && isOpen) {
			setOpen(false)
		}
	}, [isOpen, size.width, setOpen])

	return (
		<div className={styles.container}>
			<header className={styles.header} id='header'>
				<div className={styles.logoContainer}>
					<Link href='/' className={styles.logo}>
						<span>Premium</span> URL Shortener
					</Link>
				</div>
				<div className={styles.navContainer}>
					<div className={styles.md}>
						<Link
							href='/features'
							className={cn({
								[styles.isActive]: router.pathname === '/features',
							})}>
							Features
						</Link>
					</div>
					<div className={styles.md}>
						<Link
							href='/pricing'
							className={cn({
								[styles.isActive]: router.pathname === '/pricing',
							})}>
							Pricing
						</Link>
					</div>
					{!isAuth && (
						<div className={cn(styles.sm, styles.md)}>
							<Link
								href='/login'
								className={cn({
									[styles.isActive]: router.pathname === '/login',
								})}>
								Login
							</Link>
						</div>
					)}
					<div className={styles.md}>
						<Link
							href='/'
							className={cn({
								[styles.isActive]: router.pathname === '/',
							})}>
							Get Started
						</Link>
					</div>
					{isAuth && (
						<motion.div className={cn(styles.sm, styles.md, styles.auth)}>
							<motion.button onClick={() => showMenu(!menu)}>
								<div className={styles.avatar}>{name?.slice(0, 1)}</div>
							</motion.button>
							<AnimatePresence>
								{menu && (
									<motion.div
										className={styles.menu}
										initial={{
											height: 0,
											width: 0,
											y: 0,
										}}
										animate={{
											height: 'fit-content',
											y: 10,
											width: 'fit-content',
										}}
										exit={{
											height: 0,
											y: 0,
											width: 0,
										}}
										onClick={() => showMenu(true)}>
										<motion.button
											onClick={logout}
											onBlur={() => showMenu(false)}
											autoFocus>
											Logout
										</motion.button>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					)}
					<div className={styles.sm}>
						<motion.nav>
							<MenuToggle toggle={setOpen} isOpen={isOpen} />
						</motion.nav>
					</div>
				</div>
				<div className={styles.decorContainer}>
					<Image
						src={fluidPic}
						alt='Picture of the author'
						blurDataURL='data:...'
						placeholder='blur'
					/>
				</div>
			</header>
		</div>
	)
}
