import {NodeHttpOptions as __HttpOptions__} from '@aws/types';
import * as __aws_types from '@aws/types';

/**
 * UploadPartCopyInput shape
 */
export interface UploadPartCopyInput {
    /**
     * _BucketName shape
     */
    Bucket: string;

    /**
     * _CopySource shape
     */
    CopySource: string;

    /**
     * _CopySourceIfMatch shape
     */
    CopySourceIfMatch?: string;

    /**
     * _CopySourceIfModifiedSince shape
     */
    CopySourceIfModifiedSince?: Date|string|number;

    /**
     * _CopySourceIfNoneMatch shape
     */
    CopySourceIfNoneMatch?: string;

    /**
     * _CopySourceIfUnmodifiedSince shape
     */
    CopySourceIfUnmodifiedSince?: Date|string|number;

    /**
     * _CopySourceRange shape
     */
    CopySourceRange?: string;

    /**
     * _ObjectKey shape
     */
    Key: string;

    /**
     * _PartNumber shape
     */
    PartNumber: number;

    /**
     * _MultipartUploadId shape
     */
    UploadId: string;

    /**
     * _SSECustomerAlgorithm shape
     */
    SSECustomerAlgorithm?: string;

    /**
     * _CopySourceSSECustomerAlgorithm shape
     */
    CopySourceSSECustomerAlgorithm?: string;

    /**
     * _RequestPayer shape
     */
    RequestPayer?: 'requester'|string;

    /**
     * Whether to use the bucket name as the endpoint for this request. The bucket
     * name must be a domain name with a CNAME record alias to an appropriate virtual
     * hosted-style S3 hostname, e.g. a bucket of `images.johnsmith.net` and a DNS
     * record of:
     *
     * ```
     * images.johnsmith.net CNAME 			images.johnsmith.net.s3.amazonaws.com.
     * ```
     *
     * @see https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingCustomURLs
     */
    $bucketEndpoint?: string;

    /**
     * Whether to force path style URLs for S3 objects (e.g., https://s3.amazonaws.com/<bucketName>/<key> instead of https://<bucketName>.s3.amazonaws.com/<key>
     */
    $forcePathStyle?: boolean;

    /**
     * Whether to use the S3 Transfer Acceleration endpoint by default
     */
    $useAccelerateEndpoint?: boolean;

    /**
     * Enables IPv6/IPv4 dualstack endpoint. When a DNS lookup is performed on an endpoint of this type, it returns an “A” record with an IPv4 address and an “AAAA” record with an IPv6 address. In most cases the network stack in the client environment will automatically prefer the AAAA record and make a connection using the IPv6 address. Note, however, that currently on Windows, the IPv4 address will be preferred.
     */
    $useDualstackEndpoint?: boolean;

    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon does not store the encryption key. The key must be appropriate for use with the algorithm specified in the `SSECustomerAlgorithm` parameter
     */
    $serverSideEncryptionKey?: __aws_types.SourceData;

    /**
     * Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created.
     */
    $copySourceServerSideEncryptionKey?: __aws_types.SourceData;

    /**
     * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __aws_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}