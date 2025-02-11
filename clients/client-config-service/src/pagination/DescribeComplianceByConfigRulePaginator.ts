// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeComplianceByConfigRuleCommand,
  DescribeComplianceByConfigRuleCommandInput,
  DescribeComplianceByConfigRuleCommandOutput,
} from "../commands/DescribeComplianceByConfigRuleCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeComplianceByConfigRuleCommandInput,
  ...args: any
): Promise<DescribeComplianceByConfigRuleCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeComplianceByConfigRuleCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeComplianceByConfigRule(
  config: ConfigServicePaginationConfiguration,
  input: DescribeComplianceByConfigRuleCommandInput,
  ...additionalArguments: any
): Paginator<DescribeComplianceByConfigRuleCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeComplianceByConfigRuleCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
