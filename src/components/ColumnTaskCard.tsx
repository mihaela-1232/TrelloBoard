import { IoIosAddCircleOutline } from 'react-icons/io';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from 'react';
import { ButtonColumnTaskCard } from './ButtonColumnTaskCard';
import { TaskCard } from './TaskCard';
import { useColumnCard } from '../contexts/ColumnCardContext';
import {loadCardDescription, loadCardTitle, saveCardDescription, saveCardTitle} from '../storages/ColumnTaskCardStorage';
import type { ColumnTaskCardProps2 } from '../api/types';

export const ColumnTaskCard = ({ id, columnId, tasks, onDelete}: ColumnTaskCardProps2) => {
  const { addTask, deleteTask, updateTask } = useColumnCard();
  const [title, setTitle] = useState(loadCardTitle(id) || '');
  const [description, setDescription] = useState(loadCardDescription(id) || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleBlur = () => {
    saveCardTitle(id, title.trim());
    setIsEditing(false);
  };

  const handleDescriptionBlur = () => {
    saveCardDescription(id, description.trim());
    setIsEditing(false);
  };
  return (
    <div className="w-70 bg-white p-2 mx-4 my-4 mb-0 rounded-xl">
      <div className="w-66 bg-blue-200 rounded px-2 py-4 flex items-center justify-center my-1">
        {isEditing ? (
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            onMouseDown={(e)=> e.stopPropagation()}
            data-dnd-kit-disable-dnd
            onBlur={handleTitleBlur}
            className="w-full px-2 py-1 rounded"
          />
        ) : (
          <h2 className="text-xl font-semibold">{title || 'Title'}</h2>
        )}
      </div>

      {isEditing ? (
        <textarea
          value={description}
          placeholder="Description of your project"
          onChange={(e) => setDescription(e.target.value)}
          onMouseDown={(e)=> e.stopPropagation()}
          data-dnd-kit-disable-dnd
          onBlur={handleDescriptionBlur}
          className="w-full px-2 py-1 rounded"
        />
      ) : (
        <h2 className="text-[18px] flex items-center justify-center">
          {description || ''}
        </h2>
      )}

      <h2 className="text-gray-400 text-[14px]">
        This project includes the following steps:
      </h2>

      <div className="flex items-center justify-center p-2">
        <ButtonColumnTaskCard
          color="green"
          icon={IoIosAddCircleOutline}
          onClick={() => addTask(columnId, id)}
          onMouseDown={(e)=> e.stopPropagation()}
          data-dnd-kit-disable-dnd
        />
        <ButtonColumnTaskCard
          color="blue"
          icon={CiEdit}
          onClick={() => setIsEditing(true)}
          onMouseDown={(e)=> e.stopPropagation()}
          data-dnd-kit-disable-dnd
        />
        <ButtonColumnTaskCard
          color="red"
          icon={RiDeleteBin6Line}
          onClick={onDelete}
          onMouseDown={(e)=> e.stopPropagation()}
          data-dnd-kit-disable-dnd
        />
      </div>

      <div>
        {(tasks ?? []).map((task) => (
          <TaskCard
            key={task.id}
            taskText={task.text}
            onDelete={() => deleteTask(columnId, id, task.id)}
            onUpdate={(text: string) => updateTask(columnId, id, task.id, text)}
          />
        ))}
      </div>
    </div>
  );
};
