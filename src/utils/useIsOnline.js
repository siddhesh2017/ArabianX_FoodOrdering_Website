import { useState, useEffect } from 'react';

const useIsOnline = () =>{
    const [status, setStatus] = useState(true);

    useEffect(()=>{
        const handleOnline = ()  =>{
            setStatus(true);
        };

        const handleOffline = ()  =>{
            setStatus(false);
        };

        window.addEventListener('online', handleOnline);
    
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline)    ;
        }
    }, []);

    return status;
}

export default useIsOnline;