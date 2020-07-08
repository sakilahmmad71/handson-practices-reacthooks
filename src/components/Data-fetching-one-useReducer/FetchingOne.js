import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const FetchingOne = () => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                setLoading(false);
                setPost(response.data);
                setError('');
            })
            .catch((error) => {
                setLoading(false);
                setPost({});
                setError('Somehting goes wrong!');
            });
    }, []);
    return (
        <div>
            {loading ? 'Loading...' : post.title}
            {error ? error : null}
        </div>
    );
};

export default FetchingOne;
