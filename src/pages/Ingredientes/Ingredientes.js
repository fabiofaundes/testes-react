import React, {Component} from 'react';
import './Ingredientes.css';
import FormPostIngrediente from '../../components/FormPostIngrediente/FormPostIngrediente';
import TabelaIngredientes from '../../components/TabelaIngredientes/TabelaIngredientes';
import FormDeleteIngrediente from '../../components/FormDeleteIngrediente/FormDeleteIngrediente';
import FormEditIngrediente from '../../components/FormEditIngrediente/FormEditIgrediente';
import ingredienteService from '../../services/ingredienteService';
import Alert from '../../components/Alert/Alert';

export default class Ingredientes extends Component {
  constructor(props){
    super(props);

    this.state = {
      ingrediente: undefined,
      codigo: undefined,
    };
  }

  tabelaOnClick(e){
    const tr = e.target.closest('tr');
    const codigo = tr.firstChild.innerHTML;    
     
    ingredienteService().getById(codigo).then((result) => {      
      this.setState({
        ingrediente: result.data,
        codigo: result.data.codigo,
      });    
    });
   
  }

  setAlert(msg, type) {
    const alert = <Alert msg={msg} type={type}/>;
    this.setState({
      alert: alert,
    });
  }

  renderAlert(){
    if(this.state.alert)
      return this.state.alert;
  }

  render() {    
    return (
      <>
        <h1 className='ingredientes-title'>Ingredientes</h1>
        <h2 className='ingredientes-subtitle'>Aqui você pode gerenciar todos os ingredientes disponíveis. Visualize, edite, exclua ou adicione</h2>
        <hr className='hr'></hr>                
        <div className='crud-container'>
          {this.renderAlert()}
          <FormPostIngrediente setAlert={() => this.setAlert()}/>
          <div className='delete-edit'>
            <FormDeleteIngrediente idSelecionado={this.state.codigo} setAlert={() => this.setAlert()}/>
            <FormEditIngrediente ingrediente={this.state.ingrediente} setAlert={() => this.setAlert()}/>
          </div>
        </div>
        <TabelaIngredientes className='tabela-ingredientes' onClick={this.tabelaOnClick.bind(this)}/>
      </>
    );
  }
}