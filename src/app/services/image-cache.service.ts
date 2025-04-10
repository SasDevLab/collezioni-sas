import { Injectable } from '@angular/core';
import { openDB } from 'idb';

@Injectable({
  providedIn: 'root'
})
export class ImageCacheService {
  private dbPromise = openDB('image-cache', 1, {
    upgrade(db) {
      db.createObjectStore('images');
    }
  });

  async getCachedImage(url: string): Promise<string | undefined> {
    const db = await this.dbPromise;
    return db.get('images', url);
  }

  async cacheImage(url: string, dataUrl: string): Promise<void> {
    const db = await this.dbPromise;
    await db.put('images', dataUrl, url);
  }

  async fetchAndCacheImage(url: string): Promise<string> {
    const cachedImage = await this.getCachedImage(url);
    if (cachedImage) {
      return cachedImage;
    }

    const response = await fetch(url);
    const blob = await response.blob();
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onloadend = async () => {
        const dataUrl = reader.result as string;
        await this.cacheImage(url, dataUrl);
        resolve(dataUrl);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}