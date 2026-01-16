import {
  ErrorBody,
  GetVdsesConnectionRequestBody,
  GetVdsesRequestBody,
  Vds,
  VdsConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class VdsApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Vds
   * @name GetVdses
   * @request POST:/get-vdses
   * @secure
   * @response `200` `(Vds)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVdses = (data: GetVdsesRequestBody, params: RequestParams = {}) =>
    this.http.request<Vds[], ErrorBody>({
      path: `/get-vdses`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Vds
   * @name GetVdsesConnection
   * @request POST:/get-vdses-connection
   * @secure
   * @response `200` `VdsConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getVdsesConnection = (
    data: GetVdsesConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<VdsConnection, ErrorBody>({
      path: `/get-vdses-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
