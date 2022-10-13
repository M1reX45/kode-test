import styled from 'styled-components'

export const Header = styled.header(
	({ theme }) => `
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 20px;
	background-color: ${theme.colors.background.secondary};
	div {
		cursor: auto;
	}
`
)

export const Navbar = styled.nav`
	display: flex;
	align-items: center;
	min-width: 100%;
	padding: 17px 0px;
	> div {
		cursor: pointer;
	}
`

export const Backward = styled.div`
	padding: 7px 9px;
	margin-left: 20px;
`

export const Body = styled.div`
	padding: 8px 16px;
`

export const Info = styled.div`
	display: flex;
	> span {
		margin-left: 16px;
	}
`
