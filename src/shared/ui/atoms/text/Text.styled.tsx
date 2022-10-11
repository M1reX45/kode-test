import styled from 'styled-components'
import { TextType, TextColor, TextWeight } from '~types/text'

interface TextProps {
	type?: TextType
	color?: TextColor
	weight?: TextWeight
}

export const Text = styled.span<TextProps>(
	({ theme, color = 'primary', type = 'body', weight = 'regular' }) => `
	font-size: ${theme.text[type].fontSize};
	line-height: ${theme.text[type].lineHeight};
	font-weight: ${
		type === 'body'
			? theme.text[type].fontWeight[weight]
			: theme.text[type].fontWeight
	};
	color: ${theme.colors.text[color]};
`
)
