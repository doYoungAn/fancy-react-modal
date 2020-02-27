import React, { FC } from 'react';

interface IAppProps {}

const App: FC<IAppProps> = (): JSX.Element => {

    return (
        <>
            <h1 className="title">fancy-react-modal</h1>
            <div>
                <button className="open-btn">modal-open</button>
            </div>
        </>
    )

}

export default App;