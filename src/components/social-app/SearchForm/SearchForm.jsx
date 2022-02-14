import style from './SearchForm.module.css';


const SearchForm = () => {
  return (
    <>
      <form className={style.searchForm}>
        <label>
          <input type="text" placeholder="Найти..." />
        </label>

        <button type="submit">Найти</button>
      </form>


    </>
  )
}

export default SearchForm;