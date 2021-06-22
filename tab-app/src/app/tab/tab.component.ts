import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})

export class TabComponent implements OnInit {


  public tabButtons = ['TAB 1', 'TAB 2', 'TAB 3', 'TAB 4'];
  public selectedTabButton: any;

  public length = 0;
  public domEles: any;

  public ul = document.getElementById('list');
  public liSelected: any;

  constructor() { }

  ngOnInit(): void {
    this.selectedTabButton = this.tabButtons[0];
  }


  openContent(tabButton: any) {

    this.selectedTabButton = tabButton;
    console.log('tab', this.selectedTabButton)
    return this.selectedTabButton;
  }

}
