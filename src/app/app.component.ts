import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TasklistComponent } from './components/task/tasklist/tasklist.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, TasklistComponent, FooterComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tutorial';

  img:string = "";
  nombre = ""
  numeroRandom:number = Math.round(Math.random()*10000+ 1)
  
  cargarImagenAleatoria(){
    this.img = "https://picsum.photos/200/300?random=" + this.numeroRandom
    }
}

