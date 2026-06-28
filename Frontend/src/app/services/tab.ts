import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Tab {

  private tabSource = new Subject<string>();

  tab$ = this.tabSource.asObservable();

  selectTab(tab: string) {
    this.tabSource.next(tab);
  }

}