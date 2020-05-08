const express = require('express');
const bp      = require('body-parser');

const app     = express();





const port = process.env.PORT || 6000;
app.listen(port,()=>{
    console.log(`application listening on porst: ${port}`)
});