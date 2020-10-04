import React from 'react'
import { useParams } from 'react-router-dom'
import Section1 from './Sections/Section1'

function ProductDetails() {
    let { prodName } = useParams();
    console.log(prodName);
    return (
        <div>
            <Section1 prodName={prodName} />
        </div>
    )
}

export default ProductDetails
