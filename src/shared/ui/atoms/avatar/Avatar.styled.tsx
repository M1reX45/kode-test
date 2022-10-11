import styled from 'styled-components'

interface AvatarProps {
	isBig?: boolean
}

export const Avatar = styled.img<AvatarProps>(
	({ isBig, theme }) => `
	border-radius: 50%;
	width: ${
		isBig
			? theme.imagesSize.avatar['big']
			: theme.imagesSize.avatar['small']
	};
	height: ${
		isBig
			? theme.imagesSize.avatar['big']
			: theme.imagesSize.avatar['small']
	};
`
)
