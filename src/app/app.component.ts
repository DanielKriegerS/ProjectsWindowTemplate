import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WindowComponent } from "../components/window/window.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, WindowComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-window-app';
}
