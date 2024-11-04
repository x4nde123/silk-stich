import './index.scss';

import CompInicio from '../../core/components/compInicio';


export default function Teste(){

    let teste = [
        {
            fundoImagem: '/assets/images/fundo_inicio2.png',
            tituloDescricao: 'TERNOS CLÁSSICOS',
            descricao: 'Explore nossa seleção de ternos com design impecável e acabamentos sofisticados. Ideal para criar uma presença marcante em qualquer ocasião.',
            FundoVerMais: 'branco',
            corVerMais: 'preto',
            primeiraImagem: '/assets/images/img2_inicio.png ',
            segundaImagem: '/assets/images/img3_inicio.png'
        }
    ]

    

    return (

        <div className="teste">

            {teste.map(item => 
                <CompInicio
                    fundoImagem={item.fundoImagem}
                    tituloDescricao={item.tituloDescricao}
                    descricao={item.descricao}
                    FundoVerMais={item.FundoVerMais}
                    corVerMais={item.corVerMais}
                    primeiraImagem={item.primeiraImagem}
                    segundaImagem={item.segundaImagem}
                />
            )}

        </div>

    )
}