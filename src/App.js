import './App.css';
import Header from './Components/Header';
import Movies from './Components/Movies';
import movie from './movies.json'

function App() {
  
  return (
    <div className="App">
     <Header/>
     <div className='main'>
      
    {
      movie.map((element, index) => {
return(
  <Movies 
   
  keys = {index}
  img = {element.Poster}
  name = {element.Title}
  year = {element.Year}

  />
)
      })
    }
      
      
     </div>
    </div>
  );
}   

export default App;
