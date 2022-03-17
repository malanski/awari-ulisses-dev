import '../../assets/scss/Atividade8.scss';
/* import atividade6 from '../../assets/images/image6.png'; */



export const Atividade8 = (props) => {
    return (
        <div className='atividade8'>
            <h1>Projeto Next.js App</h1>
            
            

            <h2>Objetivos</h2>
            <ul>
                <li>
                    Construir uma aplicação em Next.js.
                </li>
                
                <li>
                    Especificação
                    <blockquote>
                        Crie uma aplicação Next.js.
                    </blockquote>
                    <blockquote>
                        Crie rotas.
                    </blockquote>
                    <blockquote>
                        Reproduza parte de seu HTML no Next.js.
                    </blockquote>
                    <blockquote>
                        Crie e utilize ao menos um componente.
                    </blockquote>
                    <blockquote>
                        Inclua algum componente com estado.
                    </blockquote>
                    <blockquote>
                        O código precisa estar no GitHub.
                    </blockquote>
                </li>

                <li>
                    Especificação Power up
                    <blockquote>
                        Converta para usar TypeScript, em uma branch diferente da principal.
                    </blockquote>
                </li>    
            </ul>
            <h3>Solução Especificação1:</h3>
            <div className='flex-row'>
                <div className='btn-solution'>
                    <a href='https://github.com/malanski/poke-store-next'>Repositório</a>
                </div>
                <div className='btn-solution'>
                    <a href='https://poke-store-next.vercel.app'>Github Pages</a>
                </div>
            </div>
            
        </div>
    )
}