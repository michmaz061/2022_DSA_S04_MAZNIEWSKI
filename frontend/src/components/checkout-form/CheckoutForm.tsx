import "./CheckoutForm.css";

import {CardElement, Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import {Button, List, ListItem, ListItemIcon, ListItemText, Paper, Typography} from "@mui/material";
import BookIcon from '@mui/icons-material/Book'

export const CheckoutForm = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY || '');
  const options = {
    // passing the client secret obtained from the server
    // should be stored in localStorage API => localStorage.get('stripeClientSecret') ||
    clientSecret: 'pi_3LABJrCidCiyVD4O0hiEh4sE_secret_x3NLQMENOIe1JoxGCTjP7FppD',
  };
  return (
    <>
      <Elements stripe={stripePromise} options={options}>
        <form>
          <Paper elevation={3} style={{margin: 32, padding: 16}}>
            <Typography variant="h3">
              Total Due Today
            </Typography>
            <Typography variant="h6">
              $420.69
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <BookIcon/>
                </ListItemIcon>
                <ListItemText>
                  One Book
                </ListItemText>
              </ListItem>
            </List>
            <CardElement id="card-element"/>
            <Button variant="contained" style={{marginTop: 24}}>Submit</Button>
          </Paper>
        </form>
      </Elements>
    </>
  )
}