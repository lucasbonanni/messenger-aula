export class UserModel {
    name:string;
    displayName: string;
    public email: string;
    phoneNumber: string;
    photoURL: string;
    providerId: string;
    uid: string;
    public password:string;

    public constructor(name, email){
        this.name = name;
        this.email = email;
    }
}