const GenderCheckbox = ( {

    selectedGender,
    onCheckboxChange,

}: {
    selectedGender: string;
    onCheckboxChange: (gender: "male" | "female") => void;
}) => {
    return (
        <div className='flex'>
            <div className='form-control p-2'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text p-2'>Male</span>
                    <input
                        type='checkbox'
						className='checkbox border-slate-900'
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className="form-control p-2">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text p-2'>Female</span>
                    <input
                        type='checkbox'
						className='checkbox border-slate-900'
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    ) 
}

export default GenderCheckbox;