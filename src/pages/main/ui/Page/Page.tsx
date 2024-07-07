import { ChangeTheme } from '@/features/theme/changeTheme'
import { Button } from '@/shared/ui'

import Link from 'next/link'

export function MainPage() {
	return (
		<main className='container'>
			<p>Main page</p>
            <ChangeTheme />
		</main>
	)
}
