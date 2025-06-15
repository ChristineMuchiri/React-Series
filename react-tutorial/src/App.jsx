import { UserProfile } from "./components/UserProfile";

export default function App() {
    return (
        <div>
            <h1>Root Component</h1>
            <UserProfile Age={20} isLoggedIn={true} />
        </div>
    );

}