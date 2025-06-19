import React from "react"
export function UserUsername(props) {
    console.log(props)
    return (
        <>
            <b style={{
                fontSize:32
            }}>Username: </b>
            <span>{props.username}</span>
        </>
    )
}