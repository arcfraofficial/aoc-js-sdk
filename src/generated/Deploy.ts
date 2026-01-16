import { Deploy, ErrorBody, GetDeploysRequestBody } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class DeployApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Deploy
   * @name GetDeploys
   * @request POST:/get-deploys
   * @secure
   * @response `200` `(Deploy)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getDeploys = (data: GetDeploysRequestBody, params: RequestParams = {}) =>
    this.http.request<Deploy[], ErrorBody>({
      path: `/get-deploys`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
