import { DestroyRef, Directive, ElementRef, Input, afterNextRender, inject } from '@angular/core';

@Directive({
  selector: '[epReveal]',
  standalone: true,
})
export class RevealDirective {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);
  private observer?: IntersectionObserver;

  @Input() epReveal: '' | 'up' | 'left' | 'right' | 'scale' = 'up';
  @Input() epDelay = 0;

  constructor() {
    afterNextRender(() => this.setup());
    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }

  private setup() {
    const node = this.el.nativeElement as HTMLElement;
    const dir = this.epReveal || 'up';
    node.classList.add('ep-reveal', `ep-reveal-${dir}`);
    if (this.epDelay) {
      node.style.setProperty('--ep-delay', `${this.epDelay}ms`);
    }

    const show = () => node.classList.add('is-in');
    const reset = () => {
      node.classList.add('ep-reveal-reset');
      node.classList.remove('is-in');
      void node.offsetWidth;
      node.classList.remove('ep-reveal-reset');
    };

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
        } else {
          reset();
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -12% 0px' }
    );

    this.observer.observe(node);

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.88 && rect.bottom > 80) {
      show();
    }
  }
}
