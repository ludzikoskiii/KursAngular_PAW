import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  nazwaKursu = "Angular v-21 Full course"

  stylAkapitu = "primary";

  showWelcomeMessage(){
    alert("Witamy w Angular 21");
  }
  onStateChanged() {
    alert("Status zmieniony");
  }
  changeCourseName(text:string){
    this.nazwaKursu = text;
  }
}
