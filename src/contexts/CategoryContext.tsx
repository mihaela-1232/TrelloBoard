import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import type { Category, CategoryContextType } from '../api/types';

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategory must be used within CategoryProvider');
  }
  return context;
};

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem('categories');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const addCategory = () => {
    setCategories((prev) => [...prev, { id: Date.now(), title: '' }]);
  };
  const updateCategory = (id: number, value: string) => {
    setCategories((prev) =>
      prev.map((cat) => (cat.id === id ? { ...cat, title: value } : cat))
    );
  };

  const deleteEmptyCategories = (id: number) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
  };

  const deleteCategory = (id: number) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
  };

  const getCategoryByTitle = (title: string) =>
    categories.find((cat) => cat.title === title);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        addCategory,
        deleteCategory,
        updateCategory,
        deleteEmptyCategories,
        getCategoryByTitle,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
