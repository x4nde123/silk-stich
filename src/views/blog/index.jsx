import Cabecalho from '../../core/components/cabecalho';
import CompInicio from '../../core/components/compInicio';
import EstilosRoupas from '../../core/components/estilosRoupas';
import Rodape from '../../core/components/rodape';
import './index.scss';





export default function Blog(){

    const blogEstilo = [
        {
            fundoimagem: '/assets/images/img_blog.png',
            titulo: 'BLOG',
        }
    ]

    return (

        <div className="page-blog">
            
            <div className='container-blog-inicio'>

                {blogEstilo.map(item =>
                    <EstilosRoupas
                    fundoimagem={item.fundoimagem}
                    titulo={item.titulo}
                    />
                )}

            </div>

            <div className='container-blog-costuras'>

                <div className='costuras-blog'>

                    <img src="/assets/images/blog_img1.png" alt="" />

                    <div className='comp-costuras'>

                        <h3>Técnicas de Costura para Iniciantes</h3>

                        <p>Descubra as técnicas básicas que todo iniciante deve conhecer para começar a costurar com confiança e eficiência.</p>

                    </div>

                </div>

                <div className='costuras-blog'>

                    <img src="/assets/images/blog_img2.png" alt="" />

                    <div className='comp-costuras'>

                        <h3>Tendências de Moda e Costura para 2024</h3>

                        <p>Explore as últimas tendências de moda e como aplicá-las em seus projetos de costura para estar sempre na vanguarda.</p>

                    </div>

                </div>

                <div className='costuras-blog'>

                    <img src="/assets/images/blog_img3.png" alt="" />

                    <div className='comp-costuras'>

                        <h3>O Impacto dos Tecidos Sustentáveis na Costura</h3>

                        <p>Entenda como os tecidos sustentáveis estão moldando o futuro da moda e como incorporá-los em seus projetos para um impacto ambiental positivo.</p>

                    </div>

                </div>

                <div className='costuras-blog'>

                    <img src="/assets/images/blog_img4.png" alt="" />

                    <div className='comp-costuras'>

                        <h3>Como Conservar e Organizar Seus Tecidos</h3>

                        <p>Dicas para armazenar e conservar seus tecidos de forma a evitar danos e manter sua coleção bem organizada e acessível.</p>

                    </div>

                </div>

                <div className='costuras-blog'>

                    <img src="/assets/images/blog_img5.png" alt="" />

                    <div className='comp-costuras'>

                        <h3>Costura e Tecnologia: Novos Gadgets para Costureiros</h3>

                        <p>Descubra as últimas inovações tecnológicas que estão transformando a prática da costura, desde softwares até gadgets inteligentes.</p>

                    </div>

                </div>

                <div className='costuras-blog historias'>

                    <img src="/assets/images/blog_img6.png" alt="" />

                    <div className='comp-costuras'>

                        <h3>Histórias Inspiradoras de Costureiros ao Redor do Mundo</h3>

                        <p>Conheça histórias inspiradoras de costureiros e designers internacionais que estão fazendo ondas na indústria da moda com suas criações inovadoras.</p>

                    </div>

                </div>

            </div>

            <div>
                <Rodape/>
            </div>

        </div>

    )

}