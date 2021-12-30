import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, YearService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule
  ],
  providers: [RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, YearService, MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
