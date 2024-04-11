const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: true
}));

mongoose.connect('mongodb+srv://alejandrofigueroa07:Agosto07081996@cluster0.pawgw5l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    dbName: 'Notasdb',
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a Mongo Atlas');
}).catch((error) => {
    console.error('Error al conectar a MongoDB Atlas:', error);
});

const userSchema = new mongoose.Schema({
    name: String,
    pass: String,
    email: String
});


const User = mongoose.model('User', userSchema);
module.exports = User;
console.log('VAMO A BUSCAR');



// Ruta para manejar el inicio de sesión
app.post('/api/login', async (req, res) => {
    const { name, pass } = req.body;

    try {

        const user = await User.findOne({ name });


        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }


        const validPassword = bcrypt.compare(pass, user.pass);
        if (!validPassword) {
            console.log(name)
            console.log(pass)

            return res.status(401).json({ error: 'Credenciales inválidas' });

        }

        //  PARTE IMPORTANTEEEE Almacenar el usuario en la sesión
        req.session.user = user;

        // OTRA PARTE Devolver el usuario como respuesta
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error del servidor' });
    }
});

// Ruta para obtener el usuario QUE inicio sesion
app.get('/api/currentUser', (req, res) => {
    // Comprobar si hay un usuario en la sesión
    const currentUser = req.session.user;
    if (currentUser) {
        res.json(currentUser);
    } else {
        res.status(401).json({ error: 'No hay sesión de usuario' });
    }
});



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
