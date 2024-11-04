import './index.scss';


import { Link } from 'react-router-dom';
import FaleConosco from '../../core/components/faleConosco';
import Rodape from '../../core/components/rodape'

export default function Suporte(){



    return (

        <div className="page-suporte">

            <div className='borrao-silkstich'>
                <img src="/assets/images/borrao_branco.png" alt="" />
            </div>

            <header className='header-depoimentos'>
                
                <Link className='link-logo' to='/'>
                    <img className='logo2' src='/assets/images/logo-costura.png'/>
                </Link>

                <div className='h3-header'>

                    <Link to=''>
                        <h3>Serviço</h3>
                    </Link>

                    <Link to='/blog'>
                        <h3>Blog</h3>
                    </Link>

                    <Link to='/sobreNos'>
                        <h3>Sobre</h3>
                    </Link>

                    <Link to='suporte'>
                        <h3>Suporte</h3>
                    </Link>

                </div>


                <div className='contato'>

                    <Link to='/contato' className='link-contato'>
                        <h2>Entre em Contato</h2>
                        <img src="/assets/images/contato.png" alt=""/>
                    </Link>

                </div>

            </header>

            <h1 className='h1-suporte'>SUPORTE</h1>

            <div className='container-suporte'>

                <div className='suporte umSuporte'>

                    <h1>Devoluções</h1>

                    <div className='barra-suporte'></div>

                    <div className='descricao-suporte descricaoUm'>
                        <img src="/assets/images/setinha_suporte.png" alt="" />
                        <p>Saiba como trocar ou devolver  um produto e todas as condições</p>
                    </div>

                </div>

                <div className='suporte doisSuporte'>

                    <h1>Entrega</h1>

                    <div className='barra-suporte'></div>

                    <div className='descricao-suporte descricaoUm'>
                        <img src="/assets/images/setinha_suporte.png" alt="" />
                        <p>Meu pedido veio errado</p>
                    </div>

                    <div className='descricao-suporte'>
                        <img src="/assets/images/setinha_suporte.png" alt="" />
                        <p>Meu pedido consta como entrege, porém não recebi</p>
                    </div>

                </div>

            </div>

            <div className='fale-suporte'>
                <FaleConosco/>
            </div>

            <div>
                <Rodape/>
            </div>

        </div>

    )

}