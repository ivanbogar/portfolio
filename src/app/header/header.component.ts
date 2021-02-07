import { Component, OnInit } from '@angular/core';
import { faEllipsisH, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  faEllipsisH = faEllipsisH;
  faBars = faBars;
  
  constructor() { }

  ngOnInit(): void {
  }

}
