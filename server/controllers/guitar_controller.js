//9 cut and copied from index js. 
let guitars = [
    {   brand: 'Gibson', 
        model: 'Les Paul', 
        year: 2012, 
        shredability: 10, 
        id: 1
    }, 
    {
        brand: 'Gibson', 
        model: 'RD Artist Series', 
        year: 1977, 
        shredability: 7, 
        id: 2
    },
    
    {   brand: 'Pure Salem', 
        model: 'Bruiser', 
        year: 2018, 
        shredability: 9.5, 
        id: 3
    },
]


//8
module.exports = {
    getAllGuitars: (req, res) => {
        res.status(200).send(guitars)
    },

    getGuitarById: (req, res) => {
        const guitar = guitars.filter((guitar) => {
            return guitar.id === +req.params.id
        })
        res.status(200).send(guitar[0])
    },

    addGuitar: (req, res) => {
        let id = guitars[guitars.length - 1].id + 1
        const newGuitar = {
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            shredability: req.body.shredability,
            id: id
        }
        guitars = [...guitars, newGuitar]
        res.status(200).send(guitars)
    },

    
    deleteGuitar: (req, res) => {
        const {id} = req.params;
        guitars = guitars.filter((guitars) => guitars.id !== +id)
        res.status(200).send(guitars)
    },
    

     updateGuitar: (req, res) => {
        const {id} = req.params;
        const updatedGuitar = {
            brand: req.body.brand,
            model: req.body.model,
            year: req.body.year,
            shredability: req.body.shredability,
            id: +id
        }

        for (let i = 0; i < guitars.length; i++){
            if(guitars[i].id === +id){
                guitars[i] = updatedGuitar 
            }

        }
        res.status(200).send(guitars)
    }
}