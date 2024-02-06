 import React from "react";
 import UserContext from "./UserContext";
 const UserContextProvider = ({Children}) =>
 {
    const [user, srtUser] = React.useState(null)
    return(
    <>
        <UserContext.Provider value={{user, srtUser}}>
            {Children}
        </UserContext.Provider>
    </>
    )
 }

 export default UserContextProvider