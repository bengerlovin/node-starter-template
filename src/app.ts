/**
 * Entry point file for Node.js starter
 */

const express = require('express')
const app = express();


// Start server

app.listen(5000, () => {
    console.log("Server is listening on port 5000...")
})