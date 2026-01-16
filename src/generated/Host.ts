import {
  ErrorBody,
  GetHostsConnectionRequestBody,
  GetHostsRequestBody,
  Host,
  HostConnection,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class HostApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Host
   * @name GetHosts
   * @request POST:/get-hosts
   * @secure
   * @response `200` `(Host)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getHosts = (data: GetHostsRequestBody, params: RequestParams = {}) =>
    this.http.request<Host[], ErrorBody>({
      path: `/get-hosts`,
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
   * @tags Host
   * @name GetHostsConnection
   * @request POST:/get-hosts-connection
   * @secure
   * @response `200` `HostConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getHostsConnection = (
    data: GetHostsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<HostConnection, ErrorBody>({
      path: `/get-hosts-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
