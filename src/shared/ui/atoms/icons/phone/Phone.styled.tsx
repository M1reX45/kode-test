import styled from 'styled-components'
import { ReactComponent as Icon } from '~assets/svg/phone.svg'

export const Phone = styled(Icon)(
	({ theme }) => `
	display: block;
	> path {
		fill: ${theme.colors.content.primary};
	}
`
)
