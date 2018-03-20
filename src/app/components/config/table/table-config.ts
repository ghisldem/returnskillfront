import { Action } from "../../../models/features/action";
import {Observable }  from  'rxjs/Observable';

export class TableConfig {

    observableDataTable: Observable<any[]>;
    columnsData: Array<[string, string]>;
    actions: boolean = false;
    actionsHeader: Action[];
    actionsRow: Action[];
    titleTable: string;
    updateDatasource: boolean =  false;


}