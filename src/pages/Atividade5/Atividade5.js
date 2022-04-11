import '../../assets/scss/Atividade5.scss';
import atividade5print from '../../assets/images/ulisses_malanski_front-end_07-04-22.pdf';
import atividade5print2 from '../../assets/images/ulisses_malanski_front-end_4-8-22.pdf';

export const Atividade5 = (props) => {
    return (

        <div className='atividade5'>
            <h1>5# Curriculum</h1>

            <h2>
                
                HTML version: <a href="https://malanski.github.io/curriculum-eng/">
                    Link Curriculo HTML
                </a>
            </h2>

            
            <embed 
                    src='https://malanski.github.io/curriculum-eng/'
                    
                    width='90%'
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
