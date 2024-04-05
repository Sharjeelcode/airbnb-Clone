import { createContext, useContext } from "react";

export const signinModal = createContext({
    SignUpmodal : false,
    LoginModal  : false,
    openSignUpmodal : ()=>{}, 
    closeSignUpmodal : ()=>{}, 
    openLoginModal : ()=>{}, 
    closeLoginModal : ()=>{}, 

})


export const SigninModalProvider = signinModal.Provider 


export default function useSigninModal() {
    return useContext(signinModal)
}