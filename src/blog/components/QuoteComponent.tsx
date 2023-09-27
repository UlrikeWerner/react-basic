import './CSS/quoteComponent.css'

const userName = "Max";
export default function QuoteComponent(){
    return(
        <section>
            <h3>Zitat des Tages</h3>
            <blockquote>Kaffee, der schwarz wie der Teufel, heiß wie die Hölle, rein wie ein Engel und süß wie die Liebe ist.</blockquote>
            <div className="text-left">
                <p><cite>{userName}: </cite>Seit langen das beste Zitat! </p>
            </div>
        </section>
    )
}