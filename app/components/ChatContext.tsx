"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface ChatContextValue {
  open: boolean;
  toggle: () => void;
  close: () => void;
}

const ChatContext = createContext<ChatContextValue>({
  open: false,
  toggle: () => {},
  close: () => {},
});

export function ChatProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ChatContext.Provider
      value={{
        open,
        toggle: () => setOpen((v) => !v),
        close: () => setOpen(false),
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChatPopup = () => useContext(ChatContext);
