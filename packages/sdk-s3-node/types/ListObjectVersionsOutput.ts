import {_UnmarshalledObjectVersion} from './_ObjectVersion';
import {_UnmarshalledDeleteMarkerEntry} from './_DeleteMarkerEntry';
import {_UnmarshalledCommonPrefix} from './_CommonPrefix';
import * as __aws_types from '@aws/types';

/**
 * ListObjectVersionsOutput shape
 */
export interface ListObjectVersionsOutput {
    /**
     * _IsTruncated shape
     */
    IsTruncated?: boolean;

    /**
     * _KeyMarker shape
     */
    KeyMarker?: string;

    /**
     * _VersionIdMarker shape
     */
    VersionIdMarker?: string;

    /**
     * _NextKeyMarker shape
     */
    NextKeyMarker?: string;

    /**
     * _NextVersionIdMarker shape
     */
    NextVersionIdMarker?: string;

    /**
     * _ObjectVersionList shape
     */
    Versions?: Array<_UnmarshalledObjectVersion>;

    /**
     * _DeleteMarkers shape
     */
    DeleteMarkers?: Array<_UnmarshalledDeleteMarkerEntry>;

    /**
     * _BucketName shape
     */
    Name?: string;

    /**
     * _Prefix shape
     */
    Prefix?: string;

    /**
     * _Delimiter shape
     */
    Delimiter?: string;

    /**
     * _MaxKeys shape
     */
    MaxKeys?: number;

    /**
     * _CommonPrefixList shape
     */
    CommonPrefixes?: Array<_UnmarshalledCommonPrefix>;

    /**
     * _EncodingType shape
     */
    EncodingType?: 'url'|string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
