import styled from 'styled-components'

interface DepartmentTabItemProps {
	$isActive?: boolean
}

export const DepartmentTabItem = styled.div<DepartmentTabItemProps>(
	({ theme, $isActive }) => `
	cursor: pointer;
	padding: 7px 12px;
	max-width: fit-content;
	transition: all .2s ease-in-out;
	border-bottom: ${
		$isActive
			? `2px solid ${theme.colors.content.secondary}`
			: '2px solid transparent'
	};
	> span {
		font-size: 15px;
		white-space: nowrap;
		font-weight: ${
			$isActive
				? theme.text.body.fontWeight.bold
				: theme.text.body.fontWeight.semibold
		};
		color: ${$isActive ? theme.colors.text.primary : theme.colors.text.tetriary};
	}
`
)
