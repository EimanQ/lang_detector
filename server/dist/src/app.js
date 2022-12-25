const appExpress = require("express");
const detector = require(`./langDetector`);
const app = appExpress();
app.use(`/detector`, detector);
appExpress.use((error, request, response, next) => {
    response.status(500).send(error.message);
});
module.exports = app;
//# sourceMappingURL=app.js.map