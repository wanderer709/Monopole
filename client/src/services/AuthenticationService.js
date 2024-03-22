import api from "@/services/Api";

export default {
	register(credentials) {
		return Api.post("register", credentials);
	}
}

AuthenticationService.register({
	email: "testing@testing.com",
	password: "123456"
});