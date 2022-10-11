import styled from 'styled-components'
import { ReactComponent as Icon } from '~assets/svg/star.svg'

export const Star = styled(Icon)(
	({ theme }) => `
	display: block;
	> path {
		fill: ${theme.colors.content.primary};
	}
`
)
