import { ClientContact } from "./Client";
import OrganizationEntity from "./Organization";

export enum DealStatusTypeEnum {
  OPEN = "open",
  WON = "won",
  LOST = "lost",
  DELETED = "deleted",
  ALL_NOT_DELETED = "all_not_deleted",
}

export interface UserEntity {
  name: string;
  id: string;
  contact: ClientContact[];
}

export default interface DealEntity {
  name: string;
  status: DealStatusTypeEnum;
  user: UserEntity;
  id: string;
  org: OrganizationEntity;
  active: boolean;
  deleted: boolean;
  value: number;
  currency: string;
  createAt: Date;
  updateAt: Date;
  wonDate: Date;
  expectedClose: Date;
}
