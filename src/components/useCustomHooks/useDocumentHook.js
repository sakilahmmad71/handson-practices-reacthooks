import { useEffect } from 'react';

const useDocumentHook = (count) => {
    useEffect(() => {
        document.title = `The count is - ${count}`;
    }, [count]);
};

export default useDocumentHook;
