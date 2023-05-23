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

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { UpdateCaseRequest, UpdateCaseResponse } from "../models/models_0";
import { de_UpdateCaseCommand, se_UpdateCaseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCaseCommand}.
 */
export interface UpdateCaseCommandInput extends UpdateCaseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCaseCommand}.
 */
export interface UpdateCaseCommandOutput extends UpdateCaseResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the values of fields on a case. Fields to be updated are received as an array of
 *       id/value pairs identical to the <code>CreateCase</code> input .</p>
 *          <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *       HTTP body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, UpdateCaseCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, UpdateCaseCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const input = { // UpdateCaseRequest
 *   domainId: "STRING_VALUE", // required
 *   caseId: "STRING_VALUE", // required
 *   fields: [ // FieldValueList // required
 *     { // FieldValue
 *       id: "STRING_VALUE", // required
 *       value: { // FieldValueUnion Union: only one key present
 *         stringValue: "STRING_VALUE",
 *         doubleValue: Number("double"),
 *         booleanValue: true || false,
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateCaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCaseCommandInput - {@link UpdateCaseCommandInput}
 * @returns {@link UpdateCaseCommandOutput}
 * @see {@link UpdateCaseCommandInput} for command's `input` shape.
 * @see {@link UpdateCaseCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 */
export class UpdateCaseCommand extends $Command<
  UpdateCaseCommandInput,
  UpdateCaseCommandOutput,
  ConnectCasesClientResolvedConfig
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
  constructor(readonly input: UpdateCaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCasesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCaseCommandInput, UpdateCaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateCaseCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCasesClient";
    const commandName = "UpdateCaseCommand";
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
  private serialize(input: UpdateCaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateCaseCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCaseCommandOutput> {
    return de_UpdateCaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
