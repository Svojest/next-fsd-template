'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Logo() {
	const { theme } = useTheme()
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null
	}
	return (
		<Link href={'/'}>
			{theme === 'light' ? (
				<Image src={'/logo-dark.svg'} alt='' width={130} height={50}  priority={false}/>
			) : (
				<Image src={'/logo-light.svg'} alt='' width={130} height={50} priority={false} />
			)}
		</Link>
	)
}
