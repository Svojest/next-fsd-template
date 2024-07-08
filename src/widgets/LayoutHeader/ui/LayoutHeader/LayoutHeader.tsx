import { ChangeTheme } from '@/features/theme/changeTheme'
import { Logo } from '../Logo/Logo'

export function LayoutHeader() {
	return (
		<div
			className={
				'mt-4 p-4 flex items-center justify-between bg-inherit rounded-xl backdrop-blur-xl bg-opacity-15'
			}
		>
			<Logo />
			<ChangeTheme />
		</div>
	)
}
