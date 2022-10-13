import styled from 'styled-components'

interface ModalProps {
	$isModalVisible: boolean
}

export const Wrapper = styled.div<ModalProps>(
	({ $isModalVisible }) => `
	width: 100%;
	height: 100%;
	position: fixed;
	align-items: center;
	justify-content: center;
	z-index: 1;
	background-color: rgba(5, 5, 16, 0.16);
	top: 0;
	left: 0;
	transition: all .2s ease-in-out;
	display: ${$isModalVisible ? 'flex' : 'none'};
`
)

export const Modal = styled.div(
	({ theme }) => `
	width: 374px;
	height: 192px;
	border-radius: 20px;
	z-index: 2;
	padding: 24px;
	background-color: ${theme.colors.background.primary};
`
)

export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin-bottom: 16px;
	> div {
		position: absolute;
		right: 0;
	}
`

export const Body = styled.div`
	height: 120px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`
