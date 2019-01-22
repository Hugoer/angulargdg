import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
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

import { SpinnerComponent } from '@app/core/spinner/spinner.component';
import { LoginComponent } from '@app/core/login/login.component';
import { CloseMenuDirective } from '@app/core/directives/closemenu.directive';
import { LanguageModule } from '@app/core/language/language.module';
import { HomeComponent } from '@app/layout/home/home.component';
import { NavbarComponent } from '@app/layout/navbar/navbar.component';
import { MenuComponent } from '@app/layout/menu/menu.component';
import { ConfirmDialogComponent } from '@app/components/confirm/confirm.component';
import { ComponentsModule } from '@app/components/components.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

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
