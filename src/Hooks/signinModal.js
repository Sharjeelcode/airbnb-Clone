import { createContext, useContext } from "react";

export const signinModal = createContext({
    SignUpmodal : false,
    LoginModal  : false,
    menuBtn : "Hidden",
    openSignUpModal : ()=>{}, 
    closeSignUpModal : ()=>{}, 
    openLoginModal : ()=>{}, 
    closeLoginModal : ()=>{},
    toggleMenubtn : ()=>{},
})


export const SigninModalProvider = signinModal.Provider 


export default function useSigninModal() {
    return useContext(signinModal)
}