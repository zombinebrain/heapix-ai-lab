import {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react';

type ModalContextProps = {
  isOpenedModal: boolean,
  setIsOpenedModal: Dispatch<SetStateAction<boolean>>
};

export const ModalContext = createContext<ModalContextProps>({
  isOpenedModal: false,
  setIsOpenedModal: () => {}
});

export function ModalContextProvider({ children }: { children: ReactNode }) {
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
