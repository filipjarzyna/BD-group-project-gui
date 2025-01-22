
function AddMarkInput({ name, listName, handleChange, customCSS = '', inputType = 'text', value}) {
    return (
        <div>
            <label htmlFor={name} className={`flex flex-col mb-2 ${customCSS}`}>
                <p className="capitalize mb-2 text-xl">
                    {name}
                </p>
                <input
                    id={name}
                    type={inputType}
                    name={name}
                    list={listName}
                    onChange={(e) => handleChange(e)}
                    className="text-black px-2 py-1 rounded"
                    value={value}
                />
            </label>

        </div>
    )
}

export default AddMarkInput