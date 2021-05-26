import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import News from './News'
import Contact from './Contact'
import Main from './Main'
import NewsItem from './NewsItem'
import Pokemons from './Pokemons'

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to='/'>Portada</Link></li>
        <li><Link to='/noticias'>Noticias</Link></li>
        <li><Link to='/contacta'>Contacta</Link></li>
      </ul>
      <Switch>
        <Route path="/noticias/:id" component={NewsItem} />
        <Route path="/noticias">
          <News />
        </Route>
        <Route path="/pokemons">
          <Pokemons />
        </Route>
        <Route path="/contacta">
          <Contact />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
