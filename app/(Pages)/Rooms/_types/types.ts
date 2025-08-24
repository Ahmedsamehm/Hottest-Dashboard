export interface RoomType {
  id: number;
  name: string;
  floor: number;
  type: string;
  capacity: number;
  price: number;
  status: string;
  description: string;
  amenities: string[];
  lastCleaned: string;
}
