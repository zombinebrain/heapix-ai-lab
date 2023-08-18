import { createContext, Dispatch, SetStateAction, useState } from 'react';

type ModalContextProps = {
  openModal: boolean,
  setOpenModal: Dispatch<SetStateAction<boolean>>
};

export const ModalContext = createContext<ModalContextProps>({
  openModal: false,
  setOpenModal: () => {}
});

export function ModalContextProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        setOpenModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
