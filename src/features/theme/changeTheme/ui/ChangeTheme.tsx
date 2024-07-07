'use client'

import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui'
import { MoonIcon, MoonStarIcon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useCallback } from 'react'

export function ChangeTheme() {
	const { theme, setTheme } = useTheme()

	const handleChangeTheme = useCallback(() => {
		if (theme === 'light') {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}, [setTheme, theme])

	return (
		<Button size={'icon'} variant={'ghost'} onClick={handleChangeTheme}>
			{theme === 'light' ? (
				<Sun className={cn('transition-transform scale-100 dark:scale-0')} />
			) : null}
			{theme === 'dark' ? (
				<MoonStarIcon color='#fff' className={cn('transition-transform scale-0 dark:scale-100')} />
			) : null}
		</Button>
	)
}
