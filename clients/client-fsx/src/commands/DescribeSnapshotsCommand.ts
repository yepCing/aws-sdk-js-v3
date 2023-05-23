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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DescribeSnapshotsRequest, DescribeSnapshotsResponse } from "../models/models_0";
import { de_DescribeSnapshotsCommand, se_DescribeSnapshotsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotsCommand}.
 */
export interface DescribeSnapshotsCommandInput extends DescribeSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotsCommand}.
 */
export interface DescribeSnapshotsCommandOutput extends DescribeSnapshotsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the description of specific Amazon FSx for OpenZFS snapshots, if a
 *                 <code>SnapshotIds</code> value is provided. Otherwise, this operation returns all
 *             snapshots owned by your Amazon Web Services account in the Amazon Web Services Region of
 *             the endpoint that you're calling.</p>
 *          <p>When retrieving all snapshots, you can optionally specify the <code>MaxResults</code>
 *             parameter to limit the number of snapshots in a response. If more backups remain,
 *                 Amazon FSx returns a <code>NextToken</code> value in the response. In this
 *             case, send a later request with the <code>NextToken</code> request parameter set to the
 *             value of <code>NextToken</code> from the last response. </p>
 *          <p>Use this operation in an iterative process to retrieve a list of your snapshots.
 *                 <code>DescribeSnapshots</code> is called first without a <code>NextToken</code>
 *             value. Then the operation continues to be called with the <code>NextToken</code>
 *             parameter set to the value of the last <code>NextToken</code> value until a response has
 *             no <code>NextToken</code> value.</p>
 *          <p>When using this operation, keep the following in mind:</p>
 *          <ul>
 *             <li>
 *                <p>The operation might return fewer than the <code>MaxResults</code> value of
 *                     snapshot descriptions while still including a <code>NextToken</code>
 *                     value.</p>
 *             </li>
 *             <li>
 *                <p>The order of snapshots returned in the response of one
 *                         <code>DescribeSnapshots</code> call and the order of backups returned across
 *                     the responses of a multi-call iteration is unspecified. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeSnapshotsCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeSnapshotsCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // DescribeSnapshotsRequest
 *   SnapshotIds: [ // SnapshotIds
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // SnapshotFilters
 *     { // SnapshotFilter
 *       Name: "file-system-id" || "volume-id",
 *       Values: [ // SnapshotFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotsResponse
 * //   Snapshots: [ // Snapshots
 * //     { // Snapshot
 * //       ResourceARN: "STRING_VALUE",
 * //       SnapshotId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       VolumeId: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Lifecycle: "PENDING" || "CREATING" || "DELETING" || "AVAILABLE",
 * //       LifecycleTransitionReason: { // LifecycleTransitionReason
 * //         Message: "STRING_VALUE",
 * //       },
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       AdministrativeActions: [ // AdministrativeActions
 * //         { // AdministrativeAction
 * //           AdministrativeActionType: "FILE_SYSTEM_UPDATE" || "STORAGE_OPTIMIZATION" || "FILE_SYSTEM_ALIAS_ASSOCIATION" || "FILE_SYSTEM_ALIAS_DISASSOCIATION" || "VOLUME_UPDATE" || "SNAPSHOT_UPDATE" || "RELEASE_NFS_V3_LOCKS" || "VOLUME_RESTORE",
 * //           ProgressPercent: Number("int"),
 * //           RequestTime: new Date("TIMESTAMP"),
 * //           Status: "FAILED" || "IN_PROGRESS" || "PENDING" || "COMPLETED" || "UPDATED_OPTIMIZING",
 * //           TargetFileSystemValues: { // FileSystem
 * //             OwnerId: "STRING_VALUE",
 * //             CreationTime: new Date("TIMESTAMP"),
 * //             FileSystemId: "STRING_VALUE",
 * //             FileSystemType: "WINDOWS" || "LUSTRE" || "ONTAP" || "OPENZFS",
 * //             Lifecycle: "AVAILABLE" || "CREATING" || "FAILED" || "DELETING" || "MISCONFIGURED" || "UPDATING" || "MISCONFIGURED_UNAVAILABLE",
 * //             FailureDetails: { // FileSystemFailureDetails
 * //               Message: "STRING_VALUE",
 * //             },
 * //             StorageCapacity: Number("int"),
 * //             StorageType: "SSD" || "HDD",
 * //             VpcId: "STRING_VALUE",
 * //             SubnetIds: [ // SubnetIds
 * //               "STRING_VALUE",
 * //             ],
 * //             NetworkInterfaceIds: [ // NetworkInterfaceIds
 * //               "STRING_VALUE",
 * //             ],
 * //             DNSName: "STRING_VALUE",
 * //             KmsKeyId: "STRING_VALUE",
 * //             ResourceARN: "STRING_VALUE",
 * //             Tags: [
 * //               {
 * //                 Key: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             WindowsConfiguration: { // WindowsFileSystemConfiguration
 * //               ActiveDirectoryId: "STRING_VALUE",
 * //               SelfManagedActiveDirectoryConfiguration: { // SelfManagedActiveDirectoryAttributes
 * //                 DomainName: "STRING_VALUE",
 * //                 OrganizationalUnitDistinguishedName: "STRING_VALUE",
 * //                 FileSystemAdministratorsGroup: "STRING_VALUE",
 * //                 UserName: "STRING_VALUE",
 * //                 DnsIps: [ // DnsIps
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1" || "SINGLE_AZ_2",
 * //               RemoteAdministrationEndpoint: "STRING_VALUE",
 * //               PreferredSubnetId: "STRING_VALUE",
 * //               PreferredFileServerIp: "STRING_VALUE",
 * //               ThroughputCapacity: Number("int"),
 * //               MaintenanceOperationsInProgress: [ // FileSystemMaintenanceOperations
 * //                 "PATCHING" || "BACKING_UP",
 * //               ],
 * //               WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //               DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //               AutomaticBackupRetentionDays: Number("int"),
 * //               CopyTagsToBackups: true || false,
 * //               Aliases: [ // Aliases
 * //                 { // Alias
 * //                   Name: "STRING_VALUE",
 * //                   Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED",
 * //                 },
 * //               ],
 * //               AuditLogConfiguration: { // WindowsAuditLogConfiguration
 * //                 FileAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 * //                 FileShareAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 * //                 AuditLogDestination: "STRING_VALUE",
 * //               },
 * //             },
 * //             LustreConfiguration: { // LustreFileSystemConfiguration
 * //               WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //               DataRepositoryConfiguration: { // DataRepositoryConfiguration
 * //                 Lifecycle: "CREATING" || "AVAILABLE" || "MISCONFIGURED" || "UPDATING" || "DELETING" || "FAILED",
 * //                 ImportPath: "STRING_VALUE",
 * //                 ExportPath: "STRING_VALUE",
 * //                 ImportedFileChunkSize: Number("int"),
 * //                 AutoImportPolicy: "NONE" || "NEW" || "NEW_CHANGED" || "NEW_CHANGED_DELETED",
 * //                 FailureDetails: { // DataRepositoryFailureDetails
 * //                   Message: "STRING_VALUE",
 * //                 },
 * //               },
 * //               DeploymentType: "SCRATCH_1" || "SCRATCH_2" || "PERSISTENT_1" || "PERSISTENT_2",
 * //               PerUnitStorageThroughput: Number("int"),
 * //               MountName: "STRING_VALUE",
 * //               DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //               AutomaticBackupRetentionDays: Number("int"),
 * //               CopyTagsToBackups: true || false,
 * //               DriveCacheType: "NONE" || "READ",
 * //               DataCompressionType: "NONE" || "LZ4",
 * //               LogConfiguration: { // LustreLogConfiguration
 * //                 Level: "DISABLED" || "WARN_ONLY" || "ERROR_ONLY" || "WARN_ERROR", // required
 * //                 Destination: "STRING_VALUE",
 * //               },
 * //               RootSquashConfiguration: { // LustreRootSquashConfiguration
 * //                 RootSquash: "STRING_VALUE",
 * //                 NoSquashNids: [ // LustreNoSquashNids
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //             AdministrativeActions: [
 * //               {
 * //                 AdministrativeActionType: "FILE_SYSTEM_UPDATE" || "STORAGE_OPTIMIZATION" || "FILE_SYSTEM_ALIAS_ASSOCIATION" || "FILE_SYSTEM_ALIAS_DISASSOCIATION" || "VOLUME_UPDATE" || "SNAPSHOT_UPDATE" || "RELEASE_NFS_V3_LOCKS" || "VOLUME_RESTORE",
 * //                 ProgressPercent: Number("int"),
 * //                 RequestTime: new Date("TIMESTAMP"),
 * //                 Status: "FAILED" || "IN_PROGRESS" || "PENDING" || "COMPLETED" || "UPDATED_OPTIMIZING",
 * //                 TargetFileSystemValues: {
 * //                   OwnerId: "STRING_VALUE",
 * //                   CreationTime: new Date("TIMESTAMP"),
 * //                   FileSystemId: "STRING_VALUE",
 * //                   FileSystemType: "WINDOWS" || "LUSTRE" || "ONTAP" || "OPENZFS",
 * //                   Lifecycle: "AVAILABLE" || "CREATING" || "FAILED" || "DELETING" || "MISCONFIGURED" || "UPDATING" || "MISCONFIGURED_UNAVAILABLE",
 * //                   FailureDetails: {
 * //                     Message: "STRING_VALUE",
 * //                   },
 * //                   StorageCapacity: Number("int"),
 * //                   StorageType: "SSD" || "HDD",
 * //                   VpcId: "STRING_VALUE",
 * //                   SubnetIds: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   NetworkInterfaceIds: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   DNSName: "STRING_VALUE",
 * //                   KmsKeyId: "STRING_VALUE",
 * //                   ResourceARN: "STRING_VALUE",
 * //                   Tags: "<Tags>",
 * //                   WindowsConfiguration: {
 * //                     ActiveDirectoryId: "STRING_VALUE",
 * //                     SelfManagedActiveDirectoryConfiguration: {
 * //                       DomainName: "STRING_VALUE",
 * //                       OrganizationalUnitDistinguishedName: "STRING_VALUE",
 * //                       FileSystemAdministratorsGroup: "STRING_VALUE",
 * //                       UserName: "STRING_VALUE",
 * //                       DnsIps: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                     DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1" || "SINGLE_AZ_2",
 * //                     RemoteAdministrationEndpoint: "STRING_VALUE",
 * //                     PreferredSubnetId: "STRING_VALUE",
 * //                     PreferredFileServerIp: "STRING_VALUE",
 * //                     ThroughputCapacity: Number("int"),
 * //                     MaintenanceOperationsInProgress: [
 * //                       "PATCHING" || "BACKING_UP",
 * //                     ],
 * //                     WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //                     DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //                     AutomaticBackupRetentionDays: Number("int"),
 * //                     CopyTagsToBackups: true || false,
 * //                     Aliases: [
 * //                       {
 * //                         Name: "STRING_VALUE",
 * //                         Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED",
 * //                       },
 * //                     ],
 * //                     AuditLogConfiguration: {
 * //                       FileAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 * //                       FileShareAccessAuditLogLevel: "DISABLED" || "SUCCESS_ONLY" || "FAILURE_ONLY" || "SUCCESS_AND_FAILURE", // required
 * //                       AuditLogDestination: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                   LustreConfiguration: {
 * //                     WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //                     DataRepositoryConfiguration: {
 * //                       Lifecycle: "CREATING" || "AVAILABLE" || "MISCONFIGURED" || "UPDATING" || "DELETING" || "FAILED",
 * //                       ImportPath: "STRING_VALUE",
 * //                       ExportPath: "STRING_VALUE",
 * //                       ImportedFileChunkSize: Number("int"),
 * //                       AutoImportPolicy: "NONE" || "NEW" || "NEW_CHANGED" || "NEW_CHANGED_DELETED",
 * //                       FailureDetails: {
 * //                         Message: "STRING_VALUE",
 * //                       },
 * //                     },
 * //                     DeploymentType: "SCRATCH_1" || "SCRATCH_2" || "PERSISTENT_1" || "PERSISTENT_2",
 * //                     PerUnitStorageThroughput: Number("int"),
 * //                     MountName: "STRING_VALUE",
 * //                     DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //                     AutomaticBackupRetentionDays: Number("int"),
 * //                     CopyTagsToBackups: true || false,
 * //                     DriveCacheType: "NONE" || "READ",
 * //                     DataCompressionType: "NONE" || "LZ4",
 * //                     LogConfiguration: {
 * //                       Level: "DISABLED" || "WARN_ONLY" || "ERROR_ONLY" || "WARN_ERROR", // required
 * //                       Destination: "STRING_VALUE",
 * //                     },
 * //                     RootSquashConfiguration: {
 * //                       RootSquash: "STRING_VALUE",
 * //                       NoSquashNids: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                   },
 * //                   AdministrativeActions: "<AdministrativeActions>",
 * //                   OntapConfiguration: { // OntapFileSystemConfiguration
 * //                     AutomaticBackupRetentionDays: Number("int"),
 * //                     DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //                     DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1",
 * //                     EndpointIpAddressRange: "STRING_VALUE",
 * //                     Endpoints: { // FileSystemEndpoints
 * //                       Intercluster: { // FileSystemEndpoint
 * //                         DNSName: "STRING_VALUE",
 * //                         IpAddresses: [ // OntapEndpointIpAddresses
 * //                           "STRING_VALUE",
 * //                         ],
 * //                       },
 * //                       Management: {
 * //                         DNSName: "STRING_VALUE",
 * //                         IpAddresses: [
 * //                           "STRING_VALUE",
 * //                         ],
 * //                       },
 * //                     },
 * //                     DiskIopsConfiguration: { // DiskIopsConfiguration
 * //                       Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //                       Iops: Number("long"),
 * //                     },
 * //                     PreferredSubnetId: "STRING_VALUE",
 * //                     RouteTableIds: [ // RouteTableIds
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     ThroughputCapacity: Number("int"),
 * //                     WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //                   },
 * //                   FileSystemTypeVersion: "STRING_VALUE",
 * //                   OpenZFSConfiguration: { // OpenZFSFileSystemConfiguration
 * //                     AutomaticBackupRetentionDays: Number("int"),
 * //                     CopyTagsToBackups: true || false,
 * //                     CopyTagsToVolumes: true || false,
 * //                     DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //                     DeploymentType: "SINGLE_AZ_1" || "SINGLE_AZ_2",
 * //                     ThroughputCapacity: Number("int"),
 * //                     WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //                     DiskIopsConfiguration: {
 * //                       Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //                       Iops: Number("long"),
 * //                     },
 * //                     RootVolumeId: "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 FailureDetails: { // AdministrativeActionFailureDetails
 * //                   Message: "STRING_VALUE",
 * //                 },
 * //                 TargetVolumeValues: { // Volume
 * //                   CreationTime: new Date("TIMESTAMP"),
 * //                   FileSystemId: "STRING_VALUE",
 * //                   Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED" || "MISCONFIGURED" || "PENDING" || "AVAILABLE",
 * //                   Name: "STRING_VALUE",
 * //                   OntapConfiguration: { // OntapVolumeConfiguration
 * //                     FlexCacheEndpointType: "NONE" || "ORIGIN" || "CACHE",
 * //                     JunctionPath: "STRING_VALUE",
 * //                     SecurityStyle: "UNIX" || "NTFS" || "MIXED",
 * //                     SizeInMegabytes: Number("int"),
 * //                     StorageEfficiencyEnabled: true || false,
 * //                     StorageVirtualMachineId: "STRING_VALUE",
 * //                     StorageVirtualMachineRoot: true || false,
 * //                     TieringPolicy: { // TieringPolicy
 * //                       CoolingPeriod: Number("int"),
 * //                       Name: "SNAPSHOT_ONLY" || "AUTO" || "ALL" || "NONE",
 * //                     },
 * //                     UUID: "STRING_VALUE",
 * //                     OntapVolumeType: "RW" || "DP" || "LS",
 * //                     SnapshotPolicy: "STRING_VALUE",
 * //                     CopyTagsToBackups: true || false,
 * //                   },
 * //                   ResourceARN: "STRING_VALUE",
 * //                   Tags: "<Tags>",
 * //                   VolumeId: "STRING_VALUE",
 * //                   VolumeType: "ONTAP" || "OPENZFS",
 * //                   LifecycleTransitionReason: {
 * //                     Message: "STRING_VALUE",
 * //                   },
 * //                   AdministrativeActions: "<AdministrativeActions>",
 * //                   OpenZFSConfiguration: { // OpenZFSVolumeConfiguration
 * //                     ParentVolumeId: "STRING_VALUE",
 * //                     VolumePath: "STRING_VALUE",
 * //                     StorageCapacityReservationGiB: Number("int"),
 * //                     StorageCapacityQuotaGiB: Number("int"),
 * //                     RecordSizeKiB: Number("int"),
 * //                     DataCompressionType: "NONE" || "ZSTD" || "LZ4",
 * //                     CopyTagsToSnapshots: true || false,
 * //                     OriginSnapshot: { // OpenZFSOriginSnapshotConfiguration
 * //                       SnapshotARN: "STRING_VALUE",
 * //                       CopyStrategy: "CLONE" || "FULL_COPY",
 * //                     },
 * //                     ReadOnly: true || false,
 * //                     NfsExports: [ // OpenZFSNfsExports
 * //                       { // OpenZFSNfsExport
 * //                         ClientConfigurations: [ // OpenZFSClientConfigurations // required
 * //                           { // OpenZFSClientConfiguration
 * //                             Clients: "STRING_VALUE", // required
 * //                             Options: [ // OpenZFSNfsExportOptions // required
 * //                               "STRING_VALUE",
 * //                             ],
 * //                           },
 * //                         ],
 * //                       },
 * //                     ],
 * //                     UserAndGroupQuotas: [ // OpenZFSUserAndGroupQuotas
 * //                       { // OpenZFSUserOrGroupQuota
 * //                         Type: "USER" || "GROUP", // required
 * //                         Id: Number("int"), // required
 * //                         StorageCapacityQuotaGiB: Number("int"), // required
 * //                       },
 * //                     ],
 * //                     RestoreToSnapshot: "STRING_VALUE",
 * //                     DeleteIntermediateSnaphots: true || false,
 * //                     DeleteClonedVolumes: true || false,
 * //                   },
 * //                 },
 * //                 TargetSnapshotValues: {
 * //                   ResourceARN: "STRING_VALUE",
 * //                   SnapshotId: "STRING_VALUE",
 * //                   Name: "STRING_VALUE",
 * //                   VolumeId: "STRING_VALUE",
 * //                   CreationTime: new Date("TIMESTAMP"),
 * //                   Lifecycle: "PENDING" || "CREATING" || "DELETING" || "AVAILABLE",
 * //                   LifecycleTransitionReason: {
 * //                     Message: "STRING_VALUE",
 * //                   },
 * //                   Tags: "<Tags>",
 * //                   AdministrativeActions: "<AdministrativeActions>",
 * //                 },
 * //               },
 * //             ],
 * //             OntapConfiguration: {
 * //               AutomaticBackupRetentionDays: Number("int"),
 * //               DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //               DeploymentType: "MULTI_AZ_1" || "SINGLE_AZ_1",
 * //               EndpointIpAddressRange: "STRING_VALUE",
 * //               Endpoints: {
 * //                 Intercluster: {
 * //                   DNSName: "STRING_VALUE",
 * //                   IpAddresses: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 Management: {
 * //                   DNSName: "STRING_VALUE",
 * //                   IpAddresses: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               DiskIopsConfiguration: {
 * //                 Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //                 Iops: Number("long"),
 * //               },
 * //               PreferredSubnetId: "STRING_VALUE",
 * //               RouteTableIds: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               ThroughputCapacity: Number("int"),
 * //               WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //             },
 * //             FileSystemTypeVersion: "STRING_VALUE",
 * //             OpenZFSConfiguration: {
 * //               AutomaticBackupRetentionDays: Number("int"),
 * //               CopyTagsToBackups: true || false,
 * //               CopyTagsToVolumes: true || false,
 * //               DailyAutomaticBackupStartTime: "STRING_VALUE",
 * //               DeploymentType: "SINGLE_AZ_1" || "SINGLE_AZ_2",
 * //               ThroughputCapacity: Number("int"),
 * //               WeeklyMaintenanceStartTime: "STRING_VALUE",
 * //               DiskIopsConfiguration: {
 * //                 Mode: "AUTOMATIC" || "USER_PROVISIONED",
 * //                 Iops: Number("long"),
 * //               },
 * //               RootVolumeId: "STRING_VALUE",
 * //             },
 * //           },
 * //           FailureDetails: {
 * //             Message: "STRING_VALUE",
 * //           },
 * //           TargetVolumeValues: {
 * //             CreationTime: new Date("TIMESTAMP"),
 * //             FileSystemId: "STRING_VALUE",
 * //             Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED" || "MISCONFIGURED" || "PENDING" || "AVAILABLE",
 * //             Name: "STRING_VALUE",
 * //             OntapConfiguration: {
 * //               FlexCacheEndpointType: "NONE" || "ORIGIN" || "CACHE",
 * //               JunctionPath: "STRING_VALUE",
 * //               SecurityStyle: "UNIX" || "NTFS" || "MIXED",
 * //               SizeInMegabytes: Number("int"),
 * //               StorageEfficiencyEnabled: true || false,
 * //               StorageVirtualMachineId: "STRING_VALUE",
 * //               StorageVirtualMachineRoot: true || false,
 * //               TieringPolicy: {
 * //                 CoolingPeriod: Number("int"),
 * //                 Name: "SNAPSHOT_ONLY" || "AUTO" || "ALL" || "NONE",
 * //               },
 * //               UUID: "STRING_VALUE",
 * //               OntapVolumeType: "RW" || "DP" || "LS",
 * //               SnapshotPolicy: "STRING_VALUE",
 * //               CopyTagsToBackups: true || false,
 * //             },
 * //             ResourceARN: "STRING_VALUE",
 * //             Tags: "<Tags>",
 * //             VolumeId: "STRING_VALUE",
 * //             VolumeType: "ONTAP" || "OPENZFS",
 * //             LifecycleTransitionReason: "<LifecycleTransitionReason>",
 * //             AdministrativeActions: "<AdministrativeActions>",
 * //             OpenZFSConfiguration: {
 * //               ParentVolumeId: "STRING_VALUE",
 * //               VolumePath: "STRING_VALUE",
 * //               StorageCapacityReservationGiB: Number("int"),
 * //               StorageCapacityQuotaGiB: Number("int"),
 * //               RecordSizeKiB: Number("int"),
 * //               DataCompressionType: "NONE" || "ZSTD" || "LZ4",
 * //               CopyTagsToSnapshots: true || false,
 * //               OriginSnapshot: {
 * //                 SnapshotARN: "STRING_VALUE",
 * //                 CopyStrategy: "CLONE" || "FULL_COPY",
 * //               },
 * //               ReadOnly: true || false,
 * //               NfsExports: [
 * //                 {
 * //                   ClientConfigurations: [ // required
 * //                     {
 * //                       Clients: "STRING_VALUE", // required
 * //                       Options: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                   ],
 * //                 },
 * //               ],
 * //               UserAndGroupQuotas: [
 * //                 {
 * //                   Type: "USER" || "GROUP", // required
 * //                   Id: Number("int"), // required
 * //                   StorageCapacityQuotaGiB: Number("int"), // required
 * //                 },
 * //               ],
 * //               RestoreToSnapshot: "STRING_VALUE",
 * //               DeleteIntermediateSnaphots: true || false,
 * //               DeleteClonedVolumes: true || false,
 * //             },
 * //           },
 * //           TargetSnapshotValues: "<Snapshot>",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotsCommandInput - {@link DescribeSnapshotsCommandInput}
 * @returns {@link DescribeSnapshotsCommandOutput}
 * @see {@link DescribeSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link SnapshotNotFound} (client fault)
 *  <p>No Amazon FSx snapshots were found based on the supplied parameters.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 */
export class DescribeSnapshotsCommand extends $Command<
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
  FSxClientResolvedConfig
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
  constructor(readonly input: DescribeSnapshotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DescribeSnapshotsCommand";
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
  private serialize(input: DescribeSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSnapshotsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSnapshotsCommandOutput> {
    return de_DescribeSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
