import { FaHome } from 'react-icons/fa';
import { ColumnCard } from '../components/ColumnCard';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router';
import { useCategory } from '../contexts/CategoryContext';
import { useColumnCard } from '../contexts/ColumnCardContext';
import { useEffect } from 'react';

const CategoryPage = () => {
  const navigate = useNavigate();
  const { title } = useParams<{ title: string }>();
  const { getCategoryByTitle } = useCategory();
  const { columns, addColumn } = useColumnCard();

  const decodedTitle = decodeURIComponent(title || '');
  const category = getCategoryByTitle(decodedTitle);

  useEffect(() => {
    if (!decodedTitle) return;

    const hasCategoryColumns = columns.some(
      (col) => col.categoryTitle.toLowerCase() === decodedTitle.toLowerCase()
    );

    if (!hasCategoryColumns) {
      ['To Do', 'In Progress', 'Done'].forEach((colTitle) =>
        addColumn(colTitle, decodedTitle)
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [decodedTitle]);

  const filteredColumns = columns.filter(
    (col) => col.categoryTitle.toLowerCase() === decodedTitle.toLowerCase()
  );

  const navigateToHome = () => navigate('/');
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
        <h1 className="text-3xl font-bold text-center py-6">
          {category ? category.title : ''}
        </h1>
        <div
          className="flex items-start gap-4 overflow-x-auto p-4 scrollbar-hide 
        justify-start md:justify-center"
        >
          {filteredColumns.map((col) => (
            <ColumnCard
              key={col.id}
              columnData={{
                ...col,
                color: col.color || 'blue1',
                colorBg: col.colorBg || 'blue11',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CategoryPage;
