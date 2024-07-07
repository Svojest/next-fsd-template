import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui'
import { MoonIcon, Sun } from 'lucide-react'
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
		<Button size={'icon'} onClick={handleChangeTheme}>
			<Sun className={cn('transition-transform scale-100 dark:scale-0')} />
			<MoonIcon className={cn('transition-transform scale-0 dark:scale-100')} />
		</Button>
	)
}
