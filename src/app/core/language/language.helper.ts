import { Injectable, RendererFactory2, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Injectable()
export class AppTitleService {
    rendererHtmlTag: Renderer2 = null;
    private actualTitle: string = null;

    routingSubscription: Subscription;

    constructor(
        private translateService: TranslateService,
        private rootRenderer: RendererFactory2,
        private titleService: Title,
        private router: Router,
    ) {
        this.rendererHtmlTag = rootRenderer.createRenderer(document.querySelector('html'), null);
        this.init();
    }

    private updateTabTitle(titleKey?: string) {

        if (!titleKey) {
            titleKey = this.getPageTitle(this.router.routerState.snapshot.root);
        }

        this.translateService.get(titleKey).subscribe((title) => {
            // console.log('Actualizamos los títulos a: ' + title);
            this.titleService.setTitle(title);
            this.actualTitle = title;
        });
    }

    private init() {
        this.translateService.onLangChange
            .subscribe(() => {
                // console.log('Cambiamos de idioma: ' + this.translateService.currentLang);
                this.rendererHtmlTag.setAttribute(document.querySelector('html'), 'lang', this.translateService.currentLang);
                const title = this.getPageTitle(this.router.routerState.snapshot.root);
                this.updateTabTitle();
                this.translateService.get(title)
                    .pipe(take(1))
                    .subscribe((titleTranslated) => {
                        this.updateNavBarTitle(titleTranslated);
                    });

            });

    }

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot): string {
        let title: string = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'angulargdg.title';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    updateNavBarTitle(title: string) {
        this.rootRenderer.whenRenderingDone().then(() => {
            const navbarTitle = document.getElementsByClassName('navbar__title')[0];
            if (!navbarTitle) {
                setTimeout(() => {
                    this.updateNavBarTitle(title);
                }, 100);
            } else if (!!navbarTitle) {
                navbarTitle.innerHTML = title;
            }
        });
    }

    getActualTitle(): string {
        return this.actualTitle;
    }

    updateTitle(title: string) {
        this.titleService.setTitle(title);
        this.updateNavBarTitle(title);
    }

    updateOnRouting() {
        this.routingSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                const titleKey = this.getPageTitle(this.router.routerState.snapshot.root);
                this.translateService.get(titleKey).subscribe((title) => {
                    this.updateNavBarTitle(title);
                });
                this.updateTabTitle(titleKey);
                window.scrollTo(0, 0);
            }
        });
    }

    unsubscribeOnRouting() {
        if (!!this.routingSubscription) {
            this.routingSubscription.unsubscribe();
        }
    }

}
