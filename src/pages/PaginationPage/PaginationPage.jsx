import React from "react";
import LinkToMain from "../../components/LinkToMain/LinkToMain";
import PagesContent from "../../components/PagesContent/PagesContent";
import Pagination from "../../components/project/Pagination/Pagination";

const urlBase = "https://63b861926f4d5660c6d53d00.mockapi.io/record_base";

const PaginationPage = () => {
  return (
    <>
      <LinkToMain />
      <PagesContent
        title="Pagination"
        component={<Pagination urlBase={urlBase} />}
      />
    </>
  );
};

export default PaginationPage;
