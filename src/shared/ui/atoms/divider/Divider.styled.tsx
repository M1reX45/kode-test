import styled from 'styled-components'

export const Divider = styled.div(
	({ theme }) => `
	width: 100%;
	height: 0.5px;
	background-color: ${theme.colors.background.secondary};
`
)
