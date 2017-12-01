import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'iv-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss']
})
export class MarqueeComponent implements AfterViewInit {
  animated: boolean;
  @Input() host: any;
  @Input() text: string;
  @Input() loop: boolean;
  @Input() duration: number;
  @Input() animation: string;
  @Input() validateOverflow: boolean;
  private animationList = {
    carousel: 'carousel',
    bounce: 'bounce'
  };
  @ViewChild('content') content: ElementRef;
  constructor(private renderer: Renderer2) {
    this.animated = false;
    this.duration = this.duration || 8;
    this.validateOverflow = this.validateOverflow || true;
    this.animation = this.animationList[this.animation] || 'carousel';
  }

  ngAfterViewInit() {
    const content = this.content.nativeElement;
    setTimeout(() => {
      if (!this.validateOverflow || (content && content.offsetWidth > this.host.scrollWidth) ) {
        this.renderer.addClass(content, this.animation || 'carousel');
        this.renderer.addClass(content, this.loop ? 'infinite' : 'finite');
        this.renderer.setStyle(content, 'animation-duration', `${this.duration}s`);
        if (this.animation === 'carousel') {
          this.renderer.setStyle(content, 'animation-delay', `-${(this.duration / 2)}s`);
        }
      }
    }, 0);
  }

}
