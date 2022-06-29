import { Dialog as MUIDialog, DialogTitle as MUIDialogTitle, Button, Box, IconButton } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import DeleteIcon from '@mui/icons-material/Delete'

function createData(book: string, author: string, price: number, quantity: number, total: number) {
  return { book, author, price, quantity, total }
}

const rows = [
  createData('Harry Potter and The Prisoner of Azkaban', 'JK Rowling', 12.0, 1, 12.0),
  createData('Harry Potter and The Prisoner of Azkaban', 'JK Rowling', 12.0, 1, 12.0),
  createData('Harry Potter and The Prisoner of Azkaban', 'JK Rowling', 12.0, 1, 12.0),
]

export const Dialog = (props: DialogProps) => {
  const { open, onClose } = props
  return (
    <MUIDialog open={open} onClose={onClose} fullWidth={true} maxWidth="lg">
      <MUIDialogTitle>Cart</MUIDialogTitle>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Book</TableCell>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.book} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.book}
                </TableCell>
                <TableCell align="right">{row.author}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" size="large" color="warning">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box width="100%" display="flex" justifyContent="right">
        <Button style={{ margin: 16 }}>Checkout</Button>
      </Box>
    </MUIDialog>
  )
}

export interface DialogProps {
  open: boolean
  onClose: (value: any) => void
}
