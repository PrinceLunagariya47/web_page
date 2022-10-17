export const addItem = (data) => {
    return {
        type: 'ADDITEM',
        payload: data
    }
}
export const qtyPlus = (data) => {
    return {
        type: 'QTYPLUS',
        payload: data
    }
}
export const qtyMinus = (data) => {
    return {
        type: 'QTYMINUS',
        payload: data
    }
}
export const changeQuantity = (e, data) => {
    return {
        type: 'CHANGEQUANTITY',
        payload: data,
        e: e
    }
}
export const deleteCartItem = (data) => {
    return {
        type: 'DELETECARTITEM',
        payload: data
    }
}