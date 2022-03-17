import '../../assets/scss/Atividade5.scss';
/* import atividade6 from '../../assets/images/image6.png'; */



export const Atividade5 = (props) => {
    return (


        <div className='atividade5'>
            <h1>Currículo</h1>
            
            

            <h2>Ulisses Malanski</h2>
            <h3>Desenvolvedor FrontEnd</h3>


            <ul>
                
                <li>
                    Habilidades
                    <blockquote>
                        Next.js
                    </blockquote>
                    <blockquote>
                        React.js
                    </blockquote>
                    <blockquote>
                        HTML + CSS
                    </blockquote>
                    <blockquote>
                        SASS - SCSS
                    </blockquote>
                    <blockquote>
                        JavaScript
                    </blockquote>
                </li>

                
            </ul>
            <h3>Currículos digitais:</h3>
            <div className='flex-row'>
                <div className='btn-solution'>
                    <a href="https://www.linkedin.com/in/ulisses-malanski" title="linkedin">Linkedin</a>
                </div>
                <div className='btn-solution'>
                    <a href='https://malanski.github.io/malanski'>Github welcome Page</a>
                </div>
            </div>
            <h3>Cartão de Visitas:</h3>
            <div className='flex-row'>
                <div className='btn-solution'>
                    <a href='https://github.com/malanski/MyResume'>Currículo Simplificado</a>
                </div>
                <div className='btn-solution'>
                    <a href='https://malanski.github.io/projeto-react-app2'>Portfolio Arte Digital</a>
                </div>
            </div>
        </div>
    )
}