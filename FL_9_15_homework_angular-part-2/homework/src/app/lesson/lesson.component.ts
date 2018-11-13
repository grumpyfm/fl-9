import {Component} from '@angular/core';
import {ScheduleService} from '../../schedule.service';
import {List} from '../lesson';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.css']
})
export class LessonComponent {
    listOfLectures: List[];
    columns: string[];
    columns = this.scheduleService.getColumns();
    listOfLectures = this.scheduleService.listOfLectures;

    constructor(private scheduleService: ScheduleService) {
    }

}
