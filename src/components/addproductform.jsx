import React, { useState } from 'react'


const AddProductFrom = () => {
    const[product,setProduct]=useState({name:'',
        price:'',description:''
    });

    const handleChange=(e)=>{
        setProduct({
            ...product,[e.target.name]:e.target.value
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        fetch("http://localhost:8080/api/products",{
            method:'POST',
            header:{
                'Content-Type':'application/json',
            },body:JSON.stringify(product),
        }).then(response =>response.json())
        .then(data => {
            console.log("product added:",data);
        }).catch((error)=>{
            console.log('Error:',error);
        });
    };
  return (
    <form onSubmit={handleSubmit}>
<input type='text' name='name' placeholder='product name' onChange={handleChange}/><br/>
<input type='text' name='price' placeholder='product price' onChange={handleChange}/><br/>
<textarea name='description' placeholder='product  description' onChange={handleChange}></textarea>
<br/>
<button type='submit'>Add Product</button>
    </form>
  );
};

export default AddProductFrom;