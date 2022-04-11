import './Header.scss';


export function Header() {
     return (
        <header>
                
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