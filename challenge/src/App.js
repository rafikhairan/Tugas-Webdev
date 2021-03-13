import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/Main'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;