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
                            Redes
                        </li>

                        <li>
                            Windows
                        </li>

                        <li>
                            Linux
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
                            reactJS
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
                            JavaScript
                        </li>

                        <li>
                            TypeScript
                        </li>

                        <li>
                            AWS
                        </li>

                    </ol>
                </div>
            </div>


        </div>
    )
}