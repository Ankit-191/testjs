import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const login = () => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Password", pwd);
  };
  const remove = () => {
    localStorage.removeItem("Name");
    localStorage.removeItem("Password");
  };
  return (
    <div>
      <form action="">
       <div>
       <input
          type="email"
          placeholder="Enter Email"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          required
        />
        <div>
          <button onClick={login}>Log In</button>
        </div>
       </div>
          <div>
          {/* <div>
            Email: {localStorage.getItem("Name")}
          </div>
          <div>
            Password:{localStorage.getItem("Password")}
          </div> */}
           {localStorage.getItem('Name') && (
            <div>
               Name: {localStorage.getItem('Name')}
            </div>
         )}
         {localStorage.getItem('Password') && (
            <div>
               Password: {localStorage.getItem('Password')}
            </div>
         )}
        <div>
          <button onClick={remove}>Log Out</button>
        </div>
          </div>
      </form>
    </div>
  );
};

export default Login;
