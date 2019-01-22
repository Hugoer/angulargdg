import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TournamentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
