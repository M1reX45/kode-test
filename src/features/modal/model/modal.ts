import { createStore, createEvent } from 'effector'
import { $sortType } from '~features/sort'

export const toggleModal = createEvent()

export const $isModalVisible = createStore(false).on(
	[$sortType, toggleModal],
	(isModalVisible, _) => !isModalVisible
)
