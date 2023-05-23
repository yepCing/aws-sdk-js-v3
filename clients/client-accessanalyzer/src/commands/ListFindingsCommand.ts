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

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { ListFindingsRequest, ListFindingsResponse } from "../models/models_0";
import { de_ListFindingsCommand, se_ListFindingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFindingsCommand}.
 */
export interface ListFindingsCommandInput extends ListFindingsRequest {}
/**
 * @public
 *
 * The output of {@link ListFindingsCommand}.
 */
export interface ListFindingsCommandOutput extends ListFindingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of findings generated by the specified analyzer.</p>
 *          <p>To learn about filter keys that you can use to retrieve a list of findings, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ListFindingsCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ListFindingsCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // ListFindingsRequest
 *   analyzerArn: "STRING_VALUE", // required
 *   filter: { // FilterCriteriaMap
 *     "<keys>": { // Criterion
 *       eq: [ // ValueList
 *         "STRING_VALUE",
 *       ],
 *       neq: [
 *         "STRING_VALUE",
 *       ],
 *       contains: [
 *         "STRING_VALUE",
 *       ],
 *       exists: true || false,
 *     },
 *   },
 *   sort: { // SortCriteria
 *     attributeName: "STRING_VALUE",
 *     orderBy: "STRING_VALUE",
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListFindingsCommand(input);
 * const response = await client.send(command);
 * // { // ListFindingsResponse
 * //   findings: [ // FindingsList // required
 * //     { // FindingSummary
 * //       id: "STRING_VALUE", // required
 * //       principal: { // PrincipalMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       action: [ // ActionList
 * //         "STRING_VALUE",
 * //       ],
 * //       resource: "STRING_VALUE",
 * //       isPublic: true || false,
 * //       resourceType: "STRING_VALUE", // required
 * //       condition: { // ConditionKeyMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       analyzedAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       status: "STRING_VALUE", // required
 * //       resourceOwnerAccount: "STRING_VALUE", // required
 * //       error: "STRING_VALUE",
 * //       sources: [ // FindingSourceList
 * //         { // FindingSource
 * //           type: "STRING_VALUE", // required
 * //           detail: { // FindingSourceDetail
 * //             accessPointArn: "STRING_VALUE",
 * //             accessPointAccount: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFindingsCommandInput - {@link ListFindingsCommandInput}
 * @returns {@link ListFindingsCommandOutput}
 * @see {@link ListFindingsCommandInput} for command's `input` shape.
 * @see {@link ListFindingsCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 */
export class ListFindingsCommand extends $Command<
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
  AccessAnalyzerClientResolvedConfig
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
  constructor(readonly input: ListFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFindingsCommandInput, ListFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListFindingsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "ListFindingsCommand";
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
  private serialize(input: ListFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFindingsCommandOutput> {
    return de_ListFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
