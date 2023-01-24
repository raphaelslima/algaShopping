import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LineChart from '../../shared/LineChart'
import extractPercentage from '../../utils/extractPercentage'

import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'
import Calculator from '../AppCalculator/Calculator'

import { Wrapper, Container } from './App.styles'

import { selectorAllProducts, selectorSelectProducts, selectorTotalPriceProducts } from '../../store/Products/Products.selector'

import { toggleProduct } from '../../store/Products/Products.action'

function App () {
  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

  const products = useSelector(selectorAllProducts)
  const dispatch = useDispatch()

  const selectedProducts = useSelector(selectorSelectProducts)

  const totalPrice = useSelector(selectorTotalPriceProducts)

  function handleToggle (id) {
    dispatch(toggleProduct(id))
  }

  return <Wrapper>
    <Container>
      <AppHeader />
      <AppContainer
        left={
          <ShoppingList
            title="Produtos disponíveis"
            onToggle={handleToggle}
            />}
            middle={
              <ShoppingList
              title="Sua lista de compras"
              displayOnlySelectorProducts
            onToggle={handleToggle}
          />}
        right={<div>
          estatisticas

          <LineChart
            color={colors[0]}
            title="saudavel"
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('healthy'))
                .length
            )}
          />
          <LineChart
            color={colors[1]}
            title="nao tao saudavel"
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('junk'))
                .length
            )}
          />
          <LineChart
            color={colors[2]}
            title="limpeza"
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('cleaning'))
                .length
            )}
          />
          <LineChart
            color={colors[3]}
            title="outros"
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('others'))
                .length
            )}
          />

          <div style={{ marginTop: 12 }}>
            <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364A' }}>
              previsão de gastos:
            </h2>
            <div style={{ fontSize: 24 }}>
              { totalPrice.toLocaleString('pt-br', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
              }) }
            </div>

              <Calculator/>
          </div>
        </div>}
      />
    </Container>
  </Wrapper>
}

export default App