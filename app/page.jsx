import Table from "./components/Table/Table";
import { getDBConnection } from "./lib/db";

export default async function Home() {

  const db = await getDBConnection();
  const res = await db.request().query('SELECT TOP 10 * FROM Marks');

  const { recordset } = res;


  return (
    <div className="h-[100vh] container mx-auto pt-10">
      <div className="flex justify-center">
        USOS 2.0
      </div>
      <Table
        data={recordset}
      />
    </div>
  );
}
