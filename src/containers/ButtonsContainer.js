import { connect } from 'react-redux';
import ButtonsContainer from '../components/ButtonsContainer';
import { viewPokedex } from "../redux/pokedex"

const mapStateToProps = pokedex => ({
  ...pokedex
});

const mapDispatchToProps = dispatch => ({
  viewPokedex: () => dispatch(viewPokedex()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer);
