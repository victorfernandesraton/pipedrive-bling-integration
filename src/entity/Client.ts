import AddressEntity from "./Adress";
export enum ClientTypeEnum {
  PF = "PF",
  PJ = "PJ",
}
export enum ClientContactTypeEnum {
  PHONE,
  EMAIL,
  MOBILE,
}
export interface ClientContact {
  type: ClientContactTypeEnum;
  value: string;
}
export default interface ClientEntity {
  name: string;
  type?: ClientTypeEnum;
  DOC?: string;
  address?: AddressEntity;
  contacts?: ClientContact[];
}
