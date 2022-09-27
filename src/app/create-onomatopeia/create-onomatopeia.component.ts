import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-create-onomatopeia',
  templateUrl: './create-onomatopeia.component.html',
  styleUrls: ['./create-onomatopeia.component.css']
})
export class CreateOnomatopeiaComponent implements OnInit {

  constructor() { }

  newOnomatopia: string = '';

@Output()
  onomatopia: EventEmitter<string> = new EventEmitter();

  createOnomatopia(): void {
    this.onomatopia.emit(this.newOnomatopia);
  }
   

  ngOnInit(): void {
  }

}
