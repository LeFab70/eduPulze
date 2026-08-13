import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroPosterComponent } from './components/hero-poster/hero-poster.component';
import { FeaturesGridComponent } from './components/features-grid/features-grid.component';
import { PaymentSectionComponent } from './components/payment-section/payment-section.component';
import { RoleMatrixComponent } from './components/role-matrix/role-matrix.component';
import { ModulesExplorerComponent } from './components/modules-explorer/modules-explorer.component';
import { TeacherSimulatorComponent } from './components/simulators/teacher-simulator/teacher-simulator.component';
import { BulletinGeneratorComponent } from './components/simulators/bulletin-generator/bulletin-generator.component';
import { PricingCalculatorComponent } from './components/pricing-calculator/pricing-calculator.component';
import { ArchitectureTechComponent } from './components/architecture-tech/architecture-tech.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroPosterComponent,
    FeaturesGridComponent,
    PaymentSectionComponent,
    RoleMatrixComponent,
    ModulesExplorerComponent,
    TeacherSimulatorComponent,
    BulletinGeneratorComponent,
    PricingCalculatorComponent,
    ArchitectureTechComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
