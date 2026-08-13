import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ChatMsg {
  from: 'bot' | 'user';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3">
      @if (open()) {
        <div class="w-[min(92vw,360px)] rounded-3xl bg-white shadow-poster border border-slate-100 overflow-hidden flex flex-col max-h-[70vh]">
          <div class="bg-ep-navy text-white px-4 py-3 flex items-center justify-between">
            <div>
              <div class="text-sm font-extrabold font-heading">EduPulse</div>
              <div class="text-[10px] text-emerald-300">Questions fréquentes</div>
            </div>
            <button (click)="open.set(false)" class="text-white/80 hover:text-white text-lg leading-none" aria-label="Fermer">×</button>
          </div>

          <div class="p-3 space-y-2 overflow-y-auto flex-1 bg-slate-50 min-h-[220px]">
            @for (m of messages(); track $index) {
              <div [class]="m.from === 'bot' ? 'mr-8' : 'ml-8 text-right'">
                <div [class]="m.from === 'bot' ? 'bg-white text-slate-700' : 'bg-ep-green text-white'" class="inline-block px-3 py-2 rounded-2xl text-xs leading-relaxed">
                  {{ m.text }}
                </div>
              </div>
            }
          </div>

          <div class="p-3 border-t border-slate-100 grid grid-cols-1 gap-1.5 bg-white">
            @for (q of questions; track q.label) {
              <button (click)="ask(q)" class="text-left text-[11px] font-semibold px-3 py-2 rounded-xl bg-slate-50 hover:bg-ep-lightGreen hover:text-ep-green text-ep-navy transition-colors">
                {{ q.label }}
              </button>
            }
            <a
              href="https://wa.me/14389855417?text=Bonjour%20EduPulse"
              target="_blank"
              rel="noopener"
              class="text-center text-[11px] font-extrabold px-3 py-2 rounded-xl bg-[#25D366] text-white">
              Continuer sur WhatsApp
            </a>
          </div>
        </div>
      }

      <button
        (click)="open.set(!open())"
        class="w-14 h-14 rounded-full bg-ep-green text-white shadow-lg shadow-ep-green/40 flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Ouvrir le chat">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 10h8M8 14h5M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.2-.92L3 20l1.08-3.24A7.5 7.5 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
      </button>
    </div>
  `
})
export class ChatbotComponent {
  open = signal(false);
  messages = signal<ChatMsg[]>([
    { from: 'bot', text: 'Bonjour. Comment puis-je vous aider ? Choisissez une question, ou écrivez-nous sur WhatsApp.' }
  ]);

  questions = [
    { label: 'Comment payer la scolarité ?', answer: 'Depuis l’application parent : onglet Paiements, choisissez MTN, Orange, Moov ou Visa. Le reçu arrive tout de suite.' },
    { label: 'Comment suivre les notes ?', answer: 'Ouvrez Mes enfants, puis Notes. Moyenne, rang et dernières évaluations sont à jour en temps réel.' },
    { label: 'Ça marche hors ligne ?', answer: 'Oui. Les enseignants saisissent les notes sans réseau. Tout se synchronise dès que la connexion revient.' },
    { label: 'Combien pour une école ?', answer: 'Selon le nombre d’élèves. Voyez la section Tarifs plus bas, ou contactez-nous pour un devis.' },
    { label: 'Vous joindre ?', answer: 'Canada · +1 438 985-5417 (WhatsApp) · kouonang2002@gmail.com' },
  ];

  ask(q: { label: string; answer: string }) {
    this.messages.update(list => [...list, { from: 'user', text: q.label }, { from: 'bot', text: q.answer }]);
  }
}
