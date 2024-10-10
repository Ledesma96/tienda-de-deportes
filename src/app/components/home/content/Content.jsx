import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Sliders from "./components/Sliders";

const Content = () => {


    return (
        <main className="container-main">
            <section>
                <div>
                    <p className="sub_title">C<span>alidad y estilo para atletas.</span></p>
                </div>
            </section>
            <Sliders category={'hombre'} />
            <Sliders category={'mujer'} />
            <Sliders category={'kids'} />
        </main>
    )
}

export default Content