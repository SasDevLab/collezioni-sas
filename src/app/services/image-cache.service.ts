import { Injectable } from '@angular/core';
import { openDB } from 'idb';

@Injectable({
  providedIn: 'root',
})
export class ImageCacheService {
  private dbPromise = openDB('image-cache', 1, {
    upgrade(db) {
      db.createObjectStore('images');
    },
  });

  constructor() {}

  async getCachedImage(url: string): Promise<string | null> {
    const db = await this.dbPromise;
    const blob = await db.get('images', url);
    return blob ? URL.createObjectURL(blob) : null;
  }

  async cacheImage(url: string): Promise<string> {
    const cachedUrl = await this.getCachedImage(url);
    if (cachedUrl) return cachedUrl;

    const response = await fetch(url);
    const blob = await response.blob();
    
    const db = await this.dbPromise;
    await db.put('images', blob, url);

    return URL.createObjectURL(blob);
  }
}
