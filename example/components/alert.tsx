import React, { FC } from 'react';
import { IBaseModalProps } from './../../src';

export interface IAlertProps extends IBaseModalProps<IAlertResult> {}

export interface IAlertResult {}

const Alert: FC<IAlertProps> = ({ dismiss }) => {

  return (
    <>
      <div>
        Hi I am Modal
        <button onClick={() => {dismiss()}}>close</button>
      </div>
    </>
  )
}

export default Alert;