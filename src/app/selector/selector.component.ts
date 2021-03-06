import { Component, OnInit } from '@angular/core';
import {DateService} from '../shared/date.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  constructor(private dateService: DateService) { }

  go(dir: number): void{
    this.dateService.changeMonth(dir);
}

  ngOnInit(): void {
  }

}
