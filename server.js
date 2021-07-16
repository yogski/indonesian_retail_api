const app = require('./app');
const label = require('./helpers/console');
const port = process.env.PORT;
const appName = process.env.APP_NAME;

app.listen(port, () => { label.labelConsole(`${appName} running on port ${port}`) });