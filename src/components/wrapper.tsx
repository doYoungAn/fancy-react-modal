import React, { FC, CSSProperties, useEffect, useState } from 'react';

export interface IModalWrapperProps {
  cancel: () => void,
  containerId: string
}

const PrefixZIndex: number = 1000;

const ModalBackStyle: CSSProperties = {
  position: 'fixed',
  zIndex: PrefixZIndex,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: '#000000',
  opacity: 0.4
};

const ModalContentStyle: CSSProperties = {
  position: 'fixed',
  zIndex: PrefixZIndex + 1,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#ffffff',
  padding: '20px',
};

export const ModalWrapper: FC<IModalWrapperProps> = ({ children, cancel, containerId }): JSX.Element => {

  const [modalBackStyle, setModalBackStyle] = useState<CSSProperties>(ModalBackStyle);
  const [modalContentStyle, setModalContentStyle] = useState<CSSProperties>(ModalContentStyle);

  useEffect(() => {
    const count: number = parseInt(containerId.split('-')[2]);
    const zIndex: number = PrefixZIndex + (count * 2);
    setModalBackStyle({ ...modalBackStyle, zIndex });
    setModalContentStyle({ ...modalContentStyle, zIndex: zIndex + 1 });
  }, []);

  return (
    <>
      <div style={modalBackStyle} onClick={() => {cancel()}}></div>
      <div style={modalContentStyle}>
        {children}
      </div>
    </>
  )
}
