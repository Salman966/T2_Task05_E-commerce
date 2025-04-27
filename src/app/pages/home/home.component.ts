import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories = [
    {
      name: 'ROBOT HEADS',
      key: 'heads',
      imageUrl: 'https://cdn.vectorstock.com/i/1000v/63/40/cyborg-robot-head-engraving-vector-23936340.jpg'
    },
    {
      name: 'ROBOT ARMS',
      key: 'arms',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXbielPBHsnRU0QF7Kn6kqO4lw7A73Rn-lA&s'
    },
    {
      name: 'ROBOT TORSOS',
      key: 'torsos',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ic_16aFaw1yc7D7WvxSPNtR8J7_fYqgzRQ&s'
    },
    {
      name: 'ROBOT BASES',
      key: 'bases',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVfdSHgUZ8w7pIMpcFNq57FyVeDVikb9FRQ&s'
    }
  ];
}
