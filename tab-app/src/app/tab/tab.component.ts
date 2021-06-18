import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  public tabButton = ['TAB 1', 'TAB 2', 'TAB 3', 'TAB 4'];
  public selected: any;

  constructor() { }

  ngOnInit(): void {
    this.selected = this.tabButton[0];
  }

  openContent(tabButton: any) {
    this.selected = tabButton;
  }

}
