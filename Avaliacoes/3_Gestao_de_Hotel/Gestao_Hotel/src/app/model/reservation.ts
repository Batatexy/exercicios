export type Reservation = {
    id: number;
    guestId: number;
    checkIn: string;
    checkOut: string;
    roomType: string;
    numberOfGuests: number;
    status: string;
    remarks: string;
};