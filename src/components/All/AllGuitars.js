import React, {Component} from 'react'
import axios from 'axios'

class AllGuitars extends Component {
    constructor(){
        super()
        this.state = {
            guitars: [],
        }
    }

    componentDidMount(){
        axios.get('/api/guitars').then((res) => {
            this.setState({
                guitars: res.data
            })
        })
    }


    render(){
        const guitars = this.state.guitars.map((event) => {
            return (
                

                <li key={event.id}>
                    <h4>{event.brand}</h4>
                    <p>Model: {event.model}</p>
                    <p>Year: {event.year}</p>
                    <p>ShredAbility: {event.shredability}</p>
                </li>
               
            )
        })
        return(
            <div>
                <h3>All Guitars</h3>
                <ul>{guitars}</ul>
            </div>
        )
    }
}
export default AllGuitars