import React ,{Component} from 'react'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'
import CustomNav from './component/customNav'
import Login from './component/Login'
import Admin from './component/Admin'
import Home from './component/Home'
import User from './component/User'
class RootRouter extends Component{
    render(){
        return(
            <HashRouter>
                <CustomNav></CustomNav>
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' render={()=>{
                        return(
                            <Admin>
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
