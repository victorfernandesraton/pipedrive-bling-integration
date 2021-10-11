import { ClientContactTypeEnum } from "../entity/Client";
import DealEntity from "../entity/Deal";
import ProductEntity, { ProductSituationEnum } from "../entity/Product";

export function parseDeal(data: any): DealEntity {
  const {
    active,
    title,
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
    name: title,
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

export function parseProductFromDeal(data: DealEntity): ProductEntity {
  return {
    name: data.name,
    description: `${data.name} - ${data.org.name} - ${data.user.name}`,
    situation: ProductSituationEnum.ACTIVE,
    code: data.id,
    price: data.value,
    volume: 1,
  };
}
