import { UserFavouriteFood } from "./UserFavouriteFood";

export function UserProfile() {
    return (
        <div id='user-profile'>
            <p>Username: Bob</p>
            <div>
                <span>Email: </span>
                <span>tinniemuchiri@gmail.com</span>
            </div>
            <section>
                <span>Favourite Foods:</span>
                <br />
                <ul>
                    <li>Sushi</li>
                    <li>Pizza</li>
                    <li>Mediterranean Food</li>
                </ul>
            </section>
            <UserFavouriteFood/>
        </div>
    )
}