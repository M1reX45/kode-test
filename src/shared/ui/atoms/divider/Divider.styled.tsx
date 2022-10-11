import styled from 'styled-components'

export const Divider = styled.div(
	({ theme }) => `
	width: 100%;
	height: 1px;
	background-color: ${theme.colors.content.tetriary};
`
)
