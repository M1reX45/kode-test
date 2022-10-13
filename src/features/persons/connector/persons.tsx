import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { $error, fetchPersonsFx, $filteredPersons } from '../model'
import { Errors } from '~ui/molecules'
import { PersonList, SkeletonList } from '~ui/organisms'
import { $sortType } from '~features/sort'
import { $currentDepartment } from '~features/departments'

export const PersonListConnector = () => {
	const filteredPersons = useStore($filteredPersons)
	const currentDepartment = useStore($currentDepartment)
	const sortType = useStore($sortType)
	const isLoading = useStore(fetchPersonsFx.pending)
	const isError = useStore($error)

	useEffect(() => {
		fetchPersonsFx(currentDepartment)
	}, [currentDepartment])

	if (isError) return <Errors.Critical />

	if (isLoading) return <SkeletonList />

	return !filteredPersons.length ? (
		<Errors.Empty />
	) : (
		<PersonList persons={filteredPersons} sortType={sortType} />
	)
}
