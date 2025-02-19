export type Reservation = {
    id: string;
    guestId: string;
    checkIn: string;
    checkOut: string;
    roomType: string;
    numberOfGuests: number;
    status: string;
    remarks: string;
};