import {
  ErrorBody,
  GetV2EverouteLicensesRequestBody,
  V2EverouteLicense,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class V2EverouteLicenseApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags V2EverouteLicense
   * @name GetV2EverouteLicenses
   * @request POST:/get-v2-everoute-licenses
   * @secure
   * @response `200` `(V2EverouteLicense)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getV2EverouteLicenses = (
    data: GetV2EverouteLicensesRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<V2EverouteLicense[], ErrorBody>({
      path: `/get-v2-everoute-licenses`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
