import { useParams } from 'react-router-dom'

export const Profile = () => {
	const { id } = useParams()

	return <div>{id}</div>
}
