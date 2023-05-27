import {createContext} from "react";

const UserContext = createContext({
    user: {
        name:"dummy",
    email:"dummy@gmail.com",
    },
    
});

UserContext.displayName="UserContext";

export default UserContext