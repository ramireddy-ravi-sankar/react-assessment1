import React, {useState, useEffect} from "react";
import axios from "axios";
import "./index.css";

const URL="https://api.escuelajs.co/api/v1/products"

function Products(){
    const [productsdata,setProductsData]=useState([]);

    const fetchProductsData=async (apiURL)=>{
        const response=await axios.get(apiURL)
        setProductsData(response.data);
    }



    useEffect(()=>{
        fetchProductsData(URL);
    },[])

    return(
        <>
            <h1 text-ag>These are the  Products</h1>
            <ul className="Products">
                {
                    productsdata.map((eachProdcut)=>{
                        const {id,title,price,description,category}=eachProdcut;
                    
                        return <li key={id} className="ProductDetails">
                                <div className="Id">Product Id: {id}</div>
                                <div>Product Title: {title}</div>
                                <div className="Price">Product Price: {price}</div>
                                <div ><h4>Product Description: </h4>{description}</div>
                                <div className="category">
                                    <h3>Product Category</h3>
                                    <div className="categoryId">Product Category Id: {category.id}</div>
                                    <div className="categoryName">Product Category Name: {category.name}</div>
                                    <img src={category.image} alt={`${title}`}/>
                                </div>    
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default Products