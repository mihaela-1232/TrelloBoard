import { FaHome, FaSearch, FaTrello } from 'react-icons/fa';
import { BoardCard } from '../components/BoardCard';
import { TbHomeCog } from 'react-icons/tb';
import { FaBowlFood } from 'react-icons/fa6';
import { IoBarbellSharp, IoBook } from 'react-icons/io5';
import { RiLightbulbFlashFill } from 'react-icons/ri';
import { MdWork } from 'react-icons/md';
import { ButtonBoardCard } from '../components/ButtonBoardCard';
import { useCategory } from '../contexts/CategoryContext';
import { DndContext, closestCenter, type DragEndEvent } from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';


const Home = () => {
  const { categories, addCategory, updateCategory, deleteCategory, reorderCategories } = useCategory();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = categories.findIndex(c => c.id.toString() === active.id);
    const newIndex = categories.findIndex(c => c.id.toString() === over.id);
    const newOrder = arrayMove(categories, oldIndex, newIndex);
    reorderCategories(newOrder);
  };

  return (
    <div>
      <div className="bg-slate-950 h-15 w-screen flex items-center px-3 py-5">
        <div className="flex gap-4">
          <FaHome className="text-blue-400 text-xl" />
          <FaSearch className="text-blue-400 text-xl" />
          <FaTrello className="text-blue-400 text-xl" />
        </div>
        <h1 className="text-white text-xl font-bold py-4 ml-4">Trello</h1>
      </div>
      <div className="bg-slate-950 min-h-screen border-y border-slate-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-8 mx-6 py-4 items-center justify-center">
          <BoardCard title={'Work'} icon={MdWork} />
          <BoardCard title={'Home'} icon={TbHomeCog} />
          <BoardCard title={'Food'} icon={FaBowlFood} />
          <BoardCard title={'Sport'} icon={IoBarbellSharp} />
          <BoardCard title={'Teach'} icon={IoBook} />
          <BoardCard title={'Idea'} icon={RiLightbulbFlashFill} />
        </div>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={categories.map(c => c.id.toString())} strategy={rectSortingStrategy}>
            <ButtonBoardCard
              categories={categories}
              updateCategory={updateCategory}
              deleteCategory={deleteCategory}
              addCategory={addCategory}
            />
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Home;
