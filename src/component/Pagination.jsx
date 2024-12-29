const Pagination = ({
  pageIndex,
  currentPage,
  numberOfPage,
  handelChange,
  handelFirst,
  handelLast,
}) => {
  return (
    <div className="pagination">
      <div className="container">
        <div className="pagination-inner">
          <ul>
            <li onClick={handelFirst}>First</li>
            {pageIndex
              .slice(
                Math.max(0, currentPage - 3),
                Math.min(numberOfPage, currentPage + 3)
              )
              .map((item) => (
                <h1 onClick={() => handelChange(item)} key={item}>
                  {item}
                </h1>
              ))}
            <li onClick={handelLast}>Last</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
