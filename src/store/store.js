import {legacy_createStore as creatorStore, combineReducers} from 'redux'

import CalculatorReducer from './Calculator/Calculator.reducer'

const rootReducer = combineReducers({
    calculator: CalculatorReducer
})

const store = creatorStore(rootReducer)

export default store