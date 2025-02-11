// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListFlowExecutionMessagesCommand,
  ListFlowExecutionMessagesCommandInput,
  ListFlowExecutionMessagesCommandOutput,
} from "../commands/ListFlowExecutionMessagesCommand";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTThingsGraphClient,
  input: ListFlowExecutionMessagesCommandInput,
  ...args: any
): Promise<ListFlowExecutionMessagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFlowExecutionMessagesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListFlowExecutionMessages(
  config: IoTThingsGraphPaginationConfiguration,
  input: ListFlowExecutionMessagesCommandInput,
  ...additionalArguments: any
): Paginator<ListFlowExecutionMessagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFlowExecutionMessagesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTThingsGraphClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTThingsGraph | IoTThingsGraphClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
