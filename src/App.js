import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import store from './redux/store'

import { NavBar, PostForm, Post } from './components';
import { PostsPage } from './pages/PostsPage';

/*
 constructor(props) {
    super(props);
    this.state = {
      backend: "backend-data"
    };
  }
*/
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={PostsPage} />
            <Route exact path="/:category" component={PostsPage} />
            <Route exact path="/posts/new" component={PostForm} />
            <Route exact path="/:category/:id" component={Post} />
            <Route exact path="/:category/:id/edit" component={PostForm} /> {/*EditForm??? */}
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
