import React, { useState, useCallback } from 'react';
import Header from './Header';
import Age from './Age';
import Button from './Button';
import Salary from './Salary';

const ParentComponent = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const handleIncrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const handleIncrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);

    return (
        <div>
            <Header />
            <Age age={age} />
            <Button handleClick={handleIncrementAge}>increment age</Button>
            <Salary salary={salary} />
            <Button handleClick={handleIncrementSalary}>increment salary</Button>
        </div>
    );
};

export default ParentComponent;
