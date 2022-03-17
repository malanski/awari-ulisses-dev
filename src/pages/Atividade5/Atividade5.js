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
                            HTML + CSS
                        </blockquote>
                        <blockquote>
                            SASS - SCSS
                        </blockquote>
                        <blockquote>
                            JavaScript
                        </blockquote>
                        <blockquote>
                            TypeScript
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
                            Data Base
                        </blockquote>
                        <blockquote>
                            VScode
                        </blockquote>
                        <blockquote>
                            Linux
                        </blockquote>
                        <blockquote>
                            Windows with WSL
                        </blockquote>
                        <blockquote>
                            Git and Github
                        </blockquote>
                        <blockquote>
                            Apache
                        </blockquote>
                        <blockquote>
                            Sequelize
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
                            FaaS
                        </blockquote>
                        <blockquote>
                            SEO
                        </blockquote>
                    </li>
                </ul>
            </div>
            <h2>Formation</h2>
            <p>Web Development Course at Awari School(2022-Brazil)</p>
            <p>FrontEnd Basics at Digital innovation One(2021-Brazil)</p>
            <p>Graduated in Drawing Licentiate (art teaching) at EMBAP(2010-Brazil) </p>

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