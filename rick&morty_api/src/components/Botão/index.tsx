import React from "react";



const Botao : React.FC<string> = (imgUrl : string) => {
    return(
        <button>
            <img src={imgUrl} alt="" />
        </button>
    )
}

export default Botao