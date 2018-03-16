export class User {
  id: number;
  lastname?: string;
  firstname?: string;
  email?: string;
  phoneNumber?: string;
  townOfResidence?: String;
  referent?: User;

  constructor(id? : number,lastname? : string,firstname? : string,email?: string,phoneNumber?: string,townOfResidence?: string,referent?: string) {
  }

  copyFrom(o:Object) {
    ['id','email','lastname','firstname','phoneNumber','townOfResidence','referent'].forEach(field => {
      if(field in o) this[field] = o[field];
    });
  }



  public compareBeforeCreate (otherUser: User): boolean{
    let u = this;// user object this
    let ur = otherUser;//other object user
    if (ur.id !=-1) {
      console.info("on fait l'insertion");
      return true;
    }else {
      /** create exception */
      console.warn("action de création d'un user annulée, pas de mise à jour");
      return false;
    }

  }
 public compareBeforeUpdate(otherUser: User): boolean {

    let u = this;// user object this
    let ur = otherUser;//other object user
    /** 
     * comparison data between 2 objects (one behind change and one after change) 
     * if the objects are similary or one exception is detected return false -> action don't put
     * if the objects are don't similary return true -> action put
     * */

    /** if id undefined == action cancelled*/

    if (ur.id !=-1) {
      /** abnormal case */
      if (ur.id !== u.id) {
        /** create exception */
        console.warn("cas anormal 2 id differents ");
        return false;
      }

      if (ur.id == u.id &&
        ur.firstname == u.firstname &&
        ur.lastname == u.lastname &&
        ur.phoneNumber == u.phoneNumber &&
        
        //ur.referent.id == u.referent.id &&
        ur.email == u.email &&
        ur.townOfResidence == u.townOfResidence) {
        console.info("les 2 objets users sont identiques pas de mise à jour");
        return false;
      }
      /** comparison if different transmit in put request*/
      if (ur.id === u.id && ur != u) {
        console.info("les 2 objets users ne sont pas identiques, il y a une mise à jour");
        return true;
      }

    } else {
      /** create exception */
      console.warn("id non définie, action de modification d'un user annulée, pas de mise à jour");
      return false;
    }

  }


}

export class UserComplete extends User {
  activated?: boolean;
  registrationDate?: Date;
  lastConnectionDate?: Date;
  constructor() {
    super();
  }
}

export class UserAuthentication {
  email: string;
  password: string;
}






