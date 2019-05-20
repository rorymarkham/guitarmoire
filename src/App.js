import React, {Component} from 'react'
import axios from 'axios'
import './App.css'
import Guitar from './components/Guitar'
import AddGuitar from './components/Add/AddGuitar'
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from 'react-toastify'

class App extends Component {
  constructor(){
      super()
      this.state = {
          guitars: [],
      }
  }

  componentDidMount(){
      axios
      .get('/api/guitars').then((res) => {
          this.setState({
              guitars: res.data
          })
      })
  }

 
  addGuitars = (brand, model, year, shredability) => {
    axios.post('/api/addGuitar', {
      brand: brand,
      model: model,
      year: year,
      shredability: shredability
  }).then((res) => { 
      toast('🎸 CONGRATS on the new Guitar! How pissed is your wife? 🎸')
      this.setState({
        guitars: res.data
      })
  })
  }

  handleUpdateInput = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  updateGuitar = (e, id, brand) => {
    e.preventDefault()
    console.log(e.target.model.value)
    axios
    .put(`/api/updateGuitar/${id}`, {
      brand: brand,
      model: e.target.model.value,
      year: e.target.year.value,
      shredability: e.target.shredability.value
  } ).then((res) => { 
    this.setState({
      guitars: res.data
    })
})
}

  removeGuitar(id){
    axios
    .delete(`/api/deleteGuitar/${id}`).then((res) => {
      this.setState({guitars: res.data})
      toast.error('☠️Scrap Wood☠️')
    })
    .catch(error => {toast.error ('You Suck')})
  }

  render(){
      const guitars = this.state.guitars.map((event) => {
          return (
            <div className='guitar_container' key={event.id}>
              <li>
                    <h2>{event.brand}</h2>
                    <form onSubmit={ e => this.updateGuitar(e, event.id, event.brand)}>
                      <p>Model: <input type='text' name='model' defaultValue={event.model} /></p>
                      <p>Year: <input type='text' name='year' defaultValue={event.year} /></p>
                      <p>ShredAbility: <input type='text' name='shredability' defaultValue={event.shredability} /></p>
                        <div className='btn_container'>
                        <button className='btn_update'
                        type='submit'>Update</button>
                          <button className='btn_remove' 
                          onClick={ () => this.removeGuitar(event.id)}>Remove</button>
                        </div>
                    </form>
                </li>
            </div>  
          )
      })
      return(
          <div>
            <div className='header'>
                <h1>Guitarmoire</h1>           
            </div> 
            <div className='navbar'>   
                 <AddGuitar 
                 addGuitars={this.addGuitars}/>
            </div>
                 <ul>{guitars}</ul>
                 <Guitar/>
                 <ToastContainer/>
          </div>
          
      )
  }
}
export default App