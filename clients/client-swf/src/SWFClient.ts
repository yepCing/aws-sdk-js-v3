// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Decoder as __Decoder,
  Encoder as __Encoder,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
} from "@smithy/types";

import {
  CountClosedWorkflowExecutionsCommandInput,
  CountClosedWorkflowExecutionsCommandOutput,
} from "./commands/CountClosedWorkflowExecutionsCommand";
import {
  CountOpenWorkflowExecutionsCommandInput,
  CountOpenWorkflowExecutionsCommandOutput,
} from "./commands/CountOpenWorkflowExecutionsCommand";
import {
  CountPendingActivityTasksCommandInput,
  CountPendingActivityTasksCommandOutput,
} from "./commands/CountPendingActivityTasksCommand";
import {
  CountPendingDecisionTasksCommandInput,
  CountPendingDecisionTasksCommandOutput,
} from "./commands/CountPendingDecisionTasksCommand";
import {
  DeprecateActivityTypeCommandInput,
  DeprecateActivityTypeCommandOutput,
} from "./commands/DeprecateActivityTypeCommand";
import { DeprecateDomainCommandInput, DeprecateDomainCommandOutput } from "./commands/DeprecateDomainCommand";
import {
  DeprecateWorkflowTypeCommandInput,
  DeprecateWorkflowTypeCommandOutput,
} from "./commands/DeprecateWorkflowTypeCommand";
import {
  DescribeActivityTypeCommandInput,
  DescribeActivityTypeCommandOutput,
} from "./commands/DescribeActivityTypeCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "./commands/DescribeDomainCommand";
import {
  DescribeWorkflowExecutionCommandInput,
  DescribeWorkflowExecutionCommandOutput,
} from "./commands/DescribeWorkflowExecutionCommand";
import {
  DescribeWorkflowTypeCommandInput,
  DescribeWorkflowTypeCommandOutput,
} from "./commands/DescribeWorkflowTypeCommand";
import {
  GetWorkflowExecutionHistoryCommandInput,
  GetWorkflowExecutionHistoryCommandOutput,
} from "./commands/GetWorkflowExecutionHistoryCommand";
import { ListActivityTypesCommandInput, ListActivityTypesCommandOutput } from "./commands/ListActivityTypesCommand";
import {
  ListClosedWorkflowExecutionsCommandInput,
  ListClosedWorkflowExecutionsCommandOutput,
} from "./commands/ListClosedWorkflowExecutionsCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import {
  ListOpenWorkflowExecutionsCommandInput,
  ListOpenWorkflowExecutionsCommandOutput,
} from "./commands/ListOpenWorkflowExecutionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWorkflowTypesCommandInput, ListWorkflowTypesCommandOutput } from "./commands/ListWorkflowTypesCommand";
import {
  PollForActivityTaskCommandInput,
  PollForActivityTaskCommandOutput,
} from "./commands/PollForActivityTaskCommand";
import {
  PollForDecisionTaskCommandInput,
  PollForDecisionTaskCommandOutput,
} from "./commands/PollForDecisionTaskCommand";
import {
  RecordActivityTaskHeartbeatCommandInput,
  RecordActivityTaskHeartbeatCommandOutput,
} from "./commands/RecordActivityTaskHeartbeatCommand";
import {
  RegisterActivityTypeCommandInput,
  RegisterActivityTypeCommandOutput,
} from "./commands/RegisterActivityTypeCommand";
import { RegisterDomainCommandInput, RegisterDomainCommandOutput } from "./commands/RegisterDomainCommand";
import {
  RegisterWorkflowTypeCommandInput,
  RegisterWorkflowTypeCommandOutput,
} from "./commands/RegisterWorkflowTypeCommand";
import {
  RequestCancelWorkflowExecutionCommandInput,
  RequestCancelWorkflowExecutionCommandOutput,
} from "./commands/RequestCancelWorkflowExecutionCommand";
import {
  RespondActivityTaskCanceledCommandInput,
  RespondActivityTaskCanceledCommandOutput,
} from "./commands/RespondActivityTaskCanceledCommand";
import {
  RespondActivityTaskCompletedCommandInput,
  RespondActivityTaskCompletedCommandOutput,
} from "./commands/RespondActivityTaskCompletedCommand";
import {
  RespondActivityTaskFailedCommandInput,
  RespondActivityTaskFailedCommandOutput,
} from "./commands/RespondActivityTaskFailedCommand";
import {
  RespondDecisionTaskCompletedCommandInput,
  RespondDecisionTaskCompletedCommandOutput,
} from "./commands/RespondDecisionTaskCompletedCommand";
import {
  SignalWorkflowExecutionCommandInput,
  SignalWorkflowExecutionCommandOutput,
} from "./commands/SignalWorkflowExecutionCommand";
import {
  StartWorkflowExecutionCommandInput,
  StartWorkflowExecutionCommandOutput,
} from "./commands/StartWorkflowExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateWorkflowExecutionCommandInput,
  TerminateWorkflowExecutionCommandOutput,
} from "./commands/TerminateWorkflowExecutionCommand";
import {
  UndeprecateActivityTypeCommandInput,
  UndeprecateActivityTypeCommandOutput,
} from "./commands/UndeprecateActivityTypeCommand";
import { UndeprecateDomainCommandInput, UndeprecateDomainCommandOutput } from "./commands/UndeprecateDomainCommand";
import {
  UndeprecateWorkflowTypeCommandInput,
  UndeprecateWorkflowTypeCommandOutput,
} from "./commands/UndeprecateWorkflowTypeCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CountClosedWorkflowExecutionsCommandInput
  | CountOpenWorkflowExecutionsCommandInput
  | CountPendingActivityTasksCommandInput
  | CountPendingDecisionTasksCommandInput
  | DeprecateActivityTypeCommandInput
  | DeprecateDomainCommandInput
  | DeprecateWorkflowTypeCommandInput
  | DescribeActivityTypeCommandInput
  | DescribeDomainCommandInput
  | DescribeWorkflowExecutionCommandInput
  | DescribeWorkflowTypeCommandInput
  | GetWorkflowExecutionHistoryCommandInput
  | ListActivityTypesCommandInput
  | ListClosedWorkflowExecutionsCommandInput
  | ListDomainsCommandInput
  | ListOpenWorkflowExecutionsCommandInput
  | ListTagsForResourceCommandInput
  | ListWorkflowTypesCommandInput
  | PollForActivityTaskCommandInput
  | PollForDecisionTaskCommandInput
  | RecordActivityTaskHeartbeatCommandInput
  | RegisterActivityTypeCommandInput
  | RegisterDomainCommandInput
  | RegisterWorkflowTypeCommandInput
  | RequestCancelWorkflowExecutionCommandInput
  | RespondActivityTaskCanceledCommandInput
  | RespondActivityTaskCompletedCommandInput
  | RespondActivityTaskFailedCommandInput
  | RespondDecisionTaskCompletedCommandInput
  | SignalWorkflowExecutionCommandInput
  | StartWorkflowExecutionCommandInput
  | TagResourceCommandInput
  | TerminateWorkflowExecutionCommandInput
  | UndeprecateActivityTypeCommandInput
  | UndeprecateDomainCommandInput
  | UndeprecateWorkflowTypeCommandInput
  | UntagResourceCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CountClosedWorkflowExecutionsCommandOutput
  | CountOpenWorkflowExecutionsCommandOutput
  | CountPendingActivityTasksCommandOutput
  | CountPendingDecisionTasksCommandOutput
  | DeprecateActivityTypeCommandOutput
  | DeprecateDomainCommandOutput
  | DeprecateWorkflowTypeCommandOutput
  | DescribeActivityTypeCommandOutput
  | DescribeDomainCommandOutput
  | DescribeWorkflowExecutionCommandOutput
  | DescribeWorkflowTypeCommandOutput
  | GetWorkflowExecutionHistoryCommandOutput
  | ListActivityTypesCommandOutput
  | ListClosedWorkflowExecutionsCommandOutput
  | ListDomainsCommandOutput
  | ListOpenWorkflowExecutionsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWorkflowTypesCommandOutput
  | PollForActivityTaskCommandOutput
  | PollForDecisionTaskCommandOutput
  | RecordActivityTaskHeartbeatCommandOutput
  | RegisterActivityTypeCommandOutput
  | RegisterDomainCommandOutput
  | RegisterWorkflowTypeCommandOutput
  | RequestCancelWorkflowExecutionCommandOutput
  | RespondActivityTaskCanceledCommandOutput
  | RespondActivityTaskCompletedCommandOutput
  | RespondActivityTaskFailedCommandOutput
  | RespondDecisionTaskCompletedCommandOutput
  | SignalWorkflowExecutionCommandOutput
  | StartWorkflowExecutionCommandOutput
  | TagResourceCommandOutput
  | TerminateWorkflowExecutionCommandOutput
  | UndeprecateActivityTypeCommandOutput
  | UndeprecateDomainCommandOutput
  | UndeprecateWorkflowTypeCommandOutput
  | UntagResourceCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link @aws-sdk/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * The {@link @aws-sdk/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type SWFClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of SWFClient class constructor that set the region, credentials and other options.
 */
export interface SWFClientConfig extends SWFClientConfigType {}

/**
 * @public
 */
export type SWFClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of SWFClient class. This is resolved and normalized from the {@link SWFClientConfig | constructor configuration interface}.
 */
export interface SWFClientResolvedConfig extends SWFClientResolvedConfigType {}

/**
 * @public
 * <fullname>Amazon Simple Workflow Service</fullname>
 *          <p>The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to
 *       coordinate work across distributed components. In Amazon SWF, a <i>task</i>
 *       represents a logical unit of work that is performed by a component of your workflow.
 *       Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and
 *       concurrency in accordance with the logical flow of the application.</p>
 *          <p>Amazon SWF gives you full control over implementing tasks and coordinating them without
 *       worrying about underlying complexities such as tracking their progress and maintaining their
 *       state.</p>
 *          <p>This documentation serves as reference only. For a broader overview of the Amazon SWF
 *       programming model, see the <i>
 *                <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/">Amazon SWF Developer Guide</a>
 *             </i>.</p>
 */
export class SWFClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SWFClientResolvedConfig
> {
  /**
   * The resolved configuration of SWFClient class. This is resolved and normalized from the {@link SWFClientConfig | constructor configuration interface}.
   */
  readonly config: SWFClientResolvedConfig;

  constructor(configuration: SWFClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
