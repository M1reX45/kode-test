import { useStore } from 'effector-react'
import { $searchPhrase, setSearchPhrase } from '../model'
import { SearchField } from '~ui/molecules'
import { $isModalVisible, toggleModal } from '~features/modal/model'

export const SearchFieldConnector = () => {
	const searchPhrase = useStore($searchPhrase)
	const isModalVisible = useStore($isModalVisible)

	return (
		<SearchField
			searchPhrase={searchPhrase}
			setSearchPhrase={setSearchPhrase}
			isModalVisible={isModalVisible}
			onOpenModal={toggleModal}
		/>
	)
}
