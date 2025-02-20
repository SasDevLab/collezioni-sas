import { CollectionItem } from "./CollectionItem";

export class BuragoModel extends CollectionItem {

  public static override Empty(): BuragoModel {
    return new BuragoModel('', '', '', 0);
  }

  public anno: number = 0;

  constructor(nome: string, descrizione: string, imageUrl: string, anno: number) {
    super(nome, descrizione, imageUrl);
    this.anno = anno;
  }
}