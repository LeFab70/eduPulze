import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduPulseStateService } from '../../services/edupulse-state.service';

@Component({
  selector: 'app-payment-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="payment-sim" class="py-16 bg-slate-950 relative overflow-hidden">
      
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span class="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30">
            Recouvrement Automatisé In-App
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Paiement de scolarité par Mobile Money
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Fini les files d'attente à la caisse de l'école. Les parents payent les tranches direct depuis leur téléphone avec reçu numérique instantané.
          </p>
        </div>

        <!-- Poster Payment Providers Box & Simulator Container -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <!-- Left: Poster Exact Representation Card -->
          <div class="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            
            <div class="text-center lg:text-left">
              <h3 class="text-xl font-black text-white uppercase tracking-tight mb-1 font-heading">PAYEZ FACILEVEMENT AVEC</h3>
              <p class="text-xs text-slate-400">Intégration directe via les agrégateurs certifiés</p>
            </div>

            <!-- Logos Grid from Poster -->
            <div class="grid grid-cols-2 gap-3">
              
              <!-- MTN Mobile Money -->
              <div class="p-3 bg-amber-400 text-slate-950 rounded-xl font-black text-center shadow-md flex flex-col items-center justify-center">
                <span class="text-xs tracking-tighter uppercase font-heading">MTN</span>
                <span class="text-sm font-extrabold">Mobile Money</span>
              </div>

              <!-- Orange Money -->
              <div class="p-3 bg-orange-600 text-white rounded-xl font-black text-center shadow-md flex flex-col items-center justify-center">
                <span class="text-xs tracking-tighter uppercase font-heading">ORANGE</span>
                <span class="text-sm font-extrabold">Money</span>
              </div>

              <!-- Moov Money -->
              <div class="p-3 bg-blue-600 text-white rounded-xl font-black text-center shadow-md flex flex-col items-center justify-center">
                <span class="text-xs tracking-tighter uppercase font-heading">MOOV</span>
                <span class="text-sm font-extrabold">Money</span>
              </div>

              <!-- VISA / MasterCard -->
              <div class="p-3 bg-slate-900 border border-slate-700 text-white rounded-xl font-black text-center shadow-md flex flex-col items-center justify-center">
                <span class="text-xs tracking-widest uppercase font-heading text-blue-400">VISA</span>
                <span class="text-[10px] text-slate-400 font-normal">Carte Bancaire</span>
              </div>

            </div>

            <!-- Poster Guarantees Checklist -->
            <div class="space-y-3 pt-4 border-t border-slate-800/80">
              <div class="flex items-center gap-3 text-sm font-semibold text-slate-200">
                <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>Paiement 100% sécurisé</span>
              </div>

              <div class="flex items-center gap-3 text-sm font-semibold text-slate-200">
                <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>Reçus instantanés horodatés</span>
              </div>

              <div class="flex items-center gap-3 text-sm font-semibold text-slate-200">
                <div class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>Paiement à votre rythme selon l'échéancier</span>
              </div>
            </div>

          </div>

          <!-- Right: Interactive Payment Simulator -->
          <div class="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/30 bg-slate-900/90 relative">
            
            <div class="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div>
                <h3 class="text-xl font-bold text-white font-heading">Simulateur d'Encaissement In-App</h3>
                <p class="text-xs text-slate-400">Essayez le paiement d'une tranche pour l'élève {{ state.activeChild().name }}</p>
              </div>
              <span class="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                API Webhook Live
              </span>
            </div>

            <!-- SIMULATOR STEP 1: IDLE -->
            @if (state.paymentStatus() === 'IDLE') {
              <div class="space-y-5">
                
                <!-- Child & Tuition Context -->
                <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div class="text-xs text-slate-400 font-medium">Élève concerné :</div>
                    <div class="font-extrabold text-white text-sm">{{ state.activeChild().name }} ({{ state.activeChild().class }})</div>
                    <div class="text-[11px] text-slate-400">Reste à payer : {{ state.activeChild().nextDueAmount | number }} FCFA</div>
                  </div>
                  <div class="text-right">
                    <div class="text-xs text-emerald-400 font-bold">Tranche N° 2</div>
                    <div class="text-xs text-slate-400">Échéance : 15 Nov</div>
                  </div>
                </div>

                <!-- Provider Selector -->
                <div>
                  <label class="block text-xs font-bold text-slate-300 uppercase mb-2">Sélectionnez le moyen de paiement</label>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button 
                      (click)="state.paymentProvider.set('ORANGE')"
                      [class]="state.paymentProvider() === 'ORANGE' ? 'border-orange-500 bg-orange-950/60 text-white' : 'border-slate-800 bg-slate-950 text-slate-400'"
                      class="p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all">
                      <span>Orange Money</span>
                    </button>

                    <button 
                      (click)="state.paymentProvider.set('MTN')"
                      [class]="state.paymentProvider() === 'MTN' ? 'border-amber-500 bg-amber-950/60 text-white' : 'border-slate-800 bg-slate-950 text-slate-400'"
                      class="p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all">
                      <span>MTN MoMo</span>
                    </button>

                    <button 
                      (click)="state.paymentProvider.set('MOOV')"
                      [class]="state.paymentProvider() === 'MOOV' ? 'border-blue-500 bg-blue-950/60 text-white' : 'border-slate-800 bg-slate-950 text-slate-400'"
                      class="p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all">
                      <span>Moov Money</span>
                    </button>

                    <button 
                      (click)="state.paymentProvider.set('VISA')"
                      [class]="state.paymentProvider() === 'VISA' ? 'border-purple-500 bg-purple-950/60 text-white' : 'border-slate-800 bg-slate-950 text-slate-400'"
                      class="p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all">
                      <span>Carte VISA</span>
                    </button>
                  </div>
                </div>

                <!-- Phone Input & Amount -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-300 uppercase mb-1">Numéro Mobile Money</label>
                    <input 
                      type="text" 
                      [value]="state.phoneNumber()" 
                      (input)="onPhoneChange($event)"
                      class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm font-bold focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label class="block text-xs font-bold text-slate-300 uppercase mb-1">Montant à verser (FCFA)</label>
                    <input 
                      type="number" 
                      [value]="state.paymentAmount()" 
                      (input)="onAmountChange($event)"
                      class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 text-sm font-black focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <!-- Submit Button -->
                <button 
                  (click)="state.startMobileMoneyPayment(state.paymentProvider(), state.phoneNumber(), state.paymentAmount())"
                  class="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 border border-emerald-400/40 transition-all">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  <span>Lancer le Paiement In-App ({{ state.paymentAmount() | number }} FCFA)</span>
                </button>

              </div>
            }

            <!-- SIMULATOR STEP 2: USSD PROMPT SIMULATION -->
            @if (state.paymentStatus() === 'PROMPT') {
              <div class="p-6 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-center space-y-4 animate-pulse">
                <div class="w-12 h-12 mx-auto rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-black">
                  📲
                </div>
                <h4 class="text-lg font-bold text-white">Prompt USSD envoyé sur le téléphone</h4>
                <p class="text-xs text-amber-200">
                  Un message de confirmation {{ state.paymentProvider() }} a été envoyé au <strong class="text-white font-mono">{{ state.phoneNumber() }}</strong>.
                </p>
                <div class="p-3 bg-slate-950 rounded-xl border border-amber-500/30 text-xs font-mono text-amber-300">
                  "EduPulse: Veuillez approuver le paiement de {{ state.paymentAmount() | number }} FCFA pour la scolarité de {{ state.activeChild().name }}."
                </div>
              </div>
            }

            <!-- SIMULATOR STEP 3: PROCESSING -->
            @if (state.paymentStatus() === 'PROCESSING') {
              <div class="p-8 rounded-2xl bg-blue-950/40 border border-blue-500/40 text-center space-y-4">
                <div class="w-10 h-10 mx-auto rounded-full border-4 border-blue-400 border-t-transparent animate-spin"></div>
                <h4 class="text-base font-bold text-white">Traitement Webhook synchrone en cours...</h4>
                <p class="text-xs text-blue-200">Validation de la transaction avec l'opérateur et mise à jour de la caisse de l'école.</p>
              </div>
            }

            <!-- SIMULATOR STEP 4: SUCCESS WITH PDF RECEIPT -->
            @if (state.paymentStatus() === 'SUCCESS') {
              <div class="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/60 space-y-4">
                
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-xl">
                    ✓
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-white">Paiement Réussi !</h4>
                    <p class="text-xs text-emerald-300">La scolarité de {{ state.activeChild().name }} a été mise à jour instantanément.</p>
                  </div>
                </div>

                <!-- Digital PDF Receipt Mockup -->
                <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-2 text-slate-300">
                  <div class="flex justify-between border-b border-slate-800 pb-2 text-white font-bold">
                    <span>REÇU DE CAISSE NUMÉRIQUE</span>
                    <span class="text-emerald-400">{{ state.receiptPdfId() }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Élève :</span>
                    <span class="text-white">{{ state.activeChild().name }} ({{ state.activeChild().class }})</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Montant réglé :</span>
                    <span class="text-emerald-400 font-bold">{{ state.paymentAmount() | number }} FCFA</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Mode :</span>
                    <span>{{ state.paymentProvider() }} Money ({{ state.phoneNumber() }})</span>
                  </div>
                  <div class="flex justify-between text-[10px] text-slate-500 pt-1">
                    <span>Horodatage :</span>
                    <span>13/08/2026 14:55:00</span>
                  </div>
                </div>

                <div class="flex items-center gap-3">
                  <button 
                    (click)="state.resetPayment()"
                    class="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs">
                    Refaire une simulation
                  </button>

                  <button 
                    (click)="printReceipt()"
                    class="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                    <span>Imprimer le Reçu PDF</span>
                  </button>
                </div>

              </div>
            }

          </div>

        </div>

      </div>

    </section>
  `
})
export class PaymentSectionComponent {
  state = inject(EduPulseStateService);

  onPhoneChange(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    this.state.phoneNumber.set(val);
  }

  onAmountChange(e: Event) {
    const val = Number((e.target as HTMLInputElement).value);
    this.state.paymentAmount.set(val);
  }

  printReceipt() {
    window.print();
  }
}
