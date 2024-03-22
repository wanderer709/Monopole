import axios from "axios";
import AuthenticationService from "./AuthenticationService";

export default () => {
	return axios.create({
		baseURL: "http://localhost:3400"
	});
}
