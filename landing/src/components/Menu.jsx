import style from './Menu.module.css'

export default function Menu (){


    return (
        <div className={style["wrap-menu"]}>
            <h1>Menu</h1>            
            <p> 
                <a  href="/api">Api</a> 
            </p>
            <p> 
                <a href="/calc">Média</a> 
            </p>
            <p> 
                <a href="/contc">Contato</a> 
            </p>
            <p> 
                <a href="/technologies">Tecnologia</a> 
            </p>

        </div>
    )
} 