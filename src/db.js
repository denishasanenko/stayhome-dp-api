const mongoose = require('mongoose');
mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});

module.exports = mongoose;
