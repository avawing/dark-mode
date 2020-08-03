import {useEffect} from 'react'
import useLocalStorage from './useLocalStorage'

function useDarkMode(){
   const [darkMode, setDarkMode] = useLocalStorage()

   useEffect(()=>{
       document.body.classList.toggle('dark-mode')
   },[darkMode])
   return [darkMode, setDarkMode]
}

export default useDarkMode