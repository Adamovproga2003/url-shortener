import React from 'react'
import QRCode from 'react-qr-code'
import styles from './QRCodeContainer.module.css'
import { FC } from 'react'
import { motion } from 'framer-motion'

type Props = {
	alias: string
	close: () => void
}

const opacity = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
}

const QRCodeContainer: FC<Props> = ({ alias, close }) => {
	return (
		<motion.div style={{ margin: 'auto' }} className={styles.container}>
			<motion.button
				variants={opacity}
				initial='hidden'
				animate='visible'
				exit='exit'
				className={styles.QRCodeContainer}
				autoFocus
				onBlur={close}>
				<QRCode
					value={`http://localhost:3000/redirect/${alias}`}
					className={styles.whiteBorder}
				/>
			</motion.button>
		</motion.div>
	)
}

export default QRCodeContainer
