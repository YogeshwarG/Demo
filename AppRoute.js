import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from '../pages/dashboard/Home';
import HeaderComp from '../component/page-header/HeaderComp'
import FooterComp from '../component/page-footer/FooterComp';
import NoFoundPage from '../pages/404/404';
import Login from '../pages/login/Login';
import {checkLogin} from '../util/helper';
class AppRouter extends React.Component<any> {
   
    render(){
        return (
            <Router>
                {checkLogin()?
                    <div style={{ background: '#f0f2f5',height:'100vh'}}>
                        <HeaderComp/>
                            <Switch>
                                    <Route path="/" exact component={Home} />
                                    <Route path="/header" exact component={HeaderComp} /> 
                                    <Route path="/login" exact component={Login} /> 
                                    {/* <Route path='/404' component={NoFoundPage} /> */}
                                    <Route path="*"> <NoFoundPage /> </Route>
                                </Switch>
                        <FooterComp/>                       
                    </div>
                 :'none'}
            </Router>
        );
    }
}
 export default AppRouter;