import { FC, useState } from 'react'
import * as SC from './SearchField.styled'
import { Icons, Input } from '~ui/atoms'

interface SearchFieldProps {
	isModalVisible: boolean
	searchPhrase: string
	onOpenModal: () => void
	setSearchPhrase: (searchPhrase: string) => void
}

export const SearchField: FC<SearchFieldProps> = ({
	isModalVisible,
	searchPhrase,
	onOpenModal,
	setSearchPhrase
}) => {
	const [isFocus, setIsFocus] = useState(false)

	return (
		<SC.SearchField>
			<Icons.MagnifyingGlass isActive={isFocus || !!searchPhrase} />
			<Input
				value={searchPhrase}
				onChange={setSearchPhrase}
				onFocus={setIsFocus}
			/>
			<div onClick={onOpenModal}>
				<Icons.Filter isActive={isModalVisible} />
			</div>
		</SC.SearchField>
	)
}
