'use client'
import { FaEdit } from "react-icons/fa";

function NormalRow({ id, mark, weight, subject, teacher, date, TriggerEdit }) {
    return (
        <tr className="hover:bg-slate-50 border-b border-slate-200">
            <td className="p-4 py-5 w-[100px]">
                <p className="block font-semibold text-sm text-slate-800">{id}</p>
            </td>
            <td className="p-4 py-5 w-[100px]">
                <p className="text-sm text-slate-500">{mark}</p>
            </td>
            <td className="p-4 py-5 w-[100px]">
                <p className="text-sm text-slate-500">{weight}</p>
            </td>
            <td className="p-4 py-5 w-[150px]">
                <p className="text-sm text-slate-500">{subject}</p>
            </td>
            <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{teacher}</p>
            </td>
            <td className="p-4 py-5">
                <p className="text-sm text-slate-500">{date?.toString()}</p>
            </td>
            <td className="p-4 py-5 w-[150px]">
                <div className="flex items-center">
                    <FaEdit className="text-slate-500 hover:text-black hover:cursor-pointer hover:scale-105"
                        onClick={() => TriggerEdit()}
                    />
                </div>
            </td>
        </tr>
    )
}

export default NormalRow