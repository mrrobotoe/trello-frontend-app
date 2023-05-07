import styled from 'styled-components';

type TAddItemButtonProps = {
  dark?: boolean;
};

export const AddNewCardButton = styled.button<TAddItemButtonProps>`
  background-color: ${(props) => (props.dark ? '#ffffff3a' : props.theme.colors.slate2)};
  border-radius: 3px;
  border: none;
  font-size: 15px;
  color: ${(props) => (!props.dark ? props.theme.colors.slate12 : props.theme.colors.slate1)};
  cursor: pointer;
  width: 100%;
  padding: 5px 10px;
  text-align: left;
  transition: background 0.24s ease-in;
  &:hover {
    background-color: ${(props) => (props.dark ? '#ffffff74' : props.theme.colors.slate4)};
  }
`;

export const AddNewColumnButton = styled(AddNewCardButton)`
  padding: 10px 12px;
  color: ${(props) => (props.dark ? props.theme.colors.slate12 : props.theme.colors.slate1)};
`;

export const AddNewColumnFormButton = styled.button`
  padding: 5px 8px;
  background-color: ${(props) => props.theme.colors.slate10};
  border-radius: 3px;
  border: none;
  color: ${(props) => props.theme.colors.slate1};
  cursor: pointer;
  width: 5rem;
  &:hover {
    background-color: ${(props) => props.theme.colors.slate11};
  }
  &:disabled {
    cursor: default;
    background-color: ${(props) => props.theme.colors.slate8};
  }
`;

export const AddNewCardFormButton = styled(AddNewColumnFormButton)``;
