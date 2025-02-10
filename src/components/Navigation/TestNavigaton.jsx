import Navigation from "../Navigation/Navigation";

function TestNavigation() {
  return (
    <Navigation
      handleLoginClick={() => console.log("Login clicked")}
      isLoggedIn={true}
      handleLogOut={() => console.log("Logout clicked")}
    />
  );
}

export default TestNavigation;
