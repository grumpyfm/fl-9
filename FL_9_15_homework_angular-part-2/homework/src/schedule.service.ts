import {Injectable} from '@angular/core';
import {List} from './app/lesson';

@Injectable({
    providedIn: 'root'
})
export class ScheduleService {
    count = 0;
    listOfLectures: List[] = [];

    columns: any = ['Number', 'Topic', 'Date', 'Lecturer', 'Actions'];

    getColumns() {
        return this.columns;
    }

    getRow(form) {
        this.count = this.count + 1;
        console.log(this.count);
        this.listOfLectures.push({id: this.count, topic: form.topic, date: form.date, lecturer: form.lecturer});
        return this.listOfLectures;
    }

    constructor() {
    }
}
