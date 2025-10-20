import type { ButtonColumnTaskCardProps } from '../api/types';

export const ButtonColumnTaskCard = ({color, icon: Icon, onClick, onMouseDown}: ButtonColumnTaskCardProps) => {
  const baseClasses =
    'p-2 mx-1 rounded-2xl hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-colors duration-200';
  const colorMap: Record<string, string> = {
    green: 'bg-green-400 hover:bg-green-600',
    blue: 'bg-blue-500 hover:bg-blue-600',
    red: 'bg-red-500 hover:bg-red-600',
    yellow: 'bg-yellow-500 hover:bg-yellow-600',
  };
  return (
    <button onClick={onClick} onMouseDown={onMouseDown} className={`${baseClasses} ${colorMap[color]}`}>
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
};
