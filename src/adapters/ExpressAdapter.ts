import { NextFunction, Request, Response } from "express";
import ApplicationHttp from "../entity/ApplicationHtp";

export function extractionHttpData(
  req: Request,
  response: Response,
  next: NextFunction
): ApplicationHttp {
  const { params, body, query } = req;
  return { params, body, query, response, errorParse: next };
}

export type ParseResponse = ({ data, code }: any) => any;
export type JsonHanler = (reaponae: any) => ParseResponse;

export function jsonResponse(response: Response): JsonHanler {
  return ({ code, data }: any): any => {
    return response.status(code).json(data);
  };
}
