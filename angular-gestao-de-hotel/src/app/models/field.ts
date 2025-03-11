export type Field = {
    model: string,
    name: string,

    type: string,
    select?: Array<{ id: number, name: string; }>;

    label: string,
    invalid: string;
};

