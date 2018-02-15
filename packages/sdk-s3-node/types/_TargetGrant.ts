import {_Grantee, _UnmarshalledGrantee} from './_Grantee';

/**
 * _TargetGrant shape
 */
export interface _TargetGrant {
    /**
     * _Grantee shape
     */
    Grantee?: _Grantee;

    /**
     * _BucketLogsPermission shape
     */
    Permission?: 'FULL_CONTROL'|'READ'|'WRITE'|string;
}

export interface _UnmarshalledTargetGrant extends _TargetGrant {
    /**
     * _Grantee shape
     */
    Grantee?: _UnmarshalledGrantee;
}