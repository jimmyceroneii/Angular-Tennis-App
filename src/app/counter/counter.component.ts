import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  player1GameScore = 0;
  player1GameScoreDisplay = '0';
  player1CurrentSetScore = 0;
  player1Set1Display = 0;
  player1Set2Display = 0;
  player1Set3Display = 0;
  player1TiebreakScore = 0;
  player1SetsWon = 0;
  player2GameScore = 0;
  player2GameScoreDisplay = '0';
  player2CurrentSetScore = 0;
  player2Set1Display = 0;
  player2Set2Display = 0;
  player2Set3Display = 0;
  player2TiebreakScore = 0;
  player2SetsWon = 0;
  currentSet = 1;
  winnerText = '';

  incrementPoint1 () {
    if (this.player1CurrentSetScore == 6 && this.player2CurrentSetScore == 6) {
      this.player1TiebreakScore++;
      if (this.player1TiebreakScore >= 7 && this.player2TiebreakScore <= (this.player1TiebreakScore-2)) {
        this.player1SetsWon++;
        this.incrementSet1();
        this.player1CurrentSetScore = 0;
        this.player2CurrentSetScore = 0;
        this.currentSet++;
        this.player1TiebreakScore = 0;
        this.player2TiebreakScore = 0;
      }
    }
    else {
    this.player1GameScore++;
    if (this.player1GameScore > 3 && this.player2GameScore <= (this.player1GameScore-2)) {
      this.player1GameScore = 0;
      this.player1GameScoreDisplay = '0';
      this.player2GameScore = 0;
      this.player2GameScoreDisplay = '0';
      this.incrementSet1();
      if ((this.player1CurrentSetScore == 6 && this.player2CurrentSetScore <= 4) || (this.player1CurrentSetScore == 7 && this.player2CurrentSetScore == 5)) {
        this.player1CurrentSetScore = 0;
        this.player2CurrentSetScore = 0;
        this.currentSet++;
        this.player1SetsWon++;
      }
    }
    this.UpdateDisplayPlayer1();
    this.UpdateDisplayPlayer2();
    }
    this.didPlayer1Win();
  }
  UpdateDisplayPlayer1 () {
    if (this.player1GameScore > 3 && (this.player2GameScore >= 3 && this.player2GameScore < this.player1GameScore)) {
      this.player1GameScoreDisplay = 'Adv';
    }
    else if (this.player1GameScore >= 3 && this.player2GameScore == this.player1GameScore) {
      this.player1GameScoreDisplay = '40';
    }
    else if (this.player1GameScore >= 3 && this.player1GameScore == (this.player2GameScore-1)) {
      this.player1GameScoreDisplay = '40';
    }
    else if (this.player1GameScore == 1) {
      this.player1GameScoreDisplay = '15';
    }
    else if (this.player1GameScore == 2) {
      this.player1GameScoreDisplay = '30';
    }
    else if (this.player1GameScore == 3) {
      this.player1GameScoreDisplay = '40';
    }
  }
  incrementSet1 () {
    this.player1CurrentSetScore++;
    if (this.currentSet == 1) {
      this.player1Set1Display = this.player1CurrentSetScore;
    }
    else if (this.currentSet == 2) {
      this.player1Set2Display = this.player1CurrentSetScore;
    }
    else if (this.currentSet == 3 && this.player1SetsWon != 2) {
      this.player1Set3Display = this.player1CurrentSetScore;
    }
  }
  didPlayer1Win() {
    if (this.player1SetsWon == 2) {
      this.winnerText = 'Player 1 has won the match!';
    }
  }
  incrementPoint2 () {
    if (this.player2CurrentSetScore == 6 && this.player1CurrentSetScore == 6) {
      this.player2TiebreakScore++;
      if (this.player2TiebreakScore >= 7 && this.player1TiebreakScore <= (this.player2TiebreakScore-2)) {
        this.incrementSet2();
        this.player1CurrentSetScore = 0;
        this.player2CurrentSetScore = 0;
        this.currentSet++;
        this.player2TiebreakScore = 0;
        this.player1TiebreakScore = 0;
        this.player2SetsWon++;
      }
    }
    else {
    this.player2GameScore++;
    if (this.player2GameScore > 3 && this.player1GameScore <= (this.player2GameScore-2)) {
      this.player2GameScore = 0;
      this.player2GameScoreDisplay = '0';
      this.player1GameScore = 0;
      this.player1GameScoreDisplay = '0';
      this.incrementSet2();
      if ((this.player2CurrentSetScore == 6 && this.player1CurrentSetScore <= 4) || (this.player2CurrentSetScore == 7 && this.player1CurrentSetScore == 5)) {
        this.player1CurrentSetScore = 0;
        this.player2CurrentSetScore = 0;
        this.currentSet++;
        this.player2SetsWon++;
      }
    }
    this.UpdateDisplayPlayer1();
    this.UpdateDisplayPlayer2();
    }
    this.didPlayer2Win();
  }
  UpdateDisplayPlayer2 () {
    if (this.player2GameScore > 3 && (this.player1GameScore >= 3 && this.player1GameScore < this.player2GameScore)) {
      this.player2GameScoreDisplay = 'Adv';
    }
    else if (this.player2GameScore >= 3 && this.player2GameScore == this.player1GameScore) {
      this.player2GameScoreDisplay = '40';
    }
    else if (this.player2GameScore >= 3 && this.player2GameScore == (this.player1GameScore-1)) {
      this.player2GameScoreDisplay = '40';
    }
    else if (this.player2GameScore == 1) {
      this.player2GameScoreDisplay = '15';
    }
    else if (this.player2GameScore == 2) {
      this.player2GameScoreDisplay = '30';
    }
    else if (this.player2GameScore == 3) {
      this.player2GameScoreDisplay = '40';
    }
  }
  incrementSet2 () {
    this.player2CurrentSetScore++;
    if (this.currentSet == 1) {
      this.player2Set1Display = this.player2CurrentSetScore;
    }
    else if (this.currentSet == 2) {
      this.player2Set2Display = this.player2CurrentSetScore;
    }
    else if (this.currentSet == 3 && this.player2SetsWon != 2) {
      this.player2Set3Display = this.player2CurrentSetScore;
    }
  }
  didPlayer2Win() {
    if (this.player2SetsWon == 2) {
      this.winnerText = 'Player 2 has won the match!';
    }
  }

  resetButton() {
  this.player1GameScore = 0;
  this.player1GameScoreDisplay = '0';
  this.player1CurrentSetScore = 0;
  this.player1Set1Display = 0;
  this.player1Set2Display = 0;
  this.player1Set3Display = 0;
  this.player1TiebreakScore = 0;
  this.player1SetsWon = 0;
  this.player2GameScore = 0;
  this.player2GameScoreDisplay = '0';
  this.player2CurrentSetScore = 0;
  this.player2Set1Display = 0;
  this.player2Set2Display = 0;
  this.player2Set3Display = 0;
  this.player2TiebreakScore = 0;
  this.player2SetsWon = 0;
  this.currentSet = 1;
  this.winnerText = '';
  }

  constructor() { }

  ngOnInit() {
  }

}