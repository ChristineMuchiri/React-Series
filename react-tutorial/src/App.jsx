import { UserDetails } from "./components/UserDetails";
export default function App() {

    const mockUsers = [
        {
            id: 1,
            username: 'tinnie',
            email: 'tinnie@gmail.com'
        },
        {
            id: 2,
            username: 'wachera',
            email: 'wachera@gmail.com'
        },
    ];

    return (
        <div>{mockUsers.map(
            (user) => {
                return <UserDetails key={user.id} user={user} />;
            }
        ) }</div>
    );

}