'use client'
import { useEffect, useState } from "react";
import { fetchSugestionsForForm } from "@/app/lib/fetchingSQL";

function AddMarkForm() {
    const [formData, setFormData] = useState({ student: '%', teacher: '%', subject: '%' })
    const [list, setList] = useState({ students: [], teachers: [], subjects: [] });

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
                studentID = i['ID Teacher'];
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
            <div>
                <label htmlFor="student" className="flex flex-col mb-2">
                    Student
                    <input
                        id="student"
                        type="select"
                        name="student"
                        list="students"
                        onChange={(e) => handleChange(e)}
                        className="text-black px-2 py-1 rounded"
                    />
                </label>
                <datalist id="students">
                    {list.students && list.students.map((item) => (
                        <option value={item['Name']} key={item['ID Student']}>
                            {item['Name'] || ''}
                        </option>
                    ))}
                </datalist>
            </div>
            <div>
                <label htmlFor="teacher" className="flex flex-col mb-2">
                    Teacher
                    <input
                        id="teacher"
                        type="text"
                        name="teacher"
                        list="teachers"
                        onChange={(e) => handleChange(e)}
                        className="text-black px-2 py-1 rounded"
                    />
                </label>
                <datalist id="teachers">
                    {list.teachers && list.teachers.map((item) => (
                        <option value={item['Name']} key={item['ID Teacher']}>
                            {item['Name'] || ''}
                        </option>
                    ))}
                </datalist>
            </div>

            <div>
                <label htmlFor="subject" className="flex flex-col mb-2">
                    Subject
                    <input
                        id="subject"
                        type="text"
                        name="subject"
                        list="subjects"
                        onChange={(e) => handleChange(e)}
                        className="text-black px-2 py-1 rounded"
                    />
                </label>
                <datalist id="subjects">
                    {list.subjects && list.subjects.map((item) => (
                        <option value={item['Subject Name']} key={item['ID Subject']}>
                            {item['Name'] || ''}
                        </option>
                    ))}
                </datalist>
            </div>
            <div className="flex flex-col-reverse mb-2">
                <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                    onClick={(e) => handleSubmit(e)}
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default AddMarkForm