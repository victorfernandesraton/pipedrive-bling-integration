import { ClientContact } from "./Client";

export default interface OrganizationEntity {
  name: string;
  id: string;
  contacts: ClientContact[];
}
