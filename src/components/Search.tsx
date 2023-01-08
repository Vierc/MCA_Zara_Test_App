import { setFilter } from "../store/features/filterSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { Podcast } from "../types";

interface Props {
  podcasts: Array<Podcast>
}

const Search = ({podcasts}: Props) => {
  
  const { filterText } = useAppSelector(state => state.podcastFilter)
  const dispatch = useAppDispatch()

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(evt.target.value))
  }

  return(
    <div>
      <span>{podcasts.length}</span>
      <input 
        type="text" 
        name="search"
        onChange={handleChange}
        value={filterText} 
        placeholder="Filter podcasts..." 
        aria-label="Search"
      />
    </div>
  );
}

export default Search;