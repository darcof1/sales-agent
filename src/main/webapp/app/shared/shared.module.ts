import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SalesAgentsSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SalesAgentsSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [SalesAgentsSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SalesAgentsSharedModule {
  static forRoot() {
    return {
      ngModule: SalesAgentsSharedModule
    };
  }
}
