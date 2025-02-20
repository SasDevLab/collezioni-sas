import { Inject, Injectable } from '@angular/core';
import { fetchAndActivate, getValue, RemoteConfig } from '@angular/fire/remote-config';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userUid: string | null = null;
  private readonly ADMIN_UID = 'admin_uid';
  private readonly LAST_USER = 'lastUser';

  constructor(private auth: Auth, private remoteConfig: RemoteConfig) {}

  async getUserUid(): Promise<string | null> {
    if (!this.userUid) {
      await this.login();
    }
    return this.userUid;
  }

  async getAdminId(): Promise<string | null> {
    await fetchAndActivate(this.remoteConfig); // Assicura che i dati vengano aggiornati
    const uid = getValue(this.remoteConfig, this.ADMIN_UID);
    return uid.asString();
  }

  async login(): Promise<void> {
    const lastUser = localStorage.getItem(this.LAST_USER);
    
    if(lastUser){
      this.userUid =  lastUser;
    }

    if(!this.userUid){
      const provider = new GoogleAuthProvider();
      const credential = await signInWithPopup(this.auth, provider);
      this.userUid = credential.user.uid;
      localStorage.setItem(this.LAST_USER, this.userUid);
    }
  }
}
