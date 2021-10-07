import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import store from './redux/store'

import { NavBar, PostForm, Post, CommentForm, CommentFormEdit} from './components';
import { PostsPage } from './pages/PostsPage';
import { PostDetailPage, PostEditPage } from './pages';

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
            <Route exact path="/:category/:id/comments/new" component={CommentForm} />
            <Route exact path="/posts/new" component={PostForm} />
            <Route exact path="/:category/:id" component={PostDetailPage} />
            <Route exact path="/:category/:id/edit" component={PostEditPage} /> {/*PostForm*/}
            <Route exact path="/:category/:id/comments/:cid/edit" component={CommentFormEdit} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
