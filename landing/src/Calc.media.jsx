import style from "./Calc.module.css"
import Menu from "./components/Menu"

import { useState } from "react"

export const Calc = () => {
    const [numero1, setNumero1] = useState()
    const [numero2, setNumero2] = useState()
    const [numero3, setNumero3] = useState()
    const [numero4, setNumero4] = useState()
    const [numero5, setNumero5] = useState()
    
    const [respMedia, setRespMedia] = useState()

    const handleMedia = () => {
        const soma = parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3) + parseFloat(numero4) + parseFloat(numero5);
        const media = soma / 5;
        setRespMedia(media);
    }    

    return(
        <div>
            <Menu/>
            <div className={style.wrapCalc}>
                <h1>Calculo de Média</h1>
                    <div className={style.wrapInputsCalc}>

                        <input 
                        className={style.inpStyle}
                        type="text"
                        placeholder="Digite o primeiro número" 
                        value={numero1}
                        onChange={(e) => setNumero1(e.target.value)}
                        />

                        <input 
                        className={style.inpStyle}
                        type="text" 
                        placeholder="Digite o segundo número" 
                        value={numero2}
                        onChange={(e) => setNumero2(e.target.value)}
                        />

                        <input 
                        className={style.inpStyle}
                        type="text"
                        placeholder="Digite o terceiro número" 
                        value={numero3}
                        onChange={(e) => setNumero3(e.target.value)}
                        />

                        <input 
                        className={style.inpStyle}
                        type="text"
                        placeholder="Digite o quarto número" 
                        value={numero4}
                        onChange={(e) => setNumero4(e.target.value)}
                        />

                        <input 
                        className={style.inpStyle}
                        type="text"
                        placeholder="Digite o quinto número" 
                        value={numero5}
                        onChange={(e) => setNumero5(e.target.value)}
                        />

                    </div>
                    <div className={style.wrapInputsCalc}>
                        <div className={style.wrapEach}>
                            <h1>Média</h1>
                            {!isNaN(respMedia) && <p>{respMedia.toFixed(2)}</p>}
                            <button onClick={handleMedia}>Calcular soma</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}