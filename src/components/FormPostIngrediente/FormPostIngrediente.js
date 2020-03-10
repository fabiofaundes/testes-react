import React, {Component} from 'react';
import './FormPostIngrediente.css';
import ingredienteService from '../../services/ingredienteService';

export default class FormPostIngrediente extends Component {
  constructor(){
    super();

    this.state = {
      nome: '',
      preco: '',
      data: {},
    };        
  }

  handleSubmit(e) {    
    e.preventDefault();
    console.log('submitted');
        
    const nome = this.state.nome;
    const preco = this.state.preco;
    const data = this.state.data;
    
    const ingrediente = {
      nome: nome,
      preco: preco,
      dataValidade: data,
    };
    
    ingredienteService().insert(ingrediente).then((response) => {
      console.log(response);
    });    
            
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({ 
      [name]: value,
    });        
  }

  render(){
    return(
      <form className='postForm'
        onSubmit={this.handleSubmit.bind(this)}>
        <h2 className='form-title'>Adição de Ingredientes</h2>      
        <div className='campo'>
          <label>Nome: </label>
          <input
            type='text'
            placeholder="nome..."
            value={this.state.nome}
            onChange={this.handleChange.bind(this)}
            name='nome'/>
        </div>
        <div className='campo'>
          <label>Preço: </label>
          <input
            type='text'
            placeholder='preço...'
            value={this.state.preco}
            onChange={this.handleChange.bind(this)}
            name='preco'/>
        </div>
        <div className='campo'>
          <label>Validade: </label>
          <input
            type='date'
            value={this.state.data}
            onChange={this.handleChange.bind(this)}
            name='data'/>
        </div>
        <div className='campo-submit'>
          <input type='submit' value='Adicionar'/>
        </div>        
      </form>
    );
  }
}