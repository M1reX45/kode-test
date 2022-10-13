import { $sortType, setSortType } from '../model'
import { Buttons } from '~ui/molecules'
import { useStore } from 'effector-react'

export const SortConnector = () => {
	const sortType = useStore($sortType)

	return (
		<>
			<Buttons.Radio id='abc' value={sortType} onChange={setSortType}>
				По алфавиту
			</Buttons.Radio>
			<Buttons.Radio
				id='birthday'
				value={sortType}
				onChange={setSortType}
			>
				По дню рождения
			</Buttons.Radio>
		</>
	)
}
