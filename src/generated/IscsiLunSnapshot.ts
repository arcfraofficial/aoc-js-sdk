import {
  ErrorBody,
  GetIscsiLunSnapshotsRequestBody,
  IscsiLunSnapshot,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class IscsiLunSnapshotApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags IscsiLunSnapshot
   * @name GetIscsiLunSnapshots
   * @request POST:/get-iscsi-lun-snapshots
   * @secure
   * @response `200` `(IscsiLunSnapshot)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getIscsiLunSnapshots = (
    data: GetIscsiLunSnapshotsRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<IscsiLunSnapshot[], ErrorBody>({
      path: `/get-iscsi-lun-snapshots`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
