import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { SpinnerComponent } from '../core/spinner/spinner.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { CloseMenuDirective } from '../core/directives/closemenu.directive';
import { LanguageModule } from '../core/language/language.module';
import { LoginComponent } from '../core/login/login.component';
import { ConfirmDialogComponent } from '../components/confirm/confirm.component';

const MATERIAL_LAYOUT_MODULES = [
    MatTooltipModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
];

@NgModule({
    imports: [
        SharedModule,
        ComponentsModule,
        MATERIAL_LAYOUT_MODULES
    ],
    exports: [
        SpinnerComponent,
        HomeComponent,
        NavbarComponent,
        MenuComponent,
        CloseMenuDirective,
        LanguageModule,
        MATERIAL_LAYOUT_MODULES
    ],
    declarations: [
        SpinnerComponent,
        HomeComponent,
        NavbarComponent,
        MenuComponent,
        LoginComponent,
        CloseMenuDirective,
    ],
    entryComponents: [
        ConfirmDialogComponent,
    ],
    providers: [
        MatSnackBarModule,
    ]
})

export class LayoutModule { }
