import { useState, createContext } from "react";
import React from "react";

const ThemeContexts = createContext();

function ThemeProvid({ children }) { // bien themeprovide co the om cac app/component khac
    const [switchs, setSwitchs] = useState('light')
    // neu la dark thi doi thanh light va nguoc lai
    const toggleThmeSwitch = () => {
        setSwitchs(switchs === 'light' ? 'dark' : 'light');
    }

    const value = {
        switchs,
        toggleThmeSwitch
    }

    return (
        <div>
            <ThemeContexts.Provider value={value} >
                {children}
            </ThemeContexts.Provider>
        </div>
    )
}

export { ThemeContexts, ThemeProvid }