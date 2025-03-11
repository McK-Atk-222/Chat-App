const GenderCheckbox = ( {

    selectedGender,
    onCheckboxChange,

}: {
    selectedGender: string;
    onCheckboxChange: (gender: "male" | "female") => void;
}) => {
    return (
        <>
        <div>
            <div>
                <label>
                    <span>Male</span>
                    <input
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Female</span>
                    <input
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
        </>
    ) 
}

export default GenderCheckbox;