import React, { FC } from 'react';
import Modal from './../src';
import Alert, { IAlertProps, IAlertResult } from './components/alert';

interface IAppProps {}

const App: FC<IAppProps> = (): JSX.Element => {

    const openModal = () => {
        Modal.open<IAlertProps, IAlertResult>(Alert, {}).then((result) => {
            console.log('then');
        }).catch(() => {
            console.log('catch');
        });
    }

    return (
        <>
            <h1 className="title">fancy-react-modal</h1>
            <div>
                <button className="open-btn" onClick={() => {openModal()}}>modal-open</button>
            </div>
        </>
    )

}

export default App;