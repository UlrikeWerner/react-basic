import './CSS/header.css'
export default function Header(){
    return(
        <header>
            <h1>Kaffee Blog</h1>
            <div>
                <h2>Willkommen zum Kaffee Blog!</h2>
                <p className="submit"> Hier findet ihr alles Wissenswertes über Kaffee</p>
            </div>
        </header>
    )
}