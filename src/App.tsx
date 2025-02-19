import './App.css'
import Checkout from './components/Checkout'
import { pricingRules } from './utils/pricingRules';  

const App: React.FC = () => {
  return (
    <>
    <Checkout pricingRules={pricingRules} /> 
  </>
  )
}

export default App
