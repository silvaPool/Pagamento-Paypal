import './App.css'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Checkout from './components/Checkout';

const initialOptions = {
  "client-id": "AejBSPkq2vgS3oVJGk-8mcN4I9UHIk2qNNPBJ27XYBol0f8cF5v0T_jVcMQlEtPJrzVMfFh2_6FPJpht",
  currency: "USD",
  intent: "capture",
};

function App() {
  return (
    <>

    <PayPalScriptProvider options={initialOptions}>
      <Checkout />
    </PayPalScriptProvider>

    </>
  );
}

export default App
