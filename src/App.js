import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store'
import { NavBar, MenuBurguer} from './components';
import { PostsPage } from './pages/PostsPage';
import { EditCommentPage, NewCommentPage, NewPostPage, PostDetailPage, PostEditPage } from './pages';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={PostsPage} />
            <Route exact path="/:category" component={PostsPage} />
            <Route exact path="/:category/:id/comments/new" component={NewCommentPage} /> 
            <Route exact path="/posts/new" component={NewPostPage} /> 
            <Route exact path="/:category/:id" component={PostDetailPage} />
            <Route exact path="/:category/:id/edit" component={PostEditPage} /> 
            <Route exact path="/:category/:id/comments/:cid/edit" component={EditCommentPage} /> 
          </Switch>
          <MenuBurguer className={"menu-hamburguer"}/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
