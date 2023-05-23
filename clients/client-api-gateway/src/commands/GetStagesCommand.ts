// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetStagesRequest, Stages } from "../models/models_0";
import { de_GetStagesCommand, se_GetStagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetStagesCommand}.
 */
export interface GetStagesCommandInput extends GetStagesRequest {}
/**
 * @public
 *
 * The output of {@link GetStagesCommand}.
 */
export interface GetStagesCommandOutput extends Stages, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about one or more Stage resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetStagesCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetStagesCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetStagesRequest
 *   restApiId: "STRING_VALUE", // required
 *   deploymentId: "STRING_VALUE",
 * };
 * const command = new GetStagesCommand(input);
 * const response = await client.send(command);
 * // { // Stages
 * //   item: [ // ListOfStage
 * //     { // Stage
 * //       deploymentId: "STRING_VALUE",
 * //       clientCertificateId: "STRING_VALUE",
 * //       stageName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       cacheClusterEnabled: true || false,
 * //       cacheClusterSize: "0.5" || "1.6" || "6.1" || "13.5" || "28.4" || "58.2" || "118" || "237",
 * //       cacheClusterStatus: "CREATE_IN_PROGRESS" || "AVAILABLE" || "DELETE_IN_PROGRESS" || "NOT_AVAILABLE" || "FLUSH_IN_PROGRESS",
 * //       methodSettings: { // MapOfMethodSettings
 * //         "<keys>": { // MethodSetting
 * //           metricsEnabled: true || false,
 * //           loggingLevel: "STRING_VALUE",
 * //           dataTraceEnabled: true || false,
 * //           throttlingBurstLimit: Number("int"),
 * //           throttlingRateLimit: Number("double"),
 * //           cachingEnabled: true || false,
 * //           cacheTtlInSeconds: Number("int"),
 * //           cacheDataEncrypted: true || false,
 * //           requireAuthorizationForCacheControl: true || false,
 * //           unauthorizedCacheControlHeaderStrategy: "FAIL_WITH_403" || "SUCCEED_WITH_RESPONSE_HEADER" || "SUCCEED_WITHOUT_RESPONSE_HEADER",
 * //         },
 * //       },
 * //       variables: { // MapOfStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       documentationVersion: "STRING_VALUE",
 * //       accessLogSettings: { // AccessLogSettings
 * //         format: "STRING_VALUE",
 * //         destinationArn: "STRING_VALUE",
 * //       },
 * //       canarySettings: { // CanarySettings
 * //         percentTraffic: Number("double"),
 * //         deploymentId: "STRING_VALUE",
 * //         stageVariableOverrides: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         useStageCache: true || false,
 * //       },
 * //       tracingEnabled: true || false,
 * //       webAclArn: "STRING_VALUE",
 * //       tags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       createdDate: new Date("TIMESTAMP"),
 * //       lastUpdatedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetStagesCommandInput - {@link GetStagesCommandInput}
 * @returns {@link GetStagesCommandOutput}
 * @see {@link GetStagesCommandInput} for command's `input` shape.
 * @see {@link GetStagesCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded the rate limit. Retry after the specified time period.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 */
export class GetStagesCommand extends $Command<
  GetStagesCommandInput,
  GetStagesCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetStagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetStagesCommandInput, GetStagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetStagesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetStagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetStagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetStagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetStagesCommandOutput> {
    return de_GetStagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
