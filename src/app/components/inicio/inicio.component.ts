import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Domo data slider
  data = [
    {
      img: 'https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg',
      title: 'Slide 1',
    },
    {
      img: 'https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img2.jpg',
      title: 'Slide 2',
    },
    {
      img: 'https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg',
      title: 'Slide 3',
    },
  ];

}
