import './Aside.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBattery, faBattery0, faBattery2, faBattery3, faBattery4, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import {
    Outlet,
    Link,
    useMatch,
    useResolvedPath
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link className={match ? "active" : ""}
        to={to}
        {...props}
        >
            {children}
        </Link>
    );
}

export const Aside = (props) => {
    return (
        <aside>
            <h3>Course Projects</h3>
                <CustomLink to="/">
                    <span>
                        Home
                    </span>
            </CustomLink>
            <CustomLink to="/portfolio">
                    <span>
                        Portfolio
                    </span>
            </CustomLink>

            <ol>
                <li>
                    <CustomLink to="/atividade1">
                        <span>
                            To see and analyze     
                        </span>
                        &ensp;<FontAwesomeIcon icon={faCheckCircle} />

                    </CustomLink>
                </li>
                
                <li>
                    <CustomLink to="/atividade2">
                        <span>
                            <small>Specification</small> Zero: Create Portfolio Github
                        </span>
                        &ensp;<FontAwesomeIcon icon={faCheckCircle} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade3">
                        <span>
                            Linkedin + Networking
                        </span>
                        &ensp;<FontAwesomeIcon icon={faCheckCircle} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade4">
                        <span>
                            Introduce Mail
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery3} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade5">
                        <span>
                            Curriculum 
                        </span>
                    &ensp;&ensp;<FontAwesomeIcon icon={faCheckCircle} />

                    </CustomLink>

                </li>

                <li>
                    <CustomLink to="/atividade6">
                        <span>
                            <small>Specification</small> 1: Project: HTML + CSS Page
                        </span>
                        &ensp;<FontAwesomeIcon icon={faCheckCircle} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade7">
                        <span>
                            <small>Specification</small> 2: Project: React App
                        </span>
                        &ensp;<FontAwesomeIcon icon={faCheckCircle} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade8">
                        <span>
                            <small>Specification</small> 3: Project: Next.js App
                        </span>
                        &ensp;<FontAwesomeIcon icon={faCheckCircle} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade9">
                        <span>
                            <small>Specification</small> 4: Project: Database
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery2} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade8">
                        <span>
                            <small>Specification</small> 10: Project:  Next.js + TypeScript
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery4} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade11">
                        <span>
                            Employment Sheet: Job Searching 
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery4} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade12">
                        <span>
                            Job applying: Job Searching 
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery4} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade13">
                        <span>
                            <small>Specification</small> 5: Project: Express API
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery0} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade14">
                        <span>
                            <small>Specification</small> 6: Project: Conteineirize API
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery0} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade15">
                        <span>
                            <small>Desafios Técnicos</small>: Selection Process Preparation 
                        </span>
                        &ensp;<FontAwesomeIcon icon={faCheckCircle} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade16">
                        <span>
                            <small>Specification</small> 7: Project: Cloud Deploy 
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery0} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade17">
                        <span>
                            <small>Specification</small> 8: Project: Lambda on air
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery0} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade18">
                        <span>
                            Task: E.V.P.
                        </span>
                        &ensp;<FontAwesomeIcon icon={faCheckCircle} />

                    </CustomLink>
                </li>
                
                <li>
                    <CustomLink to="/atividade19">
                        <span>
                            Task: Career Development Plan
                        </span>
                        &ensp;<FontAwesomeIcon icon={faCheckCircle} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade8">
                        <span>
                            <small>Specification</small> 9: Project: Next.js + TypeScript + API
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery4} />

                    </CustomLink>
                </li>
                
            </ol>
        </aside>
    )
}