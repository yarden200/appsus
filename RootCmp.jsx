const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

// import {} from './js/apps/keep/pages/note-index'
import { Home } from './js/pages/Home.jsx'
import { Keep } from './js/apps/keep/pages/Note-Index'
import { Mail } from './js/apps/mail/pages/Mail-Index'



export function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/keep" component={Keep} />
          {/* <Route path="/mail" component={Mail} /> */}
          {/* <Route path="/about" component={About} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  );
}