export enum EnumMapActions {
    NEW = 0,
    LOAD = 1,
    SAVE = 2,
    SAVE_AS = 3,
    EDIT = 4,
    RESET = 5,
    DELETE = 6,
    PUBLISH = 7,
    EXPORT_AS_JSON = 8
}

export interface ITournament {
    id: number;
    date: number;
}