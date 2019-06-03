import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: "app-child1",
  templateUrl: "./child1.page.html",
  styleUrls: ["./child1.page.scss"]
})
export class Child1Page implements OnInit {
  @Output() sendChild1Data: EventEmitter<any[]> = new EventEmitter<any[]>();

  private maisonData: any[] = [
    { chambre: 3, salledebain: 1, cuisine: 1, salon: 1 }
  ];

  constructor(private ev: Events) {}

  ngOnInit() {
    this.sendChild1Data.emit(this.maisonData);
    console.log('Event Emitter from Child1: ', this.sendChild1Data);


    // Other solution
    // this.ev.publish('child1', this.maisonData);
    // console.log('Event from Child1: ', this.ev);
  }
}
