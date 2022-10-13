import styled from 'styled-components'

export const Radio = styled.div`
	max-width: fit-content;
`

export const Label = styled.label`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	&:before {
		content: '';
		width: 22px;
		height: 22px;
		display: block;
		outline: 2px solid #6534ff;
		outline-offset: -2px;
		border-radius: 50%;
		margin-right: 14px;
		transition: all 0.2s ease-in-out;
	}
`

export const Input = styled.input`
	display: none;
	&:checked + ${Label} {
		&:before {
			outline-width: 7px;
			outline-offset: -7px;
		}
	}
`
