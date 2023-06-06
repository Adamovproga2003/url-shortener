import { Typewriter } from 'react-simple-typewriter'
import styles from './IndexHeader.module.css'

const IndexHeader = () => {
	return (
		<div className={styles.indexHeader}>
			<h1>
				A simple link but powerful tool for{' '}
				<div>
					<Typewriter
						words={['Joy.', 'Need.', 'You.', 'Everyone.']}
						loop={0}
						cursor
						cursorStyle='|'
						typeSpeed={100}
						deleteSpeed={70}
						delaySpeed={2000}
					/>
				</div>
			</h1>
		</div>
	)
}

export default IndexHeader
