import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import { Link as LinkMUI } from '@mui/material'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { SignInRequest as SignInRequest, SignInResponse } from '../interfaces/sign-in.interface'
import { apiClient } from '../adapters/api-client'
import { useEffect, useState } from 'react'

const Copyright = (props: any) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <LinkMUI color="inherit" href="https://github.com/RodrigoMoOr/sut-cs-sem6-sp-frontend">
        In5matix Apes
      </LinkMUI>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  // const [response, error, loading, fetchData] = useAxios<ApiResponse<SignInResponse>>({
  //   axiosInstance: apiClient,
  //   method: 'POST',
  //   url: 'auth/sign-in',
  //   autoExecute: false,
  // });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const payload: SignInRequest = {
      username: formData.get('username')?.toString(),
      password: formData.get('password')?.toString(),
    }

    // await fetchData(payload);
    doSignIn(payload)
  }

  const doSignIn = async (payload: SignInRequest) => {
    try {
      const response = await apiClient.post<SignInResponse>('auth/sign-in', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const accessToken = response?.data?.accessToken

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken)
        navigate('/home')
      }
    } catch (e) {
      console.log(e)
    }
  }

  // useEffect(() => {
  //   console.log(JSON.stringify(response?.data));
  //   if (!loading && !error && response?.data?.accessToken) {
  //     console.log(`API Response: ${JSON.stringify(response?.data)}`);
  //     localStorage.setItem("accessToken", response.data.accessToken || "");
  //     navigateToHome();
  //   }
  //
  //   if (loading != isLoading) setIsLoading(loading);
  // }, [response, error, loading]);

  return (
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images5.alphacoders.com/808/808254.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h4">
              Welcome to The Library
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button disabled={isLoading} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container>
                {/*<Grid item xs>*/}
                {/*  <LinkMUI href="#" variant="body2">*/}
                {/*    Forgot password?*/}
                {/*  </LinkMUI>*/}
                {/*</Grid>*/}
                <Grid item>
                  <Link to="/sign-up" style={{ textDecoration: 'none' }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
