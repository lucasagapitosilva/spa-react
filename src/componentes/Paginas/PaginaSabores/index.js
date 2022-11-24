
import './style.css'

import Topo from '../Topo/'
import Rodape from '../Rodape/'

const PaginaSabores = () => (

    <main>
        <Topo />

        <section className='container-banner'>  
                <h1>NOSSO SABORES</h1>
        </section>

        <section className='container-sabores limite-secao'>
            <h2>SABORES DE SORVETE</h2>

            <div className='cards-sabores'>
                <div className='card-sabores'>
                    <img src='./assets/sabor-oreo.png' className='image-card'></img>
                    
                    <div className='card-info'>
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>
                </div>

                <div className='card-sabores'>
                    <img src='./assets/sabor-pistache.png' className='image-card'></img>

                    <div className='card-info'>
                        <h3>Sorvete Pistache</h3>
                        <p>Cremeso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>
                </div>

                <div className='card-sabores'>
                    <img src='./assets/sabor-cookies-avela.png' className='image-card'></img>

                    <div className='card-info'>
                        <h3>Sorvete Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                </div>

                <div className='card-sabores'>
                    <img src='./assets/sorbet-kiwi.png' className='image-card'></img>

                    <div className='card-info'>
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>
                </div>

                <div className='card-sabores'>
                    <img src='./assets/sorbet-morango.png' className='image-card'></img>

                    <div className='card-info'>
                        <h3>Sorvete de morango</h3>
                        <p>Sorvete de morango gourmet.</p>
                        <p>Tradicional e saboroso.</p>
                    </div>
                </div>

                <div className='card-sabores'>
                    <img src='./assets/sorbet-limao.png' className='image-card'></img>

                    <div className='card-info'>
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </div>
        </section>

        <Rodape />
    </main>

)

export default PaginaSabores;