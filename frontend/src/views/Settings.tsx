import { Button, Card, CardContent, Divider, Stack, TextField } from '@mui/material'
import Popup from 'reactjs-popup'
import UserHead from '../components/userHead'
import '../styles/Settings.css'
import { useState } from 'react'
import { userPageMock } from '../mocks/user'
import Payments from '../components/payments'

export default function Settings() {
  let tempPass = ''

  const [userData, setUserData] = useState({ ...userPageMock })

  function onImageChange(event: any) {
    setUserData(prevData => ({ ...prevData, imageUrl: URL.createObjectURL(event.target.value) }))
  }

  function handleChange(event: any) {
    const { name, value } = event.target
    setUserData(prevData => ({ ...prevData, [name]: value }))
  }

  function handleSaveButton(event: any) {}

  function checkPass() {
    let toReturn = null

    // if(tempPass===userData.user.password){
    //     toReturn =  <>
    //                     <h1>
    //                         Please enter new password
    //                     </h1>
    //                     <TextField onChange={handleChange} name="password" type="password" variant="standard" />
    //                         <Popup trigger={<Button variant="outlined">Save</Button>} modal>
    //                             <Card>
    //                                 <CardContent>
    //                                     <h1>New password saved </h1>
    //                                 </CardContent>
    //                             </Card>
    //                         </Popup>
    //                 </>
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //backend connection here
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // }else{
    toReturn = <h1>Passwords do not match</h1>
    // }

    return toReturn
  }

  function updateTempPass(event: any) {
    tempPass = event.target.value
  }

  return (
    <>
      <Stack spacing={3} divider={<Divider flexItem />}>
        <UserHead />
        {/* <Card variant="outlined"> */}
        <div className="item">
          <Popup trigger={<Button variant="outlined">Change Username</Button>} modal>
            <Card variant="outlined">
              <CardContent>
                <TextField
                  onChange={handleChange}
                  name="username"
                  defaultValue={userData.user.username}
                  variant="standard"
                />
              </CardContent>
            </Card>
          </Popup>
        </div>
        <div className="item">
          <Popup trigger={<Button variant="outlined"> change Name and surname</Button>} modal>
            <Card variant="outlined">
              <CardContent>
                <TextField
                  onChange={handleChange}
                  name="name"
                  defaultValue={userData.user.name}
                  variant="standard"
                  label="Name"
                />
                <TextField
                  onChange={handleChange}
                  name="surname"
                  defaultValue={userData.user.surname}
                  variant="standard"
                  label="Surname"
                />
              </CardContent>
            </Card>
          </Popup>
        </div>
        <div className="item">
          <Popup trigger={<Button variant="outlined">change e-mail address</Button>} modal>
            <Card variant="outlined">
              <CardContent>
                <TextField
                  onChange={handleChange}
                  name="email"
                  defaultValue={userData.user.email}
                  type="email"
                  variant="standard"
                />
              </CardContent>
            </Card>
          </Popup>
        </div>
        <div className="item">
          <Popup trigger={<Button variant="outlined">Upload a new profile picture</Button>} modal>
            <Card variant="outlined">
              <CardContent>
                <div>Upload the image</div>
                <input type="file" accept="image/*" onChange={onImageChange} />
              </CardContent>
            </Card>
          </Popup>
        </div>
        <div className="item">
          <Popup trigger={<Button variant="outlined">Change password</Button>} modal>
            <Card variant="outlined">
              <CardContent>
                <h1>Please confirm password</h1>
                <TextField onChange={updateTempPass} type="password" variant="standard" />
                <Popup trigger={<Button variant="outlined">Check</Button>} modal>
                  <Card variant="outlined">
                    <CardContent>{checkPass()}</CardContent>
                  </Card>
                </Popup>
              </CardContent>
            </Card>
          </Popup>
        </div>
        <div className="item">
          <Popup
            trigger={<Button variant="outlined">Manage payment methods</Button>}
            modal
            closeOnDocumentClick={false}
          >
            <Card variant="outlined">
              <CardContent>
                <Payments paymentMethods={userData.paymentMethods} user={userData.user} setData={setUserData} />
              </CardContent>
            </Card>
          </Popup>
        </div>
        <div className="item">
          <Button variant="contained" onClick={handleSaveButton}>
            Save changes
          </Button>
        </div>
        {/* </Card> */}
      </Stack>
    </>
  )
}
