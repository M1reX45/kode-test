import styled from 'styled-components'
import { ReactComponent as Icon } from '~assets/svg/cross.svg'

export const Cross = styled(Icon)(
	({ theme }) => `
	display: block;
	> path {
		transition: fill 0.3s ease-in-out;
		fill: ${theme.colors.content.tetriary};
	}
`
)
