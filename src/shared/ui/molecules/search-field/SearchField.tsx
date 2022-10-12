import * as SC from './SearchField.styled'
import { Icons, Input } from '~ui/atoms'

export const SearchField = () => {
	return (
		<SC.SearchField>
			<Icons.MagnifyingGlass />
			<Input />
			<Icons.Filter />
		</SC.SearchField>
	)
}
