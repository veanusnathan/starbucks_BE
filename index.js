const cors = require("cors");
const express = require("express");
const { productRouter, userRouter } = require("./router");
const app = express();
const PORT = 5005;
// body parser
app.use(express.json());
// db permission
app.use(cors());

app.use("/productData", productRouter);
app.use("/user", userRouter);

app.listen(PORT, async () => {
	console.log(`Server on http://localhost:${PORT}`);
});
