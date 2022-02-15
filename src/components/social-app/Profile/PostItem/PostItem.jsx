import style from '../Profile.module.css';

const PostItem = ({ message }) => {
  return (
    <>
      <li class={style.item}>
        <p>{message}</p>
      </li>
    </>
  )
}

export default PostItem;