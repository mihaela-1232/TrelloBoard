import { useNavigate } from 'react-router';
import type { BoardCardProps } from '../api/types';

export const BoardCard = ({ title, icon: Icon }: BoardCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/category/${encodeURIComponent(title)}`)}
      className="w-80 h-50 bg-blue-400 rounded-xl px-4 py-12 border border-transparent shadow-md hover:bg-blue-200 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] 
 hover:border-3 hover:border-blue-400 transition-all duration-300"
    >
      <div className="flex items-center justify-center  ">
        {Icon && <Icon className="text-[60px] text-slate-950 " />}
      </div>
      <div className="flex justify-center">
        <div className="text-2xl text-slate-950 font-bold ">{title}</div>
      </div>
    </div>
  );
};
