import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './/layouts/layout.component';

import { HomeComponent } from './pages/home/home.component';

import { ColorsComponent } from './pages/ui/colors/colors.component';
import { TypographyComponent } from './pages/ui/typography/typography.component';
import { PanelsComponent } from './pages/ui/panels/panels.component';
import { TabsComponent } from './pages/ui/tabs/tabs.component';
import { AlertsComponent } from './pages/ui/alerts/alerts.component';
import { CardsComponent } from './pages/ui/cards/cards.component';
import { BadgesProgressComponent } from './pages/ui/badges-progress/badges-progress.component';
import { ListComponent } from './pages/ui/list/list.component';
import { IconsComponent } from './pages/ui/icons/icons.component';
import { ButtonsComponent } from './pages/ui/buttons/buttons.component';

import { FormBasicComponent } from './pages/forms/form-basic/form-basic.component';
import { InputMasksComponent } from './pages/forms/input-masks/input-masks.component';
import { FormValidationComponent } from './pages/forms/form-validation/form-validation.component';
import { TextEditorsComponent } from './pages/forms/text-editors/text-editors.component';
import { FormAdvancedComponent } from './pages/forms/form-advanced/form-advanced.component';

import { TablesComponent } from './pages/tables/tables.component';
import { DatatablesComponent } from './pages/datatables/datatables.component';

import { ChartjsComponent } from './pages/charts/chartjs/chartjs.component';
import { MorrisChartComponent } from './pages/charts/morris-chart/morris-chart.component';
import { SparklineChartComponent } from './pages/charts/sparkline-chart/sparkline-chart.component';

import { MapsVectorComponent } from './pages/maps-vector/maps-vector.component';

import { MailboxComponent } from './pages/mailbox/mailbox/mailbox.component';
import { MailComposeComponent } from './pages/mailbox/mail-compose/mail-compose.component';
import { MailViewComponent } from './pages/mailbox/mail-view/mail-view.component';

import { CalendarComponent } from './pages/calendar/calendar.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LockscreenComponent } from './pages/lockscreen/lockscreen.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { Error500Component } from './pages/error-500/error-500.component';


const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {
        "path": "",
        "component": LayoutComponent,
        "children": [
            {
                path: "index",
                component: HomeComponent
            },
            {
                path: "ui/colors",
                component: ColorsComponent
            },
            {
                path: "ui/typography",
                component: TypographyComponent
            },
            {
                path: "ui/panels",
                component: PanelsComponent
            },
            {
                path: "ui/buttons",
                component: ButtonsComponent
            },
            {
                path: "ui/tabs",
                component: TabsComponent
            },
            {
                path: "ui/alerts",
                component: AlertsComponent
            },
            {
                path: "ui/badges_progress",
                component: BadgesProgressComponent
            },
            {
                path: "ui/lists",
                component: ListComponent
            },
            {
                path: "ui/cards",
                component: CardsComponent
            },
            {
                path: "ui/icons",
                component: IconsComponent
            },
            {
                path: "forms/form_basic",
                component: FormBasicComponent
            },
            {
                path: "forms/form_advanced",
                component: FormAdvancedComponent
            },
            {
                path: "forms/form_masks",
                component: InputMasksComponent
            },
            {
                path: "forms/form_validation",
                component: FormValidationComponent
            },
            {
                path: "forms/text_editors",
                component: TextEditorsComponent
            },
            {
                path: "tables/basic",
                component: TablesComponent
            },
            {
                path: "tables/datatables",
                component: DatatablesComponent
            },
            {
                path: "charts/chartjs",
                component: ChartjsComponent
            },
            {
                path: "charts/charts_morris",
                component: MorrisChartComponent
            },
            {
                path: "charts/charts_sparkline",
                component: SparklineChartComponent
            },
            {
                path: "maps_vector",
                component: MapsVectorComponent
            },
            {
                path: "mailbox/mailbox",
                component: MailboxComponent
            },
            {
                path: "mailbox/mail_view",
                component: MailViewComponent
            },
            {
                path: "mailbox/mail_compose",
                component: MailComposeComponent
            },
            {
                path: "calendar",
                component: CalendarComponent
            },
            {
                "path": "invoice",
                "component": InvoiceComponent
            },
            {
                path: "profile",
                component: ProfileComponent
            },
        ]
    },
    {
        "path": "login",
        "component": LoginComponent
    },
    {
        "path": "register",
        "component": RegisterComponent
    },
    {
        "path": "lockscreen",
        "component": LockscreenComponent
    },
    {
        "path": "forgot_password",
        "component": ForgotPasswordComponent
    },
    {
        "path": "error_404",
        "component": Error404Component
    },
    {
        "path": "error_500",
        "component": Error500Component
    },
    {
        "path": "**",
        "redirectTo": "error_404",
        "pathMatch": "full"
    },
];

@NgModule({
  declarations: [
    HomeComponent,
    ColorsComponent,
    TypographyComponent,
    PanelsComponent,
    TabsComponent,
    AlertsComponent,
    CardsComponent,
    BadgesProgressComponent,
    ListComponent,
    IconsComponent,
    ButtonsComponent,
    FormBasicComponent,
    InputMasksComponent,
    FormValidationComponent,
    TextEditorsComponent,
    FormAdvancedComponent,
    TablesComponent,
    DatatablesComponent,
    ChartjsComponent,
    MorrisChartComponent,
    SparklineChartComponent,
    MapsVectorComponent,
    MailboxComponent,
    MailComposeComponent,
    MailViewComponent,
    CalendarComponent,
    ProfileComponent,
    InvoiceComponent,
    LoginComponent,
    RegisterComponent,
    LockscreenComponent,
    ForgotPasswordComponent,
    Error404Component,
    Error500Component,
  ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ 
    RouterModule,
  ]
})

export class AppRoutingModule { }
