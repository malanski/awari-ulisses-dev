import '../../assets/scss/Atividade18.scss';

import atividade18 from '../../assets/images/atividade18.pdf';



export const Atividade18 = (props) => {
    return (


        <div className='atividade18'>

            <h1>18# Tarefa E.V.P.</h1>
            <h3>Escala de valores relativos ao Trabalho</h3>

            <h2>Objetivos</h2>

            <p>Categorizar as minhas motivações pessoais e no trabalho numa tabela de princípios e<br/>
            
            valores orientadores com escala de importância de um à cinco:</p>

            <h3>Link da Atividade: <a href='https://docs.google.com/spreadsheets/d/1i5Ds_rWDmDPBxaSA3oT9qblXmQQ3n8k3IFVheo01FZY/edit?usp=sharing'> Tarefa EVP</a></h3>

            <embed 
                src={atividade18}
                
                width='90%'
                height='1000px' 
            />
            
                      
        </div>
    )
}