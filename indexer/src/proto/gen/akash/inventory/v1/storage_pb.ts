// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file akash/inventory/v1/storage.proto (package akash.inventory.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ResourcePair } from "./resourcepair_pb";

/**
 * StorageInfo reports Storage details
 *
 * @generated from message akash.inventory.v1.StorageInfo
 */
export class StorageInfo extends Message<StorageInfo> {
  /**
   * @generated from field: string class = 1;
   */
  class = "";

  /**
   * @generated from field: string iops = 2;
   */
  iops = "";

  constructor(data?: PartialMessage<StorageInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "akash.inventory.v1.StorageInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "class", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "iops", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StorageInfo {
    return new StorageInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StorageInfo {
    return new StorageInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StorageInfo {
    return new StorageInfo().fromJsonString(jsonString, options);
  }

  static equals(a: StorageInfo | PlainMessage<StorageInfo> | undefined, b: StorageInfo | PlainMessage<StorageInfo> | undefined): boolean {
    return proto3.util.equals(StorageInfo, a, b);
  }
}

/**
 * Storage reports Storage inventory details
 *
 * @generated from message akash.inventory.v1.Storage
 */
export class Storage extends Message<Storage> {
  /**
   * @generated from field: akash.inventory.v1.ResourcePair quantity = 1;
   */
  quantity?: ResourcePair;

  /**
   * @generated from field: akash.inventory.v1.StorageInfo info = 2;
   */
  info?: StorageInfo;

  constructor(data?: PartialMessage<Storage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "akash.inventory.v1.Storage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "quantity", kind: "message", T: ResourcePair },
    { no: 2, name: "info", kind: "message", T: StorageInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Storage {
    return new Storage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Storage {
    return new Storage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Storage {
    return new Storage().fromJsonString(jsonString, options);
  }

  static equals(a: Storage | PlainMessage<Storage> | undefined, b: Storage | PlainMessage<Storage> | undefined): boolean {
    return proto3.util.equals(Storage, a, b);
  }
}

