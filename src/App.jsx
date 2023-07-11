
import './App.css'
import CakeView from './features/cake/cakeView'
import IceCreamView from './features/icecream/IceCreamView'
import UserView from './features/userAsync/UserView'

function App() {

  return (
    <>
    <div>
      <CakeView/>
      <IceCreamView/>
      <UserView/>
    </div>
    </>
  )
}

export default App
