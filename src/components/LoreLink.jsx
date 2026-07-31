import {Link} from 'react-router-dom';
export default function LoreLink({to,children}){return <Link className="lore-link" to={to}>{children}</Link>}
