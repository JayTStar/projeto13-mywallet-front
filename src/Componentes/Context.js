import { createContext, useState ,useContext} from "react";

export const DadosUsuario = createContext();

export default function DadosdoUsuario({ children }){
    const [usuario, setUsuario] = useState("");
    const [token, setToken] = useState("");
    const [id, setId] = useState("");
    const [mov, setMov] = useState([]);

    return (
        <DadosUsuario.Provider value={{usuario, setUsuario, token, setToken, id, setId, mov, setMov}}>
          {children}
        </DadosUsuario.Provider>
      );
}

export function useUser(){
    const user = useContext(DadosUsuario);
    const {usuario, setUsuario} = user;
  
    return {usuario, setUsuario};
}

export function useToken(){
    const userToken = useContext(DadosUsuario);
    const {token, setToken} = userToken;
  
    return {token, setToken};
}

export function useID(){
  const userId = useContext(DadosUsuario);
    const {id, setId} = userId;
  
    return {id, setId};
}

export function useMov(){
  const userMov = useContext(DadosUsuario);
    const {mov, setMov} = userMov;
  
    return {mov, setMov};
}