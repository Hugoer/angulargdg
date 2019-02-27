import { ErrorHandler, Injectable } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarVerticalPosition,
    MatSnackBarHorizontalPosition
} from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '@environment/environment';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

    constructor(private snackBar: MatSnackBar, ) {
    }

    handleError(error: Error) {
        if (error instanceof HttpErrorResponse) {
            console.log('error httpresponse from global handle');
        } else {
            console.error(error);
            this.snackBar.open(error.message, null, {
                duration: environment.toast.duration,
                verticalPosition: <MatSnackBarVerticalPosition>environment.toast.verticalPosition,
                horizontalPosition: <MatSnackBarHorizontalPosition>environment.toast.horizontalPosition,
                panelClass: 'style-error'
            });
        }

    }
}
