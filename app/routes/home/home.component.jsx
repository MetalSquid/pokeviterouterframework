import Directory from "../../components/directory/directory.component";
import "./home.styles.css";
import { useUser } from "../../context/user.context";

export default function Home() {
  const { currentUser } = useUser();

  return (
    <div className="home-container">
      <h1 className="welcome">
  {currentUser
    ? `Welcome ${currentUser.displayName || currentUser.email}`
    : "Welcome"}
      </h1>

      <Directory />
    </div>
  );
}
