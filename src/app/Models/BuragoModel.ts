import { CollectionItem } from "./CollectionItem";

export class BuragoModel extends CollectionItem {

  public static override Empty(): BuragoModel {
    return super.Empty() as BuragoModel;
  }

  public anno: number = 0;
  public scala: '1/18' | '1/24' | '1/43' = '1/18';
  public produttore: string = '';
  public codice: string = '';
  public serie: string = '';
  public materiale: string = '';
  public colore: string = '';
  public prezzo: number = 0;

}