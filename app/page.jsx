import Table from "./components/Table/Table";
import { fetchGradesPagination } from "./lib/fetchingSQL";
import { ToastContainer } from 'react-toastify';

export default async function Home({ searchParams }) {
  // const { recordset } = await fetchGrades({ page: 1 });
  const query = await searchParams;
  let { "page": curPage = 1 } = query;
  curPage = Number(curPage);

  const { recordset, pagination } = await fetchGradesPagination({ PageNumber: curPage, PageSize: 8 });
  const { 'TotalPages': totalPages } = pagination === undefined ? 0 : pagination[0];

  return (
    <div className="h-[100vh] container mx-auto pt-10">
      <div className="flex justify-center">
        USOS 2.0
      </div>
      <Table
        data={recordset}
        totalPages={totalPages}
        curPage={curPage}
      />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
