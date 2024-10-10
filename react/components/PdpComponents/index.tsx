import React from "react"
import { useProduct } from 'vtex.product-context'
import * as   style from './styles.css'

const PdpComponents = () => {
  const productContextValue = useProduct();

  const formatarPreco = (preco) => {
    return `$ ${preco.toFixed(2).replace('.', ',')}`;
  }

  console.log(productContextValue.product)
  const img = productContextValue.product.items


  return (
    <div className={style["container-pdp-custom"]}>
      <img
        src={img[0].images[0].imageUrl}
        alt="img"
        className={style["content_img"]}
      />
      <div>
        <h1>{productContextValue.product.productName}</h1>
        <p className={style.contant_price}>
          <span className={style["contant_price--highPrice"]}>{formatarPreco(productContextValue.product.priceRange.listPrice.highPrice)}</span>
          {formatarPreco(productContextValue.product.priceRange.listPrice.lowPrice)}
        </p>
      </div>
    </div>
  );
}

export default PdpComponents
