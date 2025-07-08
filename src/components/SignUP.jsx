import React,{useState} from 'react'
import '../styles/SignUP.css'

export default function SignUP({onUserRegistration}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill out all fields!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
   
    onUserRegistration(username, email);
  }
  return (

    <div className="signup-box">
      <h2>Sign Up Today</h2>
      <p>Please fill out this form to register</p>
      <form>
        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
}
