import './App.css';
import { AppRouter } from './routes/AppRouter';
import { AddPostForm } from './components/AddPostForm';
import { PostsList } from './redux/posts/PostsList';

function App() {
  return (
    <div className="App">
      <AppRouter />
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
