import React ,{Component} from 'react'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
import ComponentImport from './utils/componentImport'
import CustomNav from './component/customNav'
// import Login from './component/Login/load'
const Login = ComponentImport(()=>import('./component/Login'))
// import Admin from './component/Admin'
// import Home from './component/Home'
// import User from './component/User'
const Admin = ComponentImport(()=>import('./component/Admin'))
const Home = ComponentImport(()=>import('./component/Home'))
const User = ComponentImport(()=>import('./component/User'))
class RootRouter extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' render={()=>{
                        return(
                            <Admin>
                                <CustomNav></CustomNav>
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/user' component={User}></Route>
                            </Admin>
                        )
                    }}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default RootRouter
