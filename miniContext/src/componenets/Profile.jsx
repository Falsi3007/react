import React from "react";
import UserContext from "../context/UserContext";

function Profile()
{
    const {user} = UserContext(UserContext)
    if(!user) return <div>Please login</div>
    return <div>welcome {user.username}</div>
}
