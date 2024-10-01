'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import ProductRow from "./ProductRow";
import SearchBar from "./SearchBar";

const StockPanel = () => {
    const [edit, setEdit] = useState(false)
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api.json");
                setProducts(response.data)
                console.log(response);
                
            } catch (error) {
                console.error("Error fetching the JSON file:", error);
            }
        };

        fetchData();
    }, []);

    const handleStockUpdate = (id, newStock, newPrice) => {
        setProducts(
        products.map((product) =>
            product.id === id ? { ...product, stock: newStock ? newStock : product.stock, price: newPrice ? newPrice : product.price } : product
        )
        );
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getProduct = (id) => {
        const product = products.find((p) => p.id === id);
        setProduct(product);
        setEdit(true);
    }

    return (
        <div className="container-panelStock">
            <SearchBar setSearchTerm={setSearchTerm} />
            <div className="panelStock">
                <div className="panel-header">
                    <p>Nombre</p>
                    <p>Stock</p>
                    <p>Precio</p>
                    <p>Editar</p>
                </div>
                <div className="panel-body">
                    {filteredProducts.map((product) => (
                        <div className="panel-item" key={product.id}>
                            <p>{product.name}</p>
                            <p>{product.stock}</p>
                            <p>${product.price}</p>
                            <button onClick={() => getProduct(product.id)}>
                                Editar producto
                            </button>
                        </div>
                    ))}
                </div>
                {
                    edit &&
                        <ReactModal isOpen={edit} onRequestClose={() => setEdit(false)}>
                            <ProductRow product={product} setEdit={setEdit} onStockUpdate={handleStockUpdate}/>
                        </ReactModal>
                }
            </div>
        </div>
    );
};

export default StockPanel;
