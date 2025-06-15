export function UserUsername(props) {
    console.log(props)
    return (
        <div>
            <b>Username: </b>
            <span>{props.trimmedUsername}</span>
        </div>
    )
}