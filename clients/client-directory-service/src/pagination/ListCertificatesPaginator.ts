// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCertificatesCommand,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput,
} from "../commands/ListCertificatesCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DirectoryServiceClient,
  input: ListCertificatesCommandInput,
  ...args: any
): Promise<ListCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCertificatesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCertificates(
  config: DirectoryServicePaginationConfiguration,
  input: ListCertificatesCommandInput,
  ...additionalArguments: any
): Paginator<ListCertificatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCertificatesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof DirectoryServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DirectoryService | DirectoryServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
