import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateModule } from './template/template.module';
import { NavbarComponent } from './template/navbar/navbar.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

declare var $: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateModule, NavbarComponent, SidebarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'clientes-app';

  ngAfterViewInit() {
    var path = location.pathname;

    $('#layoutSidenav_nav .sb-sidenav a.nav-link').each((index: any, element: any) => {
      if ($(element).attr('href') === path) {
        $(element).addClass("active");
      }
    });

    $("#sidebarToggle").on("click", function (event: { preventDefault: () => void; }) {
      $("body").toggleClass("sb-sidenav-toggled");
    });
  }



}
