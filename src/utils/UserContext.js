import {createContext} from "react";

const UserContext = createContext({
    user: {
        name:"dummy",
    email:"dummy@gmail.com",
    },
    
});

export default UserContext