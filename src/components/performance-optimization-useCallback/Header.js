import React from 'react';

const Header = () => {
    console.log('Header rendered');
    return (
        <div>
            <h1>This is a using of React.memo and useCallback</h1>
        </div>
    );
};

export default React.memo(Header);
