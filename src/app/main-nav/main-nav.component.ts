import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RolesService } from '../services/roles.service';
import { Roles } from 'src/app/services/roles.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit{

    roles: Roles[];
    roles$!: Observable<Roles[]>;

    route: string | any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private rolesService: RolesService,
    private router: Router
  ) {
      this.roles = this.rolesService.getRoles();
      console.log(this.roles[0].propietario, this.roles[0].conserje, this.roles[0].admin)

      const route = (this.router.url).split('/',3);
      this.route = '/'+route[1]+'/'+route[2];

    }

    ngOnInit(): void {
        this.roles$ = this.rolesService.getRoles$();
        this.roles$.subscribe(roles => this.roles = roles);
    }

}
