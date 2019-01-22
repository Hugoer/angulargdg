import { Action } from '@ngrx/store';
import { ITournament } from '@app/pages/tournament/tournament.model';

export enum TournamentActionTypes {
    LoadTournament = '[TOURNAMENT] - LoadTournament',
    // NewTournament = '[TOURNAMENT] - NewTournament',
    AddTournament = '[TOURNAMENT] - AddTournament',
    RemoveTournament = '[TOURNAMENT] - RemoveTournament',
}

export class LoadTournament implements Action {
    readonly type = TournamentActionTypes.LoadTournament;
    constructor(public tournaments: ITournament[]) { }
}

// export class NewTournament implements Action {
//     readonly type = TournamentActionTypes.NewTournament;
//     constructor(public tournament: ITournament) { }
// }

export class AddTournament implements Action {
    readonly type = TournamentActionTypes.AddTournament;
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
    AddTournament;
