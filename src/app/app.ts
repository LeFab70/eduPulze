import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroPosterComponent } from './components/hero-poster/hero-poster.component';
import { FeaturesGridComponent } from './components/features-grid/features-grid.component';
import { PaymentSectionComponent } from './components/payment-section/payment-section.component';
import { RoleMatrixComponent } from './components/role-matrix/role-matrix.component';
import { ModulesExplorerComponent } from './components/modules-explorer/modules-explorer.component';
import { PricingCalculatorComponent } from './components/pricing-calculator/pricing-calculator.component';
import { ArchitectureTechComponent } from './components/architecture-tech/architecture-tech.component';
import { FooterComponent } from './components/footer/footer.component';
import { RealitiesComponent } from './components/realities/realities.component';
import { StatsBarComponent } from './components/stats-bar/stats-bar.component';
import { DemoGalleryComponent } from './components/demo-gallery/demo-gallery.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { WhatsappFloatComponent } from './components/whatsapp-float/whatsapp-float.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroPosterComponent,
    StatsBarComponent,
    FeaturesGridComponent,
    PaymentSectionComponent,
    RealitiesComponent,
    DemoGalleryComponent,
    RoleMatrixComponent,
    ModulesExplorerComponent,
    PricingCalculatorComponent,
    ArchitectureTechComponent,
    FooterComponent,
    ChatbotComponent,
    WhatsappFloatComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
