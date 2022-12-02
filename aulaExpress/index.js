import express from "express";
import carrosRouter from "./carrosRouter.js";
import winston from "winston";

const app = express();

//app.use significa q toda requisição que chegar vai usar oq tiver dentro do app.use
app.use(express.json());


// faz com libere o acesso ao q está na pasta public
app.use("/images", express.static("public"));

const {combine, printf, label, timestamp } = winston.format;

const myFormat = printf(({ level, message,label, timestamp }) => {
    return `${timestamp} [${label}] ${level}:${message}`;
});

const logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: "my-log.log"})
    ],
    format: combine(
        label({label: "my-app"}),
        timestamp(),
        myFormat
    )
});

//ja na ordem dos niveis de log do winston
//ou seja,se onde eu to passando level: "silly", eu mudar pra info,só vai registrar
// loggersdo tipo info, warn e error
logger.error("log erro");
logger.warn("log warn");
logger.info("log info");
logger.verbose("log verbose");
logger.debug("log debug");
logger.silly("log silly");
logger.log("info", "log generico");

app.listen(8080, () => {
    console.log("api started");
})

app.use("/carros", carrosRouter);

app.use((req, res, next) => {
    console.log(new Date());
    next();
})

app.all("/testeAll", (req, res) => {
    res.send(req.method);
});

app.get("/testError", (req, res) => {
    throw new Error("error teste");
});

app.post("/testError", async (req, res, next) => {
    try {
        throw new Error("error teste");
    } catch (err) {
        next(err)
    }
});

app.use((err, req, res,next) => {
    next(err);
});

app.use((err, req, res,next) => {
    res.status(500).send("Ocorre erro")
});


//o ? entende que se passar a rota /teste e /test cai nesse get
app.get("/teste?", (req, res) => {
    res.send("/teste?");
});

//o + entende que se passar a rota /buzz ou buzz e mais da letra Z cai nesse get
app.get("/buzz+", (req, res) => {
    res.send("/buzz+");
});

//o * entende que oq passar na rota /one*blue no lugar no * dá pra passar qualquer coisa q aceita
app.get("/one*blue", (req, res) => {
    res.send(req.path);
});

//os () entende que oq tiver dentro é opcional
app.post("/test(ing)?", (req, res) => {
    console.log(req.body);
    res.send(req.path);
});

//parametros na rota
//o parametro 'ab' é opcional por ter o ? depois
app.get("/testParam/:id/:ab?", (req, res) => {
    res.send(req.params);
});

//parametros via query
app.get("/testQuery", (req, res) => {
    res.send(req.query);
}); 

//usando next
app.get("/testMultipleHandlers", (req, res, next) => {
    console.log("callback 1");
    next();
}, (req, res) => {
    console.log("callback 2");
    res.send("rolou");
});

const callback1 = (req, res, next) => {
    console.log("callback 1");
    next();
};

function callback2 (req, res, next) {
    console.log("callback 2");
    next();
};

const callback3 = (req, res, next) => {
    console.log("callback 3");
    res.end()
};

app.get("/testMultipleHandlersArray", [callback1, callback2, callback3]);


//usando route
app.route("/testRoute")
    .get((req, res) => {
        res.send("metodo GET");
    })
    .post((req, res) => {
        res.send("metodo POST");
    })
    .delete((req, res) => {
        res.send("metodo DELETE");
    })