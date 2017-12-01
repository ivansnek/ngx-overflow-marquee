import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MarqueeComponent } from './component/marquee.component';

// Export module's public API
export { MarqueeComponent } from './component/marquee.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MarqueeComponent],
  declarations: [MarqueeComponent]
})
export class MarqueeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MarqueeModule
    };
  }
}
