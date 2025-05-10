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
      imageUrl: 'https://www.robotshop.com/cdn/shop/files/robotshop-m100rak-v4-modular-robotic-arm-kit-no-electronics-2_1024x.webp?v=1720521279'
    },
    {
      name: 'ROBOT TORSOS',
      key: 'torsos',
      imageUrl: 'https://www.buyourobot.com/wp-content/uploads/edd/2015/04/00102_body_thumb.jpg'
    },
    {
      name: 'ROBOT BASES',
      key: 'bases',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVfdSHgUZ8w7pIMpcFNq57FyVeDVikb9FRQ&s'
    }
  ];
}
