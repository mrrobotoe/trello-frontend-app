import * as React from 'react';
import { createPortal } from 'react-dom';

import { ModalContainer } from './Modal.styled';

interface Props {
  children?: React.ReactNode;
}
export const Modal: React.FC<Props> = ({ children }) => {
  const elRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  React.useEffect(() => {
    const modalRoot = document.getElementById('modal');
    if (!modalRoot || !elRef.current) {
      return;
    }

    modalRoot.appendChild(elRef.current);
    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  return createPortal(<ModalContainer>{children}</ModalContainer>, elRef.current);
};
