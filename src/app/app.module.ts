import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { AppComponent } from './app.component';
import { StorefrontModule ,defaultCmsContentConfig,translations} from '@spartacus/storefront';
import { ReviewProductPopupComponent } from './review-product-popup/review-product-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewProductPopupComponent
  ],
  imports: [
    BrowserModule,StorefrontModule.withConfig({
      siteContext: {
          urlEncodingParameters: ['BASE_SITE', 'LANGUAGE', 'CURRENCY'],
          parameters: {
            BASE_SITE: {
              values: ['electronics-spa', 'electronics', 'apparel-de', 'apparel-uk'],
              defaultValue: 'electronics-spa',
              persistence: 'route'
            }
          }
        },
      backend: {
        
        occ: {
          baseUrl: 'https://api.cqz1m-softwarea1-d49-public.model-t.cc.commerce.ondemand.com',
          prefix: '/rest/v2/'
        },
        authentication: {
          client_id: 'mobile_android',
          client_secret: 'secret'
        },
        site: {
          //baseSite: 'electronics-spa'
          
        
        },
        
        icon: {
          prefix: 'fa-',
          iconClass: 'fas'
        }
      },
      i18n: {
        resources: translations
      }
    }), ConfigModule.withConfigFactory(defaultCmsContentConfig)]

  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
