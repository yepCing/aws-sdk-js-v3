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

import { GetCustomerGatewayAssociationsRequest, GetCustomerGatewayAssociationsResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_GetCustomerGatewayAssociationsCommand,
  se_GetCustomerGatewayAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCustomerGatewayAssociationsCommand}.
 */
export interface GetCustomerGatewayAssociationsCommandInput extends GetCustomerGatewayAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomerGatewayAssociationsCommand}.
 */
export interface GetCustomerGatewayAssociationsCommandOutput
  extends GetCustomerGatewayAssociationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the association information for customer gateways that are associated with
 *             devices and links in your global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetCustomerGatewayAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetCustomerGatewayAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetCustomerGatewayAssociationsRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   CustomerGatewayArns: [ // CustomerGatewayArnList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetCustomerGatewayAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomerGatewayAssociationsResponse
 * //   CustomerGatewayAssociations: [ // CustomerGatewayAssociationList
 * //     { // CustomerGatewayAssociation
 * //       CustomerGatewayArn: "STRING_VALUE",
 * //       GlobalNetworkId: "STRING_VALUE",
 * //       DeviceId: "STRING_VALUE",
 * //       LinkId: "STRING_VALUE",
 * //       State: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCustomerGatewayAssociationsCommandInput - {@link GetCustomerGatewayAssociationsCommandInput}
 * @returns {@link GetCustomerGatewayAssociationsCommandOutput}
 * @see {@link GetCustomerGatewayAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetCustomerGatewayAssociationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 */
export class GetCustomerGatewayAssociationsCommand extends $Command<
  GetCustomerGatewayAssociationsCommandInput,
  GetCustomerGatewayAssociationsCommandOutput,
  NetworkManagerClientResolvedConfig
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
  constructor(readonly input: GetCustomerGatewayAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCustomerGatewayAssociationsCommandInput, GetCustomerGatewayAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCustomerGatewayAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetCustomerGatewayAssociationsCommand";
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
  private serialize(
    input: GetCustomerGatewayAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetCustomerGatewayAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCustomerGatewayAssociationsCommandOutput> {
    return de_GetCustomerGatewayAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
