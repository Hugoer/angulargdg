import { TournamentActions, TournamentActionTypes } from './tournament.actions';
// import { ITournament } from 'src/app/pages/tournament/tournament.model';
import { ITournament } from '../../pages/tournament/tournament.model';

export interface TournamentState {
    tournaments: ITournament[];
    isDirty: boolean;
}

const initialStatus: TournamentState = {
    tournaments: [],
    isDirty: false
};

export function tournamentReducer(state = initialStatus, action: TournamentActions): TournamentState {

    switch (action.type) {
        case TournamentActionTypes.LoadTournament:
            return {
                ...state,
                tournaments: [...action.tournaments]
            }
        case TournamentActionTypes.AddTournament:
            return {
                ...state,
                tournaments: [...state.tournaments, action.tournament]
            }
        case TournamentActionTypes.RemoveTournament:
            const tournaments = state.tournaments.filter((tournament) => {
                return (tournament.id !== action.tournament.id)
            });
            return {
                ...state,
                tournaments: [...tournaments]
            }
    }
}