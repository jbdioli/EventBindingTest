import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.page.html',
  styleUrls: ['./parent.page.scss'],
})
export class ParentPage implements OnInit {
  automobileData: any[] = [];

  constructor() { }

  ngOnInit() {

    console.log('Array Data : ', this.automobileData);
  }

  getChildData(array: any[]) {
    this.automobileData.push(array);
    console.log('Get Array : ', this.automobileData);
  }
}
