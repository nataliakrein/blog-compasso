import React from 'react';
import { Comment, CommentForm, CommentList, NavBar, PostForm } from './components';
import { PostDetailPage } from './pages/PostDetailPage';
import { PostEditPage } from './pages/PostEditPage';
import { PostsPage } from './pages/PostsPage';

function App() {
  return (
    <div>
      <NavBar/>
      <PostDetailPage/>
    </div>
  );
}

export default App;
