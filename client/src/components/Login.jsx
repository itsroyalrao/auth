import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  console.log("user", user);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <div>Hello {user.name}</div>
          <button
            className="bg-red-600 px-4 py-2 rounded"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      ) : (
        <button
          className="bg-red-600 px-4 py-2 rounded"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default LoginButton;
