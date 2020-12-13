import { Link } from 'react-router-dom'
import { headerRoutes } from '../App'

function Header() {
    return (
        <>
            <h2>Header</h2>
            <ul>
                {headerRoutes.map(({ name, route }) => <li><Link exact to={route}>{name}</Link></li>)}
            </ul>
        </>
    )
};
export default Header;