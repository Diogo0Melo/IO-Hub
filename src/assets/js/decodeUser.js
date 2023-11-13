import { jwtDecode } from "jwt-decode";

function decodeUser() {
    const token = sessionStorage.getItem("_token");
    return jwtDecode(token);
}
export default decodeUser;
