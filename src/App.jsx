import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import CodeVerification from './Pages/CodeVerification/CodeVerification';

import { Header } from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { store } from '../core/redux/store';
import { Provider } from 'react-redux'
import ProtectedRoute from './components/ProtectedRoutes/ProtectedRoutes'
import Blogs from './Pages/Blogs/Blogs'
import BlogForm from './Pages/CreateBlog/CreateBlog';
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App" style={{ minHeight: '100vh' }}>
        <Header />
        <Routes>

          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/code-verification" element={<CodeVerification />} />
          <Route path="/createBlog" element={<BlogForm />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Blogs />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />

    </BrowserRouter>
  </Provider>
);

export default App;

