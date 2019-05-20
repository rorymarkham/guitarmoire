import React, {Component} from 'react'
import axios from 'axios'

class Guitar extends Component {
    constructor(){
        super()
        this.state = {
            selectedYear: null,
            selectedGuitar: null
        }
    }

    handleGetGuitarById = () => {
        axios.get(`/api/guitar/${this.state.selectedYear}`).then((res) => {
            this.setState({
                selectedGuitar: res.data
            })
        })
    }

    handleUpdateYear= (e) => {
        this.setState({
            selectedYear: e.target.value
        })
    }

    render(){
        return (
            <div>
                {/* <input onChange={this.handleUpdateYear}/>
                <button onClick={this.handleGetGuitarByYear}>Find Guitar</button>
                {this.state.selectedYear ? 
                <div>
                    <h3>{this.state.selectedYear.brand}</h3>
                    <p> {this.state.selectedYear.year}</p>
                </div>
                :
                <div>Please Select Guitar Year</div>
                } */}
            </div>
        )
    }
}
export default Guitar