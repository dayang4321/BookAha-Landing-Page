import React,{useState,useEffect,useLayoutEffect} from 'react';
import { useHistory } from "react-router-dom";
import Axios from '../axios-base'



export const AuthContext = React.createContext({
    isAuth: false,
    token: null,
    signin: () => {

    },
    logout: () => {
        
    }
});



const AuthContextProvider = props => {

    const authToken = localStorage.getItem('bookAhaAuthToken');
    const expTime = localStorage.getItem('bookAhaAuthExpiry')
    let isAuthValid = false;
    let authTimeout; 
    
    if (localStorage.getItem('bookAhaAuthExpiry')){
        isAuthValid = Date.now() < expTime ? true : false;
        if (isAuthValid) {
            authTimeout = expTime - Date.now()  ;
        }
    }

    const history = useHistory()

    const [isAuthenticated, setIsAuthenticated] = useState(authToken && isAuthValid);

    const [token, setToken] = useState(localStorage.getItem('bookAhaAuthToken'));


 

    //console.log(authTimeout/1000/60)
 

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('bookAhaAuthToken');
        localStorage.removeItem('bookAhaAuthExpiry')
        setIsAuthenticated(false);
       // history.push('/auth')
    }

    const sessLogoutHandler = () => {
        setTimeout(() => {
            logoutHandler()
        },[authTimeout])
    }

    const checkAuthHandler = () => {
       // console.log(isAuthenticated)
        if (authToken && isAuthValid) {
            sessLogoutHandler();
        }
        else {
          logoutHandler()
        }
    }

     useLayoutEffect(()=> {
        checkAuthHandler();
     }, []);
    
    
    const loginHandler = (data) => {

        Axios.post('/auth/login', data)
            .then(
                res => {
                    console.log(res.data)
                    const token = res.data.token.data;
                    const expTime = res.data.token.expires_at * 1000;
                    //const expiry = new Date(res.data.data.token.expires_at * 1000);

                    // console.log(expiry)
                    // console.log(res.data);

                    localStorage.setItem('bookAhaAuthToken', token);
                    localStorage.setItem('bookAhaAuthExpiry', expTime);
                    setToken(token)
                    setIsAuthenticated(true);   
                    history.push('/admin')
                }
        )
            .catch(error => {
                error.response ? alert(error.response.data.message) : alert(error);
            });
    
      //
    }
    

    return (<AuthContext.Provider value={{
        isAuth: isAuthenticated,
        signin: loginHandler,
        logout: logoutHandler,
        token: token
    }}>
        {props.children}
    </AuthContext.Provider>)
}

export default AuthContextProvider


