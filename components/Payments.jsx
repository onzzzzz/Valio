import React, { useContext, useEffect, useState } from 'react'


function Payments({isHoveringPayments}) {
// const [isHoveringPaymentsOn, setIsHoveringPaymentsOn] = useState({isHoveringPayments});
const payments = useContext({isHoveringPayments})

  return (
    <div >
      
      { isHoveringPayments? (
        <table className="flex justify-center">
          <tbody>
          <tr>
            <th>Company</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>Netflix</td>
            <td>10.06.24</td>
            <td>15,99€</td>
          </tr>
          </tbody>
        </table>
        ) : ( <h1 className="flex justify-center">
          Upcoming Payments
        </h1>) 
      }
      
    </div>
  )
}

export default Payments