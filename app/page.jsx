import Table from "./components/Table/Table";
import { fetchGrades, fetchGradesPagination } from "./lib/fetchingSQL";
import { ToastContainer, toast } from 'react-toastify';


export default async function Home() {
  // const { recordset } = await fetchGrades({ page: 1 });
  const curPage = 1;

  const { recordset, pagination } = await fetchGradesPagination({ PageNumber: 1, PageSize: 8 });
  const { 'TotalPages': totalPages } = pagination[0];
  
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
