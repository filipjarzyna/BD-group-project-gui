import Table from "./components/Table/Table";
import { fetchGradesPagination } from "./lib/fetchingSQL";

export default async function Home({ searchParams }) {
  const query = await searchParams;
  let { "page": curPage = 1 } = query;
  curPage = Number(curPage);

  const { recordset, pagination } = await fetchGradesPagination({ PageNumber: curPage, PageSize: 8 });
  const { 'TotalPages': totalPages } = pagination === undefined ? 0 : pagination[0];

  return (
    <div className="h-[100vh] container mx-auto pt-10">
      <Table
        data={recordset}
        totalPages={totalPages}
        curPage={curPage}
      />
    </div>
  );
}
