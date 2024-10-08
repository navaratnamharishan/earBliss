import React from 'react'
import { useCart } from '../global/cartprovider';

const CartValue = () => {
    const{cartItems}=useCart();
  return (
    <>
    <table>
       
         
          <th>CartPage</th>  
  
    {cartItems.length===0?(<tr>You Crt is empty</tr>):(<>
      {cartItems.map((item,index)=> (
        <tr key={index}><td>{item.name}</td> -$
        <td>{item.price}</td></tr>
      ))}
        </>)}

           
    </table>
    </>
  )
}

export default CartValue