import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component implements OnInit {

  @Output() sendChild2Data: EventEmitter<any[]> = new EventEmitter<any[]>();

  private automobileData: any[] = [{"type":"voiture", "marque":"Renault", "model":"Clio"}];

  constructor() { }

  ngOnInit() {
    this.sendChild2Data.emit(this.automobileData);
    console.log('Event Emitter from Child2: ', this.sendChild2Data);
  }

}
