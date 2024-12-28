export default function SingleColumn({name, id}) {
    return (
        <th key={id} className="p-4 border-b border-slate-200 bg-slate-50">
            <p className="text-sm font-normal leading-none text-slate-500">
                {name}
            </p>
        </th>
    )
}
