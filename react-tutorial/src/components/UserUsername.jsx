import React from "react"
export function UserUsername(props) {
    console.log(props)
    return (
        <React.Fragment>
            <b>Username: </b>
            <span>{props.username}</span>
        </React.Fragment>
    )
}