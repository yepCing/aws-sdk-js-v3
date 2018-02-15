import {NodeHttpOptions as __HttpOptions__} from '@aws/types';
import {Readable} from 'stream';
import * as __aws_types from '@aws/types';

/**
 * PutObjectInput shape
 */
export interface PutObjectInput<StreamType = Readable> {
    /**
     * _ObjectCannedACL shape
     */
    ACL?: 'private'|'public-read'|'public-read-write'|'authenticated-read'|'aws-exec-read'|'bucket-owner-read'|'bucket-owner-full-control'|string;

    /**
     * _Body shape
     */
    Body?: ArrayBuffer|ArrayBufferView|string|StreamType;

    /**
     * _BucketName shape
     */
    Bucket: string;

    /**
     * _CacheControl shape
     */
    CacheControl?: string;

    /**
     * _ContentDisposition shape
     */
    ContentDisposition?: string;

    /**
     * _ContentEncoding shape
     */
    ContentEncoding?: string;

    /**
     * _ContentLanguage shape
     */
    ContentLanguage?: string;

    /**
     * _ContentLength shape
     */
    ContentLength?: number;

    /**
     * _ContentMD5 shape
     */
    ContentMD5?: string;

    /**
     * _ContentType shape
     */
    ContentType?: string;

    /**
     * _Expires shape
     */
    Expires?: Date|string|number;

    /**
     * _GrantFullControl shape
     */
    GrantFullControl?: string;

    /**
     * _GrantRead shape
     */
    GrantRead?: string;

    /**
     * _GrantReadACP shape
     */
    GrantReadACP?: string;

    /**
     * _GrantWriteACP shape
     */
    GrantWriteACP?: string;

    /**
     * _ObjectKey shape
     */
    Key: string;

    /**
     * _Metadata shape
     */
    Metadata?: {[key: string]: string}|Iterable<[string, string]>;

    /**
     * _ServerSideEncryption shape
     */
    ServerSideEncryption?: 'AES256'|'aws:kms'|string;

    /**
     * _StorageClass shape
     */
    StorageClass?: 'STANDARD'|'REDUCED_REDUNDANCY'|'STANDARD_IA'|string;

    /**
     * _WebsiteRedirectLocation shape
     */
    WebsiteRedirectLocation?: string;

    /**
     * _SSECustomerAlgorithm shape
     */
    SSECustomerAlgorithm?: string;

    /**
     * _SSEKMSKeyId shape
     */
    SSEKMSKeyId?: string;

    /**
     * _RequestPayer shape
     */
    RequestPayer?: 'requester'|string;

    /**
     * _TaggingHeader shape
     */
    Tagging?: string;

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