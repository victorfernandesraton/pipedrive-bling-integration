import { ClientContactTypeEnum } from "../entity/Client";
import DealEntity from "../entity/Deal";

export function parseDeal(data: any): DealEntity {
  const {
    active,
    currency,
    value,
    deleted,
    add_time,
    update_time,
    status,
    stage_id,
    org_id,
    user_id,
    close_time,
    won_time,
  } = data;

  return {
    active,
    currency,
    value,
    deleted,
    createAt: add_time,
    updateAt: update_time,
    status,
    id: stage_id,
    expectedClose: close_time,
    wonDate: won_time,
    org: {
      id: org_id.value,
      name: org_id.name,
      contacts: [
        {
          type: ClientContactTypeEnum.EMAIL,
          value: org_id.cc_email,
        },
      ],
    },
    user: {
      name: user_id.name,
      id: user_id.value,
      contact: [
        {
          type: ClientContactTypeEnum.EMAIL,
          value: user_id.enail,
        },
      ],
    },
  };
}
