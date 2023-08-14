import { RoutesMain } from "./routes";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import "./styles/index.scss";

const  App = () => {

  return (
    <>
      <ToastContainer />
      <RoutesMain />
    </>
  )
}

export default App
