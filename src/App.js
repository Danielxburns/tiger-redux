import React from 'react';
import NavBar from './common/navBar';
import HomePage from './common/homePage';
import UserPage from './features/users/userPage';
import SignUp from './features/users/sign-up';
import SignIn from './features/users/sign-in';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
