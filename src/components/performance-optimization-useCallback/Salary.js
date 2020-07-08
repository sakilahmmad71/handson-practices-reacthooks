import React from 'react';

const Salary = ({ salary }) => {
    console.log(`Salary rendered`);
    return <div>Salary - {salary}</div>;
};

export default React.memo(Salary);
