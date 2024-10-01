import { useState } from 'react';

const ProductRow = ({ product, onStockUpdate, setEdit }) => {
    const [newStock, setNewStock] = useState();
    const [newPrice, setNewPrice] = useState();

    const updateStock = () => {
        onStockUpdate(product.id, parseInt(newStock, 10), parseInt(newPrice, 10));
        setEdit(false);
    };

    return (
        <div className='container-updateProduct'>
            <p>{product.name}</p>
            <div>
                <p>Stock actual: {product.stock}</p>
                <p>Precio actial: ${product.price}</p>
            </div>
            <div>
                <input placeholder='Nuevo stock' onChange={e => setNewStock(e.target.value)}/>
                <input placeholder='Nuevo precio' onChange={e => setNewPrice(e.target.value)}/>
            </div>
            <div>
                <button onClick={updateStock}>Actualizar producto</button>
                <button onClick={() => setEdit(false)}>Cancelar</button>
            </div>
        </div>
    );
};

export default ProductRow;
