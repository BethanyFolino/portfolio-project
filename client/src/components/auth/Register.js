import React, { Fragment, useState } from "react";
import axios from 'axios';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => 
    setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Passwords do not match', 'danger');
        } else {
            const newUser = {
                name, 
                email, 
                password
            }

            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                const body = JSON.stringify(newUser)
                //  we can go to /api/users instead of the
                // back end site because of our proxy
                const res = await axios.post('/api/users', body, config);
                console.log(res.data)
            } catch (err) {
                console.error(err.response.data);
            }
        }
    };

    // if (isAuthenticated) {
    //     return <Redirect to='/dashboard' />;
    // }

  return (
    <Fragment>
      <h1 class="large text-primary">Sign Up</h1>
      <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
      <form class="form" onSubmit={onSubmit}>
        <div class="form-group">
          <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange} required />
        </div>
        <div class="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={handleChange} required/>
          <small class="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            minLength="6"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={handleChange}
            minLength="6"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
      </form>
      <p class="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </Fragment>
  );
};

export default Register;
