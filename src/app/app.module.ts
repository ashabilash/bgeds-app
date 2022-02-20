import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { ServicesInfoComponent } from './components/services-info/services-info.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { IntroGreetComponent } from './components/intro-greet/intro-greet.component';
import { WhoweareComponent } from './components/whoweare/whoweare.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { Whoweare2Component } from './components/whoweare2/whoweare2.component';
import { ContactPersonComponent } from './components/contact-person/contact-person.component';

import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesOverviewComponent } from './components/services-overview/services-overview.component';
import { SolarEngineeringComponent } from './components/solar-engineering/solar-engineering.component';
import { InfrastructuralEngineeringComponent } from './components/infrastructural-engineering/infrastructural-engineering.component';
import { GradingAnalysisComponent } from './components/solar-engineering/grading-analysis/grading-analysis.component';
import { FoundationalDesignComponent } from './components/solar-engineering/foundational-design/foundational-design.component';
// tslint:disable-next-line:max-line-length
import { RackingStructureDesignComponent } from './components/solar-engineering/racking-structure-design/racking-structure-design.component';
// tslint:disable-next-line:max-line-length
import { InfrastructureDevelopmentComponent } from './components/solar-engineering/infrastructure-development/infrastructure-development.component';
import { PvLayoutComponent } from './components/solar-engineering/pv-layout/pv-layout.component';
import { CorrosionStudyComponent } from './components/solar-engineering/corrosion-study/corrosion-study.component';
import { FieldTestingComponent } from './components/solar-engineering/field-testing/field-testing.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddressComponent } from './components/address/address.component';
// tslint:disable-next-line:max-line-length
import { ArchCivilStructServicesComponent } from './components/infrastructural-engineering/arch-civil-struct-services/arch-civil-struct-services.component';
// tslint:disable-next-line:max-line-length
import { MechProcessEngineeringComponent } from './components/infrastructural-engineering/mech-process-engineering/mech-process-engineering.component';
import { MepBuildingComponent } from './components/infrastructural-engineering/mep-building/mep-building.component';
// tslint:disable-next-line:max-line-length
import { D3RenderingCivilMechComponent } from './components/infrastructural-engineering/d3-rendering-civil-mech/d3-rendering-civil-mech.component';
import { GeotechFoundationComponent } from './components/infrastructural-engineering/geotech-foundation/geotech-foundation.component';
// tslint:disable-next-line:max-line-length
import { ConstructionManagementComponent } from './components/infrastructural-engineering/construction-management/construction-management.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'services', component: ServicesInfoComponent },
  { path: 'whoweare', component: Whoweare2Component },
  { path: 'solar-engineering', component: SolarEngineeringComponent },
  { path: 'industrial-engineering', component: InfrastructuralEngineeringComponent },
  { path: 'solar-engineering/grading-analysis', component: GradingAnalysisComponent },
  { path: 'solar-engineering/foundation-design', component: FoundationalDesignComponent },
  { path: 'solar-engineering/racking-structure-design', component: RackingStructureDesignComponent },
  { path: 'solar-engineering/infrastructure-development', component: InfrastructureDevelopmentComponent },
  { path: 'solar-engineering/pv-layout', component: PvLayoutComponent },
  { path: 'solar-engineering/corrosion-study', component: CorrosionStudyComponent },
  { path: 'solar-engineering/field-testing', component: FieldTestingComponent },
  { path: 'industrial-engineering/arch-civil-struct-services', component: ArchCivilStructServicesComponent },
  { path: 'industrial-engineering/mech-process-engineering', component: MechProcessEngineeringComponent },
  { path: 'industrial-engineering/d3-rendering-civil-mech', component: D3RenderingCivilMechComponent },
  { path: 'industrial-engineering/mep-building', component: MepBuildingComponent },
  { path: 'industrial-engineering/geotech-foundation', component: GeotechFoundationComponent },
  { path: 'industrial-engineering/construction-management', component: ConstructionManagementComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    ServicesInfoComponent,
    FooterComponent,
    IntroGreetComponent,
    WhoweareComponent,
    AboutusComponent,
    Whoweare2Component,
    ContactPersonComponent,
    HomePageComponent,
    ServicesOverviewComponent,
    SolarEngineeringComponent,
    InfrastructuralEngineeringComponent,
    GradingAnalysisComponent,
    FoundationalDesignComponent,
    RackingStructureDesignComponent,
    InfrastructureDevelopmentComponent,
    PvLayoutComponent,
    CorrosionStudyComponent,
    FieldTestingComponent,
    AddressComponent,
    ArchCivilStructServicesComponent,
    MechProcessEngineeringComponent,
    MepBuildingComponent,
    D3RenderingCivilMechComponent,
    GeotechFoundationComponent,
    ConstructionManagementComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
