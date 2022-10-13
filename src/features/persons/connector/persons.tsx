import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Responce } from '~types/api'
import { PersonsController } from '~core/api/controllers'
import { $filteredPersons, addPersonsToStore } from '../model'
import { Errors } from '~ui/molecules'
import { PersonList, SkeletonList } from '~ui/organisms'
import { $sortType } from '~features/sort'
import { $currentDepartment } from '~features/departments'

export const PersonListConnector = () => {
	const filteredPersons = useStore($filteredPersons)
	const currentDepartment = useStore($currentDepartment)
	const sortType = useStore($sortType)
	const client = useQueryClient()

	const { isLoading, isFetching, isError, refetch } = useQuery(
		['persons', currentDepartment],
		() => PersonsController.fetch(currentDepartment),
		{
			staleTime: 5 * 60 * 1000,
			enabled: true,
			refetchOnWindowFocus: false
		}
	)

	const data = client.getQueryData<Responce>(['persons', currentDepartment])

	useEffect(() => {
		data?.items ? addPersonsToStore(data.items) : addPersonsToStore([])
	}, [data])

	if ((isLoading || isFetching) && !isError) return <SkeletonList />

	if (isError && data === undefined)
		return <Errors.Critical refetch={refetch} />

	return filteredPersons.length === 0 ? (
		<Errors.Empty />
	) : (
		<PersonList persons={filteredPersons} sortType={sortType} />
	)
}
