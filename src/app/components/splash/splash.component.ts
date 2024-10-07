import { AfterViewInit, Component } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.scss'
})
export class SplashComponent implements AfterViewInit {
  private animation: any;
  ngAfterViewInit(): void {
    this.animation = gsap.timeline({defaults: { duration:1 }, repeatDelay: 0.4 });
    this.animation.to(".firstName", {text:"Emely", ease:"power1.in", });
    this.animation.to(".surName", {text: "García", ease: "power1.in"});
    this.animation.to(".name p", { color: "#DA4167", ease: 'none', repeat: -1, duration: 2, yoyo: true });
    this.animation.to(".message", { opacity: 1, y: 15 }, "<");
    this.animation.to(".message span", { text: "", repeat: -1, yoyo: true, duration: 2 });

  }

}
