 import { useEffect, useState, useRef } from 'react'
 import {getAuth, onAuthStateChanged} from 'firebase/auth'

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
    const isMounted = useRef(true)

    useEffect(() => {
        if(isMounted) {
          //When page loads get the auth and pass it through the on Auth state changed. Check to see if the user is logged in and set the checking status to false because the user is logged in
          const auth = getAuth();
          onAuthStateChanged(auth, (user) => {
            if (user) {
              setLoggedIn(true);
            }
            setCheckingStatus(false);
          });
        }
        return () => {
            isMounted.current = false
        }
    },[isMounted])

  return {loggedIn, checkingStatus}
}

 