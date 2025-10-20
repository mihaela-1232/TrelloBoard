export type BoardCardProps = {
  title: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isDraggable?: boolean;
  onDelete?: ()=> void;
};

export type ButtonColumnTaskCardProps = {
  color: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: (e:React.MouseEvent<HTMLButtonElement> )=> void
};

export type ColumnTaskCardProps = {
  initialTitle?: string;
  initialDescription?: string;
  id: string;
  onDelete: () => void;
};

export type ColumnCardProps = {
  id: string;
  title: string;
  description: string;
};

export type ButtonAddCardInColumnProps = {
  onAddTaskCard: () => void;
};

export type TaskCardProps = {
  taskText: string;
  onDelete: () => void;
  onUpdate: (text: string) => void;
};

export type TaskProps = {
  id: string;
  text: string;
};

export type ColumnCardCategoryProps = {
  titleColumn: string;
  color: string;
  colorBg: string;
};

export interface Category {
  id: number;
  title: string;
}

export interface ButtonBoardCardProps {
  categories: Category[];
  updateCategory: (id: number, value: string) => void;
  deleteCategory: (id: number) => void;
  addCategory: () => void;
}

export interface CategoryContextType {
  categories: Category[];
  addCategory: () => void;
  deleteCategory: (id: number) => void;
  updateCategory: (id: number, value: string) => void;
  deleteEmptyCategories: (id: number) => void;
  getCategoryByTitle: (title: string) => Category | undefined;
  reorderCategories: (newOrder: Category[]) => void;
}

export interface Task {
  id: string;
  text: string;
}

export interface ColumnTaskCard {
  id: string;
  title: string;
  description: string;
  tasks: Task[];
}

export interface Column {
  id: string;
  titleColumn: string;
  color?: string;
  colorBg?: string;
  categoryTitle: string;
  cards: ColumnTaskCard[];
}

export interface ColumnCardContextType {
  columns: Column[];
  addColumn: (
    title: string,
    categoryTitle: string,
    color?: string,
    colorBg?: string
  ) => void;
  deleteColumn: (id: string) => void;
  addColumnTaskCard: (
    columnId: string,
    title?: string,
    description?: string
  ) => void;
  deleteColumnTaskCard: (columnId: string, cardId: string) => void;
  updateColumnTaskCard: (
    columnId: string,
    cardId: string,
    title: string,
    description: string
  ) => void;
  addTask: (columnId: string, cardId: string) => void;
  deleteTask: (columnId: string, cardId: string, taskId: string) => void;
  updateTask: (
    columnId: string,
    cardId: string,
    taskId: string,
    text: string
  ) => void;
  moveCard:
    (fromColumnId: string, 
      toColumnId: string,
       cardId: string
  ) => void
}

export interface ColumnCardData {
  id: string;
  titleColumn: string;
  color: string;
  colorBg: string;
  categoryTitle: string;
  cards: {
    id: string;
    tasks: {
      id: string;
      text: string;
    }[];
  }[];
}

export interface ColumnCardProps2 {
  columnData: ColumnCardData;
}

export interface ColumnTaskCardProps2 {
  id: string;
  columnId: string;
  tasks: Task[];
  onDelete: () => void;
}

export interface TaskCardProps2 {
  taskText: string;
  onDelete: () => void;
  onUpdate: (text: string) => void;
}

