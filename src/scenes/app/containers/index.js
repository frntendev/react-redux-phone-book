import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { css } from "react-emotion";
import Home from "../../home/containers";
import BlackList from "../../blacklist/containers";
import Header from "../components/Header";
import NoMatch from "../components/NoMatch";

const styles = {
  container: css`
    max-width: 960px;
    margin: 0 auto;
    padding: 60px 10px;
    display: grid;
    grid-gap: 15px;
    @media (max-width: 480px) {
      padding: 60px 0;
    }
    label: container;
  `
};

const App = () => (
  <div>
    <Header />
    <main className={styles.container}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blacklist" component={BlackList} />
        <Route component={NoMatch} />
      </Switch>
    </main>
  </div>
);

export default withRouter(App);
