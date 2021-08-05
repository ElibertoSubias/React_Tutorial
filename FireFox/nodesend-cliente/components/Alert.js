import React, { useContext} from 'react';
import authContext from '../context/auth/authContext';

const Alert = () => {

    const AuthContext = useContext(authContext);
    const { mensaje } = AuthContext;
    let tipo = 'bg-green-500';
    if (mensaje.tipo && mensaje.tipo < 0) {
        tipo = 'bg-red-500';
    }

    return ( 
        <div className={tipo + " py-2 px-3 w-full my-3 max-w-lg text-center text-white mx-auto"}>
            { mensaje.msg }
        </div>
     );
}
 
export default Alert;