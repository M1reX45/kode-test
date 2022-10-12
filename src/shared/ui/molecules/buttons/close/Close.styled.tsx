import styled from 'styled-components'

export const Close = styled.div(
	({ theme }) => `
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background-color: ${theme.colors.background.secondary};
	&:hover {
		> svg {
			> path {
				fill: ${theme.colors.content.primary};
			}
		}
	}
`
)
