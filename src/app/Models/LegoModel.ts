import { CollectionItem } from "./CollectionItem";

export class LegoModel extends CollectionItem {

  public static override Empty(): LegoModel {
    return super.Empty() as LegoModel;
  }

  public pezzi: number = 0;
  public anno: number | undefined;
  public serialId: number | undefined ;
  public dimensioni: string = '';
}