import './App.css'

import Container from './comment/container';
import ContainerLi from './comment/commentLi'


function App() {

  return (      
      <div className='h-screen w-full'>
        <div className='h-full w-full bg-slate-800 flex flex-col gap-y-10 justify-center items-center'>
          <Container />
          <ContainerLi></ContainerLi>
        </div>
      </div>
  )
}

export default App;

