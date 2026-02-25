import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // This handles the "Sign in" button click
  const handleSignIn = (e) => {
    e.preventDefault();
    
    if (email && password) {
      alert(`Logging in as: ${email}`);
      // In a real app, you'd check credentials here.
      // For now, we just redirect to the dashboard.
      navigate("/dashboard"); 
    } else {
      alert("Please enter both email and password.");
    }
  };

  // This handles the "Sign up" link click
  const handleSignUpRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back!</h2>
        <p className="subtitle">
          Enter your credentials to access your account.
        </p>

        <form onSubmit={handleSignIn}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="password-row">
              <label>Password</label>
              <span className="forgot">Forgot password?</span>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button type="submit" className="form-login-btn">
            Sign in
          </button>
        </form>

        <p className="signup">
          Don't have an account? <span onClick={handleSignUpRedirect}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;