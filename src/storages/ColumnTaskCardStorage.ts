export const saveCardTitle = (id: string, title: string) => {
  localStorage.setItem(`card-${id}-title`, title);
};

export const saveCardDescription = (id: string, description: string) => {
  localStorage.setItem(`card-${id}-description`, description);
};

export const loadCardTitle = (id: string): string | null => {
  return localStorage.getItem(`card-${id}-title`);
};

export const loadCardDescription = (id: string): string | null => {
  return localStorage.getItem(`card-${id}-description`);
};

export const removeCardStorage = (id: string) => {
  localStorage.removeItem(`card-${id}-title`);
  localStorage.removeItem(`card-${id}-description`);
};
