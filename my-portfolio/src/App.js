// import logo from './logo.svg';
import redPicture from './assets/red-picture.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Jamie Z</h1>
      <div>
      <p>I think technology should not be created because of demand, as it’s my belief that it will greatly limit the possibility of a technology explosion. I strongly believe that technology precedes application scenarios. So, it is my hope that my participation in relevant research projects will contribute to creating a set of rational interaction logic through design to create application scenarios for technology that people really need.</p>
      </div>
<div className='imgWrap'>
<a href="https://jamiezhao.site/">
  <img className='img' src={redPicture} alt="red" />
</a>
</div>
<a href="https://jamiezhao.site/">
  <button className="button">click portfolio</button>
  </a>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
