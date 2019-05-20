//1
const express = require('express') 
const app = express()

//10 importing from the cotrollers
const guitar_ctrl = require('./controllers/guitar_controller')

//2
app.use(express.json())
//4
// const events = [
//     {name: 'ice skating', funLevel: 10}, 
//     {name: 'guitar', funLevel: 10}]

//5
app.get('/api/guitars', guitar_ctrl.getAllGuitars) // <added fun_ctrl code was this at step 5
app.get('/api/guitar/:id', guitar_ctrl.getGuitarById)
app.post('/api/addGuitar', guitar_ctrl.addGuitar)
app.put('/api/updateGuitar/:id', guitar_ctrl.updateGuitar)
app.delete('/api/deleteGuitar/:id', guitar_ctrl.deleteGuitar)

//3
const PORT = 3058
app.listen(PORT, () => console.log(`Theres a snake in my boot ${PORT}`))
//6 run the url in postman to see if your 'events' are showing up
//7 start making controllers