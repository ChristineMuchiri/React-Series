
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
                return <div>
                    <b>ID: </b>
                    <span>{user.id}</span>
                    <br />
                    <b>Username: </b>
                    <span>{user.username}</span>
                    <br />
                    <b>Emai: </b>
                    <span>{user.email}</span>
                    <br />
                </div>
            }
        ) }</div>
    );

}