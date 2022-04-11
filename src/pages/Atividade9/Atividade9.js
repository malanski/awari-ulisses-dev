import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../assets/scss/Atividade8.scss';
/* import atividade6 from '../../assets/images/image6.png'; */



export const Atividade9 = (props) => {
    return (
        <div className='atividade8'>
            <h1>9# Projeto Database</h1>
            
            

            <h2>Objetivos</h2>
            <ul>
                <li>
                Criar scripts para manipular conectores com bancos de dados
                </li>
                <br/>
                
                <li>
                    Especificação
                    <blockquote>
                        CRUD MySQL.
                    </blockquote>
                    <blockquote>
                        CRUD MongoDB.
                    </blockquote>
                    <blockquote>
                        CRUD Fauna.
                    </blockquote>
                    <blockquote>
                        O código precisa estar no GitHub — Atenção para não commitar suas chaves no GitHub!
                    </blockquote>
                  
                </li>
                <br/>

                <li>
                    Especificação Power up
                    <blockquote>
                        
                        Transforme seus CRUDS em TypeScript.
                    </blockquote>
                </li>    
            </ul>
            <h3>Solução: <FontAwesomeIcon icon={faSearchengin}/> </h3>
            <div className='flex-row'>

                <h3> Work in Progress</h3>
                {/* <div className='btn-solution'>
                    <a href='https://github.com/malanski/poke-store-next'>Repositório</a>
                </div>
                <div className='btn-solution'>
                    <a href='https://poke-store-next.vercel.app'>Github Pages</a>
                </div> */}
            </div>
            
        </div>
    )
}