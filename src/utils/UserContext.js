import { createContext } from 'react';


const UserContext = createContext({
    user: {
        name: "Siddhesh",
        email: "siddheshjagtap2017@gmail.com"
    }
});

UserContext.displayName = 'UserContext';

export default UserContext;