import xml from "xml";
import ProductEntity from "../entity/Product";
export function parseToString(data: ProductEntity) {
  const result = xml(
    {
      produto: [
        { codigo: data.id },
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
