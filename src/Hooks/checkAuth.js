import { createContext , useContext} from "react";

export const checkAuth = createContext({
  user: false,
  acessUser: () => {},
  denieUser: () => {},
})

export const CheckAuthProvider = checkAuth.Provider

export default function useCheckAuth() {
  return useContext(checkAuth)
}
