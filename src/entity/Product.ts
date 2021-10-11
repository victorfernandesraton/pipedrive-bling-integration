export enum ProductSituationEnum {
  ACTIVE = "Ativo",
  INACTIVE = "Inativo",
}

export default interface ProductEntity {
  id?: string;
  code?: string;
  description: string;
  variation?: string;
  situation: ProductSituationEnum;
  name: string;
  price?: number;
  volume?: number;
}
