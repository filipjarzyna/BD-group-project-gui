'use client'
import { FaTrashCan, FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

function EditableRow({ id, mark, weight, subject, teacher, date, TriggerEdit }) {
    const [rowData, setRowData] = useState({
        id: id,
        mark: mark,
        weight: weight,
        subject: subject,
        teacher: teacher,
        date: date
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRowData((prev) => ({
            ...prev,
            [name]: value
        }))
    };


    return (
        <tr className="hover:bg-slate-50 border-b border-slate-200">
            <td className="p-4 py-5">
                <p className="block font-semibold text-sm text-slate-800">{id}</p>
            </td>
            <td className="p-4 py-5 text-sm text-slate-500">
                <input type="number"
                    name="mark"
                    max={6} min={1}
                    value={rowData.mark}
                    className='editable'
                    onChange={handleChange}

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
                <p className="text-sm text-slate-500">{date?.toString()}</p>
            </td>
            <td className="p-4 py-5">
                <div className="flex justify-around">
                    <FaCheck className="text-green-700 hover:cursor-pointer hover:scale-105 hover:text-green-900"
                        onClick={() => {
                            console.log(rowData);
                            TriggerEdit();
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