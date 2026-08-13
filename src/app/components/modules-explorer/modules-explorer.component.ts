import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduPulseStateService } from '../../services/edupulse-state.service';

@Component({
  selector: 'app-modules-explorer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="modules" class="py-16 bg-white border-t border-slate-200">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span class="text-xs font-extrabold uppercase tracking-widest text-ep-green bg-ep-lightGreen px-3 py-1 rounded-full border border-ep-green/30">
            Couverture ERP Complète
          </span>
          <h2 class="text-3xl sm:text-4xl font-black text-ep-navy font-heading">
            Les 13 Modules d'EduPulse
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            De la gestion de la scolarité aux rapports statistiques pour la Direction et la Caisse.
          </p>
        </div>

        <!-- Category Filters -->
        <div class="flex flex-wrap justify-center gap-2 mb-10">
          <button 
            (click)="selectedCategory.set('ALL')"
            [class]="selectedCategory() === 'ALL' ? 'bg-ep-navy text-white font-bold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300'"
            class="px-4 py-2 rounded-xl border text-xs font-bold transition-all">
            Tous les Modules (13)
          </button>

          <button 
            (click)="selectedCategory.set('PEDAGOGY')"
            [class]="selectedCategory() === 'PEDAGOGY' ? 'bg-ep-navy text-white font-bold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300'"
            class="px-4 py-2 rounded-xl border text-xs font-bold transition-all">
            📚 Pédagogie & Notes
          </button>

          <button 
            (click)="selectedCategory.set('FINANCE')"
            [class]="selectedCategory() === 'FINANCE' ? 'bg-ep-navy text-white font-bold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300'"
            class="px-4 py-2 rounded-xl border text-xs font-bold transition-all">
            💳 Finance & Recouvrement
          </button>

          <button 
            (click)="selectedCategory.set('ADMIN')"
            [class]="selectedCategory() === 'ADMIN' ? 'bg-ep-navy text-white font-bold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300'"
            class="px-4 py-2 rounded-xl border text-xs font-bold transition-all">
            🏢 Administration & Scolarité
          </button>

          <button 
            (click)="selectedCategory.set('COMMUNICATION')"
            [class]="selectedCategory() === 'COMMUNICATION' ? 'bg-ep-navy text-white font-bold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300'"
            class="px-4 py-2 rounded-xl border text-xs font-bold transition-all">
            📲 Communication & Alertes
          </button>
        </div>

        <!-- Modules Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (mod of filteredModules(); track mod.id) {
            <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4 hover:border-ep-green hover:shadow-md transition-all flex flex-col justify-between">
              
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="w-8 h-8 rounded-lg bg-ep-lightGreen text-ep-green font-black text-xs flex items-center justify-center border border-ep-green/30">
                    #{{ mod.id }}
                  </span>
                  <span class="px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase bg-white border border-slate-300 text-ep-navy">
                    {{ mod.category }}
                  </span>
                </div>

                <h3 class="text-lg font-bold text-ep-navy font-heading leading-tight mb-1">{{ mod.title }}</h3>
                <h4 class="text-xs text-ep-green font-extrabold mb-3">{{ mod.subtitle }}</h4>
                <p class="text-xs text-slate-600 leading-relaxed mb-4 font-normal">{{ mod.description }}</p>
              </div>

              <div class="pt-3 border-t border-slate-200 space-y-1.5">
                @for (item of mod.highlights; track item) {
                  <div class="flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                    <span class="text-ep-green font-bold">✓</span>
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
