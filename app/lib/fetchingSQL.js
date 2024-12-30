import { getDBConnection } from "@/app/lib/db";

export const fetchGrades = async ({ page }) => {
    const db = await getDBConnection();
    const res = await db.request().query('SELECT TOP 6 * FROM Marks');

    // const { recordset } = res;

    return res;
}


export const editGrade = async ({ gradeID }) => {
    return 1;
}


export const fetchGradesPagination = async ({ PageNumber = 1, PageSize = 8 }) => {

    try {

        if (PageNumber < 1) {
            PageNumber = 1;
        }
        const db = await getDBConnection();
        const res = await db.request().query(`EXEC GetMarksWithPagination @PageNumber = ${PageNumber}, @PageSize = ${PageSize}`);

        const { recordsets } = res;
        if (!recordsets || recordsets.length < 2) {
            throw new Error("recordsets doesnt exist");
        }

        return { "recordset": recordsets[0], "pagination": recordsets[1] };
    } catch (error) {
        console.log(error);
        return {};
    }
}