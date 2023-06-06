import styles from './IconLink.module.css'
import { HiLink } from 'react-icons/hi'
import { MdQrCode } from 'react-icons/md'
import { FC } from 'react'

interface IProps {
	typeOfUrl: number
	setType: (type: number) => void
	close: () => void
}

const IconLink: FC<IProps> = ({ typeOfUrl, setType, close }) => {
	return (
		<div className={styles.icon}>
			<div
				onClick={() => {
					close()
					setType(0)
				}}
				className={typeOfUrl === 0 ? styles.active : ''}>
				<HiLink />
			</div>
			<div
				onClick={() => {
					close()
					setType(1)
				}}
				className={typeOfUrl === 1 ? styles.active : ''}>
				<MdQrCode />
			</div>
		</div>
	)
}

export default IconLink
