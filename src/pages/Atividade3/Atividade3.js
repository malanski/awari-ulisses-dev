import '../../assets/scss/Atividade3.scss';
import linkedin1 from '../../assets/images/image3.png';
import linkedin2 from '../../assets/images/image4.png';

export const Atividade3 = (props) => {
    return (
        <div className='atividade3'>
            <h1>Linkedin Profile and Networking</h1>
            <img src={linkedin1} alt='linkedin about'/>
            <img src={linkedin2} alt='linkedin competences'/>

            <h2>Networking</h2>
            <ul>
                <li>
                    Adding people: Following others Developers
                </li>
                
                <li>
                    Adding Enterprises and Groups: Intersting buisness
                </li>

                <li>
                    Liking and Engagement: Comments, hashtags, post.
                </li>
            </ul>
            
        </div>
    )
}