import {Navigate} from 'react-router-dom'
import Home from "../components/Home";
import About from "../components/About";
import News from '../components/Home/News';
import Message from '../components/Home/Message';
import Detail from '../components/Home/Message/Detail';
const routers= [
    {path:'/about',element:<About/>},
    {path:'/home',element:<Home/>,children:[{path:'news',element:<News/>},{path:'message',element:<Message/>,children:[{path:'detail/:id/:title/:content',element:<Detail/>}]}]},
    {path:'/',element:<Navigate to={'/about'}/>},
]
export default routers