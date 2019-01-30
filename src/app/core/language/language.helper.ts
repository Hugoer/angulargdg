import { Injectable, RendererFactory2, Renderer2, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class AppTitleService {
    rendererHtmlTag: Renderer2 = null;
    private actualTitle: string = null;

    constructor(
        private translateService: TranslateService,
        private rootRenderer: RendererFactory2,
        private titleService: Title,
        private router: Router,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        if (isPlatformBrowser(this.platformId)) {
            this.rendererHtmlTag = rootRenderer.createRenderer(document.querySelector('html'), null);
        }
        this.init();
    }

    private updateTabTitle(titleKey?: string) {

        if (!titleKey) {
            titleKey = this.getPageTitle(this.router.routerState.snapshot.root);
        }

        this.translateService.get(titleKey).subscribe((title) => {
            this.titleService.setTitle(title);
            this.actualTitle = title;
        });
    }

    private init() {
        this.translateService.onLangChange
            .subscribe(() => {
                console.log('Cambiamos de idioma: ' + this.translateService.currentLang);
                if (isPlatformBrowser(this.platformId)) {
                    this.rendererHtmlTag.setAttribute(document.querySelector('html'), 'lang', this.translateService.currentLang);
                }
                this.updateTabTitle();
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
            if (isPlatformBrowser(this.platformId)) {
                const navbarTitle = document.getElementsByClassName('navbar__title')[0];
                if (!navbarTitle) {
                    setTimeout(() => {
                        this.updateNavBarTitle(title);
                    }, 100);
                } else if (!!navbarTitle) {
                    navbarTitle.innerHTML = title;
                }
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
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                const titleKey = this.getPageTitle(this.router.routerState.snapshot.root);
                this.translateService.get(titleKey).subscribe((title) => {
                    this.updateNavBarTitle(title);
                });
                this.updateTabTitle(titleKey);
                if (isPlatformBrowser(this.platformId)) {
                    window.scrollTo(0, 0);
                }
            }
        });
    }


}
