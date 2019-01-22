
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpErrorResponse,
    HttpHandler,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '@environment/environment';
import { appEventManager } from '@app/core/handlers/eventmanager.service';

const enum ToastType {
    'primary',
    'warn',
    'accent'
}

interface IServerMessage {
    alert: string;
    param: number;
}

@Injectable()
export class MainInterceptor implements HttpInterceptor {

    arrStatusCodeTrad = {};

    getWindow(): any {
        return window;
    }

    constructor(
        private snackBar: MatSnackBar,
        private translateService: TranslateService,
        private svsEventManager: appEventManager,
    ) {

    }

    private showNotification(message: string, type: ToastType, detail?: string) {
        let cssClass = '';
        switch (type) {
            case ToastType.accent:
                cssClass = '';
                break;
            case ToastType.primary:
                cssClass = 'style-success';
                break;
            case ToastType.warn:
                cssClass = 'style-error';
                break;
            default:
                break;
        }
        let fullMessage;
        if (!!detail) {
            fullMessage = `${message} - ${detail}`;
        } else {
            fullMessage = `${message}`;
        }

        this.snackBar.open(fullMessage, null, {
            duration: environment.toast.duration,
            verticalPosition: <MatSnackBarVerticalPosition>environment.toast.verticalPosition,
            horizontalPosition: <MatSnackBarHorizontalPosition>environment.toast.horizontalPosition,
            panelClass: cssClass
        });
    }

    private processStatus(statusCode: number, err?: any) {
        switch (true) {
            case (statusCode === -1):
                this.showNotification(this.translateService.instant('webgis.http.json'), ToastType.primary);
                break;
            case (statusCode === 200):
                break;
            case (statusCode === 201):
                this.showNotification(this.translateService.instant('webgis.http.201'), ToastType.primary);
                break;
            case (statusCode === 204):
                this.showNotification(this.translateService.instant('webgis.http.204'), ToastType.primary);
                break;
            case (statusCode === 400):
                this.showNotification(this.translateService.instant('webgis.http.400'), ToastType.warn);
                break;
            case (statusCode === 403):
                this.showNotification(this.translateService.instant('webgis.http.403'), ToastType.warn);
                break;
            case (statusCode === 401):
                this.showNotification(this.translateService.instant('webgis.http.401'), ToastType.warn);
                break;
            case (statusCode === 404):
                this.showNotification(this.translateService.instant('webgis.http.404'), ToastType.warn);
                break;
            case (statusCode === 409):
                this.showNotification(this.translateService.instant('webgis.http.409'), ToastType.warn, err.error.detail);
                break;
            case (statusCode < 600 && statusCode >= 500):
                this.showNotification(this.translateService.instant('webgis.http.500'), ToastType.warn, err.error.detail);
                break;
            default:
                this.showNotification(this.translateService.instant('webgis.http.defaulterror'), ToastType.warn);
                break;
        }
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        let dummyrequest: HttpRequest<any>;
        dummyrequest = req.clone({});

        this.svsEventManager.broadcast({
            name: 'httpStart'
        });

        const httpEvent = next.handle(dummyrequest);

        return httpEvent.pipe(tap((event) => {
            if (event instanceof HttpResponse) {

                this.processStatus(event.status, null);
                this.svsEventManager.broadcast({
                    name: 'httpStop'
                });
            }
        }, (err) => {
            this.svsEventManager.broadcast({
                name: 'httpStop'
            });
            if (err instanceof HttpErrorResponse) {
                if (err.status !== 200) {
                    this.processStatus(err.status, err);
                } else {
                    // Incluimos esto aquí porque puede ser que el API no devuelva un json y al procesar la respuesta falle
                    // aún siendo un 200. Si ha entrado aquí (err) es que algo ha ocurrido y debemos notificarlo.
                    this.processStatus(-1);
                }
            }
        }));

    }

}