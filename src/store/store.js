import {legacy_createStore as creatorStore, combineReducers} from 'redux'

import CalculatorReducer from './Calculator/Calculator.reducer'
import ProductsReducer from './Products/Products.reducer'

const rootReducer = combineReducers({
    calculator: CalculatorReducer,
    products: ProductsReducer
})

const store = creatorStore(rootReducer)

export default store