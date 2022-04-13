import '../../assets/scss/Atividade5.scss';
import atividade5print from '../../assets/images/ulisses_malanski_front-end_09-04-22.pdf';
import atividade5print2 from '../../assets/images/ulisses_malanski_front-end_4-8-22.pdf';

export const Atividade5 = (props) => {
    return (

        <div className='atividade5'>
            <h1>5# Currículo</h1>

            <h2>
                
                HTML version: <a href="https://malanski.github.io/curriculum-eng/">
                    Link Currículo HTML
                </a>
            </h2>

            
            <embed 
                    src='https://malanski.github.io/curriculum-eng/'
                    
                    width='100%'
                    height='1000px' 
                />

            <br/>
            
            <h2>Printable PDF version:</h2>
            
            <embed 
                src={atividade5print2}
                
                width='90%'
                height='1000px' 
            />
            <br/>    

            <h2>Portuguese PDF version:</h2>

            <embed 
                src={atividade5print}
                
                width='90%'
                height='1000px' 
            />

        </div>
    )
}
