# fancy-react-modal 

modal dialog for React.JS

![](https://fancy-react-modal.s3.ap-northeast-2.amazonaws.com/+scenario.gif)  

## install

    $ npm install fancy-react-modal  
    $ yarn install fancy-react-modal

## Arguments

## example

```tsx
Parent Component

import React, { FC } from 'react';
import Modal from 'fancy-react-modal';
import Alert, { IAlertProps, IAlertResult } from './components/alert';

const Parent = () => {

  const openModal = () => {
    Modal.open<IAlertProps, IAlertResult>(Alert, {}).then((result: IAlertResult) => {
      // after modal component dismiss function
    }).catch(() => {
      // after click modal background
    });
  }

  return (
    <>
      <button onClick={() => {openModal()}}>open</button>
    </>
  )
}

```

```tsx
Modal Component

import React, { FC } from 'react';
import { IBaseModalProps } from 'fancy-react-modal';

interface IAlertModalProps extends IBaseModalProps<IAlertResult> {}

interface IAlertModalResult {}

const Alert: FC<IAlertModalProps> = ({ dismiss }) => {

  return (
    <>
      <div>
        Hi I am Modal
        <button onClick={() => {dismiss()}}>close</button>
      </div>
    </>
  )
}
```
