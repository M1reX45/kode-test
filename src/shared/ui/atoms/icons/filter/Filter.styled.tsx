import styled from 'styled-components'
import { ReactComponent as Icon } from '~assets/svg/filter.svg'

interface FilterProps {
	$isActive?: boolean
}

export const Filter = styled(Icon)<FilterProps>(
	({ theme, $isActive }) => `
	display: block;
	cursor: pointer;
	> path {
		transition: fill 0.3s ease-in-out;
		fill: ${$isActive && theme.colors.content.secondary};
	}
	&:hover {
		> path {
			fill: ${theme.colors.content.secondary};
		}
	}
`
)
