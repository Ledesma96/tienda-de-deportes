
const QuantitySelector = ({count, setCount}) => {

    const updateCount = (number) => {
        const newCount = count + number;
        setCount(newCount < 0 ? 0 : newCount);
    };
    return (
        <div className="div-btns-count">
            <button className="btn" onClick={() => updateCount(-1)}>-</button>
                <p className="count">{count}</p>
            <button className="btn" onClick={() => updateCount(1)}>+</button>
        </div>
    )
}

export default QuantitySelector