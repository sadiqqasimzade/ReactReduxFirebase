// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Footer from '../components/features/footer/footer';
import Navbar from '../components/features/navbar/navbar';
import MainRouter from '../routes/MainRouter';


export function App() {
  return (
    <div className='min-h-screen bg-sky-950'>
      <Navbar/>
      <MainRouter/>
      <Footer/>
    </div>
  );
}

export default App;
