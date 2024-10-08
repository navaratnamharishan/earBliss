import React, { useContext } from 'react';
import { ValueContext } from '../global/valueContext';
import '../css/item.css';

const Item = () => {
  const { addItemToCart } = useContext(ValueContext);

  const items = [
    { id: 1, name: 'Headset', price: 20, img: 'images/head-set.jpg' },
    { id: 2, name: 'Airpud', price: 40, img: 'images/air buds2.jpg' },
    { id: 3, name: 'Handfree', price: 30, img: 'images/air buds.jpg' },
    {id: 4,name:'Microphone',price:80,img:"images/item5.jpg"},
    {id: 5,name:'Bluetooth Handsfree',price:75,img:"images/item-7.jpg"},
    {id: 6,name:'Microphone',price:80,img:"images/wired-earphone.jpg"},
    {id:7,name:'HeadSet',price:65,img:"images/head-set.jpg"}



  ];

  const handleClick = (item) => () => {
    addItemToCart(item);
  };

  return (<div className='container'>
    <div className="r" id="product1">
      {items.map(item => (
        <div className="pro" key={item.id}>
          <img src={item.img} alt="" className="PD" />
          <div className="des">
            <span>{item.name}</span>
            <h4>${item.price}</h4>
          </div>
          <img onClick={handleClick(item)} src="images/add-cart.jpg" alt="cart" className="cart-img" />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Item;
