import { createContext, useState, type PropsWithChildren } from 'react'
import { users, type User } from '../data/User-mock.data';

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    // state
    authStatus: AuthStatus;
    user: User | null;

    // Methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const userContext = createContext({} as UserContextProps);

const UserContextProvider = ({ children }: PropsWithChildren) => {

    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);


    const handleLogin = (userId: number) => {

        const user = users.find(user => user.id === userId)
        if(!user){
            console.log(`User not found - ${ userId }`)
            setUser(null);
            setAuthStatus('not-authenticated');
            
            return false;
        }
        setUser(user);
        setAuthStatus('authenticated');
        return true;
    }

    const handleLoguot = () => {
        console.log('Cerrando Sesion')
        setUser(null);
        setAuthStatus('not-authenticated');
        
    }

    return <userContext.Provider value={
            {
                authStatus: authStatus,
                user: user,
                login: handleLogin,
                logout: handleLoguot



            }
        }> {children} </userContext.Provider>
    
}

export default UserContextProvider
