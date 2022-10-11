import { pool } from "../bbdd/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/* The above code is a controller for a sign in page. */

const signInCtrl = {};

signInCtrl.loginUser = async (req, res) => {
  
  try {
    /* Destructuring the user and password from the request body. */
    const {email, password} = req.body;

    const foundUser = await pool.query("SELECT * FROM users WHERE email=?", [
      email
    ]);

    /* Checking if the user and password exists in the database. */
    if (foundUser[0].length == 0)
      return res
        .status(200)
        .json({ message: "El usuario o contraseña no existe" });

    const passwordEncrypted = foundUser[0][0].password;
    const idUser = foundUser[0][0].id;

    const passwordCompared = await bcrypt.compare(password, passwordEncrypted);

    if (!passwordCompared)
      return res
        .status(200)
        .json({ message: "El usuario o contraseña no existe" });

    const token = await jwt.sign({ id: idUser }, process.env.KEY, {
      expiresIn: 86400,
    });

    res.json({ token: token, id:idUser});

  } 
  
  catch (error) {
    res.status(200).json(error);
  }
};

export default signInCtrl;
