export interface ISwarmProps {
  data: ISwarmItem[];
}

export interface ISwarmItem {
  id: String;
  group: String;
  price: Number;
  volume: Number;
}
