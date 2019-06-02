import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.page.html',
  styleUrls: ['./parent.page.scss'],
})
export class ParentPage implements OnInit {
  automobileData: any[] = [];
  maisonData: any[] = [];
  selectedPath = '';

  pages = [
    {
      title: 'Child Page',
      url: '/parent/menu/Child',
      value: 0
    }
  ];

  constructor(private router: Router, private ev: Events) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }
  ngOnInit() {
    this.ev.subscribe('child1', value => {
      this.maisonData = value;
      console.log('Array Data maison : ', this.maisonData);
    });

    console.log('Array Data automobile : ', this.automobileData);
  }

  getChildDataAutomobile(array: any[]) {
    this.automobileData.push(array);
    // console.log('Get Array Automobile: ', this.automobileData);
  }

  // getChildDataMaison(array: any[]) {
  //   this.maisonData.push(array);
  //   console.log('Get Array Maison: ', this.maisonData);
  // }

}
