import { useNavigate } from 'react-router';
import type { Category } from '../api/types';
import { useCategory } from '../contexts/CategoryContext';

export const ButtonBoardCard = () => {
  const navigate = useNavigate();
  const { categories, addCategory, updateCategory, deleteEmptyCategories } =
    useCategory();

  const goToCategory = (title: string) => {
    if (title.trim()) navigate(`/category/${encodeURIComponent(title)}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 mx-6 items-center justify-center">
      {categories.map((cat: Category) => (
        <div
          key={cat.id}
          className="w-80 h-50 bg-blue-400 rounded-xl px-4 py-10 border border-transparent shadow-md 
          hover:bg-blue-200 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] 
          hover:border-3 hover:border-blue-400 transition-all duration-300"
          onClick={() => cat.title.trim() && goToCategory(cat.title)}
        >
          <div className="flex justify-center py-9">
            <input
              type="text"
              autoFocus
              value={cat.title}
              onChange={(e) => updateCategory(cat.id, e.target.value)}
              onBlur={(e) => {
                if (!e.target.value.trim()) deleteEmptyCategories(cat.id);
              }}
              placeholder="Enter title..."
              className="text-2xl text-slate-950 font-bold text-center bg-transparent border-none outline-none placeholder:text-slate-700"
            />
          </div>
        </div>
      ))}

      <div
        onClick={addCategory}
        className="w-80 h-50 bg-blue-200 rounded-xl px-4 py-12 border border-transparent shadow-md hover:bg-blue-100 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] 
        hover:border-3 hover:border-blue-400 transition-all duration-300 cursor-pointer"
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
