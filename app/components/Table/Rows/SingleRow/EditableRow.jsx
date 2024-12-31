'use client'
import { FaTrashCan, FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { editGrade } from "@/app/lib/fetchingSQL";
import { useRouter } from "next/navigation";

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
            TriggerEdit({ newData: rowData });
            notifySuccess();
            router.refresh();
        } catch (error) {
            notifyError();
        }
    }


    const notifySuccess = () => {
        toast.success('Pomyślnie wysłano!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
    }

    const notifyError = () => {
        toast.error('Błąd podczas przesyłania', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
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
                        onClick={() => {
                            handleEditSubmit();
                        }}
                    />
                    <FaXmark
                        className="hover:scale-105 hover:cursor-pointer hover:text-black"
                        onClick={() => TriggerEdit()} />
                    <FaTrashCan className="hover: cursor-pointer hover:scale-105 hover:text-black" />
                </div>
            </td>
        </tr>
    )
}

export default EditableRow