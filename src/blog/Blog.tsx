import Header from "./components/Header.tsx";
import ImageComponent from "./components/ImageComponent.tsx";
import ListComponent from "./components/ListComponent.tsx";
import QuoteComponent from "./components/QuoteComponent.tsx";
import BlogEntry from "./components/BlogEntry.tsx";

import './blog.css';

let blogPostList =
    [
        {
            id: 1,
            title: "Affogato - Trendkaffee im Sommer!",
            img: {
                src: "https://media.cdn.kaufland.de/cms/original/7b317b7519ae12c67cc808b447f30196.png",
                alt: "Affogato"
            },
            content: "Einen Espresso mit dem gewissen Extra genießen? Zartes Vanilleeis umhüllt von aromatisch-intensiven Espresso - das italienische Dessert mit einer Extraportion Koffein, Erfrischung und einem süßen Touch. Wovon wir sprechen? Natürlich vom Affogato! Wir bei roastmarket haben den Kaffeetrend natürlich auch ausprobiert und sind begeistert vom Ergebnis! Wie Sie die das leckere Affogato Rezept ganz einfach selbst Zuhause zubereiten oder Affogato gleich für mehrere Gäste servieren können, stellen wir heute vor.",
            autor: "Max Mayer"
        },
        {
            id: 2,
            title: "Kaffee Cocktail - Kaffee der Untoten",
            img: {
                src: "https://cdn.shopify.com/s/files/1/0040/7089/9776/files/Kaffee_der_Untoten_600x600.png?v=1634796944",
                alt: "Kaffee Cocktail - Kaffee der Untoten"
            },
            content: [
                "Zutaten: 30ml Whisky, 30ml Brandy, 15ml Tequilla, etwas Zuckersirup, 1 Zitrone, 1 Tasse heißen Kaffee, ggf. 3EL steife Schlagsahne",
                "Alle Zutaten (bis auf die Zitrone) mit dem heißen Kaffee mischen. Die Mischung in ein Glas füllen, etwas Zitronenfleisch herausnehmen und in das Glas geben, damit es frei schwimmend zu sehen ist. Unsere Empfehlung: Sahnehäubchen drauf geben und fertig ist der perfekte Halloween Cocktail!"
            ],
            autor: "Mia Klaus"
        },
]

export default function Blog(){
    return(
        <div className="body">
            <div className="center">
                <Header />
                <ImageComponent />
            </div>
            <div className="grid-list">
                <ListComponent />
                <QuoteComponent />
            </div>
            {
                blogPostList.map((blogPost) =>
                    <BlogEntry key={blogPost.id}
                               title={blogPost.title}
                               img={blogPost.img}
                               content={blogPost.content}
                               autor={blogPost.autor}
                    />)
            }

        </div>
    )
}