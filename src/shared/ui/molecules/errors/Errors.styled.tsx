import styled from 'styled-components'
import { Text } from '~ui/atoms/text/Text.styled'

export const Error = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: fit-content;
	margin: auto;
	> img {
		margin-bottom: 8px;
	}
	> span {
		margin-bottom: 12px;
	}
`

export const RetryButton = styled(Text)(
	({ theme }) => `
	cursor: pointer;
	transition: opacity 0.2s ease-in-out;
	color: ${theme.colors.content.secondary};
	:hover {
		opacity: 0.6;
	}
`
)
