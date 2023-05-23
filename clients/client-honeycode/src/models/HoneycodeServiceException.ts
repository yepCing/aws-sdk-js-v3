// smithy-typescript generated code
import {
  ServiceException as __ServiceException,
  ServiceExceptionOptions as __ServiceExceptionOptions,
} from "@aws-sdk/smithy-client";

export { __ServiceException, __ServiceExceptionOptions };

/**
 * @public
 *
 * Base exception class for all service exceptions from Honeycode service.
 */
export class HoneycodeServiceException extends __ServiceException {
  /**
   * @internal
   */
  constructor(options: __ServiceExceptionOptions) {
    super(options);
    Object.setPrototypeOf(this, HoneycodeServiceException.prototype);
  }
}
