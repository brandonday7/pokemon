import { connect } from 'react-redux';
import Capture from '../components/Pokemon/Capture';
import { addPokemon } from '../redux/pokedex';

const mapStateToProps = ({ pokedex }) => ({
  ...pokedex
});

const mapDispatchToProps = dispatch => ({
  addPokemon: newPokemon => dispatch(addPokemon(newPokemon)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Capture);
