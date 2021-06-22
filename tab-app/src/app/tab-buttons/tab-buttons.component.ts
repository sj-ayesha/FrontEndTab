import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-buttons',
  templateUrl: './tab-buttons.component.html',
  styleUrls: ['./tab-buttons.component.scss']
})

export class TabButtonsComponent implements OnInit{


  @Input() tabButtonList: string[] = [];
  @Input() isSelected: any;

  @Output() openContent: EventEmitter<any> = new EventEmitter();

  public tabButton = ['TAB 1', 'TAB 2', 'TAB 3', 'TAB 4'];
  public selected: any;
  public ariaValue: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.isSelected = this.tabButtonList[0];

  }

  displayContent(tab: any) {
    this.isSelected = tab;
    this.openContent.emit(this.isSelected);
  }



}
