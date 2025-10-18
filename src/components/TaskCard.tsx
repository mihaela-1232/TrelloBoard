import { useState, useEffect } from 'react';
import { ButtonColumnTaskCard } from './ButtonColumnTaskCard';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';
import type { TaskCardProps2 } from '../api/types';

export const TaskCard = ({ taskText, onDelete, onUpdate }: TaskCardProps2) => {
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [text, setText] = useState(taskText);

  useEffect(() => {
    setText(taskText);
  }, [taskText]);

  const handleBlur = () => {
    const newText = text.trim() === '' ? 'Add the step of your project' : text;
    setText(newText);
    setIsEditingTask(false);
    onUpdate(newText);
  };

  return (
    <div className="border rounded border-blue-400 bg-blue-100 mb-2">
      <div className="p-2 flex gap-3 justify-between items-center">
        {isEditingTask ? (
          <textarea
            value={text}
            placeholder="Add the step of your project"
            onChange={(e) => setText(e.target.value)}
            onBlur={handleBlur}
            autoFocus
            className="w-full px-2 py-1 rounded"
          />
        ) : (
          <h2 className="text-[18px] flex items-center justify-center">
            {text || 'Add the step of your project'}
          </h2>
        )}

        <div className="flex gap-2 shrink-0">
          <ButtonColumnTaskCard
            color="yellow"
            icon={CiEdit}
            onClick={() => setIsEditingTask(true)}
          />
          <ButtonColumnTaskCard
            color="red"
            icon={RiDeleteBin6Line}
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};
