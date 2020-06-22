const customExpress = require('./config/custom-express')

const app = customExpress()
var porta = process.env.PORT || 3003;

app.listen(porta, function(){
    console.log('Server turned ON..');
});