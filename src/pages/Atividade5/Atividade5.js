import '../../assets/scss/Atividade5.scss';
/* import atividade6 from '../../assets/images/image6.png'; */



export const Atividade5 = (props) => {
    return (


        <div className='atividade5'>
            <h1>Curriculum</h1>
            
            

            <h2>Ulisses Malanski</h2>
            <h3>FrontEnd Developer</h3>

            <div className='row-abilities'>
                <ul>
                    <li>
                        Technologies
                        <blockquote>
                            Next.js
                        </blockquote>
                        <blockquote>
                            React.js
                        </blockquote>
                        <blockquote>
                            JavaScript
                        </blockquote>
                        <blockquote>
                            TypeScript
                        </blockquote>
                        <blockquote>
                            HTML + CSS
                        </blockquote>
                        <blockquote>
                            SASS - SCSS
                        </blockquote>
                        
                        <blockquote>
                            Node
                        </blockquote>
                        <blockquote>
                            SQL
                        </blockquote>
                    </li>
                </ul>

                <ul>
                    <li>
                        I can work with
                        <blockquote>
                            Responsive applications
                        </blockquote>
                        
                        <blockquote>
                            Apache
                        </blockquote>

                        <blockquote>
                            Sequelize
                        </blockquote>

                        <blockquote>
                            Linux
                        </blockquote>

                        <blockquote>
                            Windows with WSL
                        </blockquote>
                        
                        <blockquote>
                            VScode
                        </blockquote>
                     
                        <blockquote>
                            Git and Github
                        </blockquote>

                        <blockquote>
                            Fontawesome
                        </blockquote>

                        <blockquote>
                            Chakra - MUI
                        </blockquote>



                    </li>
                </ul>
                <ul>
                    <li>
                        Currently learning 
                        <blockquote>
                            Dbeaver
                        </blockquote>
                        <blockquote>
                            PostgreSQL
                        </blockquote>
                        <blockquote>
                            AWS
                        </blockquote>
                        <blockquote>
                            CI and CD
                        </blockquote>
                        <blockquote>
                            Cloud Deploy
                        </blockquote>

                        <blockquote>
                            JavaScript
                        </blockquote>
                                             
                        <blockquote>
                            TypeScript
                        </blockquote>
                        <blockquote>
                            FaaS
                        </blockquote>
                        <blockquote>
                            SEO
                        </blockquote>
                    </li>
                </ul>
            </div>
            <div className='formation'>
                <h2>Formation</h2>
                
                <p>Web Development Course at <a href='https://awari.com.br/'> Awari </a>School(2022-Brazil)</p>
                <p>FrontEnd Basics at <a href='https://www.dio.me/'>DIO </a> Digital innovation One(2021-Brazil)</p>
                <p>Graduated in Drawing Licentiate (art teaching) at <a href='http://www.embap.pr.gov.br/'>EMBAP</a> (2010-Brazil) </p>
                <p>Product and Graphic Design Course at <a href='https://www.colegioensitec.com.br/'>ENSITE</a> (2006-Brazil) </p>
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