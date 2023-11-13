const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/pato', {
        useNewUrlParser: true,
        useUnifiedTopology: true
})

        .then(db => console.log('DB is connected'))
        .catch(err => console.error(err));