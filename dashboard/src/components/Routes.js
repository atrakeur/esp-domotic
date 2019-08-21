import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Home from "../routes/Home/index";

class Routes extends Component {
  render() {
    return (<Router onChange={this.handleRoute}>
      <Home path="/" />
    </Router>)
  }
}
export default Routes