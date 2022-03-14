const express = require("express")

const usersController = require("./modelControllers/modelController")

const connect = require("./database/database")
const app = express(express.json());

app.use("", usersController)
app.listen(5000, async function(req, res)
{
    try{
        await connect();
        console.log("Listening on port 5000")
    }
    catch(err)
    {
        console.log(err)
    }
})