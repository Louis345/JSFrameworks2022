import NavBar from "../NavBar/NavBar";
import Movies from "../Movies/Movies";

function Home() {
  return (
    <>
      {/* This component looks up the user's name in Okta */}
      <NavBar />

      <div className="container mt-4">
        {/* This component makes an API request, which includes an access token to prove to the API that the user is logged in */}
        <Movies />
      </div>
    </>
  );
}

export default Home;
