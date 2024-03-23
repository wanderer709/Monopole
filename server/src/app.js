import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();
const port = 3400;

app.use(morgan("combined"));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

app.post("/register", (req, res) => {
	console.log(req.body);

	res.send({
		message: `Hello ${req.body.email}, your user was registered. Play well, stupid.`
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
