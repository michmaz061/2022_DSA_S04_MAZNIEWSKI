import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Link as LinkMUI } from '@mui/material'
import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Typography } from '@mui/material'
import { Container } from '@mui/material'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { SignUpRequest, SignUpResponse } from '../interfaces/sign-up.interface'
import { useEffect, useState } from 'react'
import { useAxios } from '../hooks/use-axios'
import { ApiResponse } from '../interfaces/api-response.interface'
import { apiClient } from '../adapters/api-client'

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

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [response, error, loading, fetchData] = useAxios<ApiResponse<SignUpResponse>>({
    axiosInstance: apiClient,
    method: 'POST',
    url: 'auth/sign-up',
    autoExecute: false,
  })
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const payload: SignUpRequest = {
      name: formData.get('name')?.toString(),
      surname: formData.get('surname')?.toString(),
      username: formData.get('username')?.toString(),
      email: formData.get('username')?.toString(),
      password: formData.get('password')?.toString(),
    }

    fetchData(payload)
  }

  useEffect(() => {
    console.log(`API Response: ${loading} ${error} ${response?.data}`)
    if (!loading && !error && response?.data?.id) {
      navigate('/sign-in')
    }
    if (loading != isLoading) setIsLoading(loading)
  }, [response, error, loading])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 16,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4" textAlign="center">
          Create an Account at The Library
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField autoComplete="given-name" name="name" required fullWidth id="name" label="Name" autoFocus />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth id="surname" label="Surname" name="surname" autoComplete="family-name" />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id="username" label="Email Address" name="username" autoComplete="email" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="We will rob you of your data, use it against your best interest and sell it to third parties. Do you consent?"
              />
            </Grid>
          </Grid>
          <Button disabled={isLoading} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  )
}
