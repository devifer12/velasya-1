import Navbar from './components/universal/Navbar';
import Hero from './components/home/Hero';

const App = () => {
  return (
    <div className="min-h-screen bg-primary-cream">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;