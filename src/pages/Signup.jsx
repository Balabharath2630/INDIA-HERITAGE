import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!role) {
      alert("Please select a role.");
      return;
    }
    
    alert(`Account created successfully as a ${role}!`);
    navigate("/login"); 
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Create Account</h2>
        <p className="subtitle">Join Incredible India Explorer today.</p>

        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Select Role</label>
            <select 
              className="role-select"
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="" disabled>Choose your role</option>
              <option value="Cultural Enthusiast">Cultural Enthusiast</option>
              <option value="Content Creator">Content Creator</option>
              <option value="Tour Guide">Tour Guide</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="form-login-btn">
            Sign up
          </button>
        </form>

        <p className="signup">
          Already have an account? <span onClick={() => navigate("/login")}>Sign in</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;