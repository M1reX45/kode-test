import styled from 'styled-components'
import { ReactComponent as Icon } from '~assets/svg/magnifying-glass.svg'

interface MagnifyingGlassProps {
	isActive?: boolean
}

export const MagnifyingGlass = styled(Icon)<MagnifyingGlassProps>(
	({ theme, isActive }) => `
	display: block;
	cursor: pointer;
	> path {
		transition: fill 0.3s ease-in-out;
		fill: ${isActive && theme.colors.content.primary};
	}
	&:hover {
		> path {
			fill: ${theme.colors.content.primary};
		}
	}
`
)
