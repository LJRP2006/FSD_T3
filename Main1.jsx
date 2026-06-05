import { BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import img1 from './assets/react.svg'
import img2 from './assets/hero.png'
import img3 from './assets/vite.svg'
import Home from "./Home";
import Product from "./Product";
import Nopage from "./Nopage";

function Main1(){
    const pr=[{pic:img1,name:'product1',price:'₹80,000'},
              {pic:img2,name:'product2',price:'₹60,000'},
              {pic:img3,name:'product3',price:'₹75,000'}
    ]
    return(<Router>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/product'>Product</Link></li>
        </ul>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Product info={pr}/>}/>
            <Route path="*" element={<Nopage/>}/>
        </Routes>
    </Router>)
}
export default Main1