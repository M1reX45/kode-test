import styled from 'styled-components'

export const SearchField = styled.div(
	({ theme }) => `
	display: flex;
	border-radius: 16px;
	padding: 8px 12px;
	background-color: ${theme.colors.background.secondary};
`
)
