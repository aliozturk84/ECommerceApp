import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../data/ProductData";
import Swal from "sweetalert2";


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: ProductData,
        carts: ProductData.slice(2, 6),
        favorites: ProductData.slice(1, 4),
        single: null, 

    },
    reducers: {
       
        AddToCart: (state, action) => {
            let { id } = action.payload;
            let sepeteEklenecekUrun = state.carts.find(item => item.id === parseInt(id))
            if (sepeteEklenecekUrun === undefined) {
                let item = state.products.find(item => item.id === parseInt(id))
                item.quantity = 1
                state.carts.push(item)
                Swal.fire(
                    {
                        title: 'Başarılı',
                        text: "Ürün sepete eklendi!",
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    }
                )
            }
        },
        getProductById: (state, action) => {
            let { id } = action.payload;
            let urunDetay = state.products.find(item => item.id === parseInt(id))
            state.single = urunDetay
        },
        updateCart: (state, action) => {
            let { val, id } = action.payload;
            state.carts.forEach(item => {
                if (item.id === parseInt(id)) {
                    item.quantity = val
                }
            })
        },
        removeCart: (state, action) => {
            let { id } = action.payload;
            let sepetinOnSonHali = state.carts.filter(item => item.id !== parseInt(id))
            state.carts = sepetinOnSonHali
        },
        clearCart: (state) => {
            state.carts = []
        },
        addToFavorites: (state, action) => {

            let { id } = action.payload;
            let item = state.favorites.find(item => item.id === parseInt(id))
            if (item === undefined) {
                let urunFavori = state.products.find(item => item.id === parseInt(id))
                urunFavori.quantity = 1
                state.favorites.push(urunFavori)
                Swal.fire(
                    {
                        title: 'Başarılı',
                        text: 'İlgili ürün favorilere eklenmiştir',
                        icon: 'success'
                    }

                )

            }
            else {
                Swal.fire('Başarsız', 'İlgili ürün favorilere eklenemedi', 'warning')
            }

        },
        removeToFav: (state, action) => {
            let { id } = action.payload;
            let favorilerinOnSonHali = state.favorites.filter(item => item.id !== parseInt(id))
            state.favorites = favorilerinOnSonHali
        },
        clearFav: (state) => {
            state.favorites = [] 
        },

    }
})

const productsReducer = productsSlice.reducer
export default productsReducer

