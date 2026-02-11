import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  stars: { top: string; left: string; size: string; delay: string }[] = [];

  ngOnInit(): void {
    const starCount = 100;

    this.stars = Array.from({ length: starCount }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${(Math.random() * 5).toFixed(2)}s`
    }));
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}
