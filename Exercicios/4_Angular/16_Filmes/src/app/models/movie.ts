export type Movie = {
    id: number;
    name: string;
    image: string;
    date: string;

    //Salvar no localStorage
    liked: boolean;
};