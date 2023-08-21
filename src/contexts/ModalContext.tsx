import { createContext, Dispatch, SetStateAction, useState } from 'react';

type ModalContextProps = {
  isOpenedModal: boolean,
  setIsOpenedModal: Dispatch<SetStateAction<boolean>>
};

export const ModalContext = createContext<ModalContextProps>({
  isOpenedModal: false,
  setIsOpenedModal: () => {}
});

export function ModalContextProvider({ children }) {
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isOpenedModal: isOpenedModal,
        setIsOpenedModal: setIsOpenedModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
