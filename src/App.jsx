import React from 'react'
import Header from './components/Header'
import Category from './components/Category'
import OrderDelivery from './components/OrderDelivery'
import Gird from './components/Gird'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
<>
  <Header />
  <Category />
  <OrderDelivery />
  <Gird />
  <CTA />
  <Category heading='<h2>Whats Testing</h2>' />
  <Footer  />
</>
  )
}
