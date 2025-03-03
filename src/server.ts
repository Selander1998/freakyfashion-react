import process from "node:process";
import express, { Request, Response } from "express";
import cors from "cors";
import { QueryTypes } from "sequelize";
import sequelize from "./sequalize";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

try {
	await sequelize.authenticate();
	await sequelize.sync();
	console.log("Sequelize database connection was established successfully.");
} catch (error) {
	console.error("Sequelize was unable to connect to the database:", error);
}

interface Item {
	id: number;
	name: string;
	price: number;
}

app.get("/data", async (_: Request, res: Response) => {
	try {
		const results = await sequelize.query<Item[]>("SELECT * FROM items", {
			type: QueryTypes.SELECT,
		});
		res.json(results);
	} catch (error) {
		res.status(500).json({ error: `Database query failed: ${error}` });
	}
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
