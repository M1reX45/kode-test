import { FC } from 'react'
import * as SC from './Radio.styled'

interface RadioProps {
	id: 'abc' | 'birthday'
	children: string
	value: RadioProps['id']
	onChange: (id: RadioProps['id']) => void
}

export const Radio: FC<RadioProps> = ({ id, children, value, onChange }) => {
	return (
		<SC.Radio>
			<SC.Input
				type='radio'
				id={id}
				name='sort-type'
				checked={value === id}
				onChange={() => onChange(id)}
			/>
			<SC.Label htmlFor={id}>{children}</SC.Label>
		</SC.Radio>
	)
}
