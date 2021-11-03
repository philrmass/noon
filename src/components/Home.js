//import { useDispatch, useSelector } from 'react-redux';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      HOME
      <button className='button' onClick={() => console.log('Nothin')}>
        Nothin
      </button>
    </div>
  );
}
