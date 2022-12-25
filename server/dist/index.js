require(`dotenv`).config();
const port = process.env.port;
const appListener = require("./src/app");

appListener.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
//# sourceMappingURL=index.js.map