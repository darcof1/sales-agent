import { NgModule } from '@angular/core';

import { SalesAgentsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [SalesAgentsSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [SalesAgentsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SalesAgentsSharedCommonModule {}
