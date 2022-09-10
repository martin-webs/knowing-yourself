const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-Layouts');
const birthdayRoutes = require('./routes/birthdayRoutes');
const path = require('path');
const PORT = process.env.PORT || 3000;

/* middleware */
app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

/* routes */
app.get('/', (req, res) => {
	res.render('index');
})
app.get('/yourname', (req, res) => {
	res.render('pages/yourname');
})
app.use('/birthday', birthdayRoutes);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));