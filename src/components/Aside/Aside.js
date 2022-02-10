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
                            Atividade:<br/>
                            Observar e relatar  

                        </span>
                    </CustomLink>
                </li>
                <li>
                    <CustomLink to="/atividade2">
                        <span>
                            Atividade
                        </span>
                    </CustomLink>
                </li>
            </ol>
        </aside>
    )
}