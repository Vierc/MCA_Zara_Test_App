import { setFilter } from "../store/features/filterSlice";
import { useAppDispatch, useAppSelector } from "../store/store";


const Search = () => {

  const filter = useAppSelector(state => state.podcastFilter.filterText)
  const dispatch = useAppDispatch()

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(evt.target.value))
  }

  return(
    <div>
      <input 
        type="text" 
        name="search"
        onChange={handleChange}
        value={filter} 
        placeholder="Filter podcasts..." 
        aria-label="Search"
      />
    </div>
  );
}

export default Search;