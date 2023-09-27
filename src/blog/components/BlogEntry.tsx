import './CSS/blogEntry.css';
// @ts-ignore
import moment from 'moment';

type BlogEntryProps = {
    title: string,
    img: {
        src: string,
        alt: string
    },
    content: string,
    autor: string
}
export default function BlogEntry(props: BlogEntryProps){
    return(
        <section>
            <h3>{props.title}</h3>
            <img className="postImage" src={props.img.src} alt={props.img.alt}/>
            <textarea>{props.content}</textarea>
            <p>{props.autor}</p>
        </section>
    )
}