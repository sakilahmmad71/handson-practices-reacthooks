import React, { useState, useEffect } from 'react';

const FunctionalComponent = () => {
    let [x, setX] = useState(0);
    let [y, setY] = useState(0);

    const getMouseMove = (e) => {
        console.log('mouse moving');
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        console.log('useEffect called!');
        window.addEventListener('mousemove', getMouseMove);

        return () => {
            console.log('unmounting the code');
            window.removeEventListener('mousemove', getMouseMove);
        };
    }, []);

    return (
        <div>
            <h1>
                X - {x} and Y - {y}
            </h1>
        </div>
    );
};

export default FunctionalComponent;
