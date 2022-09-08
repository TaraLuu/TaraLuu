import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';

function App() {
  const projects = [{
    name: 'Study Board',
    description: 'My first personal project',
    tool: 'HTML, CSS, Javascript, React',
    id: 1  },
    {name: 'Tic-tac-toe Game',
    description: 'A project from my study path',
    tool: 'HTML, CSS, Javascript',
    id: 2  },
    {name: 'Calculator',
    description: 'A project from my study path',
    tool: 'HTML, CSS, Javascript',
    id: 3  }]

  return (
    <div className="App">
      <Nav />
      <About />
      <ProjectList projects={projects}/>
      <Contact />
    </div>
  );
}

export default App;
