import express from "express";
import jwt from "jsonwebtoken";
import { User } from "./models/db.mjs";

const app = express();
app.use(express.json());

const port = 3001;

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll(); // Retrieve all users from the database
    res.json(users); // Respond with the array of users
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const createToken = (email) => {
  return jwt.sign({ email }, "secretToken", { expiresIn: "1h" });
};

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json("Invalid request 1");
  }
  if (!password) {
    return res.status(400).json("Invalid request 2");
  }
  // check if email exists
  const checkEmail = await User.findOne({ where: { email } });

  if (checkEmail) {
    return res.status(400).json("Email exists");
  }

  const user = await User.create({ email, password });
  res.cookie("auth", createToken(email), {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
  });
  return res.json(user);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("Invalid request");
  }

  const user = await User.findOne({ where: { email } });
  /* this  =>{
			email
			password
		}
	
		 */
  if (!user) {
    return res.status(400).json("Email not found");
  }
  const valid = await user.validPassword(password);

  if (!valid) {
    return res.status(400).json("Invalid password");
  }
  res.cookie("auth", createToken(email), {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
  });

  return res.json("Login successful");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
