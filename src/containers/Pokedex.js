import { connect } from 'react-redux';
import Pokedex from '../components/Pokedex';
import { removePokemon } from "../redux/pokedex"

const mapStateToProps = pokedex => ({
  ...pokedex
});

const mapDispatchToProps = dispatch => ({
  removePokemon: index => dispatch(removePokemon(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
