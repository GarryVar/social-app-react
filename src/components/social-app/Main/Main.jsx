import style from './Main.module.css';
import Picture from "../Profile/Picture/Picture";

const Main = () => {
  return (
    <>
      <div className={style.inner}>
        <Picture />
      </div>
    </>
  )
}

export default Main;
