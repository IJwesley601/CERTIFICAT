const express = require('express');
const app = express();

app.get("/api/:date", (req, res) => {
    const dateString = req.params.date;
    const isUnix = /^\d+$/.test(dateString);
    const date = isUnix ? new Date(parseInt(dateString)) : new Date(dateString);
  
    if (date.toString() === "Invalid Date") {
      return res.json({ error: "Invalid Date" });
    }
  
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  });
  
  


module.exports = app;