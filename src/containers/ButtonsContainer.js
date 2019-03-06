import { connect } from 'react-redux';
import ButtonsContainer from '../components/ButtonsContainer';
import { viewPokedex, viewExplore } from "../redux/pokedex"

const mapStateToProps = pokedex => ({
  ...pokedex
});

const mapDispatchToProps = dispatch => ({
  viewPokedex: () => dispatch(viewPokedex()),
  viewExplore: () => dispatch(viewExplore())
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer);
