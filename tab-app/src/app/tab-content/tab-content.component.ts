import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {

  @Input() tab:any;

  public tabContents = ['Content 1', 'Content 2', 'Content 3', 'Content 4'];

  constructor() { }

  ngOnInit(): void {
  }

}
