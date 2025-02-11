// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeDBClusterParametersCommand,
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput,
} from "../commands/DescribeDBClusterParametersCommand";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: NeptuneClient,
  input: DescribeDBClusterParametersCommandInput,
  ...args: any
): Promise<DescribeDBClusterParametersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBClusterParametersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeDBClusterParameters(
  config: NeptunePaginationConfiguration,
  input: DescribeDBClusterParametersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBClusterParametersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBClusterParametersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof NeptuneClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Neptune | NeptuneClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
