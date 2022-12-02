import express from "express";
import AccountController from "../controllers/account.controller.js";

const router = express.Router();

router.post("/", AccountController.createAccount);
router.get("/", AccountController.getAccounts);
router.get("/:id", AccountController.getAccount);
router.delete("/:id", AccountController.deleteAccount);
//metodo put normalmente é usado pra atualzação inteira da informação
router.put("/", AccountController.updateAccount);
//metodo patch normalmente é usado pra atualização uma parte da informação
router.patch("/updateBalance", AccountController.updateBalance);

router.use((err, req, res, next) => {
    global.logger.error(`${req.method} ${req.baseUrl} - ${err}`);
    console.log(err);
    res.status(400).send({error: err.message});
})

export default router;