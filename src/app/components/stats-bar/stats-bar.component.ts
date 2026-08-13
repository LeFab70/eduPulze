import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-stats-bar',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section class="bg-ep-navy text-white py-10 relative overflow-hidden">
      <div class="absolute inset-0 opacity-40" style="background: radial-gradient(600px 200px at 80% 0%, rgba(0,166,81,0.28), transparent 60%);"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-2 lg:grid-cols-4 gap-6" epReveal>
        @for (stat of stats; track stat.label) {
          <div class="text-center space-y-1">
            <div class="text-3xl sm:text-4xl font-black font-heading text-white">{{ stat.value }}</div>
            <div class="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300">{{ stat.label }}</div>
          </div>
        }
      </div>
    </section>
  `
})
export class StatsBarComponent {
  stats = [
    { value: '100+', label: 'Écoles partenaires' },
    { value: '45 000', label: 'Élèves suivis' },
    { value: '12 000', label: 'Parents connectés' },
    { value: '98%', label: 'Taux de recouvrement' },
  ];
}
