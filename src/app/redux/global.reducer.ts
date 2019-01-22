import { ActionReducerMap } from '@ngrx/store';
import { TournamentState, tournamentReducer } from './tournament/tournament.reducer';

export interface GDGState {
    tournaments: TournamentState;
}

export const compReducers: ActionReducerMap<GDGState> = {
    tournaments: tournamentReducer,
};
