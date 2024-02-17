/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface DripFaucetInterface extends Interface {
  getFunction(
    nameOrSignature: "getNextBuyTime" | "requestTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getNextBuyTime",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "requestTokens",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getNextBuyTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestTokens",
    data: BytesLike
  ): Result;
}

export interface DripFaucet extends BaseContract {
  connect(runner?: ContractRunner | null): DripFaucet;
  waitForDeployment(): Promise<this>;

  interface: DripFaucetInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getNextBuyTime: TypedContractMethod<
    [recipient: AddressLike],
    [bigint],
    "view"
  >;

  requestTokens: TypedContractMethod<
    [recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getNextBuyTime"
  ): TypedContractMethod<[recipient: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "requestTokens"
  ): TypedContractMethod<[recipient: AddressLike], [void], "nonpayable">;

  filters: {};
}
