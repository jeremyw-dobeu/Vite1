const Database = require("@replit/database")

document.querySelector('#app').innerHTML = `
  <h1>Hello, world!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
const db = new Database()
db.set("empid", "3?????").then(() => {});
