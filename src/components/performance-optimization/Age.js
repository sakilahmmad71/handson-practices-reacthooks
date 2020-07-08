import React from 'react';

const Age = ({ age }) => {
    console.log(`age rendered`);
    return <div>Age - {age}</div>;
};

export default React.memo(Age);
