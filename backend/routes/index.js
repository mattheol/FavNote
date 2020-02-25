const express = require("express");
const user = require("../controllers/UserController");
const note = require("../controllers/NoteController");

const router = express.Router();

router.post("/user/login", user.userLogin);
router.post("/user/logout", user.userLogout);
router.post("/user/register", user.userRegister);

router.get("/notes", note.getAllNotes);
router.get("/notes/type", note.getAllNotesOfOneType);

router.post("/note", note.addNote);
router.get("/note/:id", note.getSingleNote);
router.put("/note/:id", note.updateNote);
router.delete("/note/:id", note.deleteNote);

module.exports = router;
