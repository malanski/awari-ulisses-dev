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
            <h3>Atividades</h3>
                <CustomLink to="/">
                    <span>
                        Home
                    </span>
            </CustomLink>
            <ol>
                <li>
                    <CustomLink to="/atividade1">
                        <span>
                            Observar e relatar  
                        </span>
                        &ensp;<FontAwesomeIcon icon={faCheckCircle} />

                    </CustomLink>
                </li>
                
                <li>
                    <CustomLink to="/atividade2">
                        <span>
                            <small>Especificações</small> 0: Create Portfolio Github
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
                            Carta de Apresentação
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery3} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade5">
                        <span>
                            Curriculo 
                        </span>
                    &ensp;&ensp;<FontAwesomeIcon icon={faBattery4} />

                    </CustomLink>

                </li>

                <li>
                    <CustomLink to="/atividade6">
                        <span>
                            <small>Especificações</small> 1: Projeto: Pagina HTML + CSS
                        </span>
                        &ensp;<FontAwesomeIcon icon={faCheckCircle} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade7">
                        <span>
                            <small>Especificações</small> 2: Projeto: React App
                        </span>
                        &ensp;<FontAwesomeIcon icon={faCheckCircle} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade8">
                        <span>
                            <small>Especificações</small> 3: Projeto: Next.js App
                        </span>
                        &ensp;<FontAwesomeIcon icon={faCheckCircle} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade9">
                        <span>
                            <small>Especificações</small> 4: Projeto: Database
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery2} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade8">
                        <span>
                            <small>Especificações</small> 10: Projeto:  Next.js + TypeScript
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery4} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade11">
                        <span>
                            Employment Sheet: Job Searching 
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery0} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade12">
                        <span>
                            Job applying: Job Searching 
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery0} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade13">
                        <span>
                            <small>Especificações</small> 5: Projeto: Exress API
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery0} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade14">
                        <span>
                            <small>Especificações</small> 6: Projeto: Conteinteirize API
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
                            <small>Especificações</small> 7: Projeto: Deploy na Cloud
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery0} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade17">
                        <span>
                            <small>Especificações</small> 8: Projeto: Lambda no ar
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery0} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade18">
                        <span>
                            Tarefa: E.V.P.
                        </span>
                        &ensp;<FontAwesomeIcon icon={faCheckCircle} />

                    </CustomLink>
                </li>
                
                <li>
                    <CustomLink to="/atividade19">
                        <span>
                            Tarefa: Career Development Plan
                        </span>
                        &ensp;<FontAwesomeIcon icon={faCheckCircle} />

                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade8">
                        <span>
                            <small>Especificações</small> 9: Projeto: Next.js + TypeScript + API
                        </span>
                        &ensp;<FontAwesomeIcon icon={faBattery4} />

                    </CustomLink>
                </li>
                
            </ol>
        </aside>
    )
}