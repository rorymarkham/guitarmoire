import React, {Component} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

import './AddGuitar.css'

class AddGuitar extends Component {
    constructor(){
        super()
        this.state = {
            guitarBrand: '',
            guitarModel: '',
            guitarYear: null,
            shredability: null
        }
    }

    handleUpdateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddGuitar = (e) => {
        e.preventDefault()
        const {guitarBrand, guitarModel, guitarYear, shredability} = this.state
        this.props.addGuitars(guitarBrand, guitarModel, guitarYear, shredability)
    }

    render(){
        return (
            <div>
                <form className='guitar_form' onSubmit={this.handleAddGuitar}>
                    <input 
                    placeholder='Guitar Brand' 
                    name='guitarBrand' 
                    onChange={this.handleUpdateInput}
                    />

                    <input 
                    placeholder='Guitar Model' 
                    name='guitarModel' 
                    onChange={this.handleUpdateInput}
                    />

                    <input 
                    placeholder='Year' 
                    name='guitarYear'
                    onChange={this.handleUpdateInput}
                    />

                    <input 
                    placeholder='ShredAbility' 
                    name='shredability'
                    onChange={this.handleUpdateInput}
                    />

                    <button className='btn_add' onClick={this.handleAddGuitar}>Add Guitar</button>
                </form>
            </div>
        )
    }
}

export default AddGuitar