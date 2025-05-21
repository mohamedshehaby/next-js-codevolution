'use client'

import {createContext, useContext} from 'react'

export const ThemeContext = createContext({})

export default function ThemeProvider({
                                          children,
                                      }: {
    children: React.ReactNode
}) {
    return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}


export const useTheme = () => useContext(ThemeContext);