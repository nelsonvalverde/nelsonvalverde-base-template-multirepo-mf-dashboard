export interface CardMinimalDetailInterface {
  icon: string;
  title?: string;
  color?: string;
  description?: string;
  items?: CardMinimalDetailItemInterface[];
}

export interface CardMinimalDetailItemInterface {
  label: string;
  icon?: string;
  separator?: boolean,
  action?: () => void
}
