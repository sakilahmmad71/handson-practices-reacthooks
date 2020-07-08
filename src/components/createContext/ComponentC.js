import React from 'react';
import { UserContext, ChannelContext } from './InitialApp';

const ComponentC = () => {
    return (
        <div>
            <UserContext.Consumer>
                {(user) => {
                    return (
                        <ChannelContext.Consumer>
                            {(channel) => {
                                return (
                                    <div>
                                        I am an user name - {user} and channel - {channel}
                                    </div>
                                );
                            }}
                        </ChannelContext.Consumer>
                    );
                }}
            </UserContext.Consumer>
        </div>
    );
};

export default ComponentC;
