import React, {Component} from 'react';
import './TabelaIngredientes.css';
import PropTypes from 'prop-types';
import ingredienteService from '../../services/ingredienteService';

export default class TabelaIngredientes extends Component{  
  constructor(props){
    super(props);

    this.state = {
      ingredientes: [],
    };
  }

  static get propTypes() { 
    return { 
      ingredientes: PropTypes.array,
    }; 
  }

  componentDidMount(){
    ingredienteService().getAll().then((result) => {
      this.setState({
        ingredientes: result.data,
      });      
    }, (reason) => {
      console.log(reason);
    });
  }

  render(){
    return(
      <div className={this.props.className}>
        <table className='table'>
          <thead>
            <tr>
              <th className='id'>ID</th>
              <th className='nome'>Nome</th>
              <th className='preco'>Preço</th>
              <th className='data'>Data de Validade</th>
            </tr>
          </thead>
          <tbody>
            {this.state.ingredientes.map((item, index) => {
              return(                
                <tr key={index} onClick={this.props.onClick}>
                  <td className='id'>{item.codigo}</td>
                  <td className='nome'>{item.nome}</td>
                  <td className='preco'>{item.preco}</td>
                  <td className='data'>{item.dataDeValidade}</td>
                </tr>                
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}