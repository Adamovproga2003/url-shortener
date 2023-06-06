import styles from './AliasContainer.module.css'
import { AliasContainerProps } from './AliasContainer.props'
import { useState } from 'react'
import { HiOutlineCheckCircle, HiPlus } from 'react-icons/hi'
import { RxCrossCircled } from 'react-icons/rx'
import { ClipLoader } from 'react-spinners'
import { AnimatePresence, motion } from 'framer-motion'
import cn from 'classnames'
import axios from 'axios'

const variantsInput = {
	enter: {
		width: 150,
		opacity: 0,
		height: '24px',
	},
	center: {
		width: '100%',
		zIndex: 1,
		opacity: 1,
		height: '100%',
	},
	exit: {
		display: 'none',
		height: '24px',
	},
}

const variantsSpan = {
	enter: {
		width: '100%',
		opacity: 0,
		height: '54px',
	},
	center: {
		width: 150,
		zIndex: 1,
		opacity: 1,
		height: '24px',
	},
	exit: {
		display: 'none',
		height: '54px',
	},
}

const AliasContainer = ({ alias, handleChange }: AliasContainerProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isValid, setIsValid] = useState<boolean | null>(null)

	const onBlur = () => {
		if (!alias) {
			setIsOpen(false)
		}
	}

	const onChangeAlias = (e: React.FormEvent<HTMLInputElement>) => {
		handleChange(e)

		const value = e.currentTarget.value
		if (value) {
			setIsLoading(true)
			axios.defaults.baseURL = 'http://localhost:4001/api/' || ''
			axios.defaults.headers.common['Content-Type'] = 'application/json'

			axios
				.request({
					url: 'url/validate',
					method: 'post',
					data: {
						alias: value,
					},
				})
				.then(response => setIsValid(true))
				.catch(err => setIsValid(false))
				.finally(() => setIsLoading(false))
		}
		setIsValid(null)
	}

	return (
		<div className={styles.aliasContainer}>
			<motion.button
				type='button'
				onClick={() => setIsOpen(true)}
				animate={{
					width: isOpen ? '100%' : 150,
					transitionDuration: '.5s',
				}}
				className={cn({
					[styles.isOpen]: isOpen,
				})}>
				<AnimatePresence initial={false}>
					{isOpen && (
						<motion.div
							key={1}
							variants={variantsInput}
							initial='enter'
							animate='center'
							exit='exit'
							style={{ width: '100%' }}
							className={styles.aliasInput}>
							<motion.input
								type='text'
								placeholder='Alias'
								autoFocus
								onBlur={onBlur}
								name='alias'
								onChange={onChangeAlias}
								value={alias}
							/>
							<ClipLoader
								loading={isLoading}
								aria-label='Loading Spinner'
								data-testid='loader'
								size={20}
							/>
							{isValid && <HiOutlineCheckCircle className={styles.success} />}
							{isValid !== null && !isValid && (
								<RxCrossCircled className={styles.failed} />
							)}
						</motion.div>
					)}
					{!isOpen && (
						<motion.span
							key={2}
							variants={variantsSpan}
							initial='enter'
							animate='center'
							exit='exit'>
							Add alias
						</motion.span>
					)}
					<HiPlus onClick={() => setIsOpen(false)} />
				</AnimatePresence>
			</motion.button>
		</div>
	)
}

export default AliasContainer
