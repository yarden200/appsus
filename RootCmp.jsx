const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
    return (
      <Router>
        <header>
          <AppHeader/>
        </header>
        <main>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <footer>
          <AppFooter/>
        </footer>
        <UserMsg/>
      </Router>
    );
  }