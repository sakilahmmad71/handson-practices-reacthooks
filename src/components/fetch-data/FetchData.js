import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const FetchData = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log(response.data);
                setPosts(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.id} - {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchData;
