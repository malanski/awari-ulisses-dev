import '../../assets/scss/Atividade7.scss';
/* import atividade6 from '../../assets/images/image6.png'; */



export const Atividade7 = (props) => {
    return (
        <div className='atividade7'>
            <h1>7# Projeto React App</h1>
            
            

            <h2>Objetivos</h2>
            <ul>
                <li>
                    Criar uma simples SPA (single page application) de duas maneiras diferentes em React.
                </li>
                
                <li>
                    Especificação 2.1
                    <blockquote>
                        Cria uma aplicação React sem nenhum tipo de uso de npm, de forma estática, importando os scripts diretamente em sua página HTML.
                    </blockquote>
                    <blockquote>
                        Crie alguns elementos HTML, quantos conseguir, sem utilizar JSX.
                    </blockquote>
                    <blockquote>
                        O código precisa estar no GitHub.
                    </blockquote>
                    <blockquote>
                    Faça pelo menos 4 níveis de parentesco. Exemplo:
                    <br></br>
                    section<br></br>
                    &emsp;|-div<br></br>
                    &emsp;&emsp;|-p<br></br>
                    &emsp;&emsp;&emsp;|-span<br></br>
                    &emsp;&emsp;&emsp;&emsp;|- "Conteúdo"<br></br>
                    </blockquote>
                </li>

                <li>
                    Especificação 2.2
                    <blockquote>
                        Usar toolchains, e o create-react-app.
                    </blockquote>
                    <blockquote>
                        Altere o Index.
                    </blockquote>
                    <blockquote>
                        Aplicar seu HTML criado na página.
                    </blockquote>
                    <blockquote>
                        Adicione um botão com estado.
                    </blockquote>
                    <blockquote>
                    O código precisa estar no GitHub.
                    </blockquote>
                    <blockquote>
                        Divida suas áreas do HTML em componentes.
                    </blockquote>
                    <blockquote>
                        Coloque uma biblioteca para auxiliar na estilização.
                    </blockquote>
                    <blockquote>
                        Instale e implemente algum componente open source.
                    </blockquote>
                </li>    
            </ul>
            <h3>Solução Especificação 2.1:</h3>
            <div className='flex-row'>
                <div className='btn-solution'>
                    <a href='https://github.com/malanski/projeto-react-app'>Repositório</a>
                </div>
                <div className='btn-solution'>
                    <a href='https://malanski.github.io/projeto-react-app'>Github Pages</a>
                </div>
            </div>
            <h3>Solução Especificação 2.2:</h3>
            <div className='flex-row'>
                <div className='btn-solution'>
                    <a href='https://github.com/malanski/projeto-react-app2'>Repositório</a>
                </div>
                <div className='btn-solution'>
                    <a href='https://malanski.github.io/projeto-react-app2'>Github Pages</a>
                </div>
            </div>
        </div>
    )
}