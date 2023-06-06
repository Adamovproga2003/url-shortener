import { FooterProps } from './Footer.props'
import { FC } from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

export const Footer: FC<FooterProps> = props => {
	return (
		<div
			className={`${styles.footer} row justify-content-between align-items-center`}>
			<div className='col-4'>
				<a href='#header'>Premium URL Shortener</a>
			</div>
			<div className='col-4'>
				<p className='text-end m-0'>
					{new Date().getFullYear() - 1}-{new Date().getFullYear()}
				</p>
			</div>
		</div>
	)
}
