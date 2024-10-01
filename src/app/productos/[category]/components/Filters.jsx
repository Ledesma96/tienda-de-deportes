'use client'
import { getUniqueBrands, getUniqueSubCategory } from "@/app/api/api";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Filters = ({openFilters, setOpenFilters}) => {
    const params = useParams();
    const category = params.category
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const [brands, setBrands] = useState([])
    const [subCategories, setSubCategories] = useState([])

    const [open, setOpen] = useState({
        acordeon1: false,
        acordeon2: false,
        acordeon3: false,
        acordeon4: false,
    })

    const togleAcordeon = (nameAcordeon) => {
        setOpen(
            prevState => (
                {...prevState, [nameAcordeon]:!prevState[nameAcordeon]}
            )
        )
    }

    const handleStyles = (acordeonName) =>{
        let height = 0;
        switch (acordeonName){
            case "acordeon1":
                height = ref1.current.scrollHeight + 55;
                break;
            case "acordeon2":
                height = ref2.current.scrollHeight + 45;
                break;
            case "acordeon3":
                height = ref3.current.scrollHeight + 45;
                break;
            case "acordeon4":
                height = ref4.current.scrollHeight + 45;
                break;
            default:
                height = 0;
        }
        const styles = {
            height: `${height}px`,
            transition: "height 0.2s ease",
        }
        return styles;
    }

    useEffect(() => {
        const fetchBrand = async() => {
            const response = await getUniqueBrands(category);
            if(response){
                setBrands(response);
            }
        }
        fetchBrand();
    }, [category])

    useEffect(() => {
        const fetchSubCategory = async () => {
            const response = await getUniqueSubCategory(category);
            if(response){
                setSubCategories(response);
            }
        }
        fetchSubCategory();
    }, [category])

    return (
        <div className={`${ openFilters ? 'on' : ''} container-filters`}>
            <span className={`${ openFilters ? 'blur-on' : 'blur-off'}`}></span>
            <div className="close">
                <span onClick={() => setOpenFilters(false)}>X</span>
            </div>
            <div className="filter" style={open.acordeon1 ? handleStyles('acordeon1') : {}}>
                <div className="header-filter" onClick={() => togleAcordeon("acordeon1")}>
                    <h4>Marca</h4>
                    {open.acordeon1 ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"  viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"/>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                        </svg>
                    }
                </div>
                <div ref={ref1} className="acordeon">
                    {brands.map((brand, index) =>(
                        <div key={index}>
                            <input type="checkbox" name={brand} value={brand}/>
                            <label for={brand}>{brand}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="filter" style={open.acordeon2 ? handleStyles('acordeon2') : {}}>
                <div className="header-filter" onClick={() => togleAcordeon("acordeon2")}>
                    <h4>Sub categoria</h4>
                    {open.acordeon2 ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"  viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"/>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                        </svg>
                    }
                </div>
                <div ref={ref2} className="acordeon">
                    {subCategories.map((sc, index)=>(
                        <div key={index}>
                            <input type="checkbox" name={sc} value={sc}/>
                            <label for={sc}>{sc}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="filter" style={open.acordeon3 ? handleStyles('acordeon3') : {}}>
                <div className="header-filter" onClick={() => togleAcordeon("acordeon3")}>
                    <h4>Marca</h4>
                    {open.acordeon3 ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"  viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"/>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                        </svg>
                    }
                </div>
                <div ref={ref3} className="acordeon">
                    <div>
                        <input type="checkbox" id="marca1" name="marca1" />
                        <label for="marca1">Marca 1</label>
                    </div>
                    <div>
                        <input type="checkbox" id="marca2" name="marca2" />
                        <label for="marca2">Marca 2</label>
                    </div>
                    <div>
                        <input type="checkbox" id="marca3" name="marca3" />
                        <label for="marca3">Marca 3</label>
                    </div>
                    
                </div>
            </div>
            <div className="filter" style={open.acordeon4 ? handleStyles('acordeon4') : {}}>
                <div className="header-filter" onClick={() => togleAcordeon("acordeon4")}>
                    <h4>Tipo</h4>
                    {open.acordeon4 ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"  viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"/>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
                        </svg>
                    }
                </div>
                <div ref={ref4} className="acordeon">
                    <div>
                        <input type="checkbox" id="marca1" name="marca1" />
                        <label for="marca1">Marca 1</label>
                    </div>
                    <div>
                        <input type="checkbox" id="marca2" name="marca2" />
                        <label for="marca2">Marca 2</label>
                    </div>
                    <div>
                        <input type="checkbox" id="marca3" name="marca3" />
                        <label for="marca3">Marca 3</label>
                    </div>
                </div>
            </div>
            <button className="btn">Filtrar</button>
            <button className="btn">Limpiar</button>
        </div>
    )
}

export default Filters