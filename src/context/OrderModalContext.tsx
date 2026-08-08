import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { PRODUCTS, type Product } from '../data/products';

interface OrderModalContextType {
  isOpen: boolean;
  selectedProduct: Product | null;
  openOrderModal: (product?: Product) => void;
  closeOrderModal: () => void;
  setSelectedProduct: (product: Product) => void;
}

const OrderModalContext = createContext<OrderModalContextType | undefined>(undefined);

export const OrderModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProductState] = useState<Product | null>(PRODUCTS[0] || null);

  const openOrderModal = (product?: Product) => {
    if (product) {
      setSelectedProductState(product);
    } else if (!selectedProduct && PRODUCTS.length > 0) {
      setSelectedProductState(PRODUCTS[0]);
    }
    setIsOpen(true);
  };

  const closeOrderModal = () => {
    setIsOpen(false);
  };

  const setSelectedProduct = (product: Product) => {
    setSelectedProductState(product);
  };

  return (
    <OrderModalContext.Provider
      value={{
        isOpen,
        selectedProduct,
        openOrderModal,
        closeOrderModal,
        setSelectedProduct,
      }}
    >
      {children}
    </OrderModalContext.Provider>
  );
};

export const useOrderModal = (): OrderModalContextType => {
  const context = useContext(OrderModalContext);
  if (!context) {
    throw new Error('useOrderModal must be used within an OrderModalProvider');
  }
  return context;
};
