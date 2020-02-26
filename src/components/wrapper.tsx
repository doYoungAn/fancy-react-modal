import React, { FC, CSSProperties } from 'react';

export interface IModalWrapperProps {
  cancel: () => void
}

const ModalStyle: CSSProperties = {
  position: 'fixed',
  zIndex: 1000,
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
  zIndex: 1001,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#ffffff',
  padding: '20px',
  width: '100%'
};

export const ModalWrapper: FC<IModalWrapperProps> = ({ children, cancel }): JSX.Element => {

  return (
    <>
      <div className="modal" style={ModalStyle} onClick={() => {cancel()}}></div>
      <div style={ModalContentStyle}>
        {children}
      </div>
    </>
  )
}
