import '../../assets/scss/Atividade5.scss';
import atividade5 from '../../assets/images/atividade5.pdf';
import atividade5print from '../../assets/images/ulisses_malanski_front-end_07-04-22.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';


export const Atividade5 = (props) => {
    return (

        <div className='atividade5'>
            <h1>Curriculum</h1>
            <h2>Printable PDF version:</h2>

            <embed 
                src={atividade5print}
                
                width='90%'
                height='1000px' 
            />

            <br/>    

            <h2>
                
                HTML version: <a href="https://malanski.github.io/curriculo/">
                    Link Curriculo HTML
                </a>
            </h2>

            
            <embed 
                    src='https://malanski.github.io/curriculo/'
                    
                    width='90%'
                    height='1000px' 
                />

            <br/>

        </div>
    )
}
