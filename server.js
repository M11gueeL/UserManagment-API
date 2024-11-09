const app = require('./src/app');
require('dotenv').config();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});