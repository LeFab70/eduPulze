import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduPulseStateService } from '../../services/edupulse-state.service';

@Component({
  selector: 'app-role-matrix',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-slate-900/40 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span class="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-500/30">
            Sécurité & Accessibilité Découpée
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Matrice des Rôles & Permissions (RBAC)
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Chaque acteur de l'écosystème scolaire dispose d'un espace strictement cloisonné et sécurisé par Token JWT.
          </p>
        </div>

        <!-- Role Selector Pills -->
        <div class="flex flex-wrap items-center justify-center gap-2 mb-10">
          @for (role of state.rolesList(); track role.code) {
            <button 
              (click)="state.activeRole.set(role.code)"
              [class]="state.activeRole() === role.code 
                ? 'bg-blue-600 text-white font-bold border-blue-400 shadow-lg shadow-blue-600/30 scale-105' 
                : 'bg-slate-900 text-slate-400 hover:text-white border-slate-800'"
              class="px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all">
              {{ role.name }}
            </button>
          }
        </div>

        <!-- Role Details & Matrix View -->
        @for (role of state.rolesList(); track role.code) {
          @if (state.activeRole() === role.code) {
            <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-blue-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              
              <!-- Left Info -->
              <div class="lg:col-span-6 space-y-4">
                <div class="inline-block px-3 py-1 rounded-full text-xs font-extrabold border {{ role.badgeColor }}">
                  RÔLE SYSTÈME : {{ role.code }}
                </div>
                <h3 class="text-2xl sm:text-3xl font-black text-white font-heading">{{ role.name }}</h3>
                <p class="text-sm text-slate-300">
                  <strong>Profil concerné :</strong> {{ role.targetUser }}
                </p>

                <div class="space-y-2 pt-2">
                  <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Droits d'accès principaux :</span>
                  <div class="space-y-2">
                    @for (perm of role.permissions; track perm) {
                      <div class="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span>{{ perm }}</span>
                      </div>
                    }
                  </div>
                </div>
              </div>

              <!-- Right Mockup Preview -->
              <div class="lg:col-span-6 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div class="text-xs font-bold text-slate-400">Aperçu Vue {{ role.name }}</div>
                  <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-mono">Authentifié JWT</span>
                </div>

                <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-white">Tableau de Bord {{ role.name }}</span>
                    <span class="text-[10px] text-slate-400">Dernière synchro : En direct</span>
                  </div>

                  @switch (role.code) {
                    @case ('SUPER_ADMIN') {
                      <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="p-2.5 bg-slate-950 rounded border border-slate-800 text-purple-400 font-bold">48 Écoles Active Tenants</div>
                        <div class="p-2.5 bg-slate-950 rounded border border-slate-800 text-emerald-400 font-bold">99.98% Uptime SaaS</div>
                      </div>
                    }
                    @case ('SCHOOL_ADMIN') {
                      <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="p-2.5 bg-slate-950 rounded border border-slate-800 text-blue-400 font-bold">1 240 Élèves Inscrits</div>
                        <div class="p-2.5 bg-slate-950 rounded border border-slate-800 text-emerald-400 font-bold">36 Classes Configurées</div>
                      </div>
                    }
                    @case ('ACCOUNTANT') {
                      <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="p-2.5 bg-slate-950 rounded border border-slate-800 text-emerald-400 font-bold">88.4% Taux Recouvrement</div>
                        <div class="p-2.5 bg-slate-950 rounded border border-slate-800 text-amber-400 font-bold">12.4M FCFA Encaissés</div>
                      </div>
                    }
                    @case ('TEACHER') {
                      <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="p-2.5 bg-slate-950 rounded border border-slate-800 text-emerald-400 font-bold">Mode Offline : Prêt</div>
                        <div class="p-2.5 bg-slate-950 rounded border border-slate-800 text-blue-400 font-bold">6 Classes Saisies</div>
                      </div>
                    }
                    @case ('PARENT') {
                      <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="p-2.5 bg-slate-950 rounded border border-slate-800 text-emerald-400 font-bold">Moyenne : {{ state.activeChild().generalAverage }}/20</div>
                        <div class="p-2.5 bg-slate-950 rounded border border-slate-800 text-cyan-400 font-bold">Rang : {{ state.activeChild().rank }}</div>
                      </div>
                    }
                    @case ('STUDENT') {
                      <div class="grid grid-cols-2 gap-2 text-xs">
                        <div class="p-2.5 bg-slate-950 rounded border border-slate-800 text-rose-400 font-bold">Devoir Math demain</div>
                        <div class="p-2.5 bg-slate-950 rounded border border-slate-800 text-blue-400 font-bold">Emploi du Temps OK</div>
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
