export abstract class CollectionItem {
  id?: string;

constructor(public nome: string, public descrizione: string, public imageUrl: string) {}

  public static Empty(): CollectionItem {
    return { nome: '', descrizione: '', imageUrl: '' } as CollectionItem;
  }
}