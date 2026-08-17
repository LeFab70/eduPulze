import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduPulseStateService } from '../../services/edupulse-state.service';
import { RevealDirective } from '../../directives/reveal.directive';

type PlanKey = 'starter' | 'pro' | 'enterprise';

interface Plan {
  key: PlanKey;
  name: string;
  rangeLabel: string;
  min: number;
  max: number;
  defaultCount: number;
  monthly: number;
  annual: number;
  features: string[];
  cta: string;
}

@Component({
  selector: 'app-pricing-calculator',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="pricing" class="py-16 bg-ep-lightBg border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3" epReveal>
          <div class="w-14 h-14 mx-auto rounded-2xl bg-ep-lightGreen text-ep-green flex items-center justify-center">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
          </div>
          <span class="inline-block text-xs font-extrabold uppercase tracking-widest text-ep-green bg-ep-lightGreen px-3 py-1 rounded-full">
            Pour les établissements
          </span>
          <h2 class="text-3xl sm:text-4xl font-black text-ep-navy font-heading">
            Une offre claire, selon la taille de votre école
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            2 mois offerts sur l'abonnement annuel. Sans engagement surprise.
          </p>
        </div>

        <div class="flex items-center justify-center gap-3 mb-10">
          <span [class.text-ep-navy]="!isAnnual()" [class.text-slate-400]="isAnnual()" class="text-sm font-bold">Mensuel</span>
          <button
            type="button"
            (click)="isAnnual.set(!isAnnual())"
            [class.bg-ep-green]="isAnnual()"
            [class.bg-slate-300]="!isAnnual()"
            class="w-12 h-6 rounded-full p-1 flex items-center transition-colors"
            [attr.aria-pressed]="isAnnual()"
            aria-label="Basculer mensuel / annuel">
            <div class="w-4 h-4 rounded-full bg-white shadow transform transition-transform" [class.translate-x-6]="isAnnual()"></div>
          </button>
          <span [class.text-ep-navy]="isAnnual()" [class.text-slate-400]="!isAnnual()" class="text-sm font-bold flex items-center gap-1.5">
            <span>Annuel</span>
            <span class="px-2 py-0.5 rounded-full bg-ep-lightGreen text-ep-green text-[10px] font-extrabold border border-ep-green/30">2 mois offerts</span>
          </span>
        </div>

        <div class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl max-w-4xl mx-auto mb-12 space-y-6" epReveal="up" [epDelay]="80">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
              <label class="text-xs font-bold uppercase text-slate-500" for="student-count">Nombre d'élèves de l'école</label>
              <div class="text-3xl font-black text-ep-navy font-heading">
                {{ state.studentCount() }} <span class="text-base text-ep-green font-bold">élèves</span>
              </div>
            </div>

            <div class="text-right">
              <span class="text-xs text-slate-500 font-semibold">Coût par élève / mois</span>
              <div class="text-xl font-black text-ep-green">
                {{ format(perStudentMonthly()) }} FCFA
              </div>
              <div class="text-[11px] font-bold text-slate-500 mt-0.5">
                selon l'offre {{ selectedPlanDef().name }}
                @if (isAnnual()) {
                  <span> · tarif annuel</span>
                }
              </div>
            </div>
          </div>

          <input
            id="student-count"
            type="range"
            min="100"
            max="1500"
            step="25"
            [value]="state.studentCount()"
            (input)="onStudentCount(+$any($event.target).value)"
            class="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-ep-green"
          />

          <div class="flex justify-between text-[11px] font-bold text-slate-500 font-mono">
            <span>100 · Starter</span>
            <span>300 · Pro</span>
            <span>800 · Enterprise</span>
          </div>

          <div class="rounded-2xl bg-ep-lightGreen/60 border border-ep-green/20 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div class="text-[10px] font-extrabold uppercase tracking-wider text-ep-green">Offre active</div>
              <div class="text-sm font-black text-ep-navy font-heading">{{ selectedPlanDef().name }} · {{ selectedPlanDef().rangeLabel }}</div>
            </div>
            <div class="text-right">
              <div class="text-lg font-black text-ep-navy font-heading">{{ format(selectedTotal()) }} FCFA</div>
              <div class="text-[11px] font-bold text-slate-500">/ {{ isAnnual() ? 'an' : 'mois' }} pour {{ state.studentCount() }} élèves</div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6" epReveal="scale" [epDelay]="160">
          @for (plan of plans; track plan.key) {
            <article
              role="button"
              tabindex="0"
              (click)="selectPlan(plan.key)"
              (keydown.enter)="selectPlan(plan.key)"
              class="bg-white p-6 rounded-3xl space-y-4 flex flex-col justify-between cursor-pointer transition-all relative outline-none focus-visible:ring-4 focus-visible:ring-ep-green/35"
              [class.border-2]="selectedPlan() === plan.key"
              [class.border-ep-green]="selectedPlan() === plan.key"
              [class.shadow-xl]="selectedPlan() === plan.key"
              [class.border]="selectedPlan() !== plan.key"
              [class.border-slate-200]="selectedPlan() !== plan.key"
              [class.shadow-sm]="selectedPlan() !== plan.key"
              [class.ring-4]="selectedPlan() === plan.key"
              [class.ring-ep-green/15]="selectedPlan() === plan.key">

              @if (plan.key === 'pro') {
                <span class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-ep-green text-white text-[10px] font-black uppercase">
                  Recommandé
                </span>
              }

              <div>
                <div class="text-xs font-extrabold uppercase tracking-widest mb-1"
                  [class.text-ep-green]="plan.key !== 'enterprise'"
                  [class.text-purple-600]="plan.key === 'enterprise'">
                  {{ plan.name }}
                </div>
                <h3 class="text-xl font-bold text-ep-navy font-heading">{{ plan.rangeLabel }}</h3>

                <div class="my-4">
                  <span class="text-3xl font-black text-ep-navy font-heading">{{ format(isAnnual() ? plan.annual : plan.monthly) }}</span>
                  <span class="text-xs text-slate-500 font-bold"> FCFA / {{ isAnnual() ? 'an' : 'mois' }}</span>
                  <div class="text-[11px] font-bold text-slate-500 mt-1">
                    {{ format(perStudentFor(plan)) }} FCFA / élève / mois
                    @if (state.studentCount() < plan.min || state.studentCount() > plan.max) {
                      <span> · pour {{ plan.defaultCount }} élèves</span>
                    }
                  </div>
                </div>

                <ul class="space-y-2 text-xs text-slate-600 font-semibold">
                  @for (item of plan.features; track item) {
                    <li>✓ {{ item }}</li>
                  }
                </ul>
              </div>

              <div class="space-y-2">
                <button
                  type="button"
                  (click)="selectPlan(plan.key); $event.stopPropagation()"
                  class="w-full py-2.5 rounded-xl font-extrabold text-xs transition-colors"
                  [class.bg-ep-green]="selectedPlan() === plan.key"
                  [class.text-white]="selectedPlan() === plan.key"
                  [class.shadow-md]="selectedPlan() === plan.key"
                  [class.bg-slate-100]="selectedPlan() !== plan.key"
                  [class.text-slate-800]="selectedPlan() !== plan.key">
                  {{ selectedPlan() === plan.key ? 'Offre choisie' : plan.cta }}
                </button>

                @if (selectedPlan() === plan.key) {
                  <a
                    [href]="whatsappLink()"
                    target="_blank"
                    rel="noopener"
                    (click)="$event.stopPropagation()"
                    class="block w-full py-2.5 rounded-xl bg-[#25D366] text-white font-extrabold text-xs text-center">
                    Continuer sur WhatsApp
                  </a>
                }
              </div>
            </article>
          }
        </div>

      </div>
    </section>
  `
})
export class PricingCalculatorComponent {
  state = inject(EduPulseStateService);
  isAnnual = signal(true);
  selectedPlan = signal<PlanKey>(this.planForCount(this.state.studentCount()));

  readonly plans: Plan[] = [
    {
      key: 'starter',
      name: 'Offre Starter',
      rangeLabel: 'Moins de 300 élèves',
      min: 100,
      max: 299,
      defaultCount: 200,
      monthly: 25_000,
      annual: 250_000,
      cta: 'Choisir Starter',
      features: [
        'Multi-tenant isolé',
        'Saisie mobile hors ligne',
        'Bulletins PDF MINESEC',
        'Application parent',
      ],
    },
    {
      key: 'pro',
      name: 'Offre Pro',
      rangeLabel: '300 à 800 élèves',
      min: 300,
      max: 800,
      defaultCount: 450,
      monthly: 50_000,
      annual: 500_000,
      cta: 'Choisir Pro',
      features: [
        'Toutes les fonctions Starter',
        'Recouvrement Mobile Money',
        'Module IA d\'appréciations',
        'Relances SMS automatisées',
        'Tableau de bord direction & caisse',
      ],
    },
    {
      key: 'enterprise',
      name: 'Offre Enterprise',
      rangeLabel: 'Plus de 800 élèves',
      min: 801,
      max: 1500,
      defaultCount: 1000,
      monthly: 120_000,
      annual: 1_200_000,
      cta: 'Choisir Enterprise',
      features: [
        'Multi-établissements centralisé',
        'Support dédié 24/7',
        'Formation sur site des profs',
        'Hébergement dédié & SSO',
      ],
    },
  ];

  selectedPlanDef = computed(() => this.plans.find((p) => p.key === this.selectedPlan())!);

  selectedTotal = computed(() => {
    const plan = this.selectedPlanDef();
    return this.isAnnual() ? plan.annual : plan.monthly;
  });

  perStudentMonthly = computed(() => {
    const count = Math.max(this.state.studentCount(), 1);
    return Math.round(this.monthlyEquivalent(this.selectedPlanDef()) / count);
  });

  onStudentCount(count: number) {
    this.state.setStudentCount(count);
    this.selectedPlan.set(this.planForCount(count));
  }

  selectPlan(key: PlanKey) {
    const plan = this.plans.find((p) => p.key === key)!;
    this.selectedPlan.set(key);
    const count = this.state.studentCount();
    if (count < plan.min || count > plan.max) {
      this.state.setStudentCount(plan.defaultCount);
    }
  }

  perStudentFor(plan: Plan): number {
    const count = this.state.studentCount();
    const base = count >= plan.min && count <= plan.max ? count : plan.defaultCount;
    return Math.round(this.monthlyEquivalent(plan) / base);
  }

  whatsappLink(): string {
    const plan = this.selectedPlanDef();
    const period = this.isAnnual() ? 'annuel' : 'mensuel';
    const text = `Bonjour EduPulse, je souhaite l'${plan.name} (${period}) pour ${this.state.studentCount()} élèves.`;
    return `https://wa.me/14389855417?text=${encodeURIComponent(text)}`;
  }

  format(value: number): string {
    return value.toLocaleString('fr-FR');
  }

  private monthlyEquivalent(plan: Plan): number {
    return this.isAnnual() ? Math.round(plan.annual / 12) : plan.monthly;
  }

  private planForCount(count: number): PlanKey {
    if (count < 300) return 'starter';
    if (count <= 800) return 'pro';
    return 'enterprise';
  }
}
