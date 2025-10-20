import { useNavigate } from 'react-router';
import { RiDeleteBin5Line } from 'react-icons/ri';
import type { ButtonBoardCardProps} from '../api/types';
import SortableCard from '../SortableCard';

export const ButtonBoardCard = ({categories, updateCategory, deleteCategory, addCategory}: ButtonBoardCardProps) => {
  const navigate = useNavigate();

  let dragStarted = false;

  const handleMouseDown = () => {
    dragStarted = false;
  };

  const handleMouseMove = () => {
    dragStarted = true;
  };

  const handleClick = (catTitle: string) => {
    if (!dragStarted && catTitle.trim() !== '') {
      navigate(`/category/${encodeURIComponent(catTitle)}`);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-14 mr-3">
      {categories.map((cat) => (
        <SortableCard key={cat.id} id={cat.id.toString()}>
          <div
            className="relative w-80 h-50 bg-blue-400 rounded-xl px-4 py-10 border shadow-md hover:bg-blue-200 transition-all duration-300 cursor-pointer"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onClick={() => handleClick(cat.title)}
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

            <input
              type="text"
              value={cat.title}
              onChange={(e) => updateCategory(cat.id, e.target.value)}
              placeholder="Add title..."
              className="text-2xl text-slate-950 p-10 font-bold text-center bg-transparent border-none outline-none placeholder:text-slate-600 w-full"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </SortableCard>
      ))}

      <div
        onClick={addCategory}
        className="w-80 h-50 bg-blue-200 rounded-xl px-4 py-12 border shadow-md hover:bg-blue-100 transition-all duration-300 cursor-pointer flex justify-center items-center"
      >
        <span className="text-2xl text-blue-400 font-bold">+ Add Your Category</span>
      </div>
    </div>
  );
};
