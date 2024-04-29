import { Component } from '@angular/core';
import { IPerson, arr } from '../app/interfaces';
import { CommonModule } from '@angular/common';
import { PersonComponent } from "./components/person/person.component";
import { ActionManagerComponent } from './actionManager/action-manager/action-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, PersonComponent, ActionManagerComponent],
  providers: [ActionManagerComponent]
})
export class AppComponent {
  level!: number;
  sortedPeople!: IPerson[];
  arr = [1, 3, 8, 4, 5, 0, 6, 9, -5, 55, 5.5, Infinity, NaN, 12, -4, -5.2, 2, 1, 8, -5, -Infinity, 8, 3, 0];
  constructor(private actionManager: ActionManagerComponent) {
    ////zadanie 1
    this.displayPeopleList(arr);
    ///zadanie 2
    this.actionManager.subscribe(() => {
      console.log("example arg");
    });
    this.actionManager.subscribe(()=>{
      console.log(1+1)
    })
    this.actionManager.dispatch();
    ///zadanie 3
    const result = this.findIndexes(this.arr);
    console.log(result);
    

  }

  displayPeopleList(people: IPerson[]) {
    this.sortedPeople = this.sortPeopleByAge(people);
  }

  sortPeopleByAge(people: IPerson[]): IPerson[] {
    return people.slice().sort((a, b) => a.birthday.getTime() - b.birthday.getTime());
  }

  findIndexes(arr: number[]): number[] {
    const indexes: number[] = [];
    arr.forEach((item, index) => {
      if (item > 0) {
        indexes.push(index);
      }
    });
    return indexes;
  }



}
