
import './style.css'

const Rodape = () => (

    <footer>
        <div className='container-footer'>
            <img src='./assets/logo.png' className='logo-footer'></img>

            <div className='container-contato'>
                <h3>ENDEREÇO</h3>
                <p>Av. Bernardino de Campos, 98</p>
                <p>São Paulo, SP 12345-678</p>     
            </div>

            <div className='container-contato'>
                <h3>CONTATO</h3>
                <p>info@meusite.com</p>
                <p>Tel:(11) 3456-7890</p>
            </div>

            <div className='container-contato'>
                <h3>HORÁRIOS</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p>10:00 - 22:00</p>
            </div>
        </div>

        <div className='container-rodape'>
            <p>Gelateria. Orgulhosamente desenvolvido por "Lucas Agapito"</p>
        </div>
    </footer>

)

export default Rodape;