import { FC } from 'react'
import * as SC from './Radio.styled'

interface RadioProps {
	id: string
	children: string
}

export const Radio: FC<RadioProps> = ({ id, children }) => {
	return (
		<div>
			<SC.Input type='radio' id={id} name='sort-type' />
			<SC.Label htmlFor={id}>{children}</SC.Label>
		</div>
	)
}
