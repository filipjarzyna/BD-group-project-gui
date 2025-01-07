'use client'
import { useEffect, useState } from "react";
import { fetchSugestionsForForm } from "@/app/lib/fetchingSQL";
import AddMarkInput from "./AddMarkInput";

function AddMarkForm() {
    const [formData, setFormData] = useState({ student: '%', teacher: '%', subject: '%' });
    const [list, setList] = useState({ students: [], teachers: [], subjects: [] });
    const marks = [1, 2, 3, 4, 5, 6];
    const weights = [1, 2, 3, 4, 5];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        let studentID = -1;
        let teacherID = -1;
        let subjectID = -1;

        for (i in students) {
            if (i.toLowerCase() === formData.student.toLowerCase()) {
                studentID = i['ID Student'];
                break;
            }
        }

        for (i in teachers) {
            if (i.toLowerCase() === formData.student.toLowerCase()) {
                teacherID = i['ID Teacher'];
                break;
            }
        }

        for (i in subjects) {
            if (i.toLowerCase() === formData.subject.toLowerCase()) {
                subjectID = i['ID Subject'];
                break;
            }
        }
    }

    const fetchList = async () => {
        try {
            const { recordsets } = await fetchSugestionsForForm(formData);
            console.log("Client res:", recordsets);
            if (recordsets !== undefined) {
                setList({ students: recordsets[0], teachers: recordsets[1], subjects: recordsets[2] })
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchList();

    }, [formData])

    return (
        <div className="flex gap-5">
            <AddMarkInput
                name={'student'}
                listName={'students'}
                list={list['students']}
                handleChange={handleChange}
            />
            <AddMarkInput
                name={'teacher'}
                listName={'teachers'}
                list={list['teachers']}
                handleChange={handleChange}
            />
            <AddMarkInput
                name={'subject'}
                listName={'subjects'}
                list={list['subjects']}
                handleChange={handleChange}
            />
            <AddMarkInput
                name={'mark'}
                listName={'marks'}
                list={marks}
                handleChange={handleChange}
                customCSS="w-16"
                inputType={'number'}
            />
            <AddMarkInput
                name={'weight'}
                listName={'weigths'}
                handleChange={handleChange}
                customCSS="w-16"
                inputType={'number'}
            />

            <div className="flex flex-col-reverse mb-2">
                <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                    onClick={(e) => handleSubmit(e)}
                >
                    Add
                </button>
            </div>

            <datalist id="students">
                {list.students && list.students.map((item) => (
                    <option value={item['Name']} key={item['ID Student']}>
                        {item['Name'] || ''}
                    </option>
                ))}
            </datalist>
            <datalist id="teachers">
                {list.teachers && list.teachers.map((item) => (
                    <option value={item['Name']} key={item['ID Teacher']}>
                        {item['Name'] || ''}
                    </option>
                ))}
            </datalist>
            <datalist id="subjects">
                {list.subjects && list.subjects.map((item) => (
                    <option value={item['Subject Name']} key={item['ID Subject']}>
                        {item['Name'] || ''}
                    </option>
                ))}
            </datalist>
            <datalist id="marks">
                {marks.map((item) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </datalist>
            <datalist id="weigths">
                {weights.map((item) => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </datalist>

        </div>
    );


    // return (
    //             <datalist id="students">
    //                 {list.students && list.students.map((item) => (
    //                     <option value={item['Name']} key={item['ID Student']}>
    //                         {item['Name'] || ''}
    //                     </option>
    //                 ))}
    //             </datalist>
    //             <datalist id="teachers">
    //                 {list.teachers && list.teachers.map((item) => (
    //                     <option value={item['Name']} key={item['ID Teacher']}>
    //                         {item['Name'] || ''}
    //                     </option>
    //                 ))}
    //             </datalist>
    //             <datalist id="subjects">
    //                 {list.subjects && list.subjects.map((item) => (
    //                     <option value={item['Subject Name']} key={item['ID Subject']}>
    //                         {item['Name'] || ''}
    //                     </option>
    //                 ))}
    //             </datalist>
    //             <datalist id="marks">
    //                 {marks.map((item) => (
    //                     <option value={item} key={item}>
    //                         {item}
    //                     </option>
    //                 ))}
    //             </datalist>
    // );
}

export default AddMarkForm