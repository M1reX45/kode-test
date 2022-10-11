import styled from 'styled-components'

export const Image = styled.img(
	({ theme }) => `
	width: ${theme.imagesSize.picture};
	height: ${theme.imagesSize.picture};
`
)
