import {
  Cluster,
  ClusterConnection,
  ClusterCreationParams,
  ErrorBody,
  GetClustersConnectionRequestBody,
  GetClustersRequestBody,
  WithTaskCluster,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ClusterApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Cluster
   * @name ConnectCluster
   * @request POST:/connect-cluster
   * @secure
   * @response `200` `(WithTaskCluster)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  connectCluster = (
    data: ClusterCreationParams[],
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskCluster[], ErrorBody>({
      path: `/connect-cluster`,
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
   * @tags Cluster
   * @name GetClusters
   * @request POST:/get-clusters
   * @secure
   * @response `200` `(Cluster)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getClusters = (data: GetClustersRequestBody, params: RequestParams = {}) =>
    this.http.request<Cluster[], ErrorBody>({
      path: `/get-clusters`,
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
   * @tags Cluster
   * @name GetClustersConnection
   * @request POST:/get-clusters-connection
   * @secure
   * @response `200` `ClusterConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getClustersConnection = (
    data: GetClustersConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<ClusterConnection, ErrorBody>({
      path: `/get-clusters-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
