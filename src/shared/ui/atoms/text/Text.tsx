import { FC, ReactNode } from 'react'
import { TextColor, TextType, TextWeight } from '~types/text'
import * as SC from './Text.styled'

interface TextProps {
	type?: TextType
	color?: TextColor
	weight?: TextWeight
	children: ReactNode
}

export const Text: FC<TextProps> = ({
	type = 'body',
	color = 'primary',
	weight,
	children
}) => {
	return (
		<SC.Text type={type} color={color} weight={weight}>
			{children}
		</SC.Text>
	)
}
