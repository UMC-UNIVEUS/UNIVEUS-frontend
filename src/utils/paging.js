import Pagination from 'react-js-pagination';
import '../styles/Paging.scss'

export const Paging = ({ page, count, setPage }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={9}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={'‹'}
      nextPageText={'›'}
      onChange={setPage}
    />
  );
};