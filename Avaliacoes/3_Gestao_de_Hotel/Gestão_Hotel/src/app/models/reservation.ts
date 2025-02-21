export type Reservation = {
    id: number | string;
    guestId: number;
    checkIn: string;
    checkOut: string;
    roomType: number;
    numberOfGuests: number;
    status: string;
    remarks: string;
};