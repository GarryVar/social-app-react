import style from './Aside.module.css';
import Navigation from './../Navigation/Navigation';

const Aside = ({ data }) => {
  return (
    <aside className={style.aside}>
      <div className={style.inner}>
        <Navigation items={data} />
      </div>
    </aside>
  )
}
export default Aside;