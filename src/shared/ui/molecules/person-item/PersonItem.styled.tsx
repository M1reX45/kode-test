import styled from 'styled-components'
import { Text } from '~ui/atoms/text/Text.styled'

interface PersonItemProps {
	$isColumn?: boolean
}

export const Wrapper = styled.div<PersonItemProps>(
	({ $isColumn }) => `
	display: flex;
	align-items: center;
	padding: ${$isColumn ? '12px 0px' : '6px 0px'};
`
)

export const PersonItem = styled.div<PersonItemProps>(
	({ $isColumn }) => `
	display: flex;
	align-items: center;
	cursor: pointer;
	max-width: fit-content;
	flex-direction: ${$isColumn && 'column'};
`
)

export const Info = styled.div<PersonItemProps>(
	({ $isColumn }) => `
	display: flex;
	flex-direction: column;
	align-items: ${$isColumn && 'center'};
	margin: ${$isColumn ? '24px 0px 0px 0px' : '0px 0px 0px 16px'};
`
)

export const Title = styled.div<PersonItemProps>(
	({ $isColumn }) => `
	display: flex;
	align-items: baseline;
	margin-bottom: ${$isColumn ? '12px' : '3px'};
`
)

export const Name = styled(Text)<PersonItemProps>(
	({ theme, $isColumn }) => `
	white-space: nowrap;
	${$isColumn && theme.text.titleLarge};
`
)

export const Tag = styled(Text)<PersonItemProps>(
	({ theme, $isColumn }) => `
	margin-left: 4px;
	${$isColumn && theme.text.tagLarge};
`
)

export const Birthday = styled.div`
	margin-left: auto;
`
