import React from "react";

const NavPages = ({ setCurrentPage, currentPage, baseLength, countItems }) => {
  const countPages = Math.ceil(baseLength / countItems);

  const arrPages = [];
  for (let i = 1; i <= countPages; i++) {
    arrPages.push(i);
  }

  const currentPages = () => {
    const cp = currentPage + 1;

    return arrPages.filter((el) => {
      if (cp < 2) {
        return el <= 3;
      } else if (cp > countPages - 2) {
        return el >= countPages - 2;
      } else {
        return (el >= cp && el < cp + 2) || (el <= cp && el > cp - 2);
      }
    });
  };

  return (
    <div className="buttons">
      {countPages > 3 && (
        <button
          className="button-page"
          disabled={!currentPage}
          onClick={() => setCurrentPage(0)}
        >
          ❮❮
        </button>
      )}

      <button
        className="button-page"
        disabled={!currentPage}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        ❮
      </button>

      {currentPages().map((page) => (
        <button
          style={currentPage + 1 === page ? { background: "#839292" } : {}}
          onClick={() => setCurrentPage(page - 1)}
          key={page}
          className="button-page"
        >
          {page}
        </button>
      ))}

      <button
        className="button-page"
        disabled={currentPage + 1 === countPages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        ❯
      </button>

      {countPages > 3 && (
        <button
          className="button-page"
          disabled={currentPage + 1 === countPages}
          onClick={() => setCurrentPage(countPages - 1)}
        >
          ❯❯
        </button>
      )}
    </div>
  );
};

export default NavPages;
