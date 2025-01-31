import "../template/login.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleCallbackResponse = (response: { credential: string }) => {
    console.log("Encoded JWT ID token: " + response.credential);

    navigate("/home");
  };

  useEffect(() => {
    if (!document.getElementById("google-script")) {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.id = "google-script";
      script.async = true;
      script.onload = () => {
        if (window.google) {
          window.google.accounts.id.initialize({
            client_id:
              "169846107154-4dr3uu1h76taegv8gasrjpnp01h9nkcf.apps.googleusercontent.com",
            callback: handleCallbackResponse,
          });

          window.google.accounts.id.renderButton(
            document.getElementById("google-signin-btn"),
            {
              theme: "outline",
              size: "large",
            }
          );
        } else {
          console.error("Google SDK failed to load.");
        }
      };
      script.onerror = () => {
        console.error("Failed to load Google Identity Services SDK.");
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="log-main">
      <div className="login">
        <div className="contain">
          <img className="img3" src="src/assets/logo.svg" alt="logo"></img>
          <h2>BANNARI AMMAN</h2>
          <h5>INSTITUTE OF TECHNOLOGY</h5>
          <h6>BIT'S MoU's</h6>
          <div id="google-signin-btn"></div>
          <p className="subtext">Sign in with your BIT account</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
