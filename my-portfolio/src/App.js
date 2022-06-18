import './App.scss';
import { ReactComponent as BehanceLogo } from './assets/behance-icon.svg';
import { ReactComponent as TwitterLogo } from './assets/twitter-icon.svg';
import { ReactComponent as GithubLogo } from './assets/github-icon.svg';
import { ReactComponent as LinkdinLogo } from './assets/linkdin-icon.svg';
function App() {
	return (
		<div className="App">
			<header className="App_header">
				<h1 className="App_header_title">Jamie</h1>
			</header>
			<div className="App_CTA">
				<div className="App_CTA_top-wrapper">
					<div className="App_CTA_top-wrapper_text-wrapper">
						<span className="App_CTA_top-wrapper_text-wrapper_text">Hi</span>
						<span className="App_CTA_top-wrapper_text-wrapper_text">
							I'm a UIUX
						</span>
						<span className="App_CTA_top-wrapper_text-wrapper_text">
							designer.
						</span>
					</div>
				</div>
				<div className="App_CTA_center-wrapper">
					<a href="https://jamiezhao.site/">
						<button className="App_CTA_center-wrapper_button">
							View Projects
						</button>
					</a>
					<a href="https://drive.google.com/file/d/12ZdvEhFtMU0cWMxHlM01SGXozGuP2VJO/view?usp=sharing">
						<button className="App_CTA_center-wrapper_button">
							View Resume
						</button>
					</a>
				</div>
				<div className="App_CTA_bottom-wrapper"></div>
			</div>
			<footer className="App_footer">
				<a href="https://www.linkedin.com/in/jamie-zhao-b49a161a6/">
					<LinkdinLogo className="App_footer_logo" />
				</a>
				<a href="https://twitter.com/LittlejamieZ">
					<TwitterLogo className="App_footer_logo" />
				</a>
				<a href="https://www.behance.net/msjamie">
					<BehanceLogo className="App_footer_logo" />
				</a>
				<a href="https://github.com/littleJamieZ">
					<GithubLogo className="App_footer_logo" />
				</a>
			</footer>
		</div>
	);
}

export default App;
