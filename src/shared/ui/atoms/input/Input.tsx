import { FC } from 'react'
import * as SC from './Input.styled'

interface InputProps {
	value: string
	onFocus: (isFocus: boolean) => void
	onChange: (value: string) => void
}

export const Input: FC<InputProps> = ({ value, onFocus, onChange }) => {
	return (
		<SC.Input
			placeholder='Введи имя, тег, почту...'
			value={value}
			onChange={e => onChange(e.target.value)}
			onFocus={() => onFocus(true)}
			onBlur={() => onFocus(false)}
		/>
	)
}
