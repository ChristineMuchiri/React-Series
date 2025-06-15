import { UserProfile } from "./components/UserProfile";

export default function App() {
    const callMe = () => { 
        console.log("Hello");
    };
    return (
        <div>
            <h1>Root Component</h1>
            <UserProfile
                username='bob'
                isLoggedIn={true}
                favouriteFoods={[
                    {
                        name: "sushi"
                    }
                ]}
                callMe={callMe}
            />
        </div>
    );

}