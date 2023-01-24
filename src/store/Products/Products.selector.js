export const selectorAllProducts = state => state.products

export const selectorSelectProducts = state => state.products
                                                .filter(product => product.checked)

export const selectorTotalPriceProducts = state => state.products
                                                .filter(product => product.checked)
                                                .reduce((a, b) => a + b.price, 0)