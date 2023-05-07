import styled from 'styled-components';

type TCardComponentProps = {
  isDragging: boolean;
};

export const CardContainer = styled.article<TCardComponentProps>`
  /* padding: 8px 8px 4px 12px; */
  padding: 4px 5px 4px 12px;
  background-color: ${(props) => props.theme.colors.slate1};
  box-shadow: ${(props) =>
    props.isDragging
      ? 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'
      : '0px 1px 1px #091e4240, 0px 0px 1px #091e424f'};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  margin: 4px 0 4px;
  cursor: pointer;
`;

export const CardTopContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export const CardTitleContainer = styled.div`
  color: ${(props) => props.theme.colors.slate12};
  padding: 0;
`;

export const CardBottomContainer = styled.div``;
