import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();
const port = 3400;

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

app.get("/status", (req, res) => {
	res.send({
		message: "Hello World"
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
