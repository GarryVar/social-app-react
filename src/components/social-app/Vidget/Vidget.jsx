import style from './Vidget.module.css';

const Vidget = (props) => {
  return (
    <div className={style.vidget}>
      {props.data}
    </div>
  )
}

export default Vidget;