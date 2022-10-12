import { FC } from 'react'
import * as SC from './MagnifyingGlass.styled'

interface MagnifyingGlassProps {
	isActive?: boolean
}

export const MagnifyingGlass: FC<MagnifyingGlassProps> = ({
	isActive = false
}) => {
	return <SC.MagnifyingGlass $isActive={isActive} />
}
