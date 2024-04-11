import { Component, EventEmitter, Input, Output } from '@angular/core';

function trimString(value: string | undefined) {
  return value?.trim() ?? '';
}

interface Game {
  id: number,
  name: string
}
@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input({ required: true, transform: trimString })
  username = ''

  @Output()
  addFavoriteEvent = new EventEmitter<string>()

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName)
  }

  games: Game[] = [
    {
      id: 1,
      name: 'Uncharted 1'
    },
    {
      id: 2,
      name: 'Minecraft'
    },
    {
      id: 3,
      name: 'Spiderman'
    },
  ]
}
