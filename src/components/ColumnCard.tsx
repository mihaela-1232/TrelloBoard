import { ColumnTaskCard } from './ColumnTaskCard';
import { ButtonAddCardInColumn } from './ButtonAddCardInColumn';
import { useColumnCard } from '../contexts/ColumnCardContext';
import type { ColumnCardProps2 } from '../api/types';

export const ColumnCard = ({ columnData }: ColumnCardProps2) => {
  const { addColumnTaskCard, deleteColumnTaskCard } = useColumnCard();
  const { titleColumn, color, colorBg, id: columnId, cards } = columnData;

  const colorMap: Record<string, string> = {
    blue1: 'bg-sky-800',
    blue2: 'bg-sky-600',
    blue3: 'bg-sky-400',
  };

  const colorMapBg: Record<string, string> = {
    blue11: 'border-sky-800',
    blue22: 'border-sky-600',
    blue33: 'border-sky-400',
  };

  return (
    <div
      className={`w-80 min-h-200 border border-2 rounded-2xl mx-10 my-7 ${
        colorMapBg[colorBg]
      }`}
    >
      <div className={`w-80 h-15 ${colorMap[color]} rounded-xl`}>
        <h1 className="text-black font-bold flex items-center justify-center text-[28px] py-2">
          {titleColumn}
        </h1>
      </div>

      <div className="flex justify-center flex-col gap-4">
        {cards.map((card) => (
          <ColumnTaskCard
            key={card.id}
            id={card.id}
            tasks={card.tasks}
            columnId={columnId}
            onDelete={() => deleteColumnTaskCard(columnId, card.id)}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <ButtonAddCardInColumn
          onAddTaskCard={() => addColumnTaskCard(columnId)}
        />
      </div>
    </div>
  );
};
