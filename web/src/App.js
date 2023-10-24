import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartIsShow,setCartIsShow]= useState(false);

  const showCartHandler=()=>{
    setCartIsShow(true);
  }
  const hideCartHandler=()=>{
    setCartIsShow(false);
  }

  return (
    <>
      {cartIsShow && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
          <Meals/>
      </main>  
    </>
  );
}

export default App;
 