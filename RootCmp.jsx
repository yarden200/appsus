const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { Home } from './js/pages/Home.jsx'
import { Keep, NoteApp } from './js/apps/keep/pages/NoteApp.jsx'
import { Mail } from './js/apps/mail/pages/Email-Index.jsx'
import { EmailDetails } from './js/apps/mail/pages/EmailDetails.jsx'
import { AppHeader } from './js/cmps/app-header.jsx'
import { AppFooter } from './js/cmps/app-footer.jsx'




export function App() {
  return (
    <Router>
     <AppHeader />
      <main>
        <Switch>
          <Route path="/mail/:mailId" component={EmailDetails} />
          <Route path="/keep" component={NoteApp} />
          <Route path="/mail" component={Mail} />
          {/* <Route path="/about" component={About} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </main>
 
    </Router>
  );
}
