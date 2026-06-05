import P1 from './p1'
import img1 from './assets/msd.jpg'
import img2 from './assets/vk.jpg'
function P()
{
    const prod1=[{pic:img1,name:"Product_1",price:80000},{pic:img2,name:"Product_2",price:40000}]
    return(<div><P1 info={prod1}/></div>)
}
export default P