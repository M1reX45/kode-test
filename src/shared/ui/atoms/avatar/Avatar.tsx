import { FC } from 'react'
import * as SC from './Avatar.styled'

interface AvatarProps {
	url: string
	isBig?: boolean
}

export const Avatar: FC<AvatarProps> = ({ url, isBig }) => {
	return <SC.Avatar src={url} isBig={isBig} />
}
