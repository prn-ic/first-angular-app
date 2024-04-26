import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent],
  template: `<main>
              <a [routerLink]='["/"]'>
              <header class='brand-name'>
                <img class='brand-logo' src='/assets/logo.svg' alt='logo' aria-hidden='true'/>
              </header>
              </a>
              <section class='content'>
                <router-outlet></router-outlet>
              </section>
            </main>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  countExternal = 0;
  plus() {
    this.countExternal += 1;
  }
  title = 'homes';
}
