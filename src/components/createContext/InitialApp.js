import React from 'react';
import ComponentA from './ComponentA';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const InitialApp = () => {
    return (
        <div>
            <UserContext.Provider value={'Sakil Mahmud'}>
                <ChannelContext.Provider value={'sakilahmmad71'}>
                    <ComponentA />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    );
};

export default InitialApp;
