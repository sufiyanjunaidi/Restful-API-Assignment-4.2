import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent {
  @Output() playerAdded: EventEmitter<Player> = new EventEmitter<Player>();
  @Output() playerUpdated: EventEmitter<Player> = new EventEmitter<Player>();
  @Input() player: Player = {
    id: 0,
    name: '',
    age: 0,
    team: ''
  };

  addOrUpdatePlayer(): void {
    if (this.player.id === 0) {
      // Add new player
      this.playerAdded.emit(this.player);
    } else {
      // Update existing player
      this.playerUpdated.emit(this.player);
    }
    this.resetForm();
  }

  resetForm(): void {
    this.player = {
      id: 0,
      name: '',
      age: 0,
      team: ''
    };
  }
}
