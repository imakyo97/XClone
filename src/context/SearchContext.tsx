import React, { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction } from 'react';

const SearchContext = createContext<{text: string, setText: Dispatch<SetStateAction<string>>}>({text: '', setText: () => {}});

export const SearchProvider = ({ children } : { children: ReactNode }) => {
    const [text, setText] = useState('osaka');
    return (
        <SearchContext.Provider value={{ text, setText }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => useContext(SearchContext);
