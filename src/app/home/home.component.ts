import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // DATA BINDING
  public nome = 'Roosevelt';
  public sobrenome = 'Santos';
  public titulo = 'Imobiliaria 1141';
  public getNomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }

  // PROPERTY BINDING
  public imgUrl = 'https://pictures.escapia.com/HARDRE/202545/4003810267.jpg';
}
