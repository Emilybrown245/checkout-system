import './App.css'
import Checkout from './components/Checkout'
import { pricingData } from './utils/pricingData';  

const App: React.FC = () => {
  return (
    <>
    <Checkout pricingData={pricingData} /> 
  </>
  )
}

export default App
