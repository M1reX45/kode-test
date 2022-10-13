import styled from 'styled-components'

export const YearDivider = styled.div(
	({ theme }) => `
	height: 68px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0px 24px;
	> span {
		display: flex;
		justify-content: center;
		width: 160px;
		margin: 0px 12px;
	}
	:before,
	:after {
		content: '';
		flex: 1;
		border-bottom: 1px solid ${theme.colors.content.tetriary};
	}
`
)
