import { Component } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
      RolesService
  ]
})
export class AppComponent {
  title = 'proyecto-comunidad';
}
