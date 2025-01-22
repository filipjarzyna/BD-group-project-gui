'use client'
import { useEffect, useState } from "react";
import { fetchSugestionsForForm, addGrade } from "@/app/lib/fetchingSQL";
import AddMarkInput from "./AddMarkInput";
import { notifyError, notifySuccess } from "../toastNotifications";

function AddMarkForm() {
    const defaultForm = { student: '', teacher: '', subject: '', mark: '', weight: '' };
    const [formData, setFormData] = useState(defaultForm);
    const [list, setList] = useState({ students: [], teachers: [], subjects: [] });
    const marks = [1, 2, 3, 4, 5, 6];
    const weights = [1, 2, 3, 4, 5];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{

            //input (propably) not selected check
            if (list.students.length != 1 && list.teachers.length != 1 && list.subjects.length != 1) {
                throw new Error("Invalid input selected");
            }

            // input invalid check
            if (formData.student.localeCompare(list.students[0]['Name']) 
                || formData.teacher.localeCompare(list.teachers[0]['Name']) || formData.subject.localeCompare(list.subjects[0]['Subject Name'])
            ) {
                throw new Error("Invalid input check");
            }
            
            const studentID = list.students[0]['ID Student'];
            const teacherID = list.teachers[0]['ID Teacher'];
            const subjectID = list.subjects[0]['ID Subject'];
            
            console.log(`Student ID: ${studentID}, Teacher ID: ${teacherID}, Subject ID: ${subjectID}`);
            console.log(`Mark: ${formData.mark}, Weight: ${formData.weight}`);
            // return;
            
            const res = await addGrade({ student: studentID, teacher: teacherID, mark: Number(formData.mark), weight: Number(formData.weight), subject: subjectID });
            
            if (res === undefined) {
                console.log("res undefined")
                throw new Error("Error adding grade");
            }

            notifySuccess({ message: "Successfully added grade" });
            setFormData(defaultForm);

        } catch (error) {
            notifyError({ message: "Error sending data" });
            console.log(error);
        }

    };

    const fetchList = async () => {
        try {
            const { recordsets } = await fetchSugestionsForForm(formData);
            if (recordsets) {
                setList({ students: recordsets[0], teachers: recordsets[1], subjects: recordsets[2] });
            }
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    };

    useEffect(() => {
        const debounceFetch = setTimeout(() => {
            fetchList();
        }, 500); // Debounce API calls by 500ms

        return () => clearTimeout(debounceFetch); // Cleanup debounce timer
    }, [formData]);

    return (
        <div className="flex gap-5">
            <AddMarkInput
                name="student"
                listName="students"
                list={list.students}
                handleChange={handleChange}
                value={formData.student}
                />
            <AddMarkInput
                name="teacher"
                listName="teachers"
                list={list.teachers}
                handleChange={handleChange}
                value={formData.teacher}
                />
            <AddMarkInput
                name="subject"
                listName="subjects"
                list={list.subjects}
                handleChange={handleChange}
                value={formData.subject}
                />
            <AddMarkInput
                name="mark"
                listName="marks"
                list={marks}
                handleChange={handleChange}
                customCSS="w-16"
                inputType="number"
                value={formData.mark}
                />
            <AddMarkInput
                name="weight"
                listName="weights"
                list={weights}
                handleChange={handleChange}
                customCSS="w-16"
                inputType="number"
                value={formData.weight}
            />

            <div className="flex flex-col-reverse mb-2">
                <button
                    className="bg-green-700 hover:bg-green-900 hover:scale-105 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSubmit}
                >
                    Add
                </button>
            </div>

            <datalist id="students">
                {list.students.map((item, index) => (
                    <option value={item['Name']} key={index} />
                ))}
            </datalist>
            <datalist id="teachers">
                {list.teachers.map((item, index) => (
                    <option value={item['Name']} key={index} />
                ))}
            </datalist>
            <datalist id="subjects">
                {list.subjects.map((item, index) => (
                    <option value={item['Subject Name']} key={index} />
                ))}
            </datalist>
            <datalist id="marks">
                {marks.map((item) => (
                    <option value={item} key={item} />
                ))}
            </datalist>
            <datalist id="weights">
                {weights.map((item) => (
                    <option value={item} key={item} />
                ))}
            </datalist>
        </div>
    );
}

export default AddMarkForm;