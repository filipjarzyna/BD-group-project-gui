'use server'
import { getDBConnection } from "@/app/lib/db";

export const fetchGrades = async ({ page }) => {
    const db = await getDBConnection();
    const res = await db.request().query('SELECT TOP 6 * FROM Marks');

    return res;
}


//edits values of a grade with given id
export const editGrade = async ({ markID, rowData: { student, mark, weight, subject, teacher } }) => {
    try {
        //validate data




        const db = await getDBConnection();
        const res = await db.request().query(`EXEC EditMarkByID @MarkID = ${Number(markID)}, @StudentID = ${student}, @Mark = ${mark}, @Weight = ${weight}, @SubjectID = ${subject}, @TeacherID = ${teacher}`);
        return res;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

//deletes grade with given id from the database
export const deleteGrade = async ({ markID }) => {
    try {
        markID = Number(markID);
        if (isNaN(markID) || markID < 1) {
            throw new Error(`Invalid mark type ${typeof (markID)} : ${markID}`)
        }
        const db = await getDBConnection();
        const res = await db.request().query(`EXEC DeleteMarkByID @MarkID = ${markID}`);
        return res;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

//adds new grade to the database
export const addGrade = async ({ student, mark, weight, subject, teacher }) => {
    try {
        //validate data
        


        const db = await getDBConnection();
        const res = await db.request().query(`EXEC AddNewMark @StudentID = ${student}, @Mark = ${mark}, @Weight = ${weight}, @SubjectID = ${subject}, @TeacherID = ${teacher}`);
        return res;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

//fetches grades with pagination
export const fetchGradesPagination = async ({ PageNumber = 1, PageSize = 8 }) => {
    try {
        PageNumber = Number(PageNumber);
        if (isNaN(PageNumber) || PageNumber < 1) {
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

export const fetchSugestionsForForm = async ({ teacher = '', student = '', subject = '' }) => {
    try {
        //validate data




        const db = await getDBConnection();
        const res = await db.request().query(`EXEC GetStudentsTeachersSubjects @StudentName = '${student}', @SubjectName = '${subject}', @TeacherName = '${teacher}'`);
        const { recordsets } = res;
        return { recordsets };
    } catch (error) {
        console.log(error);
        return undefined;
    }
}