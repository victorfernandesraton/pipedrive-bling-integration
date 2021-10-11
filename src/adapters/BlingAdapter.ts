import xml from "xml";
import ProductEntity from "../entity/Product";
export function parseToString(data: ProductEntity) {
  const result = xml(
    {
      produto: [
        { codigo: data.code },
        {
          descricao: data.description,
        },
        {
          situacao: "Ativo",
        },
        {
          vlr_unit: data.price ?? 0,
        },
        { volumes: data.volume ?? 1 },
      ],
    },
    { declaration: { encoding: "UTF-8" } }
  );

  return result;
}

export function parseProduct(data: any): ProductEntity {
  const { id, codigo, descricao, situacao, preco, volumes, name } = data;

  return {
    description: descricao,
    name: name,
    id,
    code: codigo,
    price: preco,
    volume: volumes,
    situation: situacao,
  };
}
