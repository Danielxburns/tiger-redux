import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewUser } from './usersSlice';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import '../../App.css';

const defaultFormFields = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { firstName, lastName, username, email, password, confirmPassword } =
    formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      dispatch(addNewUser({ firstName, lastName, email, password, username }));
      setFormFields(defaultFormFields);
      navigate('/');
    } catch (error) {
      console.log('error encountered during user creation', error);
    }
  };
  return (
    <div className="sign-up-page page">
      <span>
        <h3>Sign Up with your email and password</h3>
      </span>
      <br />
      <br />

      <form onSubmit={handleSubmit}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            First Name
          </InputGroup.Text>
          <Form.Control
            aria-label="First Name"
            aria-describedby="inputGroup-sizing-sm"
            required
            name="firstName"
            value={firstName}
            onChange={handleChange}
            placeholder="first name"
          />
        </InputGroup>
        <br />

        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Last Name</InputGroup.Text>
          <Form.Control
            aria-label="Last Name"
            aria-describedby="inputGroup-sizing-sm"
            required
            name="lastName"
            value={lastName}
            onChange={handleChange}
            placeholder="Last name"
          />
        </InputGroup>

        <br />
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Display Name
          </InputGroup.Text>
          <Form.Control
            aria-label="Display Name"
            aria-describedby="inputGroup-sizing-sm"
            required
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="Display name"
          />
        </InputGroup>

        <br />

        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Email</InputGroup.Text>
          <Form.Control
            aria-label="Email"
            aria-describedby="inputGroup-sizing-sm"
            required
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="email"
          />
        </InputGroup>

        <br />
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Password</InputGroup.Text>
          <Form.Control
            aria-label="password"
            aria-describedby="inputGroup-sizing-sm"
            required
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="password"
          />
        </InputGroup>

        <br />
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Confirm Password
          </InputGroup.Text>
          <Form.Control
            aria-label="confirmPassword"
            aria-describedby="inputGroup-sizing-sm"
            required
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            placeholder="confirmPassword"
          />
        </InputGroup>
        <br />
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
