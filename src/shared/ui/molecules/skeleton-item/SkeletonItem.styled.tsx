import styled from 'styled-components'
import * as SC from '../person-item/PersonItem.styled'

export const SkeletonItem = styled(SC.PersonItem)`
	padding: 12px 0px;
`

export const Info = styled(SC.Info)``

export const Avatar = styled.div(
	({ theme }) => `
	border-radius: 50%;
	position: relative;
	overflow: hidden;
	width: ${theme.imagesSize.avatar.small};
	height: ${theme.imagesSize.avatar.small};
	background-color: ${theme.colors.background.secondary};
	:after {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transform: translateX(-110%);
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0,
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.9) 60%,
			rgba(255, 255, 255, 0)
		);
		animation: shimmer 3s infinite;
		content: '';
	}

	@keyframes shimmer {
		100% {
			transform: translateX(110%);
		}
	}
`
)

export const Title = styled.div(
	({ theme }) => `
	width: 144px;
	height: 16px;
	border-radius: 50px;
	margin-bottom: 6px;
	position: relative;
	overflow: hidden;
	background-color: ${theme.colors.background.secondary};
	:after {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transform: translateX(-110%);
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0,
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.9) 60%,
			rgba(255, 255, 255, 0)
		);
		animation: shimmer 3s infinite;
		content: '';
	}

	@keyframes shimmer {
		100% {
			transform: translateX(110%);
		}
	}
`
)

export const Subtitle = styled(Title)`
	width: 80px;
	height: 12px;
`
