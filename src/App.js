import './App.scss';
import Footer from './Components/Footer/Footer';
import Start from './Components/Start/Start';
import Message from './Components/Message/Message'
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div>
      <Start />
      <Message />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
