import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduPulseStateService } from '../../services/edupulse-state.service';

@Component({
  selector: 'app-role-matrix',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-ep-lightBg border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span class="text-xs font-extrabold uppercase tracking-widest text-ep-green bg-ep-lightGreen px-3 py-1 rounded-full">
            Un espace pour chacun
          </span>
          <h2 class="text-3xl sm:text-4xl font-black text-ep-navy font-heading">
            Parents, profs, direction, caisse
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            Chaque acteur de l'école a son application, ses droits, et uniquement ce dont il a besoin.
          </p>
        </div>

        <!-- Role Selector Pills -->
        <div class="flex flex-wrap items-center justify-center gap-2 mb-10">
          @for (role of state.rolesList(); track role.code) {
            <button 
              (click)="state.activeRole.set(role.code)"
              [class]="state.activeRole() === role.code 
                ? 'bg-ep-navy text-white font-bold shadow-md scale-105' 
                : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'"
              class="px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-bold transition-all">
              {{ role.name }}
            </button>
          }
        </div>

        <!-- Role Card -->
        @for (role of state.rolesList(); track role.code) {
          @if (state.activeRole() === role.code) {
            <div class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <!-- Info -->
              <div class="lg:col-span-6 space-y-4">
                <div class="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-ep-lightGreen text-ep-green border border-ep-green/30">
                  CODE RÔLE : {{ role.code }}
                </div>
                <h3 class="text-2xl sm:text-3xl font-black text-ep-navy font-heading">{{ role.name }}</h3>
                <p class="text-sm text-slate-600 font-medium">
                  <strong>Utilisateur :</strong> {{ role.targetUser }}
                </p>

                <div class="space-y-2 pt-2">
                  <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Permissions principales :</span>
                  <div class="space-y-2">
                    @for (perm of role.permissions; track perm) {
                      <div class="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200 font-semibold">
                        <span class="w-2 h-2 rounded-full bg-ep-green"></span>
                        <span>{{ perm }}</span>
                      </div>
                    }
                  </div>
                </div>
              </div>

              <!-- Preview -->
              <div class="lg:col-span-6 p-6 rounded-2xl bg-ep-navy text-white space-y-4 shadow-md">
                <div class="flex items-center justify-between border-b border-slate-700 pb-3">
                  <div class="text-xs font-bold text-slate-300">Aperçu Interface {{ role.name }}</div>
                  <span class="px-2 py-0.5 rounded bg-ep-green text-white text-[10px] font-bold">Sécurisé JWT</span>
                </div>

                <div class="p-4 rounded-xl bg-ep-navyDark border border-slate-700 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-white">Espace {{ role.name }}</span>
                    <span class="text-[10px] text-ep-green font-bold">Actif</span>
                  </div>

                  @switch (role.code) {
                    @case ('SUPER_ADMIN') {
                      <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="p-2.5 bg-slate-900 rounded font-bold text-purple-300">48 Écoles Actives</div>
                        <div class="p-2.5 bg-slate-900 rounded font-bold text-ep-green">99.99% Uptime</div>
                      </div>
                    }
                    @case ('SCHOOL_ADMIN') {
                      <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="p-2.5 bg-slate-900 rounded font-bold text-blue-300">1 240 Élèves</div>
                        <div class="p-2.5 bg-slate-900 rounded font-bold text-ep-green">36 Classes</div>
                      </div>
                    }
                    @case ('ACCOUNTANT') {
                      <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="p-2.5 bg-slate-900 rounded font-bold text-ep-green">88.4% Recouvrement</div>
                        <div class="p-2.5 bg-slate-900 rounded font-bold text-amber-300">12.4M FCFA Encaissés</div>
                      </div>
                    }
                    @case ('TEACHER') {
                      <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="p-2.5 bg-slate-900 rounded font-bold text-ep-green">Mode Offline Prêt</div>
                        <div class="p-2.5 bg-slate-900 rounded font-bold text-blue-300">6 Classes Saisies</div>
                      </div>
                    }
                    @case ('PARENT') {
                      <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="p-2.5 bg-slate-900 rounded font-bold text-ep-green">Moyenne : {{ state.activeChild().generalAverage }}/20</div>
                        <div class="p-2.5 bg-slate-900 rounded font-bold text-blue-300">Rang : {{ state.activeChild().rank }}</div>
                      </div>
                    }
                    @case ('STUDENT') {
                      <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="p-2.5 bg-slate-900 rounded font-bold text-rose-300">Devoir Math demain</div>
                        <div class="p-2.5 bg-slate-900 rounded font-bold text-blue-300">Planning OK</div>
                      </div>
                    }
                  }

                </div>
              </div>

            </div>
          }
        }

      </div>
    </section>
  `
})
export class RoleMatrixComponent {
  state = inject(EduPulseStateService);
}
