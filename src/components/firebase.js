import firebase from 'firebase/app';
import 'firebase/auth';
import { useState } from 'react';

const firebaseConfig = {
  // Your Firebase project configuration goes here.
};

const theme = createTheme();

export default function SignUp() {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('New user account created:', userCredential.user);
    } catch (error) {
      console.error('Error creating new user account:', error);
      setError(error.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#F8EB7D' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {error && (
            <Alert severity="error" sx={{ mt: 3, mb: 2 }}>
              {error}
            </Alert>
          )}
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            {/* Rest of the code here... */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}