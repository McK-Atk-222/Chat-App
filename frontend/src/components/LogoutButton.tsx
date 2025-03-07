import useLogout from "../../hooks/useLogout"

const LogoutButton = () => {
    const logout = () => {
        useLogout();
    };

    return(
        <div>
            <LogOut onClick={logout}/>
        </div>
    )
};
export default LogoutButton;