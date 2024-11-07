import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx'
import URLShrinking from './components/URLShrinking.jsx';

function App() {
  return (
    <div className="container">
      <Header />
      <URLShrinking/>
    </div>
  );
}

export default App;
