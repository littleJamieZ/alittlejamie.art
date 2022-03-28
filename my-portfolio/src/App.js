import './App.scss';
import { ReactComponent as BehanceLogo } from './assets/behance.svg';
import { ReactComponent as TwitterLogo } from './assets/twitter.svg';
function App() {
	return (
		<div className="App">
			<header className="App_header">
				<h1 className="App_header_title">Jamie</h1>
			</header>
			<div className="App_CTA">
				<div className="App_CTA_top-wrapper">
					<span className="App_CTA_top-wrapper_text">Hi</span>
					<span className="App_CTA_top-wrapper_text">I'm am UIUX</span>
					<span className="App_CTA_top-wrapper_text">designer.</span>
				</div>
				<div className="App_CTA_center-wrapper">
					<button className="App_CTA_center-wrapper_button">
						View Projects
					</button>
					<button className="App_CTA_center-wrapper_button">View Resume</button>
				</div>
				<div className="App_CTA_bottom-wrapper">image</div>
			</div>
			<footer className="App_footer"></footer>
		</div>
	);
}

export default App;
