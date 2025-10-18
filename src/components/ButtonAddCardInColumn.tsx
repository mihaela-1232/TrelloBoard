import type { ButtonAddCardInColumnProps } from '../api/types';

export const ButtonAddCardInColumn = ({
  onAddTaskCard,
}: ButtonAddCardInColumnProps) => {
  return (
    <div>
      <button
        onClick={onAddTaskCard}
        className="bg-blue-200 flex justify-center items-center rounded-xl px-3 py-2 mb-8 mt-3 border-blue-400 font-semibold border hover:bg-blue-200 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]
            hover:text-blue-400"
      >
        {' '}
        Add project
      </button>
    </div>
  );
};
