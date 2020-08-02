import {useEffect} from 'react'
import useLocalStorage from './useLocalStorage'

function useDarkMode(){
   const [darkMode, setDarkMode] = useLocalStorage(true)

   useEffect(()=>{
       if(darkMode === true){
           return (document.body.classList.toggle('dark-mode'))
       }else if(darkMode === false){
           return (document.body.classList.toggle('dark-mode'))
       }
   },[darkMode])
   return [darkMode, setDarkMode]
}

export default useDarkMode