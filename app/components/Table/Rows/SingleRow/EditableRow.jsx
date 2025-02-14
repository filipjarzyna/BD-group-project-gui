'use client'
import { FaTrashCan, FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { deleteGrade, editGrade } from "@/app/lib/fetchingSQL";
import { useRouter } from "next/navigation";
import { notifyError, notifySuccess } from "@/app/components/toastNotifications";

function EditableRow({ student, mark, weight, subject, teacher, date, TriggerEdit, markID }) {
    // new edited row data
    const [rowData, setRowData] = useState({
        student: student,
        mark: mark,
        weight: weight,
        subject: subject,
        teacher: teacher,
    });
    const router = useRouter();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setRowData((prev) => ({
            ...prev,
            [name]: value
        }))
    };


    const handleEditSubmit = async () => {
        try {
            const res = await editGrade({ markID, rowData });
            if (res === undefined) {
                throw new Error("failed to edit grade");
            }
            TriggerEdit();
            notifySuccess({ message: 'Successfully Edited' });
            router.refresh();
        } catch (error) {
            notifyError({ message: 'Error sending data' });
        }
    }
    
    const handleDeleteSubmit = async () => {
        try {
            const res = await deleteGrade({ markID });
            if (res === undefined) {
                throw new Error('Error deleting grade');
            }
            TriggerEdit();
            notifySuccess({ message: 'Successfully deleted grade' });
            router.refresh();
        } catch (error) {
            notifyError({ message: 'Error deleting grade' })
        }
    }


    return (
        <tr className="hover:bg-slate-50 border-b border-slate-200">
            <td className="p-4 py-5">
                <input type="number" min={0}
                    name="student"
                    value={rowData.student}
                    className='editable'
                    onChange={(e) => handleChange(e)}
                />
            </td>
            <td className="p-4 py-5 text-sm text-slate-500">
                <input type="number"
                    name="mark"
                    max={6} min={1}
                    value={rowData.mark}
                    className='editable'
                    onChange={(e) => handleChange(e)}

                />
            </td>
            <td className="p-4 py-5 text-sm text-slate-500">
                <input type="text" min={1}
                    name="weight"
                    value={rowData.weight}
                    className='editable'
                    onChange={(e) => handleChange(e)}
                />
            </td>
            <td className="p-4 py-5 text-sm text-slate-500">
                <input type="number" min={0}
                    name="subject"
                    className='editable'
                    value={rowData.subject}
                    onChange={(e) => handleChange(e)}
                />
            </td>
            <td className="p-4 py-5 text-sm text-slate-500">
                <input type="number" min={0}
                    name="teacher"
                    value={rowData.teacher}
                    className='editable'
                    onChange={(e) => handleChange(e)}
                />
            </td>
            <td className="p-4 py-5 text-sm text-slate-500">
                <p className="text-sm text-slate-500">{date}</p>
            </td>
            <td className="p-4 py-5">
                <div className="flex justify-around">
                    <FaCheck className="text-green-700 hover:cursor-pointer hover:scale-105 hover:text-green-900"
                        onClick={() => handleEditSubmit()}
                    />
                    <FaXmark
                        className="hover:scale-105 hover:cursor-pointer hover:text-black"
                        onClick={() => TriggerEdit()} />
                    <FaTrashCan className="hover: cursor-pointer hover:scale-105 text-red-800 hover:text-red-600"
                        onClick={() => handleDeleteSubmit()}
                    />
                </div>
            </td>
        </tr>
    )
}

export default EditableRow