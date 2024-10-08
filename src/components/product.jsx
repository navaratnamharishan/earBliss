import React, { useState } from 'react'


 
 
 const AddProduct = () => {
  const [productName,setProductName]=useState('');
  const[productPrice,setProductPrice]=useState(0);
  const[productImg,setProductImg]=useState(null);
  const[error,setError]=useState('');

  const types =['image/png','image/jpg','image/jpeg']
  const productImgHandler =(e)=>{
    let selectedFile =e.target.files[0];
    if(selectedFile && types.includes(selectedFile.type)){
      setProductImg(selectedFile);
      setError('');

    }
    else{
      setProductImg(null);
      setError('please select a valid image  type png or jpeg or jpg')
    }
  }

  const addProduct=(e)=>{
    e.preventDefault();
    console.log(productName,productPrice,productImg,)
  }


   return (

     <div>product
      <h2>Add Product</h2>
      <form autoComplete='off' className='form-product' onSubmit={addProduct}>
      <label htmlFor="product-name">ProductName</label><br/>
      <br/>
      <br/>
      <input type='text'className='form-control'required
      onChange={(e)=>setProductName(e.target.value)} value={productName}/>
      <br/>
      
      <label htmlFor="product-price">Product Price</label>
      <br/>
      
      <input type='number'className='form-control'required
      onChange={(e)=>setProductPrice(e.target.value)} value={productPrice}/>
      <br/>
      <br/>
      <br/>
      <label>Product image</label><br/>
      <input type='file' className='form-control' onChange={productImgHandler}/>
      <br/>
      
      <button className='btn-add '>Add</button>

      </form>
      {error&&<span>{error}</span>}
     </div>
   )
 }
 
 export default AddProduct

