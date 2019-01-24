import { Action } from '@ngrx/store';
import { ITournament } from '@app/pages/tournament/tournament.model';

export enum TournamentActionTypes {
    LoadTournament = '[TOURNAMENT] - LoadTournament',
    AddTournament = '[TOURNAMENT] - AddTournament',
    RemoveTournament = '[TOURNAMENT] - RemoveTournament',
    SetDirty = '[TOURNAMENT] - SetDirty',
    SetPristine = '[TOURNAMENT] - SetPristine',
}

export class LoadTournament implements Action {
    readonly type = TournamentActionTypes.LoadTournament;
    constructor(public tournaments: ITournament[]) { }
}

export class AddTournament implements Action {
    readonly type = TournamentActionTypes.AddTournament;
    constructor(public tournament: ITournament) { }
}

export class SetDirty implements Action {
    readonly type = TournamentActionTypes.SetDirty;
    constructor(public tournament: ITournament) { }
}

export class SetPristine implements Action {
    readonly type = TournamentActionTypes.SetPristine;
    constructor(public tournament: ITournament) { }
}

export class RemoveTournament implements Action {
    readonly type = TournamentActionTypes.RemoveTournament;
    constructor(public tournament: ITournament) { }
}

export type TournamentActions =
    LoadTournament |
    // NewTournament |
    RemoveTournament |
    SetDirty |
    SetPristine |
    AddTournament;
