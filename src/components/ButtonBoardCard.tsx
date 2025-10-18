import { useNavigate } from 'react-router';
import { useCategory } from '../contexts/CategoryContext';
import { RiDeleteBin5Line } from 'react-icons/ri';
import type { Category } from '../api/types';

export const ButtonBoardCard = () => {
  const navigate = useNavigate();
  const {
    categories,
    addCategory,
    updateCategory,
    deleteEmptyCategories,
    deleteCategory,
  } = useCategory();

  const goToCategory = (title: string) => {
    navigate(`/category/${encodeURIComponent(title)}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 mx-6 items-center justify-center">
      {categories.map((cat: Category) => (
        <div
          key={cat.id}
          className="relative w-80 h-50 bg-blue-400 rounded-xl px-4 py-10 border border-transparent shadow-md 
            hover:bg-blue-200 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] 
            hover:border-3 hover:border-blue-400 transition-all duration-300"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              deleteCategory(cat.id);
            }}
            className="absolute top-2 right-3 text-black hover:text-red-600 transition-colors"
          >
            <RiDeleteBin5Line size={30} />
          </button>
          <div
            onClick={() => {
              if (cat.title && cat.title.trim() !== '') {
                goToCategory(cat.title);
              }
            }}
            className="flex justify-center py-9 cursor-pointer"
          >
            <input
              type="text"
              value={cat.title}
              onChange={(e) => updateCategory(cat.id, e.target.value)}
              onBlur={(e) => {
                if (!e.target.value.trim()) deleteEmptyCategories(cat.id);
              }}
              placeholder="Add title..."
              className="text-2xl text-slate-950 font-bold text-center bg-transparent border-none outline-none placeholder:text-slate-600"
            />
          </div>
        </div>
      ))}
      <div
        onClick={addCategory}
        className="w-80 h-50 bg-blue-200 rounded-xl px-4 py-12 border border-transparent shadow-md hover:bg-blue-100 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] 
          hover:border-3 hover:border-blue-400 transition-all duration-300 cursor-pointer relative"
      >
        <div className="flex justify-center">
          <div className="text-2xl text-blue-400 font-bold py-8">
            + Add Your Category
          </div>
        </div>
      </div>
    </div>
  );
};
