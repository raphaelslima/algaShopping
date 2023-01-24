import React from 'react'
import { useSelector } from 'react-redux'

import { Wrapper, Title, Array } from './ShoppingList.styles'

import Checkbox from '../../shared/Checkbox'

import { selectorAllProducts, selectorSelectProducts } from '../../store/Products/Products.selector'

function ShoppingList ({ title, displayOnlySelectorProducts ,onToggle }) {

  const products = useSelector(displayOnlySelectorProducts 
                                ? selectorSelectProducts 
                                : selectorAllProducts)

  return <Wrapper>
    <Title>
      { title }:
    </Title>
    <Array>
      {
        products.map(product =>
          <Checkbox
            key={product.id}
            value={product.checked}
            title={product.name}
            onClick={() => onToggle(product.id, product.checked, product.name)}
          />
        )
      }
    </Array>
  </Wrapper>
}

export default ShoppingList
