import {_Tag, _UnmarshalledTag} from './_Tag';

/**
 * _AnalyticsAndOperator shape
 */
export interface _AnalyticsAndOperator {
    /**
     * _Prefix shape
     */
    Prefix?: string;

    /**
     * _TagSet shape
     */
    Tags?: Array<_Tag>|Iterable<_Tag>;
}

export interface _UnmarshalledAnalyticsAndOperator extends _AnalyticsAndOperator {
    /**
     * _TagSet shape
     */
    Tags?: Array<_UnmarshalledTag>;
}