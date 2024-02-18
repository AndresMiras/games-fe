import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-star-background',
  templateUrl: './star-background.component.html',
  styleUrls: ['./star-background.component.scss']
})
export class StarBackgroundComponent implements OnInit {

  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef;
  private ctx!: CanvasRenderingContext2D;

  private numStars = 100;
  private stars: { x: number, y: number, radius: number }[] = [];

  constructor() { }

  async ngOnInit() {
    this.ctx = (this.canvasRef.nativeElement as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D;
    this.createStars();
    this.animateStars();
  }

  @HostListener('window:resize', ['$event'])
  async onResize(event: Event) {
    this.createStars();
  }

  private createStars(): void {
    const canvas = this.canvasRef.nativeElement as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    this.stars = [];
    for (let i = 0; i < this.numStars; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 2;
      this.stars.push({ x, y, radius });
    }
  }

  private animateStars() {
    requestAnimationFrame(() => this.animateStars());

    const canvas = this.canvasRef.nativeElement as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.stars.forEach(star => {
      star.y += 0.1; // Adjust the speed here
      if (star.y > canvas.height) {
        star.y = 0; // Reset star position when it reaches the bottom
      }
      this.drawStar(star.x, star.y, star.radius);
    });
  }

  private drawStar(x: number, y: number, radius: number): void {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();
    this.ctx.closePath();
  }
}
