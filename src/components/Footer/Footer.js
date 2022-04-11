import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithubAlt, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/images/awari4.jpg';

export function Footer() {
    return (
        <footer>
            <div>
                <h3>
                    links sociais
                </h3>
                
                <div className='social'>
                    <a href="https://github.com/malanski" title="github">
                        <FontAwesomeIcon icon={faGithubAlt} />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/ulisses-malanski" title="linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a href="https://www.facebook.com/ulisses.malanski/" title="facebook">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>

                    <a href="https://www.instagram.com/ulissesmalanski_tattoo/" title="instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>                    
                </div>

                <h3 className='black-font'>...be like Water my friend.</h3>
            </div>
            <img className='logo' src={logo} alt="Awari School" />

        </footer>
    )
}