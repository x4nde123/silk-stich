import './index.scss';

import Cabecalho from '../cabecalho';

export default function EstilosRoupas(props){
    


    return (

        <div className='comp-estilos'>

            <div className='estilos-container'>

                <div className='fundo-img'>

                    <img className='img' src={props.fundoimagem} alt="" />

                </div>

                <div>
                    <Cabecalho/>
                </div>

                <h1>{props.titulo}</h1>

                <div className='borrao'>
                    <img src="/assets/images/borrao_inicio.png" alt="" />
                </div>

                
            </div>


        </div>
        
    )
}