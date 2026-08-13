import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduPulseStateService } from '../../../services/edupulse-state.service';

@Component({
  selector: 'app-bulletin-generator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="bulletin-sim" class="glass-panel p-6 sm:p-8 rounded-3xl border border-blue-500/30 space-y-6">
      
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div class="inline-block px-2.5 py-0.5 rounded bg-blue-950 text-blue-400 text-[10px] font-extrabold uppercase mb-1">
            GÉNÉRATION PDF HOMOLOGUÉE
          </div>
          <h3 class="text-xl font-bold text-white font-heading">Bulletins Officiels MINESEC / MINEDUB</h3>
        </div>

        <div class="flex items-center gap-3">
          <button (click)="printBulletin()" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
            <span>Imprimer / Télécharger le PDF</span>
          </button>
        </div>
      </div>

      <!-- School Name Editor Customizer -->
      <div class="flex flex-wrap items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
        <span class="text-xs font-bold text-slate-400">Nom de votre établissement :</span>
        <input 
          type="text" 
          [value]="schoolName()" 
          (input)="schoolName.set($any($event.target).value)"
          class="flex-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-bold focus:border-blue-400 focus:outline-none"
        />
      </div>

      <!-- Real Bulletin PDF Preview Zone -->
      <div class="bulletin-print-zone p-6 sm:p-8 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-300 font-sans space-y-6 max-w-4xl mx-auto">
        
        <!-- Official Cameroon MINESEC Header -->
        <div class="grid grid-cols-3 gap-2 text-center text-[10px] sm:text-xs font-bold uppercase border-b-2 border-slate-900 pb-4 leading-tight">
          <div>
            <div>RÉPUBLIQUE DU CAMEROUN</div>
            <div class="text-[9px] text-slate-600 font-normal">Paix - Travail - Patrie</div>
            <div class="mt-1">MINISTÈRE DES ENSEIGNEMENTS SECONDAIRES</div>
          </div>

          <div class="flex flex-col items-center justify-center">
            <!-- School Crest Mockup -->
            <div class="w-12 h-12 rounded-full border-2 border-slate-900 flex items-center justify-center font-black text-slate-900 text-sm">
              EP
            </div>
            <div class="text-[11px] font-black tracking-tight text-emerald-800 mt-1 uppercase">{{ schoolName() }}</div>
            <div class="text-[8px] text-slate-500 font-semibold">Devise : Discipline - Travail - Succès</div>
          </div>

          <div>
            <div>REPUBLIC OF CAMEROON</div>
            <div class="text-[9px] text-slate-600 font-normal">Peace - Work - Fatherland</div>
            <div class="mt-1">MINISTRY OF SECONDARY EDUCATION</div>
          </div>
        </div>

        <!-- Bulletin Title & Student Profile Card -->
        <div class="flex flex-wrap items-center justify-between p-3 rounded-lg bg-slate-100 border border-slate-300 text-xs">
          <div class="space-y-0.5">
            <div class="font-black text-slate-900 text-sm">BULLETIN DE NOTES — TRIMESTRE 1</div>
            <div>Élève : <strong class="text-slate-900 font-extrabold uppercase">{{ state.activeChild().name }}</strong></div>
            <div>Matricule : <span class="font-mono text-slate-700">{{ state.activeChild().matricule }}</span> | Classe : <strong class="text-slate-900">{{ state.activeChild().class }}</strong></div>
          </div>

          <div class="text-right space-y-0.5 border-l border-slate-300 pl-4">
            <div>Année Scolaire : <strong>2026 - 2027</strong></div>
            <div>Effectif Classe : <strong>{{ state.activeChild().totalStudents }} élèves</strong></div>
            <div>Rang de l'Élève : <strong class="text-emerald-700 text-sm">{{ state.activeChild().rank }}</strong></div>
          </div>
        </div>

        <!-- Grades Table -->
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left border-collapse border border-slate-900">
            <thead>
              <tr class="bg-slate-900 text-white font-bold uppercase text-[10px] text-center">
                <th class="p-2 border border-slate-700">Matières & Enseignants</th>
                <th class="p-2 border border-slate-700">Note /20</th>
                <th class="p-2 border border-slate-700">Coeff</th>
                <th class="p-2 border border-slate-700">Total</th>
                <th class="p-2 border border-slate-700">Appréciations & Remarques</th>
              </tr>
            </thead>
            <tbody>
              @for (g of state.activeChild().grades; track g.subject) {
                <tr class="border-b border-slate-300 text-slate-900">
                  <td class="p-2 font-bold border border-slate-300">
                    {{ g.subject }}
                    <div class="text-[9px] text-slate-500 font-normal">Prof: {{ g.teacher }}</div>
                  </td>
                  <td class="p-2 text-center font-black border border-slate-300 text-sm" [class.text-emerald-700]="g.score >= 14">
                    {{ g.score }}
                  </td>
                  <td class="p-2 text-center font-bold border border-slate-300">{{ g.coefficient }}</td>
                  <td class="p-2 text-center font-mono font-bold border border-slate-300">{{ g.score * g.coefficient }}</td>
                  <td class="p-2 text-[10px] italic border border-slate-300">
                    {{ g.score >= 15 ? 'Très bon travail, continuez ainsi' : 'Bon travail d\'ensemble' }}
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <!-- Summary & Final Decision Footer -->
        <div class="grid grid-cols-2 gap-4 pt-2 text-xs">
          
          <div class="p-3 rounded-lg border border-slate-400 space-y-1">
            <div class="font-bold border-b border-slate-300 pb-1">BILAN SYNTHÉTIQUE</div>
            <div class="flex justify-between">
              <span>Moyenne Générale :</span>
              <strong class="text-base text-emerald-800 font-black">{{ state.activeChild().generalAverage }} / 20</strong>
            </div>
            <div class="flex justify-between">
              <span>Rangement :</span>
              <strong>{{ state.activeChild().rank }}</strong>
            </div>
            <div class="flex justify-between">
              <span>Absences non justifiées :</span>
              <span>0 Heure</span>
            </div>
            <div class="flex justify-between">
              <span>Mention du conseil :</span>
              <span class="font-bold text-emerald-700 uppercase">Tableau d'Honneur</span>
            </div>
          </div>

          <!-- Official Stamp & QR Code Anti-Fraud -->
          <div class="p-3 rounded-lg border border-slate-400 flex justify-between items-center text-right">
            <div class="space-y-1">
              <div class="font-bold text-slate-900">Le Chef d'Établissement</div>
              <div class="text-[9px] text-slate-500 italic">Signé électroniquement avec horodatage</div>
              <div class="pt-6 font-serif font-black text-slate-800 text-sm">Le Proviseur</div>
            </div>

            <!-- QR Code anti-fraud mockup -->
            <div class="p-2 bg-slate-100 rounded border border-slate-300 text-center">
              <div class="w-14 h-14 bg-slate-900 rounded p-1 text-white text-[7px] font-mono flex flex-col items-center justify-center leading-none">
                <span>EDUPULSE</span>
                <span>VERIFIED</span>
                <span class="mt-1 text-emerald-400">QR-2026</span>
              </div>
              <span class="text-[8px] text-slate-500 block mt-1 font-bold">Scannez pour vérifier</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  `
})
export class BulletinGeneratorComponent {
  state = inject(EduPulseStateService);
  schoolName = signal<string>('COLLÈGE BILINGUE DE L\'EXCELLENCE');

  printBulletin() {
    window.print();
  }
}
