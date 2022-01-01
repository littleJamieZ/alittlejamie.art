import './App.css';
import picture from './assets/mainpicture.png';
import {ReactComponent as BehanceLogo} from './assets/behance.svg';
import {ReactComponent as TwitterLogo} from './assets/twitter.svg';
function App() {
  return (
    <div className="App">
      <div className="text-wrapper">
        <h1>Jamie Z</h1>
        <p>I think technology should not be created because of demand, as it’s my belief that it will greatly limit the possibility of a technology explosion. I strongly believe that technology precedes application scenarios. So, it is my hope that my participation in relevant research projects will contribute to creating a set of rational interaction logic through design to create application scenarios for technology that people really need.</p>
      </div>
      <div className="text-wrapper-bot">
        <a href="https://jamiezhao.site/" >
          <img src={picture} alt="3 women looking through a window and a red staircase" />
        </a>
        <a href="https://jamiezhao.site/" >
          <button className="portfolio-button">Check Portfolio</button>
        </a>

        <div className="icon-wrapper">
        <a href="https://www.behance.net/msjamie/moodboards" >
          <BehanceLogo className="behance-logo"/>
        </a>
        <a href="https://twitter.com/amyzxq1997120" >
          <TwitterLogo className="twitter-logo"/>
        </a>
      </div>
      </div>
      
    </div>
  );
}

export default App;