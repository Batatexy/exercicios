export type Reservation = {
    id?: string;
    guestId: string;
    checkIn: string;
    checkOut: string;
    roomType: number;
    numberOfGuests: number;
    status: string;
    remarks: string;
};