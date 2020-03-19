import React, { FC, CSSProperties, useEffect, useState } from 'react';
import styled from 'styled-components';

export interface IModalWrapperProps {
  cancel: () => void,
  containerId: string
}

const PrefixZIndex: number = 1000;

const ModalBack = styled.div`
  position: fixed;
  z-index: ${PrefixZIndex};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #000000;
  opacity: 0.4;
`;

const ModalContent = styled.div`
  position: fixed;
  z-index: ${PrefixZIndex + 1};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 20px;
`;

export const ModalWrapper: FC<IModalWrapperProps> = ({ children, cancel, containerId }): JSX.Element => {

  const [modalbackZIndex, setModalbackZIndex] = useState<number>(0);
  const [modalContentZIndex, setModalContentZIndex] = useState<number>(0);

  useEffect(() => {
    const count: number = parseInt(containerId.split('-')[2]);
    const zIndex: number = PrefixZIndex + (count * 2);
    setModalbackZIndex(zIndex);
    setModalContentZIndex(zIndex + 1);
  }, []);

  return (
    <>
      <ModalBack style={{ zIndex: modalbackZIndex }} onClick={() => {cancel()}} />
      <ModalContent style={{ zIndex: modalContentZIndex }}>
        {children}
      </ModalContent>
    </>
  )
}
