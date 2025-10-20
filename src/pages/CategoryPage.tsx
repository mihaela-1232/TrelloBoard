import { FaHome } from 'react-icons/fa';
import { ColumnCard } from '../components/ColumnCard';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router';
import { useColumnCard } from '../contexts/ColumnCardContext';
import { useEffect } from 'react';
import { closestCenter, DndContext, type DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

const CategoryPage = () => {
  const navigate = useNavigate();
  const { title } = useParams<{ title: string }>();

  const { columns, addColumn, moveCard} = useColumnCard();
  const decodedTitle = decodeURIComponent(title || '');

  useEffect(() => {
    if (!decodedTitle) return;

    const hasCategoryColumns = columns.some(
      (col) => col.categoryTitle.toLowerCase() === decodedTitle.toLowerCase()
    );

    if (!hasCategoryColumns) {
      const defaultColumns = [
        { title: 'To Do', color: 'blue1', colorBg: 'blue11' },
        { title: 'In Progress', color: 'blue2', colorBg: 'blue22' },
        { title: 'Done', color: 'blue3', colorBg: 'blue33' },
      ];

      defaultColumns.forEach(({ title, color, colorBg }) =>
        addColumn(title, decodedTitle, color, colorBg)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [decodedTitle]);

  const filteredColumns = columns.filter(
    (col) => col.categoryTitle.toLowerCase() === decodedTitle.toLowerCase()
  );

  const navigateToHome = () => navigate('/');

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
  
    const activeId = String(active.id); 
    const overId = String(over.id);     
  
    const [fromColId, fromCardId] = activeId.split(':');
  

    const toColId = overId.split(':')[0]; 
  
    if (fromColId && toColId) {
      moveCard(fromColId, toColId, fromCardId); 
    }
  };
  return (
    <div>
      <div className="bg-slate-950 h-15 w-screen flex items-center relative px-4">
        <div className="flex gap-3 px-3 py-5 items-center">
          <FaHome className="text-blue-400 text-xl" />
          <button
            onClick={navigateToHome}
            className="flex items-center p-2 hover:text-blue-400"
          >
            <MdKeyboardBackspace className="text-[25px] text-blue-400" />
            <h1 className="text-white font-semibold text-xl hover:text-blue-400">
              Back
            </h1>
          </button>
        </div>
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
          {decodeURIComponent(title || '')}
        </h1>
      </div>

      <div className="bg-slate-950 min-h-screen border-y border-slate-900">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <div className="flex items-start gap-4 overflow-x-auto p-4 scrollbar-hide justify-start md:justify-center">
            {filteredColumns.map((col) => (
              <SortableContext
                key={col.id}
                items={col.cards.map((c) => `${col.id}:${c.id}`)}
                strategy={verticalListSortingStrategy}
              >
                <ColumnCard 
                 key={col.id}
                 columnData={{
                   ...col,
                   color: col.color ?? 'blue1',
                   colorBg: col.colorBg ?? 'blue11',
                 }} />
              </SortableContext>
            ))}
          </div>
        </DndContext>
      </div>
    </div>
  );
};
export default CategoryPage;
