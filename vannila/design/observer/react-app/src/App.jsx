import { ToastContainer, toast } from "react-toastify";
import { Observable } from "../observer";

const observable = new Observable()
observable.subscribe(logger);
observable.subscribe(toastify);

function logger(data) {
  console.log(`${Date.now()}: ${data}`)
}

function toastify(data) {
  toast(data);
}

function App() {

  const handleClick = () => {
    observable.notify("hello world");
  }

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <ToastContainer autoClose closeButton={false} />   
    </>
  )
}

export default App
