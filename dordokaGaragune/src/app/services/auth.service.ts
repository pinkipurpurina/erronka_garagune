import { User } from './../shared/user.interface';

import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UsuariosFirebaseService } from '../services/usuarios-firebase.service'

import { environment } from '../../environments/environment';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User>;
  authState: any = null;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private firebase2: UsuariosFirebaseService, public secondaryAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);//Devolver observable null si no esta registrado
      }

      )
    )
  }

  getUsers() {
    return firebase.database().ref("/users");
  }

  getMonitorUsers(mainUserUid: string) {
    return firebase.database().ref("/users/" + mainUserUid + "/erabiltzaileak");
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      // this.updateUserData(user);
      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async register(email: string, password: string, nickname: string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      // await this.sendVerificationEmail();
      var userUID = this.afAuth.authState.subscribe(res => {
        if (res && res.uid) {
          this.firebase2.createUsuarioAdminconId(res.uid, nickname)
        }
      });

      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async userRegister(email: string, password: string, nickname: string): Promise<User> {
    try {
      // Esto crea una nueva sesion internamente para poder crear el usuario desde la cuenta de administrador sin afectar la sesion de este
      var idAdminActual = (await JSON.parse(localStorage.getItem('user')).uid)
      const { user } = await this.secondaryAuth.createUserWithEmailAndPassword(email, password);
      // await this.sendVerificationEmail();

      var userUID = this.secondaryAuth.authState.subscribe(res => {
        if (res && res.uid) {
          this.firebase2.createUsuarioNormal(res.uid, nickname, idAdminActual)
          this.secondaryAuth.signOut();
        }
      });

      return user;
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async login(email: string, password: string): Promise<firebase.auth.UserCredential>{
    return this.afAuth.setPersistence('session').then(() => {
        console.log(sessionStorage);
        localStorage.setItem('user',sessionStorage.getItem(sessionStorage.key(0)));
        return this.afAuth.signInWithEmailAndPassword(email,password);
    })
  }

  getCurrentUser(){
    return firebase.auth().currentUser;
  }

  // async login(email: string, password: string): Promise<User> {
  //   //     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  // // .then(function() { 
  //   // return firebase.auth().signInWithEmailAndPassword(email, password);
  // //   }).catch(function(error){
  // //   console.log("failed to set persistence: " + error.message)
  // // });
  //   try {
  //     const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
  //     // this.updateUserData(user);
  //     return user;
  //   } catch (error) {
  //     console.log('Error->', error);
  //   }
  // }

  // async sendVerificationEmail(): Promise<void> {
  //   try {
  //     return (await this.afAuth.currentUser).sendEmailVerification();
  //   } catch (error) {
  //     console.log('Error->', error);
  //   }
  // }

  // isEmailVerified(user: User): boolean {
  //   return user.emailVerified === true ? true : false;
  // }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log('Error->', error);
    }
  }

  // private updateUserData(user: User) {
  //   const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

  //   const data: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     // emailVerified: user.emailVerified,
  //     displayName: user.displayName,
  //   };

  //   return userRef.set(data, { merge: true });
  // }
}
