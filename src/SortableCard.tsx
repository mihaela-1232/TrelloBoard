import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { ReactNode } from 'react';

interface SortableCardProps {
  id: string;
  children: ReactNode;
}

const SortableCard = ({ id, children }: SortableCardProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}   className="cursor-grab" data-dnd-kit-disable-dnd>
      {children}
    </div>
  );
};

export default SortableCard;
