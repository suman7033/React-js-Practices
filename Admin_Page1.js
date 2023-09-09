import React, { useEffect, useState } from 'react'
import './Admin_Page.css';

export default function Admin_Page() {
    const[text1Val,setText1Val]=useState('');
    const[text2Val,setText2Val]=useState('');
    const[text3Val,setText3Val]=useState('');
    const[text4Val,setText4Val]=useState('');
    const[products,setProducts]=useState([]);

     useEffect(()=>{
        localStorage.setItem('products',JSON.stringify(products));
     })

    //  useEffect(()=>{
    //     const savedData=localStorage.getItem('products');
    //     if(savedData){
    //         setProducts(JSON.parse(savedData));
    //     }
    //  },[])

     const DeleteBtn=(e)=>{
        const updatedProducts=[...products];
        updatedProducts.splice(e,1);
        setProducts(updatedProducts);
    };
    
    
    const btn=(e)=>{
        e.preventDefault();
        const newProduct = {
            productId: text1Val,
            sellingPrice: text2Val,
            productName: text3Val,
            category: text4Val
        };
        setProducts([...products, newProduct]);
        setText1Val('');
        setText2Val('');
        setText3Val('');
        setText4Val('');
    };

    const text1=(e)=>{
         setText1Val(e.target.value);
    }
    const text2=(e)=>{
        setText2Val(e.target.value);
    }
    const text3=(e)=>{
        setText3Val(e.target.value);
    }
    const SelectVal=(e)=>{
      setText4Val(e.target.value);
    }

    const getCategoryProducts = (category) => {
        return products
            .filter(product => product.category === category)
            .map((product, index) => (
                <div key={index}>
                    <h5>{product.productId}</h5>
                    <p>{product.productName}</p>
                    <p>{product.sellingPrice}</p>
                    <button onClick={DeleteBtn}>Delete</button>
                </div>
            ));
    };


  return (
    <div className='container mt-2'>
    <div className='login-container container mt-2'>
        <div className='input-field'>
       <b>Product ID:</b><input type='text' value={text1Val} onChange={text1}  className='text1'></input><br/><br/>
       <b>Selling Price:</b> <input type='number' value={text2Val} onChange={text2} className='text2'></input><br/><br/>
       <b>Product Name:</b><input type='text' value={text3Val} onChange={text3} className='text3'></input><br/><br/>
       </div>
       <b>Choose a category:</b>
       <div className='text4'>
         <select value={text4Val} onChange={SelectVal}>
            <option selected>Choose...</option>
            <option value="Electronic_Item">Electronic_Item</option>
            <option value="Food_Item">Food_Item</option>
            <option value="SkinCare_Item">SkinCare_Item</option>
         </select>
        </div><br/>
    <button className='button' onClick={btn}><b>Add_Product</b></button>
    </div>
    <hr/>
            <h1><b>Products</b></h1>
            <hr/>
            <h2 className='text1'>Electronic_Item</h2>
            {getCategoryProducts('Electronic_Item')}

            <h2 className='text2'>Food_Item</h2>
            {getCategoryProducts('Food_Item')}

            <h2 className='text3'>SkinCare_Item</h2>
            {getCategoryProducts('SkinCare_Item')}
        </div>
  )
}