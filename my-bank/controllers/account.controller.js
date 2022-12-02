import AccountService from "../services/account.service.js"

async function createAccount(req,res, next) {
    try {
        let account = req.body;

        if(!account.name || account.balance == null) {
            throw new Error("Name and balance are required");
        }

        account = await AccountService.createAccount(account);

        res.send(account);
    } catch (error) {
        next(error);
    }
}

async function getAccounts(req,res, next) {
    try {
        const data = await AccountService.getAccounts();
        global.logger.info(`${req.method} ${req.baseUrl} - ${JSON.stringify(data)}`);
        res.send(data);
    } catch (error) {
        next(error);
    }
}

async function getAccount(req,res, next) {
    try {
        const account = await AccountService.getAccount(req.params.id);
        global.logger.info(`${req.method} ${req.baseUrl} - ${JSON.stringify(account)}`);
        res.send(account);
    } catch (error) {
        next(error);
    }
}

async function deleteAccount(req,res, next) {
    try {
        const data = await AccountService.deleteAccount(req.params.id);
        global.logger.info(`${req.method} ${req.baseUrl} - ${JSON.stringify(data)}`);
        res.end();
    } catch (error) {
        next(error);
    }
}

async function updateAccount(req,res, next) {
    try {
        let account = req.body;
        if(!account.id || !account.name || account.balance == null) {
            throw new Error("ID, Name and balance are required");
        }
        global.logger.info(`${req.method} ${req.baseUrl} - ${JSON.stringify(account)}`);
        res.send(await AccountService.updateAccount(account));
    } catch (error) {
        next(error);
    }
}

async function updateBalance(req,res, next) {
    try {
        let account = req.body;

        if(!account.id || account.balance == null) {
            throw new Error("ID and balance are required");
        }

        res.send(await AccountService.updateBalance(account));
    } catch (err) {
       next(err);
    }
}

export default {
    createAccount,
    getAccounts,
    getAccount,
    deleteAccount,
    updateAccount,
    updateBalance
}