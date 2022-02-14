import style from './Vidget.module.css';

const Vidget = ({ data }) => {
  return (
    <div className={style.vidget}>
      {data}
    </div>
  )
}

export default Vidget;