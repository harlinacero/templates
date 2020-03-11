import { Injectable } from '@angular/core';
import { RequestResult } from '../interfaces/requestResult.interface';

@Injectable({
    providedIn: 'root'
})
export class ControlErrorHelperService {
    constructor() {

    }

    controlErros(res: RequestResult<any>) {
        try {
            if (!res.isSuccesfull) {
                alert(res.message);
            }
        } catch (e) {
            //alert('Error Inesperado');
            console.error(e);
        }

    }
}