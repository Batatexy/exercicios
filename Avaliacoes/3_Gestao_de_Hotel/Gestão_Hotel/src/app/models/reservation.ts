export type Reservation = {
    id: string;
    guestId: number;
    checkIn: string;
    checkOut: string;
    roomType: string;
    numberOfGuests: number;
    status: string;
    remarks: string;
};