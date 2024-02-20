// Protocol Buffers for Go with Gadgets
//
// Copyright (c) 2013, The GoGo Authors. All rights reserved.
// http://github.com/gogo/protobuf
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file gogoproto/gogo.proto (package gogoproto, syntax proto2)
/* eslint-disable */
// @ts-nocheck

import { EnumOptions, EnumValueOptions, FieldOptions, FileOptions, MessageOptions, proto2 } from "@bufbuild/protobuf";

/**
 * @generated from extension: optional bool goproto_enum_prefix = 62001;
 */
export const goproto_enum_prefix = proto2.makeExtension<EnumOptions, boolean>(
  "gogoproto.goproto_enum_prefix", 
  EnumOptions, 
  { no: 62001, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool goproto_enum_stringer = 62021;
 */
export const goproto_enum_stringer = proto2.makeExtension<EnumOptions, boolean>(
  "gogoproto.goproto_enum_stringer", 
  EnumOptions, 
  { no: 62021, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool enum_stringer = 62022;
 */
export const enum_stringer = proto2.makeExtension<EnumOptions, boolean>(
  "gogoproto.enum_stringer", 
  EnumOptions, 
  { no: 62022, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional string enum_customname = 62023;
 */
export const enum_customname = proto2.makeExtension<EnumOptions, string>(
  "gogoproto.enum_customname", 
  EnumOptions, 
  { no: 62023, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

/**
 * @generated from extension: optional bool enumdecl = 62024;
 */
export const enumdecl = proto2.makeExtension<EnumOptions, boolean>(
  "gogoproto.enumdecl", 
  EnumOptions, 
  { no: 62024, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional string enumvalue_customname = 66001;
 */
export const enumvalue_customname = proto2.makeExtension<EnumValueOptions, string>(
  "gogoproto.enumvalue_customname", 
  EnumValueOptions, 
  { no: 66001, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

/**
 * @generated from extension: optional bool goproto_getters_all = 63001;
 */
export const goproto_getters_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.goproto_getters_all", 
  FileOptions, 
  { no: 63001, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool goproto_enum_prefix_all = 63002;
 */
export const goproto_enum_prefix_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.goproto_enum_prefix_all", 
  FileOptions, 
  { no: 63002, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool goproto_stringer_all = 63003;
 */
export const goproto_stringer_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.goproto_stringer_all", 
  FileOptions, 
  { no: 63003, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool verbose_equal_all = 63004;
 */
export const verbose_equal_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.verbose_equal_all", 
  FileOptions, 
  { no: 63004, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool face_all = 63005;
 */
export const face_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.face_all", 
  FileOptions, 
  { no: 63005, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool gostring_all = 63006;
 */
export const gostring_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.gostring_all", 
  FileOptions, 
  { no: 63006, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool populate_all = 63007;
 */
export const populate_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.populate_all", 
  FileOptions, 
  { no: 63007, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool stringer_all = 63008;
 */
export const stringer_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.stringer_all", 
  FileOptions, 
  { no: 63008, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool onlyone_all = 63009;
 */
export const onlyone_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.onlyone_all", 
  FileOptions, 
  { no: 63009, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool equal_all = 63013;
 */
export const equal_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.equal_all", 
  FileOptions, 
  { no: 63013, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool description_all = 63014;
 */
export const description_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.description_all", 
  FileOptions, 
  { no: 63014, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool testgen_all = 63015;
 */
export const testgen_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.testgen_all", 
  FileOptions, 
  { no: 63015, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool benchgen_all = 63016;
 */
export const benchgen_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.benchgen_all", 
  FileOptions, 
  { no: 63016, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool marshaler_all = 63017;
 */
export const marshaler_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.marshaler_all", 
  FileOptions, 
  { no: 63017, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool unmarshaler_all = 63018;
 */
export const unmarshaler_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.unmarshaler_all", 
  FileOptions, 
  { no: 63018, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool stable_marshaler_all = 63019;
 */
export const stable_marshaler_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.stable_marshaler_all", 
  FileOptions, 
  { no: 63019, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool sizer_all = 63020;
 */
export const sizer_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.sizer_all", 
  FileOptions, 
  { no: 63020, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool goproto_enum_stringer_all = 63021;
 */
export const goproto_enum_stringer_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.goproto_enum_stringer_all", 
  FileOptions, 
  { no: 63021, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool enum_stringer_all = 63022;
 */
export const enum_stringer_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.enum_stringer_all", 
  FileOptions, 
  { no: 63022, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool unsafe_marshaler_all = 63023;
 */
export const unsafe_marshaler_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.unsafe_marshaler_all", 
  FileOptions, 
  { no: 63023, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool unsafe_unmarshaler_all = 63024;
 */
export const unsafe_unmarshaler_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.unsafe_unmarshaler_all", 
  FileOptions, 
  { no: 63024, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool goproto_extensions_map_all = 63025;
 */
export const goproto_extensions_map_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.goproto_extensions_map_all", 
  FileOptions, 
  { no: 63025, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool goproto_unrecognized_all = 63026;
 */
export const goproto_unrecognized_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.goproto_unrecognized_all", 
  FileOptions, 
  { no: 63026, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool gogoproto_import = 63027;
 */
export const gogoproto_import = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.gogoproto_import", 
  FileOptions, 
  { no: 63027, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool protosizer_all = 63028;
 */
export const protosizer_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.protosizer_all", 
  FileOptions, 
  { no: 63028, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool compare_all = 63029;
 */
export const compare_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.compare_all", 
  FileOptions, 
  { no: 63029, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool typedecl_all = 63030;
 */
export const typedecl_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.typedecl_all", 
  FileOptions, 
  { no: 63030, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool enumdecl_all = 63031;
 */
export const enumdecl_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.enumdecl_all", 
  FileOptions, 
  { no: 63031, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool goproto_registration = 63032;
 */
export const goproto_registration = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.goproto_registration", 
  FileOptions, 
  { no: 63032, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool messagename_all = 63033;
 */
export const messagename_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.messagename_all", 
  FileOptions, 
  { no: 63033, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool goproto_sizecache_all = 63034;
 */
export const goproto_sizecache_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.goproto_sizecache_all", 
  FileOptions, 
  { no: 63034, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool goproto_unkeyed_all = 63035;
 */
export const goproto_unkeyed_all = proto2.makeExtension<FileOptions, boolean>(
  "gogoproto.goproto_unkeyed_all", 
  FileOptions, 
  { no: 63035, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool goproto_getters = 64001;
 */
export const goproto_getters = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.goproto_getters", 
  MessageOptions, 
  { no: 64001, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool goproto_stringer = 64003;
 */
export const goproto_stringer = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.goproto_stringer", 
  MessageOptions, 
  { no: 64003, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool verbose_equal = 64004;
 */
export const verbose_equal = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.verbose_equal", 
  MessageOptions, 
  { no: 64004, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool face = 64005;
 */
export const face = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.face", 
  MessageOptions, 
  { no: 64005, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool gostring = 64006;
 */
export const gostring = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.gostring", 
  MessageOptions, 
  { no: 64006, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool populate = 64007;
 */
export const populate = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.populate", 
  MessageOptions, 
  { no: 64007, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool stringer = 67008;
 */
export const stringer = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.stringer", 
  MessageOptions, 
  { no: 67008, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool onlyone = 64009;
 */
export const onlyone = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.onlyone", 
  MessageOptions, 
  { no: 64009, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool equal = 64013;
 */
export const equal = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.equal", 
  MessageOptions, 
  { no: 64013, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool description = 64014;
 */
export const description = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.description", 
  MessageOptions, 
  { no: 64014, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool testgen = 64015;
 */
export const testgen = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.testgen", 
  MessageOptions, 
  { no: 64015, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool benchgen = 64016;
 */
export const benchgen = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.benchgen", 
  MessageOptions, 
  { no: 64016, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool marshaler = 64017;
 */
export const marshaler = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.marshaler", 
  MessageOptions, 
  { no: 64017, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool unmarshaler = 64018;
 */
export const unmarshaler = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.unmarshaler", 
  MessageOptions, 
  { no: 64018, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool stable_marshaler = 64019;
 */
export const stable_marshaler = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.stable_marshaler", 
  MessageOptions, 
  { no: 64019, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool sizer = 64020;
 */
export const sizer = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.sizer", 
  MessageOptions, 
  { no: 64020, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool unsafe_marshaler = 64023;
 */
export const unsafe_marshaler = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.unsafe_marshaler", 
  MessageOptions, 
  { no: 64023, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool unsafe_unmarshaler = 64024;
 */
export const unsafe_unmarshaler = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.unsafe_unmarshaler", 
  MessageOptions, 
  { no: 64024, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool goproto_extensions_map = 64025;
 */
export const goproto_extensions_map = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.goproto_extensions_map", 
  MessageOptions, 
  { no: 64025, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool goproto_unrecognized = 64026;
 */
export const goproto_unrecognized = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.goproto_unrecognized", 
  MessageOptions, 
  { no: 64026, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool protosizer = 64028;
 */
export const protosizer = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.protosizer", 
  MessageOptions, 
  { no: 64028, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool compare = 64029;
 */
export const compare = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.compare", 
  MessageOptions, 
  { no: 64029, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool typedecl = 64030;
 */
export const typedecl = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.typedecl", 
  MessageOptions, 
  { no: 64030, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool messagename = 64033;
 */
export const messagename = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.messagename", 
  MessageOptions, 
  { no: 64033, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool goproto_sizecache = 64034;
 */
export const goproto_sizecache = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.goproto_sizecache", 
  MessageOptions, 
  { no: 64034, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool goproto_unkeyed = 64035;
 */
export const goproto_unkeyed = proto2.makeExtension<MessageOptions, boolean>(
  "gogoproto.goproto_unkeyed", 
  MessageOptions, 
  { no: 64035, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool nullable = 65001;
 */
export const nullable = proto2.makeExtension<FieldOptions, boolean>(
  "gogoproto.nullable", 
  FieldOptions, 
  { no: 65001, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool embed = 65002;
 */
export const embed = proto2.makeExtension<FieldOptions, boolean>(
  "gogoproto.embed", 
  FieldOptions, 
  { no: 65002, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional string customtype = 65003;
 */
export const customtype = proto2.makeExtension<FieldOptions, string>(
  "gogoproto.customtype", 
  FieldOptions, 
  { no: 65003, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

/**
 * @generated from extension: optional string customname = 65004;
 */
export const customname = proto2.makeExtension<FieldOptions, string>(
  "gogoproto.customname", 
  FieldOptions, 
  { no: 65004, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

/**
 * @generated from extension: optional string jsontag = 65005;
 */
export const jsontag = proto2.makeExtension<FieldOptions, string>(
  "gogoproto.jsontag", 
  FieldOptions, 
  { no: 65005, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

/**
 * @generated from extension: optional string moretags = 65006;
 */
export const moretags = proto2.makeExtension<FieldOptions, string>(
  "gogoproto.moretags", 
  FieldOptions, 
  { no: 65006, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

/**
 * @generated from extension: optional string casttype = 65007;
 */
export const casttype = proto2.makeExtension<FieldOptions, string>(
  "gogoproto.casttype", 
  FieldOptions, 
  { no: 65007, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

/**
 * @generated from extension: optional string castkey = 65008;
 */
export const castkey = proto2.makeExtension<FieldOptions, string>(
  "gogoproto.castkey", 
  FieldOptions, 
  { no: 65008, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

/**
 * @generated from extension: optional string castvalue = 65009;
 */
export const castvalue = proto2.makeExtension<FieldOptions, string>(
  "gogoproto.castvalue", 
  FieldOptions, 
  { no: 65009, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

/**
 * @generated from extension: optional bool stdtime = 65010;
 */
export const stdtime = proto2.makeExtension<FieldOptions, boolean>(
  "gogoproto.stdtime", 
  FieldOptions, 
  { no: 65010, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool stdduration = 65011;
 */
export const stdduration = proto2.makeExtension<FieldOptions, boolean>(
  "gogoproto.stdduration", 
  FieldOptions, 
  { no: 65011, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional bool wktpointer = 65012;
 */
export const wktpointer = proto2.makeExtension<FieldOptions, boolean>(
  "gogoproto.wktpointer", 
  FieldOptions, 
  { no: 65012, kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
);

/**
 * @generated from extension: optional string castrepeated = 65013;
 */
export const castrepeated = proto2.makeExtension<FieldOptions, string>(
  "gogoproto.castrepeated", 
  FieldOptions, 
  { no: 65013, kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
);

