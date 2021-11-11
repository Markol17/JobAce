const functions = require("firebase-functions");
const express = require("express");
import cors = require("cors");
import { Request, Response } from "express";

const admin = require("firebase-admin");
admin.initializeApp();

const app = express();
const { body, validationResult } = require("express-validator");

app.use(cors({ origin: true }));

const jobSeekerBasicValidation = [
	body("email").notEmpty().withMessage("Email is required!").isEmail().withMessage("Email is invalid!"),
	body("firstName").notEmpty(),
	body("lastName").notEmpty(),
	body("password").notEmpty().isLength({ min: 6 }),
	body("userType").notEmpty().isIn([0, 1]),
];

app.get("/", async (req: Request, res: Response) => {
	const snapshot = await admin.firestore().collection("users").get();

	let users: any = [];
	snapshot.forEach((doc: any) => {
		let id = doc.id;
		let data = doc.data();

		users.push({ id, ...data });
	});

	res.status(200).send(JSON.stringify(users));
});

app.get("/:id", async (req: Request, res: Response) => {
	const snapshot = await admin.firestore().collection("users").doc(req.params.id).get();

	const userId = snapshot.id;
	const userData = snapshot.data();

	res.status(200).send(JSON.stringify({ id: userId, ...userData }));
});

app.post("/", jobSeekerBasicValidation, async (req: Request, res: Response): Promise<any> => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const user = req.body;

	await admin.firestore().collection("users").add(user);

	res.status(201).send();
});

app.put("/:id", async (req: Request, res: Response) => {
	const body = req.body;

	await admin.firestore().collection("users").doc(req.params.id).update(body);

	res.status(200).send();
});

app.delete("/:id", async (req: Request, res: Response) => {
	await admin.firestore().collection("users").doc(req.params.id).delete();

	res.status(200).send();
});

exports.user = functions.https.onRequest(app);
