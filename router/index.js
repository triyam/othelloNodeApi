const auth = require("./auth")
const gameInfo = require('./gameInfo')

module.exports = (app) => {
    app.use("/auth", auth);
    app.use("/gameInfo", gameInfo);
}