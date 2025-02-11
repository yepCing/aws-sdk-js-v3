// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
} from "../commands/DescribeEndpointsCommand";
import { MediaConvertClient } from "../MediaConvertClient";
import { MediaConvertPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MediaConvertClient,
  input: DescribeEndpointsCommandInput,
  ...args: any
): Promise<DescribeEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEndpointsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeEndpoints(
  config: MediaConvertPaginationConfiguration,
  input: DescribeEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEndpointsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEndpointsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaConvertClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaConvert | MediaConvertClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
