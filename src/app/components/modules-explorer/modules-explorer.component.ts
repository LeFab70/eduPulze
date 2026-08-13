import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduPulseStateService, ERPModule } from '../../services/edupulse-state.service';

@Component({
  selector: 'app-modules-explorer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="modules" class="py-16 bg-slate-950 relative">
      
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span class="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
            Périmètre Fonctionnel Complet (MVP v1.0)
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Les 13 Modules d'EduPulse en Détail
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Une couverture intégrale de la maternelle au secondaire pour automatiser l'établissement.
          </p>
        </div>

        <!-- Filter Categories -->
        <div class="flex flex-wrap justify-center gap-2 mb-10">
          <button 
            (click)="selectedCategory.set('ALL')"
            [class]="selectedCategory() === 'ALL' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-900 text-slate-400 border-slate-800'"
            class="px-4 py-2 rounded-xl border text-xs font-semibold transition-all">
            Tous les Modules (13)
          </button>

          <button 
            (click)="selectedCategory.set('PEDAGOGY')"
            [class]="selectedCategory() === 'PEDAGOGY' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-900 text-slate-400 border-slate-800'"
            class="px-4 py-2 rounded-xl border text-xs font-semibold transition-all">
            📚 Pédagogie & Notes
          </button>

          <button 
            (click)="selectedCategory.set('FINANCE')"
            [class]="selectedCategory() === 'FINANCE' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-900 text-slate-400 border-slate-800'"
            class="px-4 py-2 rounded-xl border text-xs font-semibold transition-all">
            💳 Finance & Recouvrement
          </button>

          <button 
            (click)="selectedCategory.set('ADMIN')"
            [class]="selectedCategory() === 'ADMIN' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-900 text-slate-400 border-slate-800'"
            class="px-4 py-2 rounded-xl border text-xs font-semibold transition-all">
            🏢 Administration & Scolarité
          </button>

          <button 
            (click)="selectedCategory.set('COMMUNICATION')"
            [class]="selectedCategory() === 'COMMUNICATION' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-900 text-slate-400 border-slate-800'"
            class="px-4 py-2 rounded-xl border text-xs font-semibold transition-all">
            📲 Communication & Push
          </button>
        </div>

        <!-- Modules Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (mod of filteredModules(); track mod.id) {
            <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-extrabold text-xs flex items-center justify-center border border-emerald-500/30">
                    #{{ mod.id }}
                  </span>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-900 border border-slate-700 text-slate-300">
                    {{ mod.category }}
                  </span>
                </div>

                <h3 class="text-lg font-bold text-white font-heading leading-tight mb-1">{{ mod.title }}</h3>
                <h4 class="text-xs text-emerald-400 font-semibold mb-3">{{ mod.subtitle }}</h4>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">{{ mod.description }}</p>
              </div>

              <div class="pt-3 border-t border-slate-800/80 space-y-1.5">
                @for (item of mod.highlights; track item) {
                  <div class="flex items-center gap-2 text-[11px] font-medium text-slate-300">
                    <span class="text-emerald-400 font-bold">✓</span>
                    <span>{{ item }}</span>
                  </div>
                }
              </div>

            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class ModulesExplorerComponent {
  state = inject(EduPulseStateService);
  selectedCategory = signal<'ALL' | 'PEDAGOGY' | 'FINANCE' | 'ADMIN' | 'COMMUNICATION'>('ALL');

  filteredModules = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'ALL') return this.state.erpModules();
    return this.state.erpModules().filter(m => m.category === cat);
  });
}
