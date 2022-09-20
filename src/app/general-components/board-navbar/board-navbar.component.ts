import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-navbar',
  templateUrl: './board-navbar.component.html',
  styleUrls: ['./board-navbar.component.scss']
})
export class BoardNavbarComponent implements OnInit {

  public imgPath = '../../assets/images/board-icon-medium.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
