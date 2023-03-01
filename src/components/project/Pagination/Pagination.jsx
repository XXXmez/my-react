import React, { useState, useEffect } from "react";
import axios from "axios";
import Items from "./Items";
import NavPages from "./NavPages";
import { Oval } from "react-loader-spinner";
import "./Pagination.css";

const Pagination = ({ urlBase = "" }) => {
  const [recordBase, setRecordBase] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [countItems, setCountItems] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const recordData = await axios.get(urlBase);
      setRecordBase(recordData.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const countElementPage = (count) => {
    setCountItems(count);
    setCurrentPage(0);
  };

  return (
    <div className="paginations">
      {loading ? (
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        <>
          <div>
            <span>Сколько элементов показывать:</span>
            <button onClick={() => countElementPage(5)}>5</button>
            <button onClick={() => countElementPage(10)}>10</button>
          </div>
          <Items
            itemsBase={recordBase}
            currentPage={currentPage}
            countItems={countItems}
          />
          <NavPages
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            baseLength={recordBase.length}
            countItems={countItems}
          />
        </>
      )}
    </div>
  );
};

export default Pagination;
