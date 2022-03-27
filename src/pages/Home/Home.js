import '../../assets/scss/Home.scss';

export const Home = (props) => {
    return (
        <div className='home'>
            <h1>Desenvolvimento Web - Awari</h1>
            
            <div className='flex'>
                
                <div className='conteudo frontend'>
                    <p>Frontend</p>
                    <ol>
                        <li>
                            Reactjs
                            <blockquote>Routes, State, Axios, style libraries, import, deploy</blockquote>
                        </li>

                        <li>
                            Nextjs
                            <blockquote>Pages/, useSWR, deploy</blockquote>
                        </li>

                        <li>
                            HTML5
                            <blockquote>Tags, Elements, Semantics, W3C validation</blockquote>
                        </li>

                        <li>
                            CSS3
                            <blockquote>SASS, SCSS, Id's, Classes, variables, calc, animation, Responsive layouts</blockquote>                            
                        </li>

                        <li>
                            JavaScript
                            <blockquote>Basics on Functions, fetch, Classes, Variables. </blockquote>                      
                        </li>

                        

                        <li>
                            Git, Github, gitlab
                            <blockquote>add, commit, push, pull, reset, revert, merge, PullRequest</blockquote>
                        </li>

                        <li>Chakra - MUI - Fontawesome
                            <blockquote>Use on React, Next and Vanilla applications </blockquote>
                        </li>

                    
                    </ol>
                </div>

                <div className='conteudo backend'>
                    <p>Backend</p>
                    <ol>
                        <li>API
                            <blockquote>Fetch, Axios, SWR, GraphQL</blockquote>
                        </li>
                        <li>
                            Node
                            <blockquote>npm, npx</blockquote>
                        </li>

                        <li>
                            SQL
                            <blockquote>C.R.U.D. PostgreSQL, SQlite, Dbeaver</blockquote>

                        </li>

                        <li>
                            Deploy
                            <blockquote>Heroku, Gh-pages (github pages), Vercel</blockquote>
                        </li>

                        <li>
                            Server
                                <blockquote>Virtual Host, APACHE</blockquote>
                        </li>

                        <li>
                            Docker Composer
                            <blockquote>GPU, Networking, Production</blockquote>
                        </li>

                    </ol>
                </div>
            </div>
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
                            AWS
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


        </div>
    )
}