import {Routes, Route} from 'react-router-dom'
import All from './components/All'
import App from './App'
import FullStack from './components/Fullstack'
import DataScience from './components/DataScience'
import Cyber from './components/Cyber'
import Career from './components/Career'
import Error404 from './components/Error404'

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element = {<All />}/>
            <Route path='/fullstack' element = {<FullStack />}/>
            <Route path='/data-science' element = {<DataScience />}/>
            <Route path='/cyber' element = {<Cyber />}/>
            <Route path='/career' element = {<Career />}/>
            <Route path='*' element = {<Error404 />}/>
        </Routes>
    </App>
)

export default AppRoutes