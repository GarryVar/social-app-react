import style from './Aside.module.css';
import Navigation from './../Navigation/Navigation';

const Aside = props => {
  return (
    <aside className={style.aside}>
      <div className={style.inner}>
        <Navigation value={props.data} />
      </div>
    </aside>
  )
}
export default Aside;