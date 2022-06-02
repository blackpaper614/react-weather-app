import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact render={() => (
          <Redirect to="/main" />
        )} />
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={() => {
              if (route.meta.title) {
                document.title = route.meta.title
              }
              return <route.component />
            }}

          />
        ))}
      </Switch>
    </HashRouter>
  )
};

export default App;
