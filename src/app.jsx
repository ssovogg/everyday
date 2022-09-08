import './app.css';
import Login from './pages/Login/Login';

function App({ auth }) {
  return (
    <>
    <Login auth={auth} />
    </>
  );
}

export default App;
