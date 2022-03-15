import '../../assets/scss/Home.scss';

export const Home = (props) => {
    return (
        <div className='home'>
            <h1>Desenvolvimento Web - Awari</h1>
            <div className='conteudo basico'>
                    <p>Fundamentos</p>
                    <ul>
                        <li>
                            História da Internet
                        </li>

                        <li>
                            Lógica de Programação
                        </li>

                        <li>
                            Algorítmos
                        </li>
                        
                        <li>
                            SEO
                        </li>

                        <li>
                            Redes
                        </li>

                        <li>
                            Windows
                        </li>

                        <li>
                            Linux
                        </li>

                        <li>
                            VScode
                        </li>

                        <li>
                            WSL
                        </li>
                    </ul>
                </div>
            <div className='flex'>
                
                <div className='conteudo frontend'>
                    <p>Frontend</p>
                    <ol>
                        <li>
                            HTML5
                        </li>

                        <li>
                            CSS3
                        </li>

                        <li>
                            SASS
                        </li>

                        <li>
                            JavaScript
                        </li>

                        <li>
                            React
                        </li>

                        <li>
                            Next
                        </li>

                        <li>
                            Git e Github
                        </li>
                    
                    </ol>
                </div>

                <div className='conteudo backend'>
                    <p>Backend</p>
                    <ol>
                        <li>
                            Node
                        </li>

                        <li>
                            SQL - SQlite
                        </li>

                        <li>
                            Dbeaver
                        </li>

                        <li>
                            AWS
                        </li>

                        <li>
                            Apache
                        </li>

                        <li>
                            Heroku
                        </li>

                    </ol>
                </div>
            </div>


        </div>
    )
}