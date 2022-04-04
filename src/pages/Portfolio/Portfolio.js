import '../../assets/scss/Portfolio.scss';

import awari from '../../assets/images/awari.png';
import grasshopper from '../../assets/images/grasshopper.svg';
import dio from '../../assets/images/dio.png';
import diploma from '../../assets/images/diploma.png';
import belas from '../../assets/images/belas.jpeg';
import ensitec from '../../assets/images/ensitec.jpeg';
import certificate from '../../assets/images/certificate.png';
import tattoo from '../../assets/images/pngegg.png';
import tattoo2 from '../../assets/images/tattoo.jpg';


import seedmg from '../../assets/images/seedmg.png';
import minas from '../../assets/images/minas.jpg';

import seed from '../../assets/images/seed.png';
import parana from '../../assets/images/parana.jpg';

import dio1 from '../../assets/images/DIO-logica.pdf';
import dio2 from '../../assets/images/DIO-git.pdf';
import dio3 from '../../assets/images/DIO-github1.pdf';
import dio4 from '../../assets/images/DIO-gitlab.pdf';
import dio5 from '../../assets/images/DIO-UX.pdf';




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseClock, faCertificate, faClock, faHeadSideMask, faHorseHead, faMapPin, faPaintbrush, faPen, faPenAlt, faSchool } from '@fortawesome/free-solid-svg-icons';


export const Portfolio = (props) => {
    return (

        <div className='portfolio'>
            <h1>Portfolio</h1>

            <h3>English Resume</h3>
            <h2>Ulisses Malanski</h2>

            <div className='formation'>
                <h3>From:</h3>
                <p>Curitiba, Paraná, Brazil.</p>
                <p>Currently living in Curitiba, Paraná, Brazil.</p>
            </div>
            
            <div className='paragraf'>
            <h3>Web Developer - FrontEnd - FullStack</h3>
                <p>
                    &ensp;&ensp;I'm Web Developer, my professional career begins on Research sector (Museum) where I worked for two years. I acted as Art-Teacher, for 7 years on Public Schools and also as Tattoo artist for 5 years, where I developed illustrations and designs.<br/>
                    <br/>
                    Today I found myself in the technology area (Front-end + Back-end), jumping head first on Computing because I want to merge my knowledge on art and design with software engineering and also learn and develop projects with programing languages. <br/> 
                    <br/>
                    At my free time I do search for newest technologies, compose some experimental music and create drawings and animations.<br/>
                </p>
            </div>

            <div className='formation'>
                <br/>

                <h2><FontAwesomeIcon icon={faHorseHead}></FontAwesomeIcon> Experience</h2>

                <div className='certificate'>
                    <p className='flex-line'>
                        <div>
                            <small>Job title</small><br/>
                            <FontAwesomeIcon icon={faPaintbrush} /> Tattoo artist<br/>
                            <small>Where</small><br/>
                            <small><FontAwesomeIcon icon={faMapPin} /> UnionTTT - Curitiba - Paraná</small>
                        </div>
                        <a href='https://www.instagram.com/unionttt/' title='Unionttt tattoo studio'><FontAwesomeIcon icon={faSchool} /> UnionTTT</a> <span><FontAwesomeIcon icon={faClock} /> 2016 - Today</span>
                        <img height="80" width="100" alt='Public Education' title='Public Education' src={tattoo}/>
                    </p>

                    <div className='branco'>
                        <img height="100" width="180" alt='Public Education of Minas Gerais State'
                         title='Public Education of Minas Gerais State' src={tattoo2}/>
                        <ul className='expList'>
                            <li>Create images, paintings, drawings and illustrations. </li>
                            <li>Develop and apply tattoos based on clients information and references .</li>
                            <li>Keep a controled and clean ambient at the tattoo studio.</li>
                            <li>Assist clients on the healing process.</li>
                            <li>Cleaning, sterilization of the tattoo equipment and the tattoo studio.</li>
                            <li>Elaborate designs and sketches.</li>
                            <li>Keep up with the newest trends on health and the tattoo area.</li>
                            <li>Meet ant talk with clients about they ideas.</li>
                            <li>Schedule Appointment.</li>
                            <li>Orientate the client about the post tattoo cares, for appropriate healing.</li>
                            
                        </ul>
                    </div>
                </div>

                <div className='certificate'>
                    <p className='flex-line'>
                        <div>
                            <small>Job title</small><br/>
                            <FontAwesomeIcon icon={faPenAlt} /> Art teacher <br/>
                            <small>Where</small><br/>

                            <small><FontAwesomeIcon icon={faMapPin} /> State Secretary of Education of Minas Gerais</small>
                        </div>
                        <a href='https://www2.educacao.mg.gov.br/' title='Secretaria de Estado de Educação de Minas Gerais'><FontAwesomeIcon icon={faSchool} /> SEED-MG</a> <span><FontAwesomeIcon icon={faClock} /> 2014 - 2018</span>
                        <img height="80" width="100" alt='Public Education' title='Public Education' src={minas}/>
                    </p>

                    <div className='branco'>
                        <img height="100" width="180" alt='Public Education of Minas Gerais State' title='Public Education of Minas Gerais State' src={seedmg}/>
                        <ul className='expList'>
                            <li>To teach theoretical and practical classes on public schools. </li>
                            <li>Keep up with the Production on Education and Cultural areas.</li>
                            <li>To plan the course, the discipline and the pedagogical project.</li>
                            <li>To assess the process of teaching/learnng.</li>
                            <li>To modify the strategies during class.</li>
                            <li>Correct tests and home works.</li>
                            <li>To document class daily, frequency, content, grades.</li>
                            <li>To develop activities related to the contemporary art production.</li>
                            <li>To inform the student about the relevance of knowledge in the human development.</li>
                            <li>To develop activities for the political understanding of the society problems.</li>
                            <li>To be updated about tendencies on art teaching</li>
                            <li>Relate to the school community.</li>
                            <li>Pay attention to students reactions at the class room. Stablish empathy with them.</li>
                            <li>Respect the cultural, economic and social variety.</li>
                            <li>Menage conflicts</li>
                            <li>Communicate clearly.</li>
                        </ul>
                    </div>
                </div>

                <div className='certificate'>
                <p className='flex-line'>
                        <div>
                            <small>Job title</small><br/>
                            <FontAwesomeIcon icon={faPenAlt} /> Art teacher <br/>
                            <small>Where</small><br/>

                            <small><FontAwesomeIcon icon={faMapPin} /> State Secretary of Education of Paraná</small>
                        </div>
                        <a href='https://www.educacao.pr.gov.br/' title='Secretaria de Estado de Educação do Paraná'><FontAwesomeIcon icon={faSchool} /> SEED-PR</a> <span><FontAwesomeIcon icon={faClock} /> 2011 - 2013</span>
                        <img height="80" width="100" alt='Public Education' title='Public Education' src={parana}/>
                    </p>

                    
                    <div className='branco'>
                        <img height="100" width="180" alt='ensitec' title='Ensitec' src={seed}/>
                        <ul className='expList'>
                            <li>To teach theoretical and practical classes on public schools. </li>
                            <li>Keep up with the Production on Education and Cultural areas.</li>
                            <li>To plan the course, the discipline and the pedagogical project.</li>
                            <li>To assess the process of teaching/learnng.</li>
                            <li>To modify the strategies during class.</li>
                            <li>Correct tests and home works.</li>
                            <li>To document class daily, frequency, content, grades.</li>
                            <li>To develop activities related to the contemporary art production.</li>
                            <li>To inform the student about the relevance of knowledge in the human development.</li>
                            <li>To develop activities for the political understanding of the society problems.</li>
                            <li>To be updated about tendencies on art teaching</li>
                            <li>Relate to the school community.</li>
                            <li>Pay attention to students reactions at the class room. Stablish empathy with them.</li>
                            <li>Respect the cultural, economic and social variety.</li>
                            <li>Menage conflicts</li>
                            <li>Communicate clearly.</li>
                        </ul>
                    </div>
                </div>

                
            </div>

            <h3>Abilities Stack</h3>

            <div className='row-abilities'>                

                <ul className='cartao'>
                    <li>
                        Technologies
                        <blockquote>Next.js</blockquote>
                        <blockquote>React.js</blockquote>
                        <blockquote>JavaScript</blockquote>
                        <blockquote>TypeScript</blockquote>
                        <blockquote>HTML + CSS</blockquote>
                        <blockquote>SASS - SCSS</blockquote>
                        <blockquote>Node</blockquote>
                        <blockquote>SQL</blockquote>
                        <blockquote>Git</blockquote>
                        <blockquote>JSON</blockquote>
                        <blockquote>API</blockquote>
                    </li>
                </ul>


                <ul className='cartao'>
                    <li>
                        I can work with                        
                        <blockquote>REST and GraphQL API</blockquote>
                        <blockquote>Responsive applications</blockquote>
                        <blockquote>Sequelize</blockquote>
                        <blockquote>Apache</blockquote>
                        <blockquote>Linux</blockquote>
                        <blockquote>WSL</blockquote>
                        <blockquote>VScode</blockquote>
                        <blockquote>Github, GitLab</blockquote>
                        <blockquote>Fontawesome</blockquote>
                        <blockquote>Chakra - MUI</blockquote>
                        <blockquote>Drawing - Art history</blockquote>
                        <blockquote>Photoshop + Illustrator</blockquote>
                        <blockquote>Audio production</blockquote>
                        
                    </li>
                </ul>
                <ul className='cartao'>
                    <li>
                        Currently learning 
                        <blockquote>Docker Composer</blockquote>
                        <blockquote>AWS</blockquote>
                        <blockquote>Dbeaver</blockquote>
                        <blockquote>PostgreSQL</blockquote>
                        <blockquote>CI and CD</blockquote>
                        <blockquote>Cloud Deploy</blockquote>
                        <blockquote>JavaScript</blockquote>
                        <blockquote>TypeScript</blockquote>
                        <blockquote>FaaS</blockquote>
                        <blockquote>SEO</blockquote>
                        <blockquote>jQuery</blockquote>

                    </li>
                </ul>
            </div>

            
            
            <div className='devicon'>
                <img height="50" width="50" alt='devicon' title='JavaScript' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/>
                <img height="50" width="50" alt='devicon' title='SASS' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"/>
                <img height="50" width="50" alt='devicon' title='Reactjs' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/>
                <img height="50" width="50" alt='devicon' title='Sequelize' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg"/>
                <img height="50" width="50" alt='devicon' title='TypeScript' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"/>   
                <img height="50" width="50" alt='devicon' title='Nextjs' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"/>   
                <img height="50" width="50" alt='devicon' title='HTML5' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
                <img height="50" width="50" alt='devicon' title='CSS3' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/>
                <img height="50" width="50" alt='devicon' title='Github' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"/>
                <img height="50" width="50" alt='devicon' title='Nodejs' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"/>
                <img height="50" width="50" alt='devicon' title='Docker Composer' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"/>
                <img height="50" width="50" alt='devicon' title='Postgres' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"/>
                <img height="50" width="50" alt='devicon' title='Git' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"/>
                <img height="50" width="50" alt='devicon' title='VScode' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"/>
                <img height="50" width="50" alt='devicon' title='Figma' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"/>
                <img height="50" width="50" alt='devicon' title='Linux OS' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"/>
                <img height="50" width="50" alt='devicon' title='Bootstrap' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"/>   
            </div>  
            <div className='formation'>
                <h2>Study</h2>
                
                <div className='certificate'>
                    <p className='flex-line'>
                        Web Development Course at <a href='https://awari.com.br/' title='Awari School of Technologies'> Awari School </a> (2022-Brazil)
                        <img height="80" width="100" alt='certificate' title='certificate' src={certificate}/>
                    </p>
                    
                    <div className='flex-row school'>
                        <img height="100" width="100" alt='AWARI' title='Awari School' src={awari}/>
                        <p>
                            Full Stack fundamentals.<br/>
                            <br/>
                            Create Reactjs and Nextjs applications, HTML, CSS, SASS, JavaScript, Nodejs, SQL, AWS, Cloud, TypeScript.<br/>
                            <br/>
                            VScode, Dbeaver, Sequelize, PostgreSQL, Git, Github.  
                        </p>
                    </div>                    
                </div>

                
                <div className='certificate'>
                    <p className='flex-line'>
                        Programing language Fundamental III by <a href='https://www.google.com/' title='Google'>Grasshopper</a> (2022-Google)
                        <img height="80" width="100" alt='certificate' title='certificate' src={certificate}/>
                    </p>

                    <div className='flex-row school'>
                        <img height="100" width="100" alt='Grasshopper' title='Grasshopper' src={grasshopper}/>
                        <p>
                            
                            Programing fundamentals.<br/>
                            <br/>
                            Basics on Variables, Functions, Array and Types.
                        </p>
                    </div>
                </div>

                <div className='certificate'>
                
                    <p className='flex-line'>
                        FrontEnd Basics at Digital innovation One <a href='https://www.dio.me/' title='Digital innovation One Technologies School'>DIO </a> (2021-Brazil)
                        <img height="80" width="100" alt='certificate' title='certificate' src={certificate}/>

                    </p>
                    <div className='flex-row school'>
                        <img height="100" width="180" alt='DIO' title='Digital innovation one' src={dio}/>

                        <p>
                            Introduction and basics courses.<br/>
                            <br/>
                            
                        </p>
                        
                    </div>
                    <embed width='50%' height='250px' src={dio1}></embed>
                    <embed width='50%' height='250px' src={dio2}></embed><br/>
                    <embed width='50%' height='250px' src={dio3}></embed>
                    <embed width='50%' height='250px' src={dio4}></embed>
                    <embed width='50%' height='250px' src={dio5}></embed>


                </div>

                <div className='certificate'>
                    <p className='flex-line'>
                        Graduated in Drawing Licentiate (art teaching) at <a href='http://www.embap.pr.gov.br/' title='Escola de Musica e Belas Artes do Paraná'> EMBAP </a>
                        (2010-Brazil)
                        <img height="80" width="120" alt='Diploma' title='Diploma' src={diploma}/>
                    </p>

                    <div className='branco'>
                        <img height="150" width="250" alt='EMBAP' title='Music and Fine arts School of Paraná' src={belas}/>   
                        <p>
                            Art education. Drawing teacher.<br/>
                            <br/>
                            Art history, Composition, Perspective, Sculpture, Techinical Drawing, Geometry, Human figure, Antropology, Painting.<br/>
                            <br/>
                            Psycology of Education, Pedagogic Metodology, Didatics, Drawing.  
                        </p>
                        

                    </div>
                    

                </div>

                <div className='certificate'>
                    <p className='flex-line'>
                        Product and Graphic Design Course at <a href='https://www.colegioensitec.com.br/' title='ENSITEC Dom Bosco School Group'>ENSITEC</a> (2006-Brazil)
                        <img height="80" width="100" alt='certificate' title='certificate' src={certificate}/>
                    </p>

                    <div className='branco'>
                        <img height="100" width="180" alt='ensitec' title='Ensitec' src={ensitec}/>
                        <p>
                            Designer (Product + Graphic).<br/>
                            <br/>
                            Geometry, Techinical Drawing, Composition, Art History, AUTOCAD, Vectors (Adobe Illustrator), Adobe Photoshop.<br/>
                            <br/>
                            Project Metodology, Diagramation, 
                        </p>

                    </div>
                </div>
                <h2>Interest in</h2>
                
                <p>Game Design</p>
                <p>Ux - Ui</p>
                <p>Special Effects</p>
                <p>Computer Science</p>
                <p>Prosthetics Design</p>
            </div>


            

            <h3>Online Curriculum:</h3>
            <div className='flex-row'>
                <div className='btn-solution'>
                    <a href="https://www.linkedin.com/in/ulisses-malanski" title="linkedin">Linkedin</a>
                </div>
                <div className='btn-solution'>
                    <a href='https://malanski.github.io/malanski'>Github welcome Page</a>
                </div>
            </div>

            <h3>My Resume:</h3>
            <div className='flex-row'>
                <div className='btn-solution'>
                    <a href='https://github.com/malanski/MyResume'>Fast Resume</a>
                </div>
                <div className='btn-solution'>
                    <a href='https://malanski.github.io/projeto-react-app2'>Art Portfolio</a>
                </div>
            </div>
        </div>
    )
}