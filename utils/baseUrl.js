const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://dec4.herokuapp.com"
		: "http://localhost:3000";

export default baseUrl;