import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { AppComponent } from './app.component';
import { StorefrontModule ,defaultCmsContentConfig,translations} from '@spartacus/storefront';
import { ReviewProductPopupComponent } from './review-product-popup/review-product-popup.component';

import { PandamonsterProductReviewComponent } from './pandamonster-product-review/pandamonster-product-review.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { I18nModule } from '@spartacus/core';
import {
  FormComponentsModule,
  StarRatingModule,
} from '@spartacus/storefront';
import { PandamonsterProductsTabComponent } from './pandamonster-products-tab/pandamonster-products-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewProductPopupComponent,
    PandamonsterProductReviewComponent,
    PandamonsterProductsTabComponent
  ],
  entryComponents:[PandamonsterProductReviewComponent, ReviewProductPopupComponent, PandamonsterProductsTabComponent],
  imports: [
    BrowserModule,
    
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormComponentsModule,
    I18nModule,
    StarRatingModule,
    StorefrontModule.withConfig({

      cmsComponents: {
        CMSTabParagraphContainer : {
          selector : 'app-pandamonster-products-tab',
        },
        reviewBanner:{
          selector: 'app-review-product-popup'
        }
      },
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
