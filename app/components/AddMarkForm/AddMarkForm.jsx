'use client'
import { useEffect, useState } from "react";
import { fetchSugestionsForForm } from "@/app/lib/fetchingSQL";

function AddMarkForm() {
    const [formData, setFormData] = useState({ student: '%', teacher: '%', subject: '%' })
    const [list, setList] = useState({students: [], teachers: [], subjects: []});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))

    }

    const fetchList = async () => {
        const res = await fetchSugestionsForForm(formData);
        console.log(res);
    }

    useEffect(() => {
        fetchList();

    }, [formData])


    return (
        <div className="flex flex-col">
            <label htmlFor="student" className="flex flex-col mb-2">
                Student
            </label>
            <input
                id="student"
                type="text"
                name="student"
                // list="students"
                onChange={(e) => handleChange(e)}
                className="text-black px-2 py-1"
            />
            {/* <datalist id="students">
                {students.map((item) => (
                    <option value={item['Name']} key={user['ID Student']}>
                        {user.username}
                    </option>
                ))}
            </datalist> */}
        </div>
    );
}

export default AddMarkForm