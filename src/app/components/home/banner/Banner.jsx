import Link from "next/link"

const Banner = () => {
    return (
        <div className="container-banner">
            <img src='/images/banner_addidas_originals_promo_b7ad4407-7dd0-4ca9-8881-29d04bbda68a_1600x681-e1563918699775.png'></img>
            <div className="offers">
                <Link href="">VER OFERTAS</Link>
            </div>
            <section className="shipping">
                <p>ENVIOS A TODO EL PAÍS</p>
            </section>
        </div>
    )
}

export default Banner