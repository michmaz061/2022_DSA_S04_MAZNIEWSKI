import { userPageMock } from '../mocks/user'
import '../styles/UserInfo.css'

export default function UserInfo() {
  let payText1 = ''
  let payText2 = ''

  if (userPageMock.paymentMethods.length === 0) {
    payText1 = 'No payment methods added'
  } else {
    payText1 += 'Payment methods: \n'
    for (let i = 0; i < userPageMock.paymentMethods.length; i++) {
      payText2 += userPageMock.paymentMethods[i].cardBrand
        ? userPageMock.paymentMethods[i].cardBrand +
          ' ' +
          '**** **** **** ' +
          userPageMock.paymentMethods[i].cardNumber?.substring(12, 16) +
          '\n'
        : 'Uknown payment method'
    }
  }

  return (
    <>
      <p>
        <span className="des">User:</span> {userPageMock.user.name} {userPageMock.user.surname}
      </p>
      <p>
        <span className="des">Email:</span> {userPageMock.user.email}
      </p>
      <p>
        <span className="des">Username:</span> {userPageMock.user.username}
      </p>
      <p>
        <span className="des">Number of purchases:</span> {userPageMock.purchaseHistory.purchases.length}
      </p>
      <p>
        <span className="des">{payText1}</span>
        {payText2}
      </p>
    </>
  )
}
