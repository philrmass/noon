//import { useDispatch, useSelector } from 'react-redux';
import { Link/*, NavLink*/ } from 'react-router-dom';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.nav}>
        <Link to='/map'>Map</Link>
        <Link to='/weather'>Weather</Link>
      </div>
      <button className='button' onClick={() => console.log('Nothin')}>
        Nothin
      </button>
    </div>
  );
}
/*
<NavLink
  to={link.to}
  exact={link.exact}
  className={styles.link}
  activeClassName={styles.linkActive}
>
  {link.name}
</NavLink>
*/
