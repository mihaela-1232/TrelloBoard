import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';
import type { Column, ColumnCardContextType } from '../api/types';

const ColumnCardContext = createContext<ColumnCardContextType | undefined>(
  undefined
);

export const ColumnCardProvider = ({ children }: { children: ReactNode }) => {
  const [columns, setColumns] = useState<Column[]>(() => {
    const saved = localStorage.getItem('columns');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('columns', JSON.stringify(columns));
  }, [columns]);

  const addColumn = (
    title: string,
    categoryTitle: string,
    color: string = 'blue1',
    colorBg: string = 'blue11'
  ) => {
    if (!categoryTitle) return;

    setColumns((prev) => {
      const exists = prev.some(
        (col) =>
          col.categoryTitle.toLowerCase() === categoryTitle.toLowerCase() &&
          col.titleColumn.toLowerCase() === title.toLowerCase()
      );

      if (exists) return prev;

      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          titleColumn: title,
          categoryTitle: decodeURIComponent(categoryTitle.trim()),
          color,
          colorBg,
          cards: [],
        },
      ];
    });
  };

  const deleteColumn = (id: string) => {
    setColumns((prev) => prev.filter((col) => col.id !== id));
  };

  const addColumnTaskCard = (
    columnId: string,
    title: string = '',
    description: string = ''
  ) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? {
              ...col,
              cards: [
                ...col.cards,
                { id: crypto.randomUUID(), title, description, tasks: [] },
              ],
            }
          : col
      )
    );
  };

  const deleteColumnTaskCard = (columnId: string, cardId: string) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? { ...col, cards: col.cards.filter((c) => c.id !== cardId) }
          : col
      )
    );
  };

  const updateColumnTaskCard = (
    columnId: string,
    cardId: string,
    title: string,
    description: string
  ) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? {
              ...col,
              cards: col.cards.map((card) =>
                card.id === cardId ? { ...card, title, description } : card
              ),
            }
          : col
      )
    );
  };

  const addTask = (columnId: string, cardId: string) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? {
              ...col,
              cards: col.cards.map((card) =>
                card.id === cardId
                  ? {
                      ...card,
                      tasks: [
                        ...card.tasks,
                        { id: crypto.randomUUID(), text: 'New task' },
                      ],
                    }
                  : card
              ),
            }
          : col
      )
    );
  };

  const deleteTask = (columnId: string, cardId: string, taskId: string) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? {
              ...col,
              cards: col.cards.map((card) =>
                card.id === cardId
                  ? {
                      ...card,
                      tasks: card.tasks.filter((t) => t.id !== taskId),
                    }
                  : card
              ),
            }
          : col
      )
    );
  };

  const updateTask = (
    columnId: string,
    cardId: string,
    taskId: string,
    text: string
  ) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId
          ? {
              ...col,
              cards: col.cards.map((card) =>
                card.id === cardId
                  ? {
                      ...card,
                      tasks: card.tasks.map((t) =>
                        t.id === taskId ? { ...t, text } : t
                      ),
                    }
                  : card
              ),
            }
          : col
      )
    );
  };

  return (
    <ColumnCardContext.Provider
      value={{
        columns,
        addColumn,
        deleteColumn,
        addColumnTaskCard,
        deleteColumnTaskCard,
        updateColumnTaskCard,
        addTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </ColumnCardContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useColumnCard = () => {
  const context = useContext(ColumnCardContext);
  if (!context) {
    throw new Error('useColumnCard must be used within a ColumnCardProvider');
  }
  return context;
};
