import  { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from '../Firebase';
import { doc, setDoc } from 'firebase/firestore';
import  classes from './LoginRegister.module.css'
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { PersonOutline, EmailOutlined, Visibility, VisibilityOff } from '@mui/icons-material';


const LoginRegister = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const navigate = useNavigate();

  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordValidity, setPasswordValidity] = useState({
    length: false,
    upperCase: false,
    lowerCase: false,
    number: false,
    specialChar: false,
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    const checkPasswordValidity = () => {
      setPasswordValidity({
        length: password.length >= 6,
        upperCase: /[A-Z]/.test(password),
        lowerCase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      });
    };

    checkPasswordValidity();
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegister) {
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match.');
        return;
      }

      if (!Object.values(passwordValidity).every(Boolean)) {
        setErrorMessage('Password does not meet all criteria.');
        return;
      }

      try {
        await createUserWithEmailAndPassword(auth, email, password);

        const user = auth.currentUser;
        if (user) {
          await setDoc(doc(db, 'users', user.uid), {
            username,
            email,
          });
        }

        setSuccessMessage('Registration successful! Please login.');
        setTimeout(() => {
          setSuccessMessage('');
          navigate('/');
        }, 2000);
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          setErrorMessage('The email address is already in use. Please use a different email or login.');
        } else {
          setErrorMessage(error.message);
        }
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setSuccessMessage('Login successful!');
        setTimeout(() => {
          setSuccessMessage('');
          navigate('/welcome');
        }, 2000);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage('Password reset email sent!');
      setForgotPassword(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className={`form-box ${isRegister ? 'register' : forgotPassword ? 'forgot-password' : 'login'}`}>
    <h1 className="text-2xl font-bold text-center mb-4">
      {isRegister ? 'Sign Up' : forgotPassword ? 'Reset Password' : 'Login'}
    </h1>
    {successMessage && <div className="message success bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">{successMessage}</div>}
    {errorMessage && <div className="message error bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">{errorMessage}</div>}
    {!forgotPassword ? (
      <form onSubmit={handleSubmit} className="space-y-4">
        {isRegister && (
          <>
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              InputLabelProps={{
                style: { color: '#F18124' },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutline style={{ color: 'white' }} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              margin="normal"
              sx={{ '& .MuiInputBase-input': { color: 'white' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
            />
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputLabelProps={{
                style: { color: '#F18124' },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined style={{ color: 'white' }} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              margin="normal"
              sx={{ '& .MuiInputBase-input': { color: 'white' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
            />
            <TextField
              label="Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              required
              InputLabelProps={{
                style: { color: '#F18124' },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityOff style={{ color: 'white' }} /> : <Visibility style={{ color: 'white' }} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
              margin="normal"
              sx={{ '& .MuiInputBase-input': { color: 'white' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
            />
            {passwordFocused && (
              <ul className="password-instructions list-disc list-inside text-white space-y-1">
                <li className={passwordValidity.length ? 'valid' : 'invalid'}>At least 6 characters long</li>
                <li className={passwordValidity.upperCase ? 'valid' : 'invalid'}>Contains an uppercase letter</li>
                <li className={passwordValidity.lowerCase ? 'valid' : 'invalid'}>Contains a lowercase letter</li>
                <li className={passwordValidity.number ? 'valid' : 'invalid'}>Contains a number</li>
                <li className={passwordValidity.specialChar ? 'valid' : 'invalid'}>Contains a special character</li>
              </ul>
            )}
            <TextField
              label="Confirm Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              InputLabelProps={{
                style: { color: '#F18124' },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityOff style={{ color: 'white' }} /> : <Visibility style={{ color: 'white' }} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
              margin="normal"
              sx={{ '& .MuiInputBase-input': { color: 'white' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
            />
          </>
        )}
        {!isRegister && (
          <>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputLabelProps={{
                style: { color: '#F18124' },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined style={{ color: 'white' }} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              margin="normal"
              sx={{ '& .MuiInputBase-input': { color: 'white' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
            />
            <TextField
              label="Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputLabelProps={{
                style: { color: '#F18124' },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityOff style={{ color: 'white' }} /> : <Visibility style={{ color: 'white' }} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
              margin="normal"
              sx={{ '& .MuiInputBase-input': { color: 'white' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
            />
            <div className="forgot-password-link text-right">
              <button className="link-button text-blue-500 hover:underline" onClick={() => setForgotPassword(true)}>
                Forgot Password?
              </button>
            </div>
          </>
        )}
        <button type="submit" className="submit-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          {isRegister ? 'Sign Up' : 'Login'}
        </button>
        {!forgotPassword && !isRegister && (
          <div className="register-link text-center mt-4">
            <button className="link-button text-blue-500 hover:underline" onClick={() => setIsRegister(true)}>
              Don&apos;t have an account? Sign Up
            </button>
          </div>
        )}
        {isRegister && !forgotPassword && (
          <div className="register-link text-center mt-4">
            <button className="link-button text-blue-500 hover:underline" onClick={() => setIsRegister(false)}>
              Already have an account? Login
            </button>
          </div>
        )}
      </form>
    ) : (
      <form onSubmit={handleForgotPassword} className="space-y-4">
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          InputLabelProps={{
            style: { color: '#F18124' },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlined style={{ color: 'white' }} />
              </InputAdornment>
            ),
          }}
          fullWidth
          margin="normal"
          sx={{ '& .MuiInputBase-input': { color: 'white' }, '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
        />
        <button type="submit" className="submit-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Reset Password
        </button>
        <div className="forgot-password-link text-center mt-4">
          <button className="link-button text-blue-500 hover:underline" onClick={() => setForgotPassword(false)}>
            Back to Login
          </button>
        </div>
      </form>
    )}
  </div>
</div>

  );
};

export default LoginRegister;

