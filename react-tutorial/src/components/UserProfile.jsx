import { UserFavouriteFood } from "./UserFavouriteFood";
import { UserUsername } from "./UserUsername";

export function UserProfile(props) {
    return (
        <div id='user-profile'>
            <UserUsername username="bob" trimmedUsername='ken'/>
            <b>Age:</b>
            <span>{props.Age }</span>
            <UserFavouriteFood />
        </div>
    )
}