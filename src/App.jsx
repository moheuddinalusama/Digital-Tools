
import './App.css'
import Navber from './componets/navber'
import Discrption from './componets/Discrption'
import Bord from './componets/Bord'
import ProductCard from './componets/ProductCard'
import dataCard from "../public/Card.json"
import Card from './componets/Card'
import Steps from './componets/Steps'
import pament from '../public/Pament.json'
import Pament from './componets/Pament'
import Discription2 from './componets/Discription2'
import Ctasection from './componets/Ctasection'
import Footer from './componets/Footer'
function App() {

const product = dataCard;
const pementData = pament;
  return (
    <>
      <Navber></Navber>
      <Discrption></Discrption>
      <Bord></Bord>
      <ProductCard></ProductCard>
      <Card product={product}></Card>
      <Steps></Steps>
      <Discription2></Discription2>
    <Pament pementData={pementData}></Pament>
    <Ctasection></Ctasection>
    <Footer></Footer>
    </>
  )
}

export default App
