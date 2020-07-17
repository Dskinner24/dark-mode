import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [mode, setMode] = useLocalStorage(key, initialValue)

    // var themeOne = document.getElementsByTagName('body')
    // var themeTwo = document.getElementsByClassName('dark-mode')

    useEffect(() => {
    //     if (mode) {
    //         // var themeOne = document.getElement('body')
    //         setMode (themeOne.classList.add('dark-mode'));
    //      }  else
    //          // var themeTwo = document.getElementsbyClassName('dark-mode')
    //         setMode (themeTwo.classList.remove('dark-mode'));

    // }, [mode, setMode, themeOne, themeTwo] )
        if (mode === true) {
        document.body.className = 'dark-mode';
        } else 
        document.body.className = '';
        
    
    }, [mode, setMode])

    return [mode, setMode];

}