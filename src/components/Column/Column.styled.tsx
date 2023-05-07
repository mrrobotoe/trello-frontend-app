import TextareaAutoSize from 'react-textarea-autosize';
import styled from 'styled-components';

type TColumnComponentProps = {
  isDragging?: boolean;
  isDraggingOver?: boolean;
};

export const ColumnContainer = styled.div<TColumnComponentProps>`
  padding: 5px;
  max-width: 272px;
  min-width: 272px;
`;

export const ColumnComponent = styled.section<TColumnComponentProps>`
  background-color: ${(props) => props.theme.colors.slate2};
  max-height: 100%;
  white-space: normal;
  border-radius: 6px;
  box-shadow: ${(props) =>
    props.isDragging
      ? 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
      : '0px 1px 1px #091e4240, 0px 0px 1px #091e424f'};
  display: flex;
  flex-direction: column;
  white-space: normal;
  position: relative;
  box-sizing: border-box;
  padding: 0.6rem;
`;

export const ColumnTitleContainer = styled.div`
  position: relative;
`;

export const ColumnTextArea = styled(TextareaAutoSize)`
  letter-spacing: 0.5px;
  overflow: hidden;
  overflow-wrap: break-word;
  padding: 4px 8px;
  display: block;
  border: none;
  resize: none;
  color: ${(props) => props.theme.colors.slate12};
  font-weight: 600;
  min-height: 20px;
  max-height: 256px;
  font-size: 0.9rem;
  padding-right: 32px;
  background-color: transparent;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 90%;

  &:disabled {
    -webkit-text-fill-color: ${(props) => props.theme.colors.slate12};
    opacity: 1; /* required on iOS */
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    background-color: ${(props) => props.theme.colors.slate3};
    cursor: text;
  }
`;

interface IColumnTitleProps {
  isHidden: boolean;
}

export const ColumnTitle = styled.h3<IColumnTitleProps>`
  background-color: transparent;
  position: absolute;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  display: ${(props) => (props.isHidden ? 'none' : '')};
`;

export const ColumnBottomContainer = styled.div`
  margin-top: 4px;
  display: grid;
`;
