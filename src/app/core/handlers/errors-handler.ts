import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
import { environment } from '../../../environments/environment';


@Injectable()
export class ErrorsHandler implements ErrorHandler {
    constructor(private snackBar: MatSnackBar, ) {

    }
    handleError(error: Error) {
        // Do whatever you like with the error (send it to the server?)
        // And log it to the console
        if (error instanceof HttpErrorResponse) {
            console.log('error httpresponse from global handle');
        } else {
            // Handle Client Error (Angular Error, ReferenceError...)
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
