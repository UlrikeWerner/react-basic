import './CSS/blogEntry.css';
// @ts-ignore
import moment from 'moment';

type BlogEntryProps = {
    title: string,
    img: {
        src: string,
        alt: string
    },
    content: string | string[],
    autor: string
}
export default function BlogEntry(props: BlogEntryProps){
    return(
        <section className="text-left blogEntryButton">
            <p className="blogEntryAutor">author: {props.autor}</p>
            <h3 className="blogEntry-title">{props.title}</h3>
                <div className="blogEntry-flex-row">
                    <img className="postImage" src={props.img.src} alt={props.img.alt}/>
                    <div className="blogEntry-content-flex">
                        {
                            (typeof props.content === "string") ?
                                <p className="text-style">{props.content}</p> :
                                props.content.map((paragraph) => <p className="text-style">{paragraph}</p>)
                        }
                    </div>
                </div>
        </section>
    )
}