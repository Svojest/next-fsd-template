'use client'

import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui'
import { MoonIcon, MoonStarIcon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useState } from 'react'

export function ChangeTheme() {
	const { theme, setTheme } = useTheme()
	const [isMounted, setIsMounted] = useState(false)

	const toggleTheme = useCallback(() => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}, [setTheme, theme])

	useEffect(() => {
		setIsMounted(true)
	}, [])

	// fix hydratation next-themes
	if (!isMounted) {
		return null
	}
	return (
		<Button size={'icon'} variant={'ghost'} onClick={toggleTheme}>
			{theme === 'light' ? (
				<Sun className={cn('transition-transform scale-100 dark:scale-0')} />
			) : null}
			{theme === 'dark' ? (
				<MoonStarIcon color='#fff' className={cn('transition-transform scale-0 dark:scale-100')} />
			) : null}
		</Button>
	)
}
