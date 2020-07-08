import React, { useState } from 'react';

const FuncNames = () => {
    const [name, setName] = useState({ firstname: '', lastname: '' });

    // const onChange = ({ target: { name, value } }) => {
    //     setName({ ...name, [name]: value });
    // };

    const changeFirstname = () => {};
    const changeLastname = () => {};

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={name.firstname}
                    onChange={(e) => setName({ ...name, firstname: e.target.value })}
                />
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={name.lastname}
                    onChange={(e) => setName({ ...name, lastname: e.target.value })}
                />
                <div>
                    <p>First Name : {name.firstname}</p>
                    <p>Last Name : {name.lastname}</p>
                    <h3>{JSON.stringify(name)}</h3>
                </div>
            </form>
        </div>
    );
};

export default FuncNames;
