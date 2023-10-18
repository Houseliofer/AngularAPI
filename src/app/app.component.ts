import { Component } from '@angular/core';
import { RickAndMortyService } from './services/rick-and-morty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemploApi';

  characters: any;
  
  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit() {
    this.rickAndMortyService.getCharacters().subscribe(data => {
      this.characters = data.results;
    });
  }
}
