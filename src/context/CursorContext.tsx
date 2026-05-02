import React, { createContext, useContext, useState, useCallback } from 'react';

type CursorType = 'default' | 'view';

interface CursorContextType {
  cursorType: CursorType;
  isHovering: boolean;
  setCursorType: (type: CursorType) => void;
  setIsHovering: (hovering: boolean) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorType, setCursorTypeState] = useState<CursorType>('default');
  const [isHovering, setIsHoveringState] = useState(false);

  const setCursorType = useCallback((type: CursorType) => {
    setCursorTypeState(type);
  }, []);

  const setIsHovering = useCallback((hovering: boolean) => {
    setIsHoveringState(hovering);
  }, []);

  const resetCursor = useCallback(() => {
    setCursorTypeState('default');
    setIsHoveringState(false);
  }, []);

  return (
    <CursorContext.Provider value={{ cursorType, isHovering, setCursorType, setIsHovering, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
}
