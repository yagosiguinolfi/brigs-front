import { stringify } from 'querystring';
import React, { createContext, useCallback, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider= ({ children }) => {
    const history = useHistory();

   const [data, setData] = useState<AuthState>(() => {
     const dataAtual = String(new Date( ).toLocaleString().substr(0, 10)); 
     const tokenDataAtual = localStorage.getItem('@Brigs:Date')

     if(dataAtual !== tokenDataAtual){
        localStorage.removeItem('@Brigs:Token')
        localStorage.removeItem('@Brigs:user')
        localStorage.removeItem('@Brigs:Date')
     } 

     const token = localStorage.getItem('@Brigs:Token')
     const user = localStorage.getItem('@Brigs:user')
     const tokenData = localStorage.getItem('@Brigs:Date')
     
     if (token && user) {
         if(dataAtual === tokenData){
        //  console.log(`dataAtual ${dataAtual}`)
        //  console.log(`datatoken ${tokenData}`)
         return { token, user }
         }
     }



     return {}
   });

   const signIn = useCallback(async ({ usuario, senha }) => {
    let dataDia = String(new Date( ).toLocaleString().substr(0, 10));
    const response = await api.post('auth', {
           usuario,
           senha
       })

       console.log(response)
    
       const { token, usuarioAPI } = response.data[0];

       localStorage.setItem('@Brigs:Token', token);
       localStorage.setItem('@Brigs:user', usuario);
       localStorage.setItem('@Brigs:Date', dataDia);
       console.log('Teste chegada aqui'+usuarioAPI);
       setData({token});

       

   },[])

   const signOut = useCallback(() => {
    localStorage.removeItem('@Brigs:Token')
    localStorage.removeItem('@Brigs:user')
    localStorage.removeItem('@Brigs:Date')
    history.push('/')
    setData({})
    
   },[])

   return (
       <AuthContext.Provider value= {{ signIn, signOut }}>
           {children}
       </AuthContext.Provider>
   );
} 

function useAuth() {
   const context = useContext(AuthContext);
   
   if(!context){
       throw new Error('useAuth é necessário usar por volta o AuthProvider')
   }

   return context;
}

export { AuthProvider, useAuth }
