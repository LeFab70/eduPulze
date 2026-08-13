import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduPulseStateService } from '../../services/edupulse-state.service';

@Component({
  selector: 'app-payment-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="payment-sim" class="py-16 bg-ep-lightBg relative">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span class="text-xs font-extrabold uppercase tracking-widest text-ep-green bg-ep-lightGreen px-3 py-1 rounded-full border border-ep-green/30">
            Paiement Scolaire Direct
          </span>
          <h2 class="text-3xl sm:text-4xl font-black text-ep-navy font-heading">
            Recouvrement Automatisé In-App
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            Encaissement immédiat par Mobile Money et émission directe de reçus numériques.
          </p>
        </div>

        <!-- Poster Exact Payment Section Representation -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <!-- Left Part: Logos Grid -->
          <div class="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div>
              <h3 class="text-xl sm:text-2xl font-black text-ep-navy uppercase tracking-tight font-heading mb-1">
                PAYEZ FACILEVEMENT AVEC
              </h3>
              <p class="text-xs text-slate-500 font-medium">Agrégation directe Orange Money, MTN MoMo, Moov & Carte Bancaire</p>
            </div>

            <!-- Provider Logos Grid directly matching poster -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              
              <!-- MTN Mobile Money -->
              <div class="p-3.5 bg-ep-momoYellow text-slate-950 rounded-2xl font-black text-center shadow-sm flex flex-col items-center justify-center border border-amber-400">
                <span class="text-xs font-black tracking-tighter uppercase font-heading">MTN</span>
                <span class="text-xs font-black">Mobile Money</span>
              </div>

              <!-- Orange Money -->
              <div class="p-3.5 bg-ep-orangeMoney text-white rounded-2xl font-black text-center shadow-sm flex flex-col items-center justify-center border border-orange-500">
                <span class="text-xs font-black tracking-tighter uppercase font-heading">ORANGE</span>
                <span class="text-xs font-black">Money</span>
              </div>

              <!-- Moov Money -->
              <div class="p-3.5 bg-ep-moovBlue text-white rounded-2xl font-black text-center shadow-sm flex flex-col items-center justify-center border border-blue-600">
                <span class="text-xs font-black tracking-tighter uppercase font-heading">MOOV</span>
                <span class="text-xs font-black">Money</span>
              </div>

              <!-- VISA -->
              <div class="p-3.5 bg-ep-navy text-white rounded-2xl font-black text-center shadow-sm flex flex-col items-center justify-center border border-ep-navyDark">
                <span class="text-xs font-black tracking-widest text-blue-400 uppercase font-heading">VISA</span>
                <span class="text-[10px] font-semibold text-slate-300">Carte</span>
              </div>

            </div>

            <!-- Simulator Form Input -->
            <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
              <div class="flex items-center justify-between text-xs font-bold text-ep-navy">
                <span>DÉMO LIVE : Payer pour {{ state.activeChild().name }}</span>
                <span class="text-ep-green">Reste : {{ state.activeChild().nextDueAmount | number }} FCFA</span>
              </div>

              @if (state.paymentStatus() === 'IDLE') {
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-[11px] font-bold uppercase text-slate-500 mb-1">Numéro Mobile Money</label>
                    <input 
                      type="text" 
                      [value]="state.phoneNumber()" 
                      (input)="onPhoneChange($event)"
                      class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs font-bold focus:border-ep-green focus:outline-none"
                    />
                  </div>

                  <div>
                    <label class="block text-[11px] font-bold uppercase text-slate-500 mb-1">Montant à régler (FCFA)</label>
                    <input 
                      type="number" 
                      [value]="state.paymentAmount()" 
                      (input)="onAmountChange($event)"
                      class="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-ep-green text-xs font-black focus:border-ep-green focus:outline-none"
                    />
                  </div>
                </div>

                <button 
                  (click)="state.startMobileMoneyPayment(state.paymentProvider(), state.phoneNumber(), state.paymentAmount())"
                  class="w-full py-3 rounded-xl bg-ep-green hover:bg-ep-greenHover text-white font-extrabold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2">
                  <span>Lancer le Paiement In-App ({{ state.paymentAmount() | number }} FCFA)</span>
                </button>
              }

              @if (state.paymentStatus() === 'PROMPT') {
                <div class="p-4 bg-amber-50 border border-amber-300 text-amber-900 rounded-xl text-xs text-center space-y-2 animate-pulse">
                  <div class="font-extrabold text-sm">📲 Validation USSD envoyée au {{ state.phoneNumber() }}</div>
                  <p>Veuillez entrer votre code secret Orange / MTN pour valider les {{ state.paymentAmount() | number }} FCFA.</p>
                </div>
              }

              @if (state.paymentStatus() === 'PROCESSING') {
                <div class="p-4 bg-blue-50 border border-blue-300 text-blue-900 rounded-xl text-xs text-center space-y-2">
                  <div class="font-extrabold text-sm">Traitement du Webhook...</div>
                  <p>Validation synchrone avec l'opérateur.</p>
                </div>
              }

              @if (state.paymentStatus() === 'SUCCESS') {
                <div class="p-4 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl text-xs space-y-3">
                  <div class="font-extrabold text-sm flex items-center gap-2 text-ep-green">
                    <span>✓ Paiement Validé !</span>
                    <span class="font-mono text-slate-600">Reçu N° {{ state.receiptPdfId() }}</span>
                  </div>
                  <div class="flex gap-2">
                    <button (click)="state.resetPayment()" class="px-3 py-1.5 bg-slate-200 rounded text-slate-800 font-bold">Réessayer</button>
                    <button (click)="printReceipt()" class="px-3 py-1.5 bg-ep-green text-white rounded font-bold">Imprimer le Reçu</button>
                  </div>
                </div>
              }
            </div>

          </div>

          <!-- Right Part: Poster Dark Blue Panel with Checkmarks -->
          <div class="lg:col-span-5 bg-ep-navy text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-center space-y-6 shadow-md">
            
            <div class="space-y-4">
              
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-ep-green text-white flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <span class="text-base sm:text-lg font-extrabold font-heading">Paiement sécurisé</span>
              </div>

              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-ep-green text-white flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <span class="text-base sm:text-lg font-extrabold font-heading">Reçus instantanés</span>
              </div>

              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-ep-green text-white flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </div>
                <span class="text-base sm:text-lg font-extrabold font-heading">Paiement à votre rythme</span>
              </div>

            </div>

            <p class="text-xs text-slate-300 border-t border-slate-700/80 pt-4 leading-relaxed">
              Dès la confirmation du paiement par MTN MoMo ou Orange Money, un reçu de caisse numérique est automatiquement généré et transmis au parent.
            </p>

          </div>

        </div>

      </div>

    </section>
  `
})
export class PaymentSectionComponent {
  state = inject(EduPulseStateService);

  onPhoneChange(e: Event) {
    this.state.phoneNumber.set((e.target as HTMLInputElement).value);
  }

  onAmountChange(e: Event) {
    this.state.paymentAmount.set(Number((e.target as HTMLInputElement).value));
  }

  printReceipt() {
    window.print();
  }
}
