import Header from './components/Header';
import Hero from './components/Hero';
import Form from './components/Form';
import List from './components/List'
import './index.scss'

function App() {
  return (
    <div className='wrapper w-[1300px] h-full flex flex-col '>
      < Header />
      < Hero completed__todos={0} total__todos={0} />
      < Form />
      < List todos={[]} />

    </div>
  );
}

export default App;
