import {useLayoutEffect, useState} from "react";

export const useTheme = () => {

    const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'light')

    useLayoutEffect(() => {

        const main = <HTMLElement>document.getElementById('main')

        main.setAttribute('data-theme', theme)

        localStorage.setItem('app-theme', theme)

    }, [theme]);

    return {theme, setTheme}
}