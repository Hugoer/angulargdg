import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
// import { EnumMapActions } from 'src/app/pages/tournament/tournament.model';
import { EnumMapActions } from '../../pages/tournament/tournament.model';
// import { GDGState } from 'src/app/redux/global.reducer';
import { GDGState } from '../../redux/global.reducer';
// import { appEventManager } from 'src/app/core/handlers/eventmanager.service';
import { appEventManager } from '../../core/handlers/eventmanager.service';
// import { AppTitleService } from 'src/app/core/language/language.helper';
import { AppTitleService } from '../../core/language/language.helper';


export interface IAction {
    name: string;
    icon: string;
    action: EnumMapActions;
    enabled: boolean;
    visible: boolean;
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit, OnDestroy {

    actions: IAction[] = [
        {
            action: EnumMapActions.NEW,
            icon: 'library_add',
            name: 'new',
            enabled: true,
            visible: true
        },
        {
            action: EnumMapActions.LOAD,
            icon: 'library_books',
            name: 'load',
            enabled: true,
            visible: true
        },
        {
            action: EnumMapActions.SAVE,
            icon: 'save',
            name: 'save',
            enabled: true,
            visible: true
        }
    ];

    showMenu = false;
    showTournamentDirty = false;

    unSavedTooltip: string = null;

    obsMapIsDirty: Subscription;
    obsMapOwner: Subscription;

    isLoading = false;

    constructor(
        private store: Store<GDGState>,
        private cd: ChangeDetectorRef,
        private eventManager: appEventManager,
        private router: Router,
        private translateService: TranslateService,
        private titleService: AppTitleService,
    ) {

        this.titleService.updateOnRouting();

        const url: string = this.router.routerState.snapshot.url;
        this.processActionsRouting(url);

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.processActionsRouting(this.router.routerState.snapshot.url);
            }
        });

    }

    trackById(index, item) {
        return item.action;
    }

    ngOnInit() {
        this.observeMapState();
    }

    ngOnDestroy() {

    }

    private observeMapState() {

        // this.obsMapIsDirty = this.store.select('gdg', 'tournaments', 'isDirty')
        //     .subscribe((isDirty: boolean) => {
        //         this.showTournamentDirty = isDirty;
        //         this.actions.find((action) => {
        //             return (action.action === EnumMapActions.RESET);
        //         }).enabled = isDirty;
        //         this.unSavedTooltip = this.showTournamentDirty ? this.translateService.instant('tournament.dirtyadvice') : null;
        //         this.cd.markForCheck();
        //     });

    }

    private getRouteObject(routeSnapshot: ActivatedRouteSnapshot): any {
        let data = !!(routeSnapshot.data.pageTitle || routeSnapshot.data.showNavbarMenu) ? routeSnapshot : null;
        if (routeSnapshot.firstChild) {
            data = this.getRouteObject(routeSnapshot.firstChild) || data;
        }
        return data;
    }

    private processActionsRouting(url: string): void {
        const route = this.getRouteObject(this.router.routerState.snapshot.root);
        if (!!route && !!route.data) {
            this.showMenu = !!route.data.showNavbarMenu;
            // this.showSelectIconEnabled = false; // Por defecto, al cargar una ruta nueva, no permitimos mover objetos
            this.cd.markForCheck();
            switch (true) {
                // Cargamos el mapa nuevo
                case (!route.url[0] && url === '/'):
                    this.actions.find((action) => {
                        return (action.action === EnumMapActions.NEW);
                    }).enabled = false;
                    break;
                // Cargamos un mapa concreto
                case (!!route.url[0] && route.url[0].path === 'map'):
                    this.actions.find((action) => {
                        return (action.action === EnumMapActions.NEW);
                    }).enabled = true;
                    break;
                default:
                    break;
            }
        }

    }

    openMenu() {
        this.eventManager.broadcast({
            name: 'openSideNav'
        });
    }

    dispatchMapAction(action: EnumMapActions) {
        this.eventManager.broadcast({
            name: 'mapAction',
            content: {
                action: action
            }
        });
    }

}
