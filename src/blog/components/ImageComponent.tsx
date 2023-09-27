import './CSS/imageComponent.css'
export default function ImageComponent(){
    return(
        <section className="grid-image">
            <img className="coffee-img" src="https://github.com/UlrikeWerner/Basic-WebSite/blob/main/public/Kaffee1.jpeg?raw=true" alt="Kaffee des Tages"/>
            <div className="img-info-box">
                <p className="img-title">
                    Bild des Tages
                </p>
                <a href="https://coffee.alexflipnote.dev/">Bildquelle</a>
            </div>
        </section>
    )
}