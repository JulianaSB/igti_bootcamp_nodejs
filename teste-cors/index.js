import express from "express";

const app = express();

app.use(express.static("public"));

app.listen(8081,() => {
    console.log("api started 8081");
});