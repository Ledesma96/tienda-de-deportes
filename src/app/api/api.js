import axios from "axios";

export const loginApi = async(user) => {
    const users = await axios.get('/users.json');
    console.log(users);
    
    const response = users.data.filter(u => u.email === user.email && u.password === user.password)
    if(response.length > 0) {
        return response
    }
    return 'User not found'
}

export const addCart = async(id, quantity) => {
    const response = await axios.get('/api.json')
    const product = await response.data.find(p => p.id === id)
    const returnProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        thumbnail: product.thumbnail[0]
    }

    return returnProduct
}

export const getUniqueBrands = async(category) => {
    const response = await axios.get('/api.json')
    const products = await response.data.filter(p => p.category === category)
    const uniqueBrands = [...new Set(products.map(p => p.marca))];

    return uniqueBrands
}

export const getUniqueSubCategory = async(category) => {
    const response = await axios.get('/api.json')
    const products = await response.data.filter(p => p.category === category)
    const uniqueSubCategory = [...new Set(products.map(p => p.sub_category))];

    return uniqueSubCategory
}

export const getProductsByCategory = async(category) => {
    const response = await axios.get('/api.json')
    const products = await response.data.filter(p => p.category === category)

    return products
}

export const getAllShopping = async() => {
    const response = await axios.get('/shopping.json')
    return response.data
}

export const getShoppingById = async(id) => {
    const response = await axios.get('/shopping.json')
    const shopping = await response.data.find(s => s.id === id)

    return shopping
}

export const getAllMessages = async () => {
    const response = await axios.get('/messages.json')
    return response.data
}

export const getMessageById = async(id) => {
    const response = await axios.get('/messages.json')
    const messages = await response.data.filter(m => m.id === parseInt(id))

    return messages
}

export const getAllOrders = async() => {
    const response = await axios.get('/orders.json')
    return response.data
}

export const getOrderById = async(id) => {
    const response = await axios.get('/orders.json')
    const orders = await response.data.filter(o => o.id === parseInt(id))

    return orders
}