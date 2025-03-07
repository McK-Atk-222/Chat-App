import GenderCheckbox from "../../../components/GenderCheckbox";
import useSignup from "../../../hooks/useSignup"

const SignUp = () => {

  const [inputs, setInputs] = useState ({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {loading,signup} = useSignup()

  const handleCheckboxChange = (gender: "male" | "female") => {
    setInputs({...inputs,gender });
  }

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    signup(inputs)
  }

  return (
    <>
    <div>SignUp</div>
    
    <form onSubmit={handleSubmitForm}>
      <input 
        value={inputs.fullName}
        onChange={(e) => setInputs({...inputs, fullName: e.target.value })}
      />
      <input 
        value={inputs.username}
        onChange={(e) => setInputs({...inputs, username: e.target.value })}
      />
      <input 
        value={inputs.password}
        onChange={(e) => setInputs({...inputs, password: e.target.value })}
      />
      <input 
        value={inputs.confirmPassword}
        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value })}
      />
      
    <GenderCheckbox 
      selectedGender={inputs.gender}
      onCheckboxChange={handleCheckboxChange}
    />

    <button disabled={loading}>
      {loading ? "Loading..." : "Sign Up"}
    </button>

    </form>
    </>
}

export default SignUp