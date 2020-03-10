import React, {Component} from 'react';
import './FormDeleteIngrediente.css';
import ingredienteService from '../../services/ingredienteService';
import PropTypes from 'prop-types';

export default class FormDeleteIngrediente extends Component{
  constructor(){
    super();

    this.state = {
      ingredientes: [],
      idSelecionado: undefined,
    };
  }

  static get propTypes() { 
    return { 
      idSelecionado: PropTypes.number,
    }; 
  }

  componentDidMount(){
    ingredienteService().getAll().then((result) => {
      this.setState({
        ingredientes: result.data,
      });
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    this.setState({
      idSelecionado: nextProps.idSelecionado,
    });
  }

  handleOnChange(e){
    const value = e.target.value;
    this.setState({
      idSelecionado: value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('submitted');
    ingredienteService().deleteById(this.state.idSelecionado);
  }


  render(){
    return(
      <>
        <form
          className='deleteForm'
          onSubmit={this.handleSubmit.bind(this)}
          method='delete'>
          <h2 className='form-title'>Exclusão de Ingredientes</h2>
          <div className='corpo'>
            <div className='campo'>
              <label>ID:</label>
              <input
                type='number'
                placeholder='id...'
                value={this.state.idSelecionado}
                onChange={this.handleOnChange.bind(this)}/>
            </div>
            <div className='campo'>
              <label>Nome:</label>
              <select>
                {this.state.ingredientes.map((item, index) => {
                  return(
                    <option key={index}>{item.codigo}: {item.nome}</option>
                  );
                })}
              </select>
            </div>
            <input type='submit' value='Deletar'/>
          </div>       
        </form>
      </>
    );
  }
}