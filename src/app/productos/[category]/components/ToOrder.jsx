import { useEffect, useState } from "react";

const ToOrder = ({openToOrder, setOpenToOrder, setAlf, setSort, alf, sort}) => {
    const [price, setPrice] = useState(null);
    const [alfabetic, setAlfabetic] = useState(null);

    const handleOrder = () => {
        if (price) {
            setSort(price);
            setAlf(null);
        } else if (alfabetic) {
            setAlf(alfabetic);
            setSort(null);
        }
        setOpenToOrder(false);   // Cerrar el modal
    }

    useEffect(() => {
        if (price) {
            setAlfabetic(null);
        }
    }, [price])
    
    useEffect(() => {
        if (alfabetic) {
            setPrice(null);
        }
    }, [alfabetic])
    
    return (
        <div className={`${ openToOrder ? 'on' : ''} container-toOrder`}>
            <div className="close">
                <span onClick={() => setOpenToOrder(false)}>X</span>
            </div>
            <div className='toOrder'>
                <div className='container-options'>
                    <label for="order">Ordenar por nombre:</label>
                    <select value={alfabetic} onChange={e => setAlfabetic(e.target.value)}>
                        <option value="az">A-Z</option>
                        <option value="za">Z-A</option>
                    </select>
                </div>
                <div className='container-options'>
                    <label for="ordenar">Ordenar por precio:</label>
                    <select value={price} onChange={e => setPrice(e.target.value)}>
                        <option value="asc">Menor percio</option>
                        <option value="dec">Mayor precio</option>
                    </select>
                </div>
                <button className='btn' type="submit" onClick={handleOrder}>Ordenar</button>
            </div>
        </div>
    )
}

export default ToOrder