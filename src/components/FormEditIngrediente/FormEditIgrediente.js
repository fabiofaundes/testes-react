import React, {Component} from 'react';
import './FormEditIngrediente.css';
import ingredienteService from '../../services/ingredienteService';
import PropTypes from 'prop-types';

export default class FormEditIngrediente extends Component {
  constructor(){
    super();

    this.state={
      ingrediente: undefined,
      id: undefined,
      nome: undefined,
      preco: undefined,
      data: undefined,
    };
  }

  static get propTypes() { 
    return { 
      ingrediente: PropTypes.object,
    }; 
  }

  UNSAFE_componentWillReceiveProps(nextProps) {             
    this.setState({
      ingrediente: nextProps.ingrediente,
      id: nextProps.ingrediente.codigo,
      nome: nextProps.ingrediente.nome,
      preco: nextProps.ingrediente.preco,
      data: nextProps.ingrediente.dataDeValidade,
    });        
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('submitted');
    
    const ingrediente = {
      codigo: this.state.id,
      nome: this.state.nome,
      preco: this.state.preco,
      dataDeValidade: this.state.data,
    };

    ingredienteService().put(ingrediente);
  }

  handleOnChange(e){
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  }

  render(){        
    return(
      <>
        <form
          className='editForm'
          onSubmit={this.handleSubmit.bind(this)}
          method='patch'>
          <h2 className='form-title'>Edição de Ingredientes</h2>
          <div className='corpo'>
            <div className='campo campo-id'>
              <label>ID: </label>
              <input
                name='id'
                required
                disabled             
                value={this.state.id}/>
            </div>
            <div className='campo campo-nome'>
              <label>Nome: </label>
              <input
                name='nome'
                type='text'
                onChange={this.handleOnChange.bind(this)}
                placeholder='nome...'
                value={this.state.nome}/>
            </div>
            <div className='campo campo-preco'>
              <label>Preço: </label>
              <input
                name='preco'
                type='number'
                onChange={this.handleOnChange.bind(this)}
                placeholder='preco...'
                value={this.state.preco}/>
            </div>
            <div className='campo campo-data'>
              <label>Data de Validade: </label>
              <input
                name='data'
                type='date'
                onChange={this.handleOnChange.bind(this)}
                value={this.data}/>                
            </div>
            <input type='submit' value='Editar'/>
          </div>
        </form>
      </>
    );
  }
}