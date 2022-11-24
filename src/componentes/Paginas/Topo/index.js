
import './style.css'

import {Link} from 'react-router-dom'

const Topo = () => (

    <header>
        <div className='limite-secao topo'>
            
            <Link to='/'><img src="./assets/logo.png" alt="Logo" className='logo'></img></Link>
            
            <nav>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/sabores'>Sabores</Link>
                <Link className='link' to='/sobre'>Sobre</Link>
            </nav>
        </div>
    </header>

)

export default Topo;