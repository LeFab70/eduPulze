import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduPulseStateService } from '../../../services/edupulse-state.service';

@Component({
  selector: 'app-teacher-simulator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="teacher-sim" class="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
      
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div class="inline-block px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-extrabold uppercase mb-1">
            DÉMO HORS-LIGNE & IA
          </div>
          <h3 class="text-xl font-bold text-white font-heading">Espace Enseignant (Mobile Offline & Assistant IA)</h3>
        </div>

        <!-- Connection Toggle Switch -->
        <button 
          (click)="state.toggleTeacherOffline()"
          [class]="state.isTeacherOffline() 
            ? 'bg-rose-950 border-rose-500 text-rose-300' 
            : 'bg-emerald-950 border-emerald-500 text-emerald-300'"
          class="px-4 py-2 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all">
          <span class="w-2.5 h-2.5 rounded-full" [class.bg-rose-400]="state.isTeacherOffline()" [class.bg-emerald-400]="!state.isTeacherOffline()"></span>
          <span>Statut : {{ state.isTeacherOffline() ? 'Mode Hors-Ligne (Déconnecté)' : 'Connecté au Réseau 4G' }}</span>
        </button>
      </div>

      <!-- Offline Banner Indicator -->
      @if (state.isTeacherOffline()) {
        <div class="p-3.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-200 text-xs flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span>⚡ Saisie active sans réseau. Les données sont enregistrées localement dans la base SQLite du téléphone.</span>
          </div>
          <span class="font-mono font-bold text-amber-400">{{ state.pendingOfflineGrades().length }} en attente</span>
        </div>
      }

      <!-- Form: Note Entry -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Sélectionner l'Élève</label>
          <select 
            [value]="selectedStudent()"
            (change)="selectedStudent.set($any($event.target).value)"
            class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-bold">
            <option value="Kevin D.">Kevin D. (5ᵉ A)</option>
            <option value="Sarah M.">Sarah M. (3ᵉ C)</option>
            <option value="Brice N.">Brice N. (6ᵉ B)</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Matière</label>
          <input 
            type="text" 
            [value]="subjectInput()" 
            (input)="subjectInput.set($any($event.target).value)"
            class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-bold"
          />
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-400 uppercase mb-1">Note attribuée (/20)</label>
          <input 
            type="number" 
            [value]="scoreInput()" 
            (input)="scoreInput.set(+$any($event.target).value)"
            class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 text-xs font-black"
          />
        </div>
      </div>

      <!-- Action Buttons & IA Suggestion -->
      <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
        <button 
          (click)="submitGrade()"
          class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md">
          Enregistrer la note ({{ state.isTeacherOffline() ? 'Stockage Local' : 'Envoi Direct' }})
        </button>

        <button 
          (click)="generateAiAppreciation()"
          class="px-4 py-2.5 rounded-xl bg-purple-950 hover:bg-purple-900 border border-purple-500/40 text-purple-300 font-bold text-xs flex items-center gap-1.5">
          <span>✨ Module IA : Suggérer Appréciation</span>
        </button>
      </div>

      <!-- AI Appreciation Suggestion Result -->
      @if (aiSuggestion()) {
        <div class="p-4 rounded-xl bg-purple-950/40 border border-purple-500/40 text-purple-200 text-xs space-y-1 animate-fadeIn">
          <div class="font-bold text-purple-300 flex items-center gap-1.5">
            <span>✨ Appréciation automatique recommandée par EduPulse AI :</span>
          </div>
          <p class="italic text-slate-200">"{{ aiSuggestion() }}"</p>
        </div>
      }

      <!-- Pending Offline Queue Table -->
      @if (state.pendingOfflineGrades().length > 0) {
        <div class="space-y-2 pt-2">
          <div class="flex items-center justify-between text-xs text-slate-400 font-bold">
            <span>File de synchronisation hors-ligne ({{ state.pendingOfflineGrades().length }} éléments)</span>
            <button (click)="state.syncOfflineGrades()" class="text-emerald-400 hover:underline">
              Synchroniser maintenant
            </button>
          </div>

          <div class="space-y-1">
            @for (item of state.pendingOfflineGrades(); track $index) {
              <div class="p-2 rounded bg-slate-950 border border-slate-800 text-xs flex items-center justify-between text-slate-300 font-mono">
                <span>{{ item.student }} — {{ item.subject }}</span>
                <span class="text-emerald-400 font-bold">{{ item.score }}/20</span>
              </div>
            }
          </div>
        </div>
      }

    </div>
  `
})
export class TeacherSimulatorComponent {
  state = inject(EduPulseStateService);

  selectedStudent = signal<string>('Kevin D.');
  subjectInput = signal<string>('Informatique & Code');
  scoreInput = signal<number>(17);
  aiSuggestion = signal<string>('');

  submitGrade() {
    this.state.addOfflineGrade(this.selectedStudent(), this.subjectInput(), this.scoreInput(), 2);
  }

  generateAiAppreciation() {
    const score = this.scoreInput();
    if (score >= 16) {
      this.aiSuggestion.set(`Élève d'une très grande rigueur. Excellente assimilation des concepts en ${this.subjectInput()}. Poursuivez ainsi !`);
    } else if (score >= 12) {
      this.aiSuggestion.set(`Travail satisfaisant en ${this.subjectInput()}. Des efforts soutenus permettront de franchir un cap au prochain trimestre.`);
    } else {
      this.aiSuggestion.set(`Des difficultés constatées en ${this.subjectInput()}. Un accompagnement et des exercices de soutien sont recommandés.`);
    }
  }
}
