import { User } from "../../../models/user";
import { UserService } from "../../../services/data/user.service";
import { MatSnackBar, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Observable } from 'rxjs/Observable'
import { Action } from "../../../models/features/action";
import { Inject, Component, OnInit } from "@angular/core";
import { TableConfig } from "./table-config";




export abstract class UserTableConfig {

    /**
     * variables
     */

    observavleUserList: Observable<User[]>;
    usersList: User[];
    updateDataSourceUser: boolean = false;

    /**
     * 
     * @param userService 
     * @param snackBar 
     * @param dialog 
     */
    constructor(public userService: UserService, public snackBar: MatSnackBar, public dialog: MatDialog) {

        this.getUsersList();
    }


    /***********************************************************************************************
    * definition actions on user
    ************************************************************************************************/

    /**
     * create user
     */
    addUserFromTable() {
        let user: User = new User();
        let userResult: User;


        this.openModificationUserForm(user).subscribe(result => {
            userResult = result;


            if (user.compareBeforeCreate(userResult)) {

                this.userService.create(userResult).subscribe(

                    userIdentified => {
                        Object.assign(user, userIdentified);


                        this.usersList.push(user);

                        this.updateDataSourceUser = true;

                        setTimeout(() => {
                            console.log (this.updateDataSourceUser);
                            this.updateDataSourceUser = false
                        }, 3000);

                    },
                    /**handler error */
                    error => {
                        let message = 'collaborateur non sauvegardé';
                        this.snackBar.open(message, null, {
                            duration: 5000, panelClass: "snackbar-error",
                        });
                    },
                    /**handler success */
                    () => {
                        let message = 'collaborateur sauvegardé';
                        this.snackBar.open(message, null, {
                            duration: 5000, panelClass: "snackbar-success",
                        });
                    }
                );
            };

        });
    }

    removeUserFromTable(user){


        this.openConfirmSuppressionUser(user).subscribe(result => {
console.log("testetst");
            this.userService.delete(user);


        });

    }


/**
 * update user
 * @param user 
 */
    editUserFromTable(user: User) {

        let userCopy = Object.assign({}, user);
        let userResult: User;

        this.openModificationUserForm(userCopy).subscribe(
            result => {

                userResult = result;

                if (user.compareBeforeUpdate(userResult)) {

                    this.userService.update(userResult).subscribe(

                        userIdentified => { Object.assign(user, userIdentified); },

                        /**handler error */
                        error => {
                            let message = 'collaborateur non sauvegardé';
                            this.snackBar.open(message, null, {
                                duration: 5000, panelClass: "snackbar-error",
                            });
                        },
                        /**handler success */
                        () => {
                            let message = 'collaborateur sauvegardé';
                            this.snackBar.open(message, null, {
                                duration: 5000, panelClass: "snackbar-success",
                            });
                        }

                    );
                }
            });
    }


/**************************************************************************
 * Dialogs methods
 **************************************************************************/


    /**
     * dialog suprresion user
     */
    openConfirmSuppressionUser(user: User){
        let message: string = 'Confirmez vous la suppression du collaborateur ' + user.firstname + ' ' + user.lastname;
        const dialogRef = this.dialog.open(ConfirmSuppressionUser, {

            /** configuration of modal settings */
            height: '200px',
            width: '400px',
            data: { message: message },
            hasBackdrop: true,
            disableClose: true,

        });

                /** return observable */
                return dialogRef.afterClosed();

    }



    /**
     * dialog modify user
     */

    openModificationUserForm(user: User): Observable<User> {

        let userResult: User = new User();
        /**create dialog, transmit component linked, configuration of box dialog and open the box dialog */
        const dialogRef = this.dialog.open(ModificationUserFormComponent, {

            /** configuration of modal settings */
            height: '500px',
            width: '500px',
            data: { user: user },
            hasBackdrop: true,
            disableClose: true,

        });

        /** return observable */
        return dialogRef.afterClosed();

    }

    getUsersList() {

        this.observavleUserList = this.userService.getAll();
        this.observavleUserList.subscribe(reponse => {this.usersList = reponse

        });
    }
}



export class UserTableConfig1 extends UserTableConfig {

    /**
     * configuration-specific variables
     */

    titleTableUser: string = 'Liste des collaborateurs';
    observavleUserList: Observable<any[]>;
    usersList: User[];
    COLUMNSTABLE: Array<[string, string]> = [
        ['id', 'Id'],
        ['firstname', 'Prénom'],
        ['lastname', 'Nom'],
        ['phoneNumber', 'tel'],

    ];
    actionsOnUser: Action[];
    actionsOnListUsers: Action[];


    constructor(public userService: UserService, public snackBar: MatSnackBar, public dialog: MatDialog) {
        super(userService, snackBar, dialog)

        const that = this;

        this.actionsOnUser = [
            { tag: 'edit', icon: 'pencil', control: function (user) { that.editUserFromTable(user); } },
            { tag: 'delete', icon: 'trash', control: function (user) { that.removeUserFromTable(user); } }
        ];

        this.actionsOnListUsers = [
            { tag: 'add', icon: 'plus-square', control: function (user) { that.addUserFromTable(); } }, 
            { tag: 'search', icon: 'search', control: function (user) { that.addUserFromTable(); } }
        ];
    }
}




@Component({
    templateUrl: '../../dialogs/user/modification-user/modif-user-dialog.html',
    styleUrls: ['../../dialogs/user/modification-user/modif-user-dialog.css']
})
export class ModificationUserFormComponent {

    userEmpty: User = new User();


    constructor(
        public dialogRef: MatDialogRef<ModificationUserFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    onSubmit() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
    }

    onCancel() {
        this.userEmpty.id = -1;

        if (this.dialogRef) {
            this.dialogRef.close(this.userEmpty);
        }
    }

}


@Component({
    templateUrl: '../../dialogs/confirm-suppression/confirm-suppression-dialog.html',
    styleUrls: ['../../dialogs/confirm-suppression/confirm-suppression-dialog.css']
})
export class ConfirmSuppressionUser {



    constructor(
        public dialogRef: MatDialogRef<ConfirmSuppressionUser>,
        @Inject(MAT_DIALOG_DATA) public data: any) {

    }

    onSubmit() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
    }

    onCancel() {
        this.dialogRef.close();
    }

}