'use client'
import { Breadcrumbs } from "@/app/components"
import { useParams } from "next/navigation"
import { useState } from "react"
import { ContentCategory, Filters, ToOrder } from "."

const RenderProductsCategory = () => {
    const {category} = useParams();
    const [openFilters, setOpenFilters] = useState(false);
    const [openToOrder, setOpenToOrder] = useState(false);
    const [sort, setSort] = useState(null);
    const [alf, setAlf] = useState(null)
    return (
        <div className="container-products-category">
            <Breadcrumbs/>
            <div className="container-btns">
                <div className="btn" onClick={() => setOpenFilters(true)}>
                    <p>Filtrar</p>
                </div>
                <div className="btn" onClick={() => setOpenToOrder(true)}>
                    <p>Ordenar</p>
                </div>
            </div>
            <ContentCategory category={category} sort={sort} alf={alf}/>
            <Filters
                    openFilters={openFilters}
                    setOpenFilters={setOpenFilters}
            />
            <ToOrder
                    openToOrder={openToOrder}
                    setOpenToOrder={setOpenToOrder}
                    setAlf={setAlf}
                    setSort={setSort}
                    sort={sort}
                    alf={alf}
            />
        </div>
    )
}

export default RenderProductsCategory