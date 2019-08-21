import { h, Component } from 'preact';

import Header from './Header';

import Routes from './Routes';
import {StyledBody, StyledContainer} from "./styles"

class App extends Component {

	render() {
		return (
			<StyledBody id="app">
				<StyledContainer>
					<Header />
					<Routes />
				</StyledContainer>
			</StyledBody>
		);
	}
}
export default App
