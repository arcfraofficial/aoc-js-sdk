import {
  ErrorBody,
  GetOrganizationsConnectionRequestBody,
  GetOrganizationsRequestBody,
  Organization,
  OrganizationConnection,
  OrganizationCreationParams,
  WithTaskOrganization,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class OrganizationApi<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Organization
   * @name CreateOrganization
   * @request POST:/create-organization
   * @secure
   * @response `200` `(WithTaskOrganization)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  createOrganization = (
    data: OrganizationCreationParams[],
    params: RequestParams = {},
  ) =>
    this.http.request<WithTaskOrganization[], ErrorBody>({
      path: `/create-organization`,
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
   * @tags Organization
   * @name GetOrganizations
   * @request POST:/get-organizations
   * @secure
   * @response `200` `(Organization)[]`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getOrganizations = (
    data: GetOrganizationsRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<Organization[], ErrorBody>({
      path: `/get-organizations`,
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
   * @tags Organization
   * @name GetOrganizationsConnection
   * @request POST:/get-organizations-connection
   * @secure
   * @response `200` `OrganizationConnection`
   * @response `400` `ErrorBody` Bad request
   * @response `404` `ErrorBody` Not found
   * @response `500` `ErrorBody` Server error
   */
  getOrganizationsConnection = (
    data: GetOrganizationsConnectionRequestBody,
    params: RequestParams = {},
  ) =>
    this.http.request<OrganizationConnection, ErrorBody>({
      path: `/get-organizations-connection`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
