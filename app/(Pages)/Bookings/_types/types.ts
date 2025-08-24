export interface BookingResponse {
  id: number;

  checkin: string;
  checkout: string;
  nights: number;
  price: number;
  extrasPrice: number;
  totalPrice: number;
  status: string;
  hasBreakfast: boolean;
  isPaid: boolean;
  observations: string;
  roomId: number;
  guest: {
    fullName: string;
    email: string;
    phone: string;
  };
}
