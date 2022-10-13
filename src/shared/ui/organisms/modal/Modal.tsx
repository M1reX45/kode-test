import { FC } from 'react'
import * as SC from './Modal.styled'
import { Text } from '~ui/atoms'
import { Buttons } from '~ui/molecules'
import { SortConnector } from '~features/sort/connector'

interface ModalProps {
	isModalVisible: boolean
	onCloseModal: () => void
}

export const Modal: FC<ModalProps> = ({ isModalVisible, onCloseModal }) => {
	return (
		<SC.Wrapper $isModalVisible={isModalVisible} onClick={onCloseModal}>
			<SC.Modal onClick={e => e.stopPropagation()}>
				<SC.Title>
					<Text type='titleSmall'>Сортировка</Text>
					<Buttons.Close onClick={onCloseModal} />
				</SC.Title>
				<SC.Body>
					<SortConnector />
				</SC.Body>
			</SC.Modal>
		</SC.Wrapper>
	)
}
