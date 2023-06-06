import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem/MenuItem'
import { useRouter } from 'next/router'
import styles from './Navigation.module.css'
import cn from 'classnames'
import { routes } from 'routes'

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
}

export const Navigation = () => {
	const router = useRouter()

	return (
		<motion.ul variants={variants} className={styles.navigation}>
			{Object.keys(routes).map(item => (
				<MenuItem
					item={item}
					link={routes[item as keyof typeof routes]}
					key={item}
					className={cn({
						[styles.isActive]:
							router.pathname === routes[item as keyof typeof routes],
					})}
				/>
			))}
		</motion.ul>
	)
}
