import PropTypes from 'prop-types';
import { UserFavouriteFood } from "./UserFavouriteFood";
import { UserUsername } from "./UserUsername";

export function UserProfile(props) {
    console.log(props);
    props.callMe();

    return (
        <div id='user-profile'>
            <UserUsername username={props.username} />
            <b>Age:</b>
            <span>{props.Age }</span>
            <UserFavouriteFood />
        </div>
    )
}
UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    Age: PropTypes.number.isRequired,
    callMe: PropTypes.func.isRequired,
}