import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { LayoutComponent } from './/layout.component';
import { AppHeader } from './/app-header/app-header.component';
import { AppSidebar } from './/app-sidebar/app-sidebar.component';
import { AppFooter } from './/app-footer/app-footer.component';
import { AppBanner } from './/app-banner/app-banner.component';

@NgModule({
	declarations: [
	  LayoutComponent,
	  AppHeader,
	  AppSidebar,
	  AppFooter,
	  AppBanner,
	],
	exports: [
	  LayoutComponent,
	  AppHeader,
	  AppSidebar,
	  AppFooter,
	  AppBanner,
	],
	imports: [
		RouterModule,
	]
})
export class LayoutModule {
}