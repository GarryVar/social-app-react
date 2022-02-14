import { Link } from 'react-router-dom';
import style from './Logo.module.css'

const Logo = () => {
  return (
    <>
      <div className={style.logo}>
        <Link to="/"></Link>
      </div>
    </>
  )
}

export default Logo;