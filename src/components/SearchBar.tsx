import { setSearchValue } from '@reducers/posts.reducer';
import { useAppDispatch } from '@store/hooks';
import Search from 'antd/es/input/Search';

const SearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const onSearch = (value: string) => {
    dispatch(setSearchValue(value));
  };

  return <Search onSearch={onSearch} placeholder="Поиск" size="large" />;
};

export default SearchBar;
