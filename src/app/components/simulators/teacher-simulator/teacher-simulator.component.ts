import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduPulseStateService } from '../../../services/edupulse-state.service';

@Component({
  selector: 'app-teacher-simulator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="teacher-sim" class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
      
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div class="inline-block px-2.5 py-0.5 rounded bg-ep-lightGreen text-ep-green text-[10px] font-extrabold uppercase mb-1 border border-ep-green/30">
            DÉMO HORS-LIGNE & IA
          </div>
          <h3 class="text-xl font-bold text-ep-navy font-heading">Espace Enseignant (Saisie Mobile & Assistant IA)</h3>
        </div>

        <button 
          (click)="state.toggleTeacherOffline()"
          [class]="state.isTeacherOffline() 
            ? 'bg-rose-100 border-rose-400 text-rose-800' 
            : 'bg-ep-lightGreen border-ep-green text-ep-green'"
          class="px-4 py-2 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all">
          <span class="w-2.5 h-2.5 rounded-full" [class.bg-rose-500]="state.isTeacherOffline()" [class.bg-ep-green]="!state.isTeacherOffline()"></span>
          <span>Statut : {{ state.isTeacherOffline() ? 'Mode Hors-Ligne (Déconnecté)' : 'Connecté Réseau 4G' }}</span>
        </button>
      </div>

      @if (state.isTeacherOffline()) {
        <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-center justify-between">
          <span>⚡ Saisie active sans réseau. Les notes sont stockées dans SQLite local du téléphone.</span>
          <span class="font-mono font-bold text-amber-800">{{ state.pendingOfflineGrades().length }} en attente</span>
        </div>
      }

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
        <div>
          <label class="block text-slate-500 uppercase mb-1">Sélectionner l'Élève</label>
          <select 
            [value]="selectedStudent()"
            (change)="selectedStudent.set($any($event.target).value)"
            class="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-bold focus:border-ep-green focus:outline-none">
            <option value="Andy Kouonang">Andy Kouonang (5ᵉ A)</option>
            <option value="Sarah M.">Sarah M. (3ᵉ C)</option>
            <option value="Brice N.">Brice N. (6ᵉ B)</option>
          </select>
        </div>

        <div>
          <label class="block text-slate-500 uppercase mb-1">Matière</label>
          <input 
            type="text" 
            [value]="subjectInput()" 
            (input)="subjectInput.set($any($event.target).value)"
            class="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-bold focus:border-ep-green focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-slate-500 uppercase mb-1">Note attribuée (/20)</label>
          <input 
            type="number" 
            [value]="scoreInput()" 
            (input)="scoreInput.set(+$any($event.target).value)"
            class="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-ep-green font-black focus:border-ep-green focus:outline-none"
          />
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
        <button 
          (click)="submitGrade()"
          class="px-5 py-2.5 rounded-xl bg-ep-green hover:bg-ep-greenHover text-white font-extrabold text-xs shadow-md">
          Enregistrer la note ({{ state.isTeacherOffline() ? 'Stockage Local' : 'Envoi Direct' }})
        </button>

        <button 
          (click)="generateAiAppreciation()"
          class="px-4 py-2.5 rounded-xl bg-purple-100 border border-purple-300 text-purple-900 font-bold text-xs flex items-center gap-1.5 hover:bg-purple-200">
          <span>✨ Module IA : Suggérer Appréciation</span>
        </button>
      </div>

      @if (aiSuggestion()) {
        <div class="p-4 rounded-xl bg-purple-50 border border-purple-200 text-purple-950 text-xs space-y-1">
          <div class="font-bold text-purple-900">✨ Appréciation suggérée par EduPulse AI :</div>
          <p class="italic text-slate-700">"{{ aiSuggestion() }}"</p>
        </div>
      }

      @if (state.pendingOfflineGrades().length > 0) {
        <div class="space-y-2 pt-2 border-t border-slate-200">
          <div class="flex items-center justify-between text-xs text-slate-600 font-bold">
            <span>File de synchronisation hors-ligne ({{ state.pendingOfflineGrades().length }} éléments)</span>
            <button (click)="state.syncOfflineGrades()" class="text-ep-green hover:underline">
              Synchroniser maintenant
            </button>
          </div>

          <div class="space-y-1">
            @for (item of state.pendingOfflineGrades(); track $index) {
              <div class="p-2 rounded bg-slate-50 border border-slate-200 text-xs flex items-center justify-between font-mono">
                <span>{{ item.student }} — {{ item.subject }}</span>
                <span class="text-ep-green font-bold">{{ item.score }}/20</span>
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

  selectedStudent = signal<string>('Andy Kouonang');
  subjectInput = signal<string>('Informatique & Algorithmique');
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
