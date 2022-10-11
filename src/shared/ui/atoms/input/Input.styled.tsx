import styled from 'styled-components'

export const Input = styled.input(
	({ theme }) => `
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	:focus {
		outline: none;
	}
	width: 100%;
	margin: 0 8px;
	caret-color: ${theme.colors.content.secondary};
	font-size: ${theme.text.body.fontSize};
	font-weight: ${theme.text.body.fontWeight.regular};
	line-height: ${theme.text.body.lineHeight};
	::placeholder {
		color: ${theme.colors.content.tetriary};
		font-weight: ${theme.text.body.fontWeight.semibold};
	}
`
)
