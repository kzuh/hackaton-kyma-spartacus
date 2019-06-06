import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UIProduct, WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService,ProductTabsOutlets } from '@spartacus/storefront';


@Component({
  selector: 'app-pandamonster-products-tab',
  templateUrl: './pandamonster-products-tab.component.html',
  styleUrls: ['./pandamonster-products-tab.component.scss']
})
export class PandamonsterProductsTabComponent implements OnInit {
  static outlets = ProductTabsOutlets;

  product$: Observable<UIProduct>;

  isWritingReview = false;
  activatedElements: HTMLElement[] = [];

  @ViewChild('descriptionHeader', {read:true,static:true})
  set initial(ref: ElementRef) {
    if (ref) {
      ref.nativeElement.click();
    }
  }

  @ViewChild('reviewHeader',{read:true,static:true}) reviewHeader: ElementRef;

  get outlets() {
    return PandamonsterProductsTabComponent.outlets;
  }

  constructor(
    protected winRef: WindowRef,
    protected currentPageService: CurrentProductService
  ) {}

  ngOnInit(): void {
    this.product$ = this.currentPageService.getProduct();
  }

  select(event: MouseEvent, tab: HTMLElement): void {
    if (!this.activatedElements.includes(tab)) {
      // remove active class on both header and content panel
      this.activatedElements.forEach(el =>
        el.classList.remove('active', 'toggled')
      );
      this.activatedElements = [<HTMLElement>event.target, tab];
      this.activatedElements.forEach(el => el.classList.add('active'));

      // only scroll if the element is not yet visible
      if (this.isElementOutViewport(tab)) {
        tab.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    } else {
      this.activatedElements.forEach(el => el.classList.toggle('toggled'));
    }
  }

  openReview(): void {
    if (this.reviewHeader.nativeElement) {
      this.reviewHeader.nativeElement.click();
    }
  }

  private isElementOutViewport(el: HTMLElement): boolean {
    if (!this.winRef.nativeWindow) {
      return false;
    }
    const rect = el.getBoundingClientRect();
    return (
      rect.bottom < 0 ||
      rect.right < 0 ||
      rect.left > this.winRef.nativeWindow.innerWidth ||
      rect.top > this.winRef.nativeWindow.innerHeight
    );
  }
}