import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai';
//Her bir ürünü temsil edecek
const ProductCard = (props) => {
    const imageUrl = 'https://localhost:44390/Uploads/';
    let dispatch = useDispatch();

    const sepeteEkle = async (id) => {
        console.log("tıklandı");
        dispatch({ type: "products/AddToCart", payload: { id } })
    }

    const favorilereEkle = async (id) => {
        console.log("tıklandı");
        dispatch({ type: "products/addToFavorites", payload: { id } })
    }
    return (
        <>
            <div className="product_wrappers_one">
                <div className="thumb">
                    <Link to={`/product-details-two/${props.data.productId}`} className="image">
                        <img src={imageUrl + props.data.imageUrl} alt={props.data.name}></img>
                    </Link>
                    <div className="actions">
                        <a href="#!" className="action wishlist" title="Favorilere Ekle"
                            onClick={() => favorilereEkle(props.data.productId)} ><AiOutlineHeart />

                        </a>
                    </div>
                    <button type="button" className="add-to-cart offcanvas-toggle"
                        onClick={() => sepeteEkle(props.data.productId)} >Sepete Ekle</button>
                </div>
                <div className="content">
                    <h5 className="title">
                        <Link to={`/product-details-two/${props.data.productId}`}>{props.data.description}</Link>
                    </h5>
                    <span className="price">
                        <span className="new">{props.data.price}.00 TL</span>
                    </span>
                </div>

            </div>

        </>
    )
}

export default ProductCard