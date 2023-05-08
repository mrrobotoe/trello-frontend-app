import styled from 'styled-components';

type TAddItemButtonProps = {
  dark?: boolean;
};

export const AddNewCardButton = styled.button<TAddItemButtonProps>`
  background-color: ${(props) => (props.dark ? '#ffffff3a' : props.theme.colors.slate2)};
  border-radius: 3px;
  border: none;
  font-size: 15px;
  color: ${(props) => (!props.dark ? props.theme.colors.slate11 : props.theme.colors.slate1)};
  cursor: pointer;
  width: 100%;
  padding: 5px 10px;
  text-align: left;
  transition: background 0.24s ease-in;
  font-size: 0.9rem;
  font-weight: 400;
  &:hover {
    background-color: ${(props) => (props.dark ? '#ffffff74' : props.theme.colors.slate4)};
  }
`;

export const AddNewColumnButton = styled(AddNewCardButton)`
  padding: 10px 12px;
  color: ${(props) => (props.dark ? props.theme.colors.slate12 : props.theme.colors.slate1)};
  font-size: 0.9rem;
`;

export const AddNewColumnFormButton = styled.button`
  padding: 5px 8px;
  background-color: ${(props) => props.theme.colors.slate10};
  border-radius: 3px;
  border: none;
  color: ${(props) => props.theme.colors.slate1};
  cursor: pointer;
  width: 5rem;
  font-size: 0.9rem;
  &:hover {
    background-color: ${(props) => props.theme.colors.slate11};
  }
  &:disabled {
    cursor: default;
    background-color: ${(props) => props.theme.colors.slate8};
  }
`;

export const AddNewCardFormButton = styled(AddNewColumnFormButton)``;

export const ButtonContainer = styled.div`
  position: absolute;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  top: 1.2rem;
  right: 1rem;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.slate4};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.slate5};
  }
`;
