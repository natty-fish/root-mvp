import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import SignupPage from './Pages/SignupPage'
import NavBar from './Pages/components/NavBar'
import SignInPage from './Pages/SignInPage'
import ForgotPasswordPage from './Pages/password-related/ForgotPasswordPage';
import ResetPasswordForm from './Pages/password-related/ResetPasswordForm';
import UserProfilePage from './Pages/UserProfilePage';

const App = () => {
  return (<>
    <NavBar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path='/forgot-password' element={<ForgotPasswordPage />} />
      <Route path='/reset-password' element={<ResetPasswordForm />} />
      <Route path='/profile' element={<UserProfilePage />} />
    </Routes>
  </>
  )
}

export default App