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

import { GetApplicationDateRangeKpiRequest, GetApplicationDateRangeKpiResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetApplicationDateRangeKpiCommand, se_GetApplicationDateRangeKpiCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationDateRangeKpiCommand}.
 */
export interface GetApplicationDateRangeKpiCommandInput extends GetApplicationDateRangeKpiRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationDateRangeKpiCommand}.
 */
export interface GetApplicationDateRangeKpiCommandOutput extends GetApplicationDateRangeKpiResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetApplicationDateRangeKpiCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetApplicationDateRangeKpiCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // GetApplicationDateRangeKpiRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EndTime: new Date("TIMESTAMP"),
 *   KpiName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   PageSize: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 * };
 * const command = new GetApplicationDateRangeKpiCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationDateRangeKpiResponse
 * //   ApplicationDateRangeKpiResponse: { // ApplicationDateRangeKpiResponse
 * //     ApplicationId: "STRING_VALUE", // required
 * //     EndTime: new Date("TIMESTAMP"), // required
 * //     KpiName: "STRING_VALUE", // required
 * //     KpiResult: { // BaseKpiResult
 * //       Rows: [ // ListOfResultRow // required
 * //         { // ResultRow
 * //           GroupedBys: [ // ListOfResultRowValue // required
 * //             { // ResultRowValue
 * //               Key: "STRING_VALUE", // required
 * //               Type: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           Values: [ // required
 * //             {
 * //               Key: "STRING_VALUE", // required
 * //               Type: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     NextToken: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApplicationDateRangeKpiCommandInput - {@link GetApplicationDateRangeKpiCommandInput}
 * @returns {@link GetApplicationDateRangeKpiCommandOutput}
 * @see {@link GetApplicationDateRangeKpiCommandInput} for command's `input` shape.
 * @see {@link GetApplicationDateRangeKpiCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class GetApplicationDateRangeKpiCommand extends $Command<
  GetApplicationDateRangeKpiCommandInput,
  GetApplicationDateRangeKpiCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: GetApplicationDateRangeKpiCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetApplicationDateRangeKpiCommandInput, GetApplicationDateRangeKpiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetApplicationDateRangeKpiCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetApplicationDateRangeKpiCommand";
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
  private serialize(input: GetApplicationDateRangeKpiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetApplicationDateRangeKpiCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetApplicationDateRangeKpiCommandOutput> {
    return de_GetApplicationDateRangeKpiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
