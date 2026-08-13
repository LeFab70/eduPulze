import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center gap-2.5" [class.flex-row]="true">
      <svg
        [attr.width]="size"
        [attr.height]="size"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        class="shrink-0">
        <rect width="48" height="48" rx="14" [attr.fill]="markBg"/>
        <path d="M10 20.5L24 13l14 7.5-14 7.5L10 20.5z" [attr.fill]="capFill"/>
        <path d="M16 25.2v6.2c0 .4 3.4 3.2 8 3.2s8-2.8 8-3.2v-6.2" [attr.stroke]="accent" stroke-width="2" stroke-linecap="round"/>
        <path d="M38 21.2v7.4" [attr.stroke]="accent" stroke-width="2" stroke-linecap="round"/>
        <path d="M15 36.5c3.2-2.2 6.8-3.3 9-3.3s5.8 1.1 9 3.3" [attr.stroke]="accent" stroke-width="1.8" stroke-linecap="round" opacity="0.85"/>
      </svg>
      @if (showWordmark) {
        <div>
          <div class="leading-none font-black tracking-tight font-heading" [class]="wordClass">
            Edu<span [class]="pulseClass">Pulse</span>
          </div>
          @if (showTagline) {
            <p class="text-[10px] sm:text-[11px] font-semibold leading-tight mt-1" [class]="tagClass">
              La gestion scolaire, simple et intelligente.
            </p>
          }
        </div>
      }
    </div>
  `
})
export class LogoComponent {
  @Input() size = 48;
  @Input() showWordmark = true;
  @Input() showTagline = false;
  @Input() variant: 'light' | 'dark' = 'light';

  get markBg() {
    return this.variant === 'dark' ? '#00A651' : '#0B2545';
  }
  get capFill() {
    return '#FFFFFF';
  }
  get accent() {
    return this.variant === 'dark' ? '#FFFFFF' : '#00A651';
  }
  get wordClass() {
    return this.variant === 'dark'
      ? 'text-[22px] sm:text-[26px] text-white'
      : 'text-[22px] sm:text-[26px] text-ep-navy';
  }
  get pulseClass() {
    return this.variant === 'dark' ? 'text-emerald-300' : 'text-ep-green';
  }
  get tagClass() {
    return this.variant === 'dark' ? 'text-slate-300' : 'text-slate-500';
  }
}
