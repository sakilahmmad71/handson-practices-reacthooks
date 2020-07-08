import React, { useContext } from 'react';
import ComponentC from './ComponentC';
import { UserContext, ChannelContext } from './InitialApp';

const ComponentB = () => {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <div>
            Username - {user} and channel - {channel}
        </div>
    );
};

export default ComponentB;
