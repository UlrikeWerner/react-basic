import Header from "./components/Header.tsx";
import ImageComponent from "./components/ImageComponent.tsx";
import ListComponent from "./components/ListComponent.tsx";
import QuoteComponent from "./components/QuoteComponent.tsx";

import './block.css';

export default function Block(){
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

        </div>
    )
}