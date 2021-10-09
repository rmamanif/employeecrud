const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rmamani:IEXVYeNFcEUm5bnb@cluster0.npyot.mongodb.net/Employee?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');