import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduPulseStateService, GradeItem } from '../../../services/edupulse-state.service';

interface SubjectGroup {
  key: 'scientifique' | 'litteraire';
  label: string;
  grades: GradeItem[];
  average: number;
  rank: string;
}

@Component({
  selector: 'app-bulletin-generator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="bulletin-sim" class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
      
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <div class="inline-block px-2.5 py-0.5 rounded bg-ep-lightGreen text-ep-green text-[10px] font-extrabold uppercase mb-1">
            Bulletin officiel
          </div>
          <h3 class="text-xl font-bold text-ep-navy font-heading">Bulletins homologués MINESEC / MINEDUB</h3>
        </div>

        <button (click)="printBulletin()" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
          <span>Imprimer / Télécharger le PDF</span>
        </button>
      </div>

      <div class="flex flex-wrap items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
        <span class="text-xs font-bold text-slate-500">Nom de votre établissement :</span>
        <input 
          type="text" 
          [value]="schoolName()" 
          (input)="schoolName.set($any($event.target).value)"
          class="flex-1 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-ep-navy text-xs font-bold focus:border-ep-green focus:outline-none"
        />
      </div>

      <div class="bulletin-print-zone p-6 sm:p-8 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-300 font-sans space-y-6 max-w-4xl mx-auto">
        
        <div class="grid grid-cols-3 gap-2 text-center text-[10px] sm:text-xs font-bold uppercase border-b-2 border-slate-900 pb-4 leading-tight">
          <div>
            <div>RÉPUBLIQUE DU CAMEROUN</div>
            <div class="text-[9px] text-slate-600 font-normal">Paix - Travail - Patrie</div>
            <div class="mt-1">MINISTÈRE DES ENSEIGNEMENTS SECONDAIRES</div>
          </div>
          <div class="flex flex-col items-center justify-center">
            <div class="w-12 h-12 rounded-full border-2 border-slate-900 flex items-center justify-center font-black text-slate-900 text-sm">EP</div>
            <div class="text-[11px] font-black tracking-tight text-emerald-800 mt-1 uppercase">{{ schoolName() }}</div>
            <div class="text-[8px] text-slate-500 font-semibold">Devise : Discipline - Travail - Succès</div>
          </div>
          <div>
            <div>REPUBLIC OF CAMEROON</div>
            <div class="text-[9px] text-slate-600 font-normal">Peace - Work - Fatherland</div>
            <div class="mt-1">MINISTRY OF SECONDARY EDUCATION</div>
          </div>
        </div>

        <div class="flex flex-col sm:grid sm:grid-cols-[1fr_auto_1fr] items-center gap-3 p-3 rounded-lg bg-slate-100 border border-slate-300 text-xs">
          <div class="space-y-0.5 min-w-0 w-full sm:w-auto order-2 sm:order-1">
            <div class="font-black text-slate-900 text-sm">BULLETIN DE NOTES — TRIMESTRE 1</div>
            <div>Élève : <strong class="text-slate-900 font-extrabold uppercase">{{ state.activeChild().name }}</strong></div>
            <div>Matricule : <span class="font-mono text-slate-700">{{ state.activeChild().matricule }}</span> | Classe : <strong class="text-slate-900">{{ state.activeChild().class }}</strong></div>
          </div>

          <img
            [src]="state.activeChild().photoUrl"
            [alt]="state.activeChild().name"
            class="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-[center_18%] border-[3px] border-slate-900 shadow-md shrink-0 order-1 sm:order-2 mx-auto bg-slate-200"
          />

          <div class="text-left sm:text-right space-y-0.5 min-w-0 w-full sm:w-auto order-3">
            <div>Année Scolaire : <strong>2026 - 2027</strong></div>
            <div>Effectif Classe : <strong>{{ state.activeChild().totalStudents }} élèves</strong></div>
            <div>Rang de l'Élève : <strong class="text-emerald-700 text-sm">{{ state.activeChild().rank }}</strong></div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          @for (group of subjectGroups(); track group.key) {
            <div
              class="p-4 rounded-2xl border-2"
              [class.border-emerald-300]="group.key === 'scientifique'"
              [class.bg-emerald-50]="group.key === 'scientifique'"
              [class.border-blue-300]="group.key === 'litteraire'"
              [class.bg-blue-50]="group.key === 'litteraire'">
              <div class="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                Moyenne de l'élève — groupe {{ group.label }}
              </div>
              <div class="flex items-end justify-between mt-1 gap-3">
                <div class="text-3xl font-black font-heading leading-none"
                  [class.text-emerald-800]="group.key === 'scientifique'"
                  [class.text-blue-800]="group.key === 'litteraire'">
                  {{ group.average | number:'1.2-2' }}
                  <span class="text-sm text-slate-400 font-bold">/ 20</span>
                </div>
                <div class="text-xs font-black uppercase tracking-wide"
                  [class.text-emerald-700]="group.key === 'scientifique'"
                  [class.text-blue-700]="group.key === 'litteraire'">
                  Rang {{ group.rank }}
                </div>
              </div>
            </div>
          }
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left border-collapse border border-slate-900">
            <thead>
              <tr class="bg-slate-900 text-white font-bold uppercase text-[10px] text-center">
                <th class="p-2 border border-slate-700">Matières & Enseignants</th>
                <th class="p-2 border border-slate-700">Note /20</th>
                <th class="p-2 border border-slate-700">Min</th>
                <th class="p-2 border border-slate-700">Max</th>
                <th class="p-2 border border-slate-700">Coeff</th>
                <th class="p-2 border border-slate-700">Total</th>
                <th class="p-2 border border-slate-700">Appréciations</th>
              </tr>
            </thead>
            <tbody>
              @for (group of subjectGroups(); track group.key) {
                @for (g of group.grades; track g.subject) {
                  <tr class="border-b border-slate-300 text-slate-900">
                    <td class="p-2 font-bold border border-slate-300">
                      {{ g.subject }}
                      <div class="text-[9px] text-slate-500 font-normal">Prof: {{ g.teacher }}</div>
                    </td>
                    <td class="p-2 text-center font-black border border-slate-300 text-sm" [class.text-emerald-700]="g.score >= 14">{{ g.score }}</td>
                    <td class="p-2 text-center border border-slate-300">{{ g.classMin }}</td>
                    <td class="p-2 text-center border border-slate-300">{{ g.classMax }}</td>
                    <td class="p-2 text-center font-bold border border-slate-300">{{ g.coefficient }}</td>
                    <td class="p-2 text-center font-mono font-bold border border-slate-300">{{ g.score * g.coefficient }}</td>
                    <td class="p-2 text-[10px] italic border border-slate-300">
                      {{ g.score >= 15 ? 'Très bon travail, continuez ainsi' : 'Bon travail d\'ensemble' }}
                    </td>
                  </tr>
                }
                <tr class="bg-emerald-50 text-ep-navy font-black">
                  <td class="p-2 border border-slate-300 uppercase text-[10px] tracking-wide" colspan="4">
                    Groupe {{ group.label }} — Moyenne {{ group.average | number:'1.2-2' }} / 20
                  </td>
                  <td class="p-2 border border-slate-300 text-center text-[10px]" colspan="3">
                    Rang du groupe : {{ group.rank }}
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <div class="grid grid-cols-2 gap-4 pt-2 text-xs">
          <div class="p-3 rounded-lg border border-slate-400 space-y-1">
            <div class="font-bold border-b border-slate-300 pb-1">BILAN SYNTHÉTIQUE</div>
            <div class="flex justify-between">
              <span>1ʳᵉ moyenne (classe) :</span>
              <strong>16,80 / 20</strong>
            </div>
            <div class="flex justify-between">
              <span>Dernière moyenne :</span>
              <strong>8,25 / 20</strong>
            </div>
            @for (group of subjectGroups(); track group.key) {
              <div class="flex justify-between">
                <span>Moy. groupe {{ group.label }} :</span>
                <strong>{{ group.average | number:'1.2-2' }} / 20 · {{ group.rank }}</strong>
              </div>
            }
            <div class="flex justify-between">
              <span>Moyenne générale :</span>
              <strong class="text-base text-emerald-800 font-black">{{ state.activeChild().generalAverage }} / 20</strong>
            </div>
            <div class="flex justify-between">
              <span>Rang :</span>
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

          <div class="p-3 rounded-lg border border-slate-400 flex justify-between items-center text-right">
            <div class="space-y-1">
              <div class="font-bold text-slate-900">Le Chef d'Établissement</div>
              <div class="text-[9px] text-slate-500 italic">Signé électroniquement avec horodatage</div>
              <div class="pt-6 font-serif font-black text-slate-800 text-sm">Le Proviseur</div>
            </div>
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

  private readonly groupMeta: Record<SubjectGroup['key'], { label: string; rank: string }> = {
    scientifique: { label: 'scientifique', rank: '4 / 32' },
    litteraire: { label: 'littéraire', rank: '8 / 32' },
  };

  subjectGroups = computed<SubjectGroup[]>(() => {
    const grades = this.state.activeChild().grades;
    return (['scientifique', 'litteraire'] as const)
      .map((key) => {
        const list = grades.filter((g) => g.group === key);
        const weight = list.reduce((s, g) => s + g.coefficient, 0);
        const total = list.reduce((s, g) => s + g.score * g.coefficient, 0);
        return {
          key,
          label: this.groupMeta[key].label,
          grades: list,
          average: weight ? total / weight : 0,
          rank: this.state.activeChild().id === 'sarah'
            ? (key === 'scientifique' ? '1 / 38' : '2 / 38')
            : this.groupMeta[key].rank,
        };
      })
      .filter((g) => g.grades.length > 0);
  });

  printBulletin() {
    window.print();
  }
}
