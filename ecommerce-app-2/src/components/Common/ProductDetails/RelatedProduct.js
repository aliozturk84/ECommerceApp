import React from 'react'
import ProductCard from '../Product/ProductCard'
import { useSelector } from "react-redux";
import Heading from '../../../page/Fashion/Heading';
const RelatedProduct = () => {
    let products = useSelector((state) => state.products.products);
    return (
        <>
            <section id="related_product" className="pb-100">
                <div className="container">
                    <Heading heading="Bunları da beğenebilirsiniz!" para="Bu ürünü alanlar bunları da beğendi..." />
                    <div className="row">
                        {products.slice(0, 0).map((data, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index} >
                                <ProductCard data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default RelatedProduct