import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = pokedex => ({
  ...pokedex
});

export default connect(mapStateToProps)(App);
