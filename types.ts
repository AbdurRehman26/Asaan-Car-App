
export interface Offering {
  id: string;
  driverName: string;
  driverRating: number;
  totalRides: number;
  price: number;
  pickup: string;
  dropoff: string;
  pickupTime: string;
  dropoffTime: string;
  days: string[];
  vehicle: string;
  ac: boolean;
  seatsLeft: number;
  imageUrl?: string;
  femaleOnly?: boolean;
}

export interface ChatPreview {
  id: string;
  name: string;
  role: 'DRIVER' | 'PASSENGER' | 'SUPPORT';
  lastMessage: string;
  time: string;
  unreadCount: number;
  avatarUrl: string;
  online?: boolean;
  rideId?: string;
}
