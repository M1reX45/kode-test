import { useStore } from 'effector-react'
import { Modal } from '~ui/organisms'
import { $isModalVisible, toggleModal } from '../model'

export const ModalConnector = () => {
	const isModalVisible = useStore($isModalVisible)

	return <Modal isModalVisible={isModalVisible} onCloseModal={toggleModal} />
}
