const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { Home } from './js/pages/Home.jsx'
import {NoteApp } from './js/apps/keep/pages/NoteApp.jsx'
import { Mail } from './js/apps/mail/pages/Mail-Index.jsx'



export function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/keep" component={NoteApp} />
          <Route path="/mail" component={Mail} />
          {/* <Route path="/about" component={About} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  );
}
