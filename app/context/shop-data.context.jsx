import { createContext, useState, useEffect, useContext } from "react";
import { SHOP_DATA } from '../data/shop-data.js'

const ShopDataContext = createContext({
  categories: {},
});

export const useShopData = () => useContext(ShopDataContext);

export const ShopDataProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    setCategories(SHOP_DATA);
  }, []);

  const value = { categories };

  return (
    <ShopDataContext.Provider value={value}>
      {children}
    </ShopDataContext.Provider>
  );
};