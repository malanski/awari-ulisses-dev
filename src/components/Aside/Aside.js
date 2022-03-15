import './Aside.scss';

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
                    </CustomLink>
                </li>
                
                <li>
                    <CustomLink to="/atividade2">
                        <span>
                            Create Portfolio Github
                        </span>
                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade3">
                        <span>
                            Linkedin + Networking
                        </span>
                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade4">
                        <span>
                            Carta de Apresentação
                        </span>
                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade5">
                        <span>
                            Projeto: Pagina HTML + CSS
                        </span>
                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade6">
                        <span>
                            Projeto: React App
                        </span>
                    </CustomLink>
                </li>

                <li>
                    <CustomLink to="/atividade7">
                        <span>
                            Projeto: Next.js App
                        </span>
                    </CustomLink>
                </li>
            </ol>
        </aside>
    )
}