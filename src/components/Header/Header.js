import './Header.scss';
import logo from '../../assets/images/awari4.jpg';


export function Header() {
     return (
        <header>
                <img className='logo' src={logo} alt="Awari School" />
                
                <div className='header-container'>
                    <span>Awari web development course</span>
                    <span>Projetos de Ulisses Malanski</span>
                    
                    <div className='principal-links'>
                        <a href="https://malanski.github.io/MyResume/">Projetos</a>
                        <a href="https://github.com/malanski">Github</a>
                        <a href="https://www.linkedin.com/in/ulisses-malanski">Linkedin</a>
                    </div>
                </div>

                
         </header>
     )
}