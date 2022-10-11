import styled from 'styled-components'
import { ReactComponent as Icon } from '~assets/svg/chevron-left.svg'

export const ChevronLeft = styled(Icon)(
	({ theme }) => `
	display: block;
	> path {
		fill: ${theme.colors.content.primary};
	}
`
)
