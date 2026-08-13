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
          <span class="text-xs font-extrabold uppercase tracking-widest text-ep-green bg-ep-lightGreen px-3 py-1 rounded-full">
            Tout ce dont l'école a besoin
          </span>
          <h2 class="text-3xl sm:text-4xl font-black text-ep-navy font-heading">
            13 modules, une seule plateforme
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            Notes, absences, scolarité, communication et pilotage — tout est relié.
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
            <div class="module-card bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4 hover:border-ep-green hover:shadow-lift transition-all flex flex-col justify-between">
              
              <div>
                <div class="flex items-center justify-between mb-3">
                  <div class="w-11 h-11 rounded-2xl bg-ep-lightGreen text-ep-green flex items-center justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" [attr.d]="iconPath(mod.icon)"></path>
                    </svg>
                  </div>
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

  private readonly icons: Record<string, string> = {
    building: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    'id-card': 'M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2',
    'clipboard-check': 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    'user-tie': 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    'pencil-square': 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    'check-circle': 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    'document-text': 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    smartphone: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    'academic-cap': 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
    calculator: 'M9 7h6m-6 4h6m-3 4h.01M9 17h.01M15 17h.01M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z',
    'credit-card': 'M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    'chat-bubble': 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    'chart-pie': 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z',
  };

  iconPath(name: string): string {
    return this.icons[name] || this.icons['document-text'];
  }
}
