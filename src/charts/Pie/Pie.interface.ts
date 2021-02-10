export interface IPieProps {
  data: IPieItem[];
}

export interface IPieItem {
  id: String;
  label: String;
  value: Number;
  color: String;
}
