import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const FetchData = () => {
    const [post, setPost] = useState([]);
    const [id, setId] = useState(1);
    const [idFromButton, setIdFromButton] = useState(0);

    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                console.log(response.data);
                setPost(response.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then((response) => {
                console.log(response.data);
                setPost(response.data);
            })
            .catch((err) => console.log(err));
    }, [idFromButton]);

    const fetchNextPost = () => {
        setIdFromButton((prevId) => prevId + 1);
    };

    return (
        <div>
            <input onChange={(e) => setId(e.target.value)} type="text" value={id} />
            <button onClick={fetchNextPost}>Next post</button>
            <ul>
                {id && (
                    <li key={post.id}>
                        {post.id} - {post.title}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default FetchData;
