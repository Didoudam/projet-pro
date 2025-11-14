
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Writer
 * 
 */
export type Writer = $Result.DefaultSelection<Prisma.$WriterPayload>
/**
 * Model formation
 * 
 */
export type formation = $Result.DefaultSelection<Prisma.$formationPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Vote
 * 
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model CompanyAdmin
 * 
 */
export type CompanyAdmin = $Result.DefaultSelection<Prisma.$CompanyAdminPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Relation
 * 
 */
export type Relation = $Result.DefaultSelection<Prisma.$RelationPayload>
/**
 * Model ProfileShow
 * 
 */
export type ProfileShow = $Result.DefaultSelection<Prisma.$ProfileShowPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.writer`: Exposes CRUD operations for the **Writer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Writers
    * const writers = await prisma.writer.findMany()
    * ```
    */
  get writer(): Prisma.WriterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formation`: Exposes CRUD operations for the **formation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formations
    * const formations = await prisma.formation.findMany()
    * ```
    */
  get formation(): Prisma.formationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyAdmin`: Exposes CRUD operations for the **CompanyAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyAdmins
    * const companyAdmins = await prisma.companyAdmin.findMany()
    * ```
    */
  get companyAdmin(): Prisma.CompanyAdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relation`: Exposes CRUD operations for the **Relation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relations
    * const relations = await prisma.relation.findMany()
    * ```
    */
  get relation(): Prisma.RelationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profileShow`: Exposes CRUD operations for the **ProfileShow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfileShows
    * const profileShows = await prisma.profileShow.findMany()
    * ```
    */
  get profileShow(): Prisma.ProfileShowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Company: 'Company',
    Writer: 'Writer',
    formation: 'formation',
    Experience: 'Experience',
    Post: 'Post',
    Vote: 'Vote',
    Media: 'Media',
    Comment: 'Comment',
    CompanyAdmin: 'CompanyAdmin',
    Skill: 'Skill',
    Relation: 'Relation',
    ProfileShow: 'ProfileShow',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "company" | "writer" | "formation" | "experience" | "post" | "vote" | "media" | "comment" | "companyAdmin" | "skill" | "relation" | "profileShow" | "session" | "account" | "verification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Writer: {
        payload: Prisma.$WriterPayload<ExtArgs>
        fields: Prisma.WriterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WriterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WriterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload>
          }
          findFirst: {
            args: Prisma.WriterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WriterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload>
          }
          findMany: {
            args: Prisma.WriterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload>[]
          }
          create: {
            args: Prisma.WriterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload>
          }
          createMany: {
            args: Prisma.WriterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WriterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload>
          }
          update: {
            args: Prisma.WriterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload>
          }
          deleteMany: {
            args: Prisma.WriterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WriterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WriterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WriterPayload>
          }
          aggregate: {
            args: Prisma.WriterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWriter>
          }
          groupBy: {
            args: Prisma.WriterGroupByArgs<ExtArgs>
            result: $Utils.Optional<WriterGroupByOutputType>[]
          }
          count: {
            args: Prisma.WriterCountArgs<ExtArgs>
            result: $Utils.Optional<WriterCountAggregateOutputType> | number
          }
        }
      }
      formation: {
        payload: Prisma.$formationPayload<ExtArgs>
        fields: Prisma.formationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formationPayload>
          }
          findFirst: {
            args: Prisma.formationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formationPayload>
          }
          findMany: {
            args: Prisma.formationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formationPayload>[]
          }
          create: {
            args: Prisma.formationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formationPayload>
          }
          createMany: {
            args: Prisma.formationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.formationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formationPayload>
          }
          update: {
            args: Prisma.formationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formationPayload>
          }
          deleteMany: {
            args: Prisma.formationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.formationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formationPayload>
          }
          aggregate: {
            args: Prisma.FormationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormation>
          }
          groupBy: {
            args: Prisma.formationGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormationGroupByOutputType>[]
          }
          count: {
            args: Prisma.formationCountArgs<ExtArgs>
            result: $Utils.Optional<FormationCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      CompanyAdmin: {
        payload: Prisma.$CompanyAdminPayload<ExtArgs>
        fields: Prisma.CompanyAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAdminPayload>
          }
          findFirst: {
            args: Prisma.CompanyAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAdminPayload>
          }
          findMany: {
            args: Prisma.CompanyAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAdminPayload>[]
          }
          create: {
            args: Prisma.CompanyAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAdminPayload>
          }
          createMany: {
            args: Prisma.CompanyAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompanyAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAdminPayload>
          }
          update: {
            args: Prisma.CompanyAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAdminPayload>
          }
          deleteMany: {
            args: Prisma.CompanyAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyAdminPayload>
          }
          aggregate: {
            args: Prisma.CompanyAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyAdmin>
          }
          groupBy: {
            args: Prisma.CompanyAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyAdminCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyAdminCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Relation: {
        payload: Prisma.$RelationPayload<ExtArgs>
        fields: Prisma.RelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          findFirst: {
            args: Prisma.RelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          findMany: {
            args: Prisma.RelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>[]
          }
          create: {
            args: Prisma.RelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          createMany: {
            args: Prisma.RelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          update: {
            args: Prisma.RelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          deleteMany: {
            args: Prisma.RelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          aggregate: {
            args: Prisma.RelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelation>
          }
          groupBy: {
            args: Prisma.RelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelationCountArgs<ExtArgs>
            result: $Utils.Optional<RelationCountAggregateOutputType> | number
          }
        }
      }
      ProfileShow: {
        payload: Prisma.$ProfileShowPayload<ExtArgs>
        fields: Prisma.ProfileShowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileShowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileShowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileShowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileShowPayload>
          }
          findFirst: {
            args: Prisma.ProfileShowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileShowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileShowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileShowPayload>
          }
          findMany: {
            args: Prisma.ProfileShowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileShowPayload>[]
          }
          create: {
            args: Prisma.ProfileShowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileShowPayload>
          }
          createMany: {
            args: Prisma.ProfileShowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfileShowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileShowPayload>
          }
          update: {
            args: Prisma.ProfileShowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileShowPayload>
          }
          deleteMany: {
            args: Prisma.ProfileShowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileShowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfileShowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfileShowPayload>
          }
          aggregate: {
            args: Prisma.ProfileShowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfileShow>
          }
          groupBy: {
            args: Prisma.ProfileShowGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileShowGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileShowCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileShowCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    company?: CompanyOmit
    writer?: WriterOmit
    formation?: formationOmit
    experience?: ExperienceOmit
    post?: PostOmit
    vote?: VoteOmit
    media?: MediaOmit
    comment?: CommentOmit
    companyAdmin?: CompanyAdminOmit
    skill?: SkillOmit
    relation?: RelationOmit
    profileShow?: ProfileShowOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    session: number
    account: number
    relations: number
    relatedBy: number
    ProfileShowAsUser1: number
    ProfileShowAsUser2: number
    skill: number
    companyAdmin: number
    formation: number
    Experience: number
    Writer: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | UserCountOutputTypeCountSessionArgs
    account?: boolean | UserCountOutputTypeCountAccountArgs
    relations?: boolean | UserCountOutputTypeCountRelationsArgs
    relatedBy?: boolean | UserCountOutputTypeCountRelatedByArgs
    ProfileShowAsUser1?: boolean | UserCountOutputTypeCountProfileShowAsUser1Args
    ProfileShowAsUser2?: boolean | UserCountOutputTypeCountProfileShowAsUser2Args
    skill?: boolean | UserCountOutputTypeCountSkillArgs
    companyAdmin?: boolean | UserCountOutputTypeCountCompanyAdminArgs
    formation?: boolean | UserCountOutputTypeCountFormationArgs
    Experience?: boolean | UserCountOutputTypeCountExperienceArgs
    Writer?: boolean | UserCountOutputTypeCountWriterArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRelatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfileShowAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileShowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProfileShowAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileShowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyAdminWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFormationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWriterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WriterWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    companyAdmin: number
    formation: number
    Experience: number
    Writer: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companyAdmin?: boolean | CompanyCountOutputTypeCountCompanyAdminArgs
    formation?: boolean | CompanyCountOutputTypeCountFormationArgs
    Experience?: boolean | CompanyCountOutputTypeCountExperienceArgs
    Writer?: boolean | CompanyCountOutputTypeCountWriterArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCompanyAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyAdminWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountFormationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formationWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountWriterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WriterWhereInput
  }


  /**
   * Count Type WriterCountOutputType
   */

  export type WriterCountOutputType = {
    Post: number
    Vote: number
    Comment: number
  }

  export type WriterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Post?: boolean | WriterCountOutputTypeCountPostArgs
    Vote?: boolean | WriterCountOutputTypeCountVoteArgs
    Comment?: boolean | WriterCountOutputTypeCountCommentArgs
  }

  // Custom InputTypes
  /**
   * WriterCountOutputType without action
   */
  export type WriterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WriterCountOutputType
     */
    select?: WriterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WriterCountOutputType without action
   */
  export type WriterCountOutputTypeCountPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * WriterCountOutputType without action
   */
  export type WriterCountOutputTypeCountVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }

  /**
   * WriterCountOutputType without action
   */
  export type WriterCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    media: number
    Comment: number
    Vote: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | PostCountOutputTypeCountMediaArgs
    Comment?: boolean | PostCountOutputTypeCountCommentArgs
    Vote?: boolean | PostCountOutputTypeCountVoteArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    firstName: string | null
    lastName: string | null
    isRoot: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    firstName: string | null
    lastName: string | null
    isRoot: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    firstName: number
    lastName: number
    isRoot: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    firstName?: true
    lastName?: true
    isRoot?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    firstName?: true
    lastName?: true
    isRoot?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    firstName?: true
    lastName?: true
    isRoot?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    firstName: string | null
    lastName: string | null
    isRoot: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    firstName?: boolean
    lastName?: boolean
    isRoot?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | User$sessionArgs<ExtArgs>
    account?: boolean | User$accountArgs<ExtArgs>
    relations?: boolean | User$relationsArgs<ExtArgs>
    relatedBy?: boolean | User$relatedByArgs<ExtArgs>
    ProfileShowAsUser1?: boolean | User$ProfileShowAsUser1Args<ExtArgs>
    ProfileShowAsUser2?: boolean | User$ProfileShowAsUser2Args<ExtArgs>
    skill?: boolean | User$skillArgs<ExtArgs>
    companyAdmin?: boolean | User$companyAdminArgs<ExtArgs>
    formation?: boolean | User$formationArgs<ExtArgs>
    Experience?: boolean | User$ExperienceArgs<ExtArgs>
    Writer?: boolean | User$WriterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    firstName?: boolean
    lastName?: boolean
    isRoot?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "firstName" | "lastName" | "isRoot" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | User$sessionArgs<ExtArgs>
    account?: boolean | User$accountArgs<ExtArgs>
    relations?: boolean | User$relationsArgs<ExtArgs>
    relatedBy?: boolean | User$relatedByArgs<ExtArgs>
    ProfileShowAsUser1?: boolean | User$ProfileShowAsUser1Args<ExtArgs>
    ProfileShowAsUser2?: boolean | User$ProfileShowAsUser2Args<ExtArgs>
    skill?: boolean | User$skillArgs<ExtArgs>
    companyAdmin?: boolean | User$companyAdminArgs<ExtArgs>
    formation?: boolean | User$formationArgs<ExtArgs>
    Experience?: boolean | User$ExperienceArgs<ExtArgs>
    Writer?: boolean | User$WriterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>[]
      account: Prisma.$AccountPayload<ExtArgs>[]
      relations: Prisma.$RelationPayload<ExtArgs>[]
      relatedBy: Prisma.$RelationPayload<ExtArgs>[]
      ProfileShowAsUser1: Prisma.$ProfileShowPayload<ExtArgs>[]
      ProfileShowAsUser2: Prisma.$ProfileShowPayload<ExtArgs>[]
      skill: Prisma.$SkillPayload<ExtArgs>[]
      companyAdmin: Prisma.$CompanyAdminPayload<ExtArgs>[]
      formation: Prisma.$formationPayload<ExtArgs>[]
      Experience: Prisma.$ExperiencePayload<ExtArgs>[]
      Writer: Prisma.$WriterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      firstName: string | null
      lastName: string | null
      isRoot: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends User$sessionArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    account<T extends User$accountArgs<ExtArgs> = {}>(args?: Subset<T, User$accountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relations<T extends User$relationsArgs<ExtArgs> = {}>(args?: Subset<T, User$relationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    relatedBy<T extends User$relatedByArgs<ExtArgs> = {}>(args?: Subset<T, User$relatedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProfileShowAsUser1<T extends User$ProfileShowAsUser1Args<ExtArgs> = {}>(args?: Subset<T, User$ProfileShowAsUser1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ProfileShowAsUser2<T extends User$ProfileShowAsUser2Args<ExtArgs> = {}>(args?: Subset<T, User$ProfileShowAsUser2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skill<T extends User$skillArgs<ExtArgs> = {}>(args?: Subset<T, User$skillArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    companyAdmin<T extends User$companyAdminArgs<ExtArgs> = {}>(args?: Subset<T, User$companyAdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    formation<T extends User$formationArgs<ExtArgs> = {}>(args?: Subset<T, User$formationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Experience<T extends User$ExperienceArgs<ExtArgs> = {}>(args?: Subset<T, User$ExperienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Writer<T extends User$WriterArgs<ExtArgs> = {}>(args?: Subset<T, User$WriterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly isRoot: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.session
   */
  export type User$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.account
   */
  export type User$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.relations
   */
  export type User$relationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    where?: RelationWhereInput
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    cursor?: RelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
  }

  /**
   * User.relatedBy
   */
  export type User$relatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    where?: RelationWhereInput
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    cursor?: RelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
  }

  /**
   * User.ProfileShowAsUser1
   */
  export type User$ProfileShowAsUser1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileShow
     */
    select?: ProfileShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileShow
     */
    omit?: ProfileShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileShowInclude<ExtArgs> | null
    where?: ProfileShowWhereInput
    orderBy?: ProfileShowOrderByWithRelationInput | ProfileShowOrderByWithRelationInput[]
    cursor?: ProfileShowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileShowScalarFieldEnum | ProfileShowScalarFieldEnum[]
  }

  /**
   * User.ProfileShowAsUser2
   */
  export type User$ProfileShowAsUser2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileShow
     */
    select?: ProfileShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileShow
     */
    omit?: ProfileShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileShowInclude<ExtArgs> | null
    where?: ProfileShowWhereInput
    orderBy?: ProfileShowOrderByWithRelationInput | ProfileShowOrderByWithRelationInput[]
    cursor?: ProfileShowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileShowScalarFieldEnum | ProfileShowScalarFieldEnum[]
  }

  /**
   * User.skill
   */
  export type User$skillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * User.companyAdmin
   */
  export type User$companyAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAdmin
     */
    select?: CompanyAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAdmin
     */
    omit?: CompanyAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAdminInclude<ExtArgs> | null
    where?: CompanyAdminWhereInput
    orderBy?: CompanyAdminOrderByWithRelationInput | CompanyAdminOrderByWithRelationInput[]
    cursor?: CompanyAdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyAdminScalarFieldEnum | CompanyAdminScalarFieldEnum[]
  }

  /**
   * User.formation
   */
  export type User$formationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formation
     */
    select?: formationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formation
     */
    omit?: formationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formationInclude<ExtArgs> | null
    where?: formationWhereInput
    orderBy?: formationOrderByWithRelationInput | formationOrderByWithRelationInput[]
    cursor?: formationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormationScalarFieldEnum | FormationScalarFieldEnum[]
  }

  /**
   * User.Experience
   */
  export type User$ExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * User.Writer
   */
  export type User$WriterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    where?: WriterWhereInput
    orderBy?: WriterOrderByWithRelationInput | WriterOrderByWithRelationInput[]
    cursor?: WriterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WriterScalarFieldEnum | WriterScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    activity: string | null
    image: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    activity: string | null
    image: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    activity: number
    image: number
    description: number
    createdAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    activity?: true
    image?: true
    description?: true
    createdAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    activity?: true
    image?: true
    description?: true
    createdAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    activity?: true
    image?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    activity: string | null
    image: string | null
    description: string | null
    createdAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    activity?: boolean
    image?: boolean
    description?: boolean
    createdAt?: boolean
    companyAdmin?: boolean | Company$companyAdminArgs<ExtArgs>
    formation?: boolean | Company$formationArgs<ExtArgs>
    Experience?: boolean | Company$ExperienceArgs<ExtArgs>
    Writer?: boolean | Company$WriterArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>



  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    activity?: boolean
    image?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "activity" | "image" | "description" | "createdAt", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companyAdmin?: boolean | Company$companyAdminArgs<ExtArgs>
    formation?: boolean | Company$formationArgs<ExtArgs>
    Experience?: boolean | Company$ExperienceArgs<ExtArgs>
    Writer?: boolean | Company$WriterArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      companyAdmin: Prisma.$CompanyAdminPayload<ExtArgs>[]
      formation: Prisma.$formationPayload<ExtArgs>[]
      Experience: Prisma.$ExperiencePayload<ExtArgs>[]
      Writer: Prisma.$WriterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      activity: string | null
      image: string | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companyAdmin<T extends Company$companyAdminArgs<ExtArgs> = {}>(args?: Subset<T, Company$companyAdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    formation<T extends Company$formationArgs<ExtArgs> = {}>(args?: Subset<T, Company$formationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Experience<T extends Company$ExperienceArgs<ExtArgs> = {}>(args?: Subset<T, Company$ExperienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Writer<T extends Company$WriterArgs<ExtArgs> = {}>(args?: Subset<T, Company$WriterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly activity: FieldRef<"Company", 'String'>
    readonly image: FieldRef<"Company", 'String'>
    readonly description: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.companyAdmin
   */
  export type Company$companyAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAdmin
     */
    select?: CompanyAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAdmin
     */
    omit?: CompanyAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAdminInclude<ExtArgs> | null
    where?: CompanyAdminWhereInput
    orderBy?: CompanyAdminOrderByWithRelationInput | CompanyAdminOrderByWithRelationInput[]
    cursor?: CompanyAdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyAdminScalarFieldEnum | CompanyAdminScalarFieldEnum[]
  }

  /**
   * Company.formation
   */
  export type Company$formationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formation
     */
    select?: formationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formation
     */
    omit?: formationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formationInclude<ExtArgs> | null
    where?: formationWhereInput
    orderBy?: formationOrderByWithRelationInput | formationOrderByWithRelationInput[]
    cursor?: formationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormationScalarFieldEnum | FormationScalarFieldEnum[]
  }

  /**
   * Company.Experience
   */
  export type Company$ExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Company.Writer
   */
  export type Company$WriterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    where?: WriterWhereInput
    orderBy?: WriterOrderByWithRelationInput | WriterOrderByWithRelationInput[]
    cursor?: WriterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WriterScalarFieldEnum | WriterScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Writer
   */

  export type AggregateWriter = {
    _count: WriterCountAggregateOutputType | null
    _min: WriterMinAggregateOutputType | null
    _max: WriterMaxAggregateOutputType | null
  }

  export type WriterMinAggregateOutputType = {
    id: string | null
    userId: string | null
    companyId: string | null
  }

  export type WriterMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    companyId: string | null
  }

  export type WriterCountAggregateOutputType = {
    id: number
    userId: number
    companyId: number
    _all: number
  }


  export type WriterMinAggregateInputType = {
    id?: true
    userId?: true
    companyId?: true
  }

  export type WriterMaxAggregateInputType = {
    id?: true
    userId?: true
    companyId?: true
  }

  export type WriterCountAggregateInputType = {
    id?: true
    userId?: true
    companyId?: true
    _all?: true
  }

  export type WriterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Writer to aggregate.
     */
    where?: WriterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Writers to fetch.
     */
    orderBy?: WriterOrderByWithRelationInput | WriterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WriterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Writers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Writers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Writers
    **/
    _count?: true | WriterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WriterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WriterMaxAggregateInputType
  }

  export type GetWriterAggregateType<T extends WriterAggregateArgs> = {
        [P in keyof T & keyof AggregateWriter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWriter[P]>
      : GetScalarType<T[P], AggregateWriter[P]>
  }




  export type WriterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WriterWhereInput
    orderBy?: WriterOrderByWithAggregationInput | WriterOrderByWithAggregationInput[]
    by: WriterScalarFieldEnum[] | WriterScalarFieldEnum
    having?: WriterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WriterCountAggregateInputType | true
    _min?: WriterMinAggregateInputType
    _max?: WriterMaxAggregateInputType
  }

  export type WriterGroupByOutputType = {
    id: string
    userId: string | null
    companyId: string | null
    _count: WriterCountAggregateOutputType | null
    _min: WriterMinAggregateOutputType | null
    _max: WriterMaxAggregateOutputType | null
  }

  type GetWriterGroupByPayload<T extends WriterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WriterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WriterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WriterGroupByOutputType[P]>
            : GetScalarType<T[P], WriterGroupByOutputType[P]>
        }
      >
    >


  export type WriterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyId?: boolean
    user?: boolean | Writer$userArgs<ExtArgs>
    company?: boolean | Writer$companyArgs<ExtArgs>
    Post?: boolean | Writer$PostArgs<ExtArgs>
    Vote?: boolean | Writer$VoteArgs<ExtArgs>
    Comment?: boolean | Writer$CommentArgs<ExtArgs>
    _count?: boolean | WriterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["writer"]>



  export type WriterSelectScalar = {
    id?: boolean
    userId?: boolean
    companyId?: boolean
  }

  export type WriterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyId", ExtArgs["result"]["writer"]>
  export type WriterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Writer$userArgs<ExtArgs>
    company?: boolean | Writer$companyArgs<ExtArgs>
    Post?: boolean | Writer$PostArgs<ExtArgs>
    Vote?: boolean | Writer$VoteArgs<ExtArgs>
    Comment?: boolean | Writer$CommentArgs<ExtArgs>
    _count?: boolean | WriterCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WriterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Writer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      company: Prisma.$CompanyPayload<ExtArgs> | null
      Post: Prisma.$PostPayload<ExtArgs>[]
      Vote: Prisma.$VotePayload<ExtArgs>[]
      Comment: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      companyId: string | null
    }, ExtArgs["result"]["writer"]>
    composites: {}
  }

  type WriterGetPayload<S extends boolean | null | undefined | WriterDefaultArgs> = $Result.GetResult<Prisma.$WriterPayload, S>

  type WriterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WriterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WriterCountAggregateInputType | true
    }

  export interface WriterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Writer'], meta: { name: 'Writer' } }
    /**
     * Find zero or one Writer that matches the filter.
     * @param {WriterFindUniqueArgs} args - Arguments to find a Writer
     * @example
     * // Get one Writer
     * const writer = await prisma.writer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WriterFindUniqueArgs>(args: SelectSubset<T, WriterFindUniqueArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Writer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WriterFindUniqueOrThrowArgs} args - Arguments to find a Writer
     * @example
     * // Get one Writer
     * const writer = await prisma.writer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WriterFindUniqueOrThrowArgs>(args: SelectSubset<T, WriterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Writer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterFindFirstArgs} args - Arguments to find a Writer
     * @example
     * // Get one Writer
     * const writer = await prisma.writer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WriterFindFirstArgs>(args?: SelectSubset<T, WriterFindFirstArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Writer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterFindFirstOrThrowArgs} args - Arguments to find a Writer
     * @example
     * // Get one Writer
     * const writer = await prisma.writer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WriterFindFirstOrThrowArgs>(args?: SelectSubset<T, WriterFindFirstOrThrowArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Writers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Writers
     * const writers = await prisma.writer.findMany()
     * 
     * // Get first 10 Writers
     * const writers = await prisma.writer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const writerWithIdOnly = await prisma.writer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WriterFindManyArgs>(args?: SelectSubset<T, WriterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Writer.
     * @param {WriterCreateArgs} args - Arguments to create a Writer.
     * @example
     * // Create one Writer
     * const Writer = await prisma.writer.create({
     *   data: {
     *     // ... data to create a Writer
     *   }
     * })
     * 
     */
    create<T extends WriterCreateArgs>(args: SelectSubset<T, WriterCreateArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Writers.
     * @param {WriterCreateManyArgs} args - Arguments to create many Writers.
     * @example
     * // Create many Writers
     * const writer = await prisma.writer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WriterCreateManyArgs>(args?: SelectSubset<T, WriterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Writer.
     * @param {WriterDeleteArgs} args - Arguments to delete one Writer.
     * @example
     * // Delete one Writer
     * const Writer = await prisma.writer.delete({
     *   where: {
     *     // ... filter to delete one Writer
     *   }
     * })
     * 
     */
    delete<T extends WriterDeleteArgs>(args: SelectSubset<T, WriterDeleteArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Writer.
     * @param {WriterUpdateArgs} args - Arguments to update one Writer.
     * @example
     * // Update one Writer
     * const writer = await prisma.writer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WriterUpdateArgs>(args: SelectSubset<T, WriterUpdateArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Writers.
     * @param {WriterDeleteManyArgs} args - Arguments to filter Writers to delete.
     * @example
     * // Delete a few Writers
     * const { count } = await prisma.writer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WriterDeleteManyArgs>(args?: SelectSubset<T, WriterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Writers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Writers
     * const writer = await prisma.writer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WriterUpdateManyArgs>(args: SelectSubset<T, WriterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Writer.
     * @param {WriterUpsertArgs} args - Arguments to update or create a Writer.
     * @example
     * // Update or create a Writer
     * const writer = await prisma.writer.upsert({
     *   create: {
     *     // ... data to create a Writer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Writer we want to update
     *   }
     * })
     */
    upsert<T extends WriterUpsertArgs>(args: SelectSubset<T, WriterUpsertArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Writers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterCountArgs} args - Arguments to filter Writers to count.
     * @example
     * // Count the number of Writers
     * const count = await prisma.writer.count({
     *   where: {
     *     // ... the filter for the Writers we want to count
     *   }
     * })
    **/
    count<T extends WriterCountArgs>(
      args?: Subset<T, WriterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WriterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Writer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WriterAggregateArgs>(args: Subset<T, WriterAggregateArgs>): Prisma.PrismaPromise<GetWriterAggregateType<T>>

    /**
     * Group by Writer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WriterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WriterGroupByArgs['orderBy'] }
        : { orderBy?: WriterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WriterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWriterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Writer model
   */
  readonly fields: WriterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Writer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WriterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Writer$userArgs<ExtArgs> = {}>(args?: Subset<T, Writer$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    company<T extends Writer$companyArgs<ExtArgs> = {}>(args?: Subset<T, Writer$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Post<T extends Writer$PostArgs<ExtArgs> = {}>(args?: Subset<T, Writer$PostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Vote<T extends Writer$VoteArgs<ExtArgs> = {}>(args?: Subset<T, Writer$VoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Comment<T extends Writer$CommentArgs<ExtArgs> = {}>(args?: Subset<T, Writer$CommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Writer model
   */
  interface WriterFieldRefs {
    readonly id: FieldRef<"Writer", 'String'>
    readonly userId: FieldRef<"Writer", 'String'>
    readonly companyId: FieldRef<"Writer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Writer findUnique
   */
  export type WriterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * Filter, which Writer to fetch.
     */
    where: WriterWhereUniqueInput
  }

  /**
   * Writer findUniqueOrThrow
   */
  export type WriterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * Filter, which Writer to fetch.
     */
    where: WriterWhereUniqueInput
  }

  /**
   * Writer findFirst
   */
  export type WriterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * Filter, which Writer to fetch.
     */
    where?: WriterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Writers to fetch.
     */
    orderBy?: WriterOrderByWithRelationInput | WriterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Writers.
     */
    cursor?: WriterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Writers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Writers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Writers.
     */
    distinct?: WriterScalarFieldEnum | WriterScalarFieldEnum[]
  }

  /**
   * Writer findFirstOrThrow
   */
  export type WriterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * Filter, which Writer to fetch.
     */
    where?: WriterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Writers to fetch.
     */
    orderBy?: WriterOrderByWithRelationInput | WriterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Writers.
     */
    cursor?: WriterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Writers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Writers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Writers.
     */
    distinct?: WriterScalarFieldEnum | WriterScalarFieldEnum[]
  }

  /**
   * Writer findMany
   */
  export type WriterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * Filter, which Writers to fetch.
     */
    where?: WriterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Writers to fetch.
     */
    orderBy?: WriterOrderByWithRelationInput | WriterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Writers.
     */
    cursor?: WriterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Writers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Writers.
     */
    skip?: number
    distinct?: WriterScalarFieldEnum | WriterScalarFieldEnum[]
  }

  /**
   * Writer create
   */
  export type WriterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * The data needed to create a Writer.
     */
    data?: XOR<WriterCreateInput, WriterUncheckedCreateInput>
  }

  /**
   * Writer createMany
   */
  export type WriterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Writers.
     */
    data: WriterCreateManyInput | WriterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Writer update
   */
  export type WriterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * The data needed to update a Writer.
     */
    data: XOR<WriterUpdateInput, WriterUncheckedUpdateInput>
    /**
     * Choose, which Writer to update.
     */
    where: WriterWhereUniqueInput
  }

  /**
   * Writer updateMany
   */
  export type WriterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Writers.
     */
    data: XOR<WriterUpdateManyMutationInput, WriterUncheckedUpdateManyInput>
    /**
     * Filter which Writers to update
     */
    where?: WriterWhereInput
    /**
     * Limit how many Writers to update.
     */
    limit?: number
  }

  /**
   * Writer upsert
   */
  export type WriterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * The filter to search for the Writer to update in case it exists.
     */
    where: WriterWhereUniqueInput
    /**
     * In case the Writer found by the `where` argument doesn't exist, create a new Writer with this data.
     */
    create: XOR<WriterCreateInput, WriterUncheckedCreateInput>
    /**
     * In case the Writer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WriterUpdateInput, WriterUncheckedUpdateInput>
  }

  /**
   * Writer delete
   */
  export type WriterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
    /**
     * Filter which Writer to delete.
     */
    where: WriterWhereUniqueInput
  }

  /**
   * Writer deleteMany
   */
  export type WriterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Writers to delete
     */
    where?: WriterWhereInput
    /**
     * Limit how many Writers to delete.
     */
    limit?: number
  }

  /**
   * Writer.user
   */
  export type Writer$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Writer.company
   */
  export type Writer$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * Writer.Post
   */
  export type Writer$PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Writer.Vote
   */
  export type Writer$VoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Writer.Comment
   */
  export type Writer$CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Writer without action
   */
  export type WriterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Writer
     */
    select?: WriterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Writer
     */
    omit?: WriterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WriterInclude<ExtArgs> | null
  }


  /**
   * Model formation
   */

  export type AggregateFormation = {
    _count: FormationCountAggregateOutputType | null
    _min: FormationMinAggregateOutputType | null
    _max: FormationMaxAggregateOutputType | null
  }

  export type FormationMinAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    companyId: string | null
    userId: string | null
  }

  export type FormationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    companyId: string | null
    userId: string | null
  }

  export type FormationCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    description: number
    companyId: number
    userId: number
    _all: number
  }


  export type FormationMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    description?: true
    companyId?: true
    userId?: true
  }

  export type FormationMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    description?: true
    companyId?: true
    userId?: true
  }

  export type FormationCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    description?: true
    companyId?: true
    userId?: true
    _all?: true
  }

  export type FormationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formation to aggregate.
     */
    where?: formationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formations to fetch.
     */
    orderBy?: formationOrderByWithRelationInput | formationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formations
    **/
    _count?: true | FormationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormationMaxAggregateInputType
  }

  export type GetFormationAggregateType<T extends FormationAggregateArgs> = {
        [P in keyof T & keyof AggregateFormation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormation[P]>
      : GetScalarType<T[P], AggregateFormation[P]>
  }




  export type formationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formationWhereInput
    orderBy?: formationOrderByWithAggregationInput | formationOrderByWithAggregationInput[]
    by: FormationScalarFieldEnum[] | FormationScalarFieldEnum
    having?: formationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormationCountAggregateInputType | true
    _min?: FormationMinAggregateInputType
    _max?: FormationMaxAggregateInputType
  }

  export type FormationGroupByOutputType = {
    id: string
    name: string
    startDate: Date
    endDate: Date | null
    description: string | null
    companyId: string | null
    userId: string
    _count: FormationCountAggregateOutputType | null
    _min: FormationMinAggregateOutputType | null
    _max: FormationMaxAggregateOutputType | null
  }

  type GetFormationGroupByPayload<T extends formationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormationGroupByOutputType[P]>
            : GetScalarType<T[P], FormationGroupByOutputType[P]>
        }
      >
    >


  export type formationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    companyId?: boolean
    userId?: boolean
    company?: boolean | formation$companyArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formation"]>



  export type formationSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    companyId?: boolean
    userId?: boolean
  }

  export type formationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "description" | "companyId" | "userId", ExtArgs["result"]["formation"]>
  export type formationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | formation$companyArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $formationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formation"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startDate: Date
      endDate: Date | null
      description: string | null
      companyId: string | null
      userId: string
    }, ExtArgs["result"]["formation"]>
    composites: {}
  }

  type formationGetPayload<S extends boolean | null | undefined | formationDefaultArgs> = $Result.GetResult<Prisma.$formationPayload, S>

  type formationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<formationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormationCountAggregateInputType | true
    }

  export interface formationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formation'], meta: { name: 'formation' } }
    /**
     * Find zero or one Formation that matches the filter.
     * @param {formationFindUniqueArgs} args - Arguments to find a Formation
     * @example
     * // Get one Formation
     * const formation = await prisma.formation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formationFindUniqueArgs>(args: SelectSubset<T, formationFindUniqueArgs<ExtArgs>>): Prisma__formationClient<$Result.GetResult<Prisma.$formationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {formationFindUniqueOrThrowArgs} args - Arguments to find a Formation
     * @example
     * // Get one Formation
     * const formation = await prisma.formation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formationFindUniqueOrThrowArgs>(args: SelectSubset<T, formationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formationClient<$Result.GetResult<Prisma.$formationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formationFindFirstArgs} args - Arguments to find a Formation
     * @example
     * // Get one Formation
     * const formation = await prisma.formation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formationFindFirstArgs>(args?: SelectSubset<T, formationFindFirstArgs<ExtArgs>>): Prisma__formationClient<$Result.GetResult<Prisma.$formationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formationFindFirstOrThrowArgs} args - Arguments to find a Formation
     * @example
     * // Get one Formation
     * const formation = await prisma.formation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formationFindFirstOrThrowArgs>(args?: SelectSubset<T, formationFindFirstOrThrowArgs<ExtArgs>>): Prisma__formationClient<$Result.GetResult<Prisma.$formationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formations
     * const formations = await prisma.formation.findMany()
     * 
     * // Get first 10 Formations
     * const formations = await prisma.formation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formationWithIdOnly = await prisma.formation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends formationFindManyArgs>(args?: SelectSubset<T, formationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formation.
     * @param {formationCreateArgs} args - Arguments to create a Formation.
     * @example
     * // Create one Formation
     * const Formation = await prisma.formation.create({
     *   data: {
     *     // ... data to create a Formation
     *   }
     * })
     * 
     */
    create<T extends formationCreateArgs>(args: SelectSubset<T, formationCreateArgs<ExtArgs>>): Prisma__formationClient<$Result.GetResult<Prisma.$formationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formations.
     * @param {formationCreateManyArgs} args - Arguments to create many Formations.
     * @example
     * // Create many Formations
     * const formation = await prisma.formation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formationCreateManyArgs>(args?: SelectSubset<T, formationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Formation.
     * @param {formationDeleteArgs} args - Arguments to delete one Formation.
     * @example
     * // Delete one Formation
     * const Formation = await prisma.formation.delete({
     *   where: {
     *     // ... filter to delete one Formation
     *   }
     * })
     * 
     */
    delete<T extends formationDeleteArgs>(args: SelectSubset<T, formationDeleteArgs<ExtArgs>>): Prisma__formationClient<$Result.GetResult<Prisma.$formationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formation.
     * @param {formationUpdateArgs} args - Arguments to update one Formation.
     * @example
     * // Update one Formation
     * const formation = await prisma.formation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formationUpdateArgs>(args: SelectSubset<T, formationUpdateArgs<ExtArgs>>): Prisma__formationClient<$Result.GetResult<Prisma.$formationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formations.
     * @param {formationDeleteManyArgs} args - Arguments to filter Formations to delete.
     * @example
     * // Delete a few Formations
     * const { count } = await prisma.formation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formationDeleteManyArgs>(args?: SelectSubset<T, formationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formations
     * const formation = await prisma.formation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formationUpdateManyArgs>(args: SelectSubset<T, formationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Formation.
     * @param {formationUpsertArgs} args - Arguments to update or create a Formation.
     * @example
     * // Update or create a Formation
     * const formation = await prisma.formation.upsert({
     *   create: {
     *     // ... data to create a Formation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formation we want to update
     *   }
     * })
     */
    upsert<T extends formationUpsertArgs>(args: SelectSubset<T, formationUpsertArgs<ExtArgs>>): Prisma__formationClient<$Result.GetResult<Prisma.$formationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formationCountArgs} args - Arguments to filter Formations to count.
     * @example
     * // Count the number of Formations
     * const count = await prisma.formation.count({
     *   where: {
     *     // ... the filter for the Formations we want to count
     *   }
     * })
    **/
    count<T extends formationCountArgs>(
      args?: Subset<T, formationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormationAggregateArgs>(args: Subset<T, FormationAggregateArgs>): Prisma.PrismaPromise<GetFormationAggregateType<T>>

    /**
     * Group by Formation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formationGroupByArgs['orderBy'] }
        : { orderBy?: formationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formation model
   */
  readonly fields: formationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends formation$companyArgs<ExtArgs> = {}>(args?: Subset<T, formation$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formation model
   */
  interface formationFieldRefs {
    readonly id: FieldRef<"formation", 'String'>
    readonly name: FieldRef<"formation", 'String'>
    readonly startDate: FieldRef<"formation", 'DateTime'>
    readonly endDate: FieldRef<"formation", 'DateTime'>
    readonly description: FieldRef<"formation", 'String'>
    readonly companyId: FieldRef<"formation", 'String'>
    readonly userId: FieldRef<"formation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * formation findUnique
   */
  export type formationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formation
     */
    select?: formationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formation
     */
    omit?: formationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formationInclude<ExtArgs> | null
    /**
     * Filter, which formation to fetch.
     */
    where: formationWhereUniqueInput
  }

  /**
   * formation findUniqueOrThrow
   */
  export type formationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formation
     */
    select?: formationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formation
     */
    omit?: formationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formationInclude<ExtArgs> | null
    /**
     * Filter, which formation to fetch.
     */
    where: formationWhereUniqueInput
  }

  /**
   * formation findFirst
   */
  export type formationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formation
     */
    select?: formationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formation
     */
    omit?: formationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formationInclude<ExtArgs> | null
    /**
     * Filter, which formation to fetch.
     */
    where?: formationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formations to fetch.
     */
    orderBy?: formationOrderByWithRelationInput | formationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formations.
     */
    cursor?: formationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formations.
     */
    distinct?: FormationScalarFieldEnum | FormationScalarFieldEnum[]
  }

  /**
   * formation findFirstOrThrow
   */
  export type formationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formation
     */
    select?: formationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formation
     */
    omit?: formationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formationInclude<ExtArgs> | null
    /**
     * Filter, which formation to fetch.
     */
    where?: formationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formations to fetch.
     */
    orderBy?: formationOrderByWithRelationInput | formationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formations.
     */
    cursor?: formationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formations.
     */
    distinct?: FormationScalarFieldEnum | FormationScalarFieldEnum[]
  }

  /**
   * formation findMany
   */
  export type formationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formation
     */
    select?: formationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formation
     */
    omit?: formationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formationInclude<ExtArgs> | null
    /**
     * Filter, which formations to fetch.
     */
    where?: formationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formations to fetch.
     */
    orderBy?: formationOrderByWithRelationInput | formationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formations.
     */
    cursor?: formationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formations.
     */
    skip?: number
    distinct?: FormationScalarFieldEnum | FormationScalarFieldEnum[]
  }

  /**
   * formation create
   */
  export type formationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formation
     */
    select?: formationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formation
     */
    omit?: formationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formationInclude<ExtArgs> | null
    /**
     * The data needed to create a formation.
     */
    data: XOR<formationCreateInput, formationUncheckedCreateInput>
  }

  /**
   * formation createMany
   */
  export type formationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formations.
     */
    data: formationCreateManyInput | formationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * formation update
   */
  export type formationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formation
     */
    select?: formationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formation
     */
    omit?: formationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formationInclude<ExtArgs> | null
    /**
     * The data needed to update a formation.
     */
    data: XOR<formationUpdateInput, formationUncheckedUpdateInput>
    /**
     * Choose, which formation to update.
     */
    where: formationWhereUniqueInput
  }

  /**
   * formation updateMany
   */
  export type formationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formations.
     */
    data: XOR<formationUpdateManyMutationInput, formationUncheckedUpdateManyInput>
    /**
     * Filter which formations to update
     */
    where?: formationWhereInput
    /**
     * Limit how many formations to update.
     */
    limit?: number
  }

  /**
   * formation upsert
   */
  export type formationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formation
     */
    select?: formationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formation
     */
    omit?: formationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formationInclude<ExtArgs> | null
    /**
     * The filter to search for the formation to update in case it exists.
     */
    where: formationWhereUniqueInput
    /**
     * In case the formation found by the `where` argument doesn't exist, create a new formation with this data.
     */
    create: XOR<formationCreateInput, formationUncheckedCreateInput>
    /**
     * In case the formation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formationUpdateInput, formationUncheckedUpdateInput>
  }

  /**
   * formation delete
   */
  export type formationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formation
     */
    select?: formationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formation
     */
    omit?: formationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formationInclude<ExtArgs> | null
    /**
     * Filter which formation to delete.
     */
    where: formationWhereUniqueInput
  }

  /**
   * formation deleteMany
   */
  export type formationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formations to delete
     */
    where?: formationWhereInput
    /**
     * Limit how many formations to delete.
     */
    limit?: number
  }

  /**
   * formation.company
   */
  export type formation$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * formation without action
   */
  export type formationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formation
     */
    select?: formationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the formation
     */
    omit?: formationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formationInclude<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    companyId: string | null
    userId: string | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    companyId: string | null
    userId: string | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    description: number
    companyId: number
    userId: number
    _all: number
  }


  export type ExperienceMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    description?: true
    companyId?: true
    userId?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    description?: true
    companyId?: true
    userId?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    description?: true
    companyId?: true
    userId?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: string
    name: string
    startDate: Date
    endDate: Date | null
    description: string | null
    companyId: string | null
    userId: string
    _count: ExperienceCountAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    companyId?: boolean
    userId?: boolean
    company?: boolean | Experience$companyArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>



  export type ExperienceSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    companyId?: boolean
    userId?: boolean
  }

  export type ExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "description" | "companyId" | "userId", ExtArgs["result"]["experience"]>
  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | Experience$companyArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startDate: Date
      endDate: Date | null
      description: string | null
      companyId: string | null
      userId: string
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends Experience$companyArgs<ExtArgs> = {}>(args?: Subset<T, Experience$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Experience model
   */
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'String'>
    readonly name: FieldRef<"Experience", 'String'>
    readonly startDate: FieldRef<"Experience", 'DateTime'>
    readonly endDate: FieldRef<"Experience", 'DateTime'>
    readonly description: FieldRef<"Experience", 'String'>
    readonly companyId: FieldRef<"Experience", 'String'>
    readonly userId: FieldRef<"Experience", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number
  }

  /**
   * Experience.company
   */
  export type Experience$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    content: string | null
    reactionId: string | null
    writerId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    content: string | null
    reactionId: string | null
    writerId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    createdAt: number
    content: number
    reactionId: number
    writerId: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    createdAt?: true
    content?: true
    reactionId?: true
    writerId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    createdAt?: true
    content?: true
    reactionId?: true
    writerId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    createdAt?: true
    content?: true
    reactionId?: true
    writerId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    createdAt: Date
    content: string
    reactionId: string | null
    writerId: string
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    content?: boolean
    reactionId?: boolean
    writerId?: boolean
    writer?: boolean | WriterDefaultArgs<ExtArgs>
    media?: boolean | Post$mediaArgs<ExtArgs>
    Comment?: boolean | Post$CommentArgs<ExtArgs>
    Vote?: boolean | Post$VoteArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type PostSelectScalar = {
    id?: boolean
    createdAt?: boolean
    content?: boolean
    reactionId?: boolean
    writerId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "content" | "reactionId" | "writerId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    writer?: boolean | WriterDefaultArgs<ExtArgs>
    media?: boolean | Post$mediaArgs<ExtArgs>
    Comment?: boolean | Post$CommentArgs<ExtArgs>
    Vote?: boolean | Post$VoteArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      writer: Prisma.$WriterPayload<ExtArgs>
      media: Prisma.$MediaPayload<ExtArgs>[]
      Comment: Prisma.$CommentPayload<ExtArgs>[]
      Vote: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      content: string
      reactionId: string | null
      writerId: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    writer<T extends WriterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WriterDefaultArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends Post$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Post$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Comment<T extends Post$CommentArgs<ExtArgs> = {}>(args?: Subset<T, Post$CommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Vote<T extends Post$VoteArgs<ExtArgs> = {}>(args?: Subset<T, Post$VoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly content: FieldRef<"Post", 'String'>
    readonly reactionId: FieldRef<"Post", 'String'>
    readonly writerId: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.media
   */
  export type Post$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Post.Comment
   */
  export type Post$CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post.Vote
   */
  export type Post$VoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteMinAggregateOutputType = {
    id: string | null
    writerId: string | null
    postId: string | null
  }

  export type VoteMaxAggregateOutputType = {
    id: string | null
    writerId: string | null
    postId: string | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    writerId: number
    postId: number
    _all: number
  }


  export type VoteMinAggregateInputType = {
    id?: true
    writerId?: true
    postId?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    writerId?: true
    postId?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    writerId?: true
    postId?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: string
    writerId: string
    postId: string
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    writerId?: boolean
    postId?: boolean
    writer?: boolean | WriterDefaultArgs<ExtArgs>
    post?: boolean | Vote$postArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>



  export type VoteSelectScalar = {
    id?: boolean
    writerId?: boolean
    postId?: boolean
  }

  export type VoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "writerId" | "postId", ExtArgs["result"]["vote"]>
  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    writer?: boolean | WriterDefaultArgs<ExtArgs>
    post?: boolean | Vote$postArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      writer: Prisma.$WriterPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      writerId: string
      postId: string
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    writer<T extends WriterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WriterDefaultArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends Vote$postArgs<ExtArgs> = {}>(args?: Subset<T, Vote$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id: FieldRef<"Vote", 'String'>
    readonly writerId: FieldRef<"Vote", 'String'>
    readonly postId: FieldRef<"Vote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Vote.post
   */
  export type Vote$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    nom: string | null
    url: string | null
    altText: string | null
    description: string | null
    type: string | null
    postId: string | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    url: string | null
    altText: string | null
    description: string | null
    type: string | null
    postId: string | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    nom: number
    url: number
    altText: number
    description: number
    type: number
    postId: number
    _all: number
  }


  export type MediaMinAggregateInputType = {
    id?: true
    nom?: true
    url?: true
    altText?: true
    description?: true
    type?: true
    postId?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    nom?: true
    url?: true
    altText?: true
    description?: true
    type?: true
    postId?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    nom?: true
    url?: true
    altText?: true
    description?: true
    type?: true
    postId?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    nom: string | null
    url: string
    altText: string | null
    description: string | null
    type: string | null
    postId: string
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    url?: boolean
    altText?: boolean
    description?: boolean
    type?: boolean
    postId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>



  export type MediaSelectScalar = {
    id?: boolean
    nom?: boolean
    url?: boolean
    altText?: boolean
    description?: boolean
    type?: boolean
    postId?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "url" | "altText" | "description" | "type" | "postId", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string | null
      url: string
      altText: string | null
      description: string | null
      type: string | null
      postId: string
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly nom: FieldRef<"Media", 'String'>
    readonly url: FieldRef<"Media", 'String'>
    readonly altText: FieldRef<"Media", 'String'>
    readonly description: FieldRef<"Media", 'String'>
    readonly type: FieldRef<"Media", 'String'>
    readonly postId: FieldRef<"Media", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    votes: number | null
  }

  export type CommentSumAggregateOutputType = {
    votes: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    votes: number | null
    postId: string | null
    commentId: string | null
    writerId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    votes: number | null
    postId: string | null
    commentId: string | null
    writerId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    votes: number
    postId: number
    commentId: number
    writerId: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    votes?: true
  }

  export type CommentSumAggregateInputType = {
    votes?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    votes?: true
    postId?: true
    commentId?: true
    writerId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    votes?: true
    postId?: true
    commentId?: true
    writerId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    votes?: true
    postId?: true
    commentId?: true
    writerId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    votes: number | null
    postId: string | null
    commentId: string | null
    writerId: string
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    votes?: boolean
    postId?: boolean
    commentId?: boolean
    writerId?: boolean
    writer?: boolean | WriterDefaultArgs<ExtArgs>
    post?: boolean | Comment$postArgs<ExtArgs>
    comment?: boolean | Comment$commentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    votes?: boolean
    postId?: boolean
    commentId?: boolean
    writerId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "votes" | "postId" | "commentId" | "writerId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    writer?: boolean | WriterDefaultArgs<ExtArgs>
    post?: boolean | Comment$postArgs<ExtArgs>
    comment?: boolean | Comment$commentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      writer: Prisma.$WriterPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs> | null
      comment: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      votes: number | null
      postId: string | null
      commentId: string | null
      writerId: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    writer<T extends WriterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WriterDefaultArgs<ExtArgs>>): Prisma__WriterClient<$Result.GetResult<Prisma.$WriterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends Comment$postArgs<ExtArgs> = {}>(args?: Subset<T, Comment$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comment<T extends Comment$commentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$commentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly votes: FieldRef<"Comment", 'Int'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly commentId: FieldRef<"Comment", 'String'>
    readonly writerId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.post
   */
  export type Comment$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * Comment.comment
   */
  export type Comment$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model CompanyAdmin
   */

  export type AggregateCompanyAdmin = {
    _count: CompanyAdminCountAggregateOutputType | null
    _min: CompanyAdminMinAggregateOutputType | null
    _max: CompanyAdminMaxAggregateOutputType | null
  }

  export type CompanyAdminMinAggregateOutputType = {
    id: string | null
    role: string | null
    companyId: string | null
    userId: string | null
  }

  export type CompanyAdminMaxAggregateOutputType = {
    id: string | null
    role: string | null
    companyId: string | null
    userId: string | null
  }

  export type CompanyAdminCountAggregateOutputType = {
    id: number
    role: number
    companyId: number
    userId: number
    _all: number
  }


  export type CompanyAdminMinAggregateInputType = {
    id?: true
    role?: true
    companyId?: true
    userId?: true
  }

  export type CompanyAdminMaxAggregateInputType = {
    id?: true
    role?: true
    companyId?: true
    userId?: true
  }

  export type CompanyAdminCountAggregateInputType = {
    id?: true
    role?: true
    companyId?: true
    userId?: true
    _all?: true
  }

  export type CompanyAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyAdmin to aggregate.
     */
    where?: CompanyAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyAdmins to fetch.
     */
    orderBy?: CompanyAdminOrderByWithRelationInput | CompanyAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyAdmins
    **/
    _count?: true | CompanyAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyAdminMaxAggregateInputType
  }

  export type GetCompanyAdminAggregateType<T extends CompanyAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyAdmin[P]>
      : GetScalarType<T[P], AggregateCompanyAdmin[P]>
  }




  export type CompanyAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyAdminWhereInput
    orderBy?: CompanyAdminOrderByWithAggregationInput | CompanyAdminOrderByWithAggregationInput[]
    by: CompanyAdminScalarFieldEnum[] | CompanyAdminScalarFieldEnum
    having?: CompanyAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyAdminCountAggregateInputType | true
    _min?: CompanyAdminMinAggregateInputType
    _max?: CompanyAdminMaxAggregateInputType
  }

  export type CompanyAdminGroupByOutputType = {
    id: string
    role: string
    companyId: string
    userId: string
    _count: CompanyAdminCountAggregateOutputType | null
    _min: CompanyAdminMinAggregateOutputType | null
    _max: CompanyAdminMaxAggregateOutputType | null
  }

  type GetCompanyAdminGroupByPayload<T extends CompanyAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyAdminGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyAdminGroupByOutputType[P]>
        }
      >
    >


  export type CompanyAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    companyId?: boolean
    userId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyAdmin"]>



  export type CompanyAdminSelectScalar = {
    id?: boolean
    role?: boolean
    companyId?: boolean
    userId?: boolean
  }

  export type CompanyAdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "companyId" | "userId", ExtArgs["result"]["companyAdmin"]>
  export type CompanyAdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompanyAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyAdmin"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      companyId: string
      userId: string
    }, ExtArgs["result"]["companyAdmin"]>
    composites: {}
  }

  type CompanyAdminGetPayload<S extends boolean | null | undefined | CompanyAdminDefaultArgs> = $Result.GetResult<Prisma.$CompanyAdminPayload, S>

  type CompanyAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyAdminCountAggregateInputType | true
    }

  export interface CompanyAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyAdmin'], meta: { name: 'CompanyAdmin' } }
    /**
     * Find zero or one CompanyAdmin that matches the filter.
     * @param {CompanyAdminFindUniqueArgs} args - Arguments to find a CompanyAdmin
     * @example
     * // Get one CompanyAdmin
     * const companyAdmin = await prisma.companyAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyAdminFindUniqueArgs>(args: SelectSubset<T, CompanyAdminFindUniqueArgs<ExtArgs>>): Prisma__CompanyAdminClient<$Result.GetResult<Prisma.$CompanyAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyAdmin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyAdminFindUniqueOrThrowArgs} args - Arguments to find a CompanyAdmin
     * @example
     * // Get one CompanyAdmin
     * const companyAdmin = await prisma.companyAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyAdminClient<$Result.GetResult<Prisma.$CompanyAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAdminFindFirstArgs} args - Arguments to find a CompanyAdmin
     * @example
     * // Get one CompanyAdmin
     * const companyAdmin = await prisma.companyAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyAdminFindFirstArgs>(args?: SelectSubset<T, CompanyAdminFindFirstArgs<ExtArgs>>): Prisma__CompanyAdminClient<$Result.GetResult<Prisma.$CompanyAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAdminFindFirstOrThrowArgs} args - Arguments to find a CompanyAdmin
     * @example
     * // Get one CompanyAdmin
     * const companyAdmin = await prisma.companyAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyAdminClient<$Result.GetResult<Prisma.$CompanyAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyAdmins
     * const companyAdmins = await prisma.companyAdmin.findMany()
     * 
     * // Get first 10 CompanyAdmins
     * const companyAdmins = await prisma.companyAdmin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyAdminWithIdOnly = await prisma.companyAdmin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyAdminFindManyArgs>(args?: SelectSubset<T, CompanyAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyAdmin.
     * @param {CompanyAdminCreateArgs} args - Arguments to create a CompanyAdmin.
     * @example
     * // Create one CompanyAdmin
     * const CompanyAdmin = await prisma.companyAdmin.create({
     *   data: {
     *     // ... data to create a CompanyAdmin
     *   }
     * })
     * 
     */
    create<T extends CompanyAdminCreateArgs>(args: SelectSubset<T, CompanyAdminCreateArgs<ExtArgs>>): Prisma__CompanyAdminClient<$Result.GetResult<Prisma.$CompanyAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyAdmins.
     * @param {CompanyAdminCreateManyArgs} args - Arguments to create many CompanyAdmins.
     * @example
     * // Create many CompanyAdmins
     * const companyAdmin = await prisma.companyAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyAdminCreateManyArgs>(args?: SelectSubset<T, CompanyAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CompanyAdmin.
     * @param {CompanyAdminDeleteArgs} args - Arguments to delete one CompanyAdmin.
     * @example
     * // Delete one CompanyAdmin
     * const CompanyAdmin = await prisma.companyAdmin.delete({
     *   where: {
     *     // ... filter to delete one CompanyAdmin
     *   }
     * })
     * 
     */
    delete<T extends CompanyAdminDeleteArgs>(args: SelectSubset<T, CompanyAdminDeleteArgs<ExtArgs>>): Prisma__CompanyAdminClient<$Result.GetResult<Prisma.$CompanyAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyAdmin.
     * @param {CompanyAdminUpdateArgs} args - Arguments to update one CompanyAdmin.
     * @example
     * // Update one CompanyAdmin
     * const companyAdmin = await prisma.companyAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyAdminUpdateArgs>(args: SelectSubset<T, CompanyAdminUpdateArgs<ExtArgs>>): Prisma__CompanyAdminClient<$Result.GetResult<Prisma.$CompanyAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyAdmins.
     * @param {CompanyAdminDeleteManyArgs} args - Arguments to filter CompanyAdmins to delete.
     * @example
     * // Delete a few CompanyAdmins
     * const { count } = await prisma.companyAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyAdminDeleteManyArgs>(args?: SelectSubset<T, CompanyAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyAdmins
     * const companyAdmin = await prisma.companyAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyAdminUpdateManyArgs>(args: SelectSubset<T, CompanyAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompanyAdmin.
     * @param {CompanyAdminUpsertArgs} args - Arguments to update or create a CompanyAdmin.
     * @example
     * // Update or create a CompanyAdmin
     * const companyAdmin = await prisma.companyAdmin.upsert({
     *   create: {
     *     // ... data to create a CompanyAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyAdmin we want to update
     *   }
     * })
     */
    upsert<T extends CompanyAdminUpsertArgs>(args: SelectSubset<T, CompanyAdminUpsertArgs<ExtArgs>>): Prisma__CompanyAdminClient<$Result.GetResult<Prisma.$CompanyAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAdminCountArgs} args - Arguments to filter CompanyAdmins to count.
     * @example
     * // Count the number of CompanyAdmins
     * const count = await prisma.companyAdmin.count({
     *   where: {
     *     // ... the filter for the CompanyAdmins we want to count
     *   }
     * })
    **/
    count<T extends CompanyAdminCountArgs>(
      args?: Subset<T, CompanyAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAdminAggregateArgs>(args: Subset<T, CompanyAdminAggregateArgs>): Prisma.PrismaPromise<GetCompanyAdminAggregateType<T>>

    /**
     * Group by CompanyAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyAdminGroupByArgs['orderBy'] }
        : { orderBy?: CompanyAdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyAdmin model
   */
  readonly fields: CompanyAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanyAdmin model
   */
  interface CompanyAdminFieldRefs {
    readonly id: FieldRef<"CompanyAdmin", 'String'>
    readonly role: FieldRef<"CompanyAdmin", 'String'>
    readonly companyId: FieldRef<"CompanyAdmin", 'String'>
    readonly userId: FieldRef<"CompanyAdmin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompanyAdmin findUnique
   */
  export type CompanyAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAdmin
     */
    select?: CompanyAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAdmin
     */
    omit?: CompanyAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAdminInclude<ExtArgs> | null
    /**
     * Filter, which CompanyAdmin to fetch.
     */
    where: CompanyAdminWhereUniqueInput
  }

  /**
   * CompanyAdmin findUniqueOrThrow
   */
  export type CompanyAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAdmin
     */
    select?: CompanyAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAdmin
     */
    omit?: CompanyAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAdminInclude<ExtArgs> | null
    /**
     * Filter, which CompanyAdmin to fetch.
     */
    where: CompanyAdminWhereUniqueInput
  }

  /**
   * CompanyAdmin findFirst
   */
  export type CompanyAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAdmin
     */
    select?: CompanyAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAdmin
     */
    omit?: CompanyAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAdminInclude<ExtArgs> | null
    /**
     * Filter, which CompanyAdmin to fetch.
     */
    where?: CompanyAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyAdmins to fetch.
     */
    orderBy?: CompanyAdminOrderByWithRelationInput | CompanyAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyAdmins.
     */
    cursor?: CompanyAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyAdmins.
     */
    distinct?: CompanyAdminScalarFieldEnum | CompanyAdminScalarFieldEnum[]
  }

  /**
   * CompanyAdmin findFirstOrThrow
   */
  export type CompanyAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAdmin
     */
    select?: CompanyAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAdmin
     */
    omit?: CompanyAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAdminInclude<ExtArgs> | null
    /**
     * Filter, which CompanyAdmin to fetch.
     */
    where?: CompanyAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyAdmins to fetch.
     */
    orderBy?: CompanyAdminOrderByWithRelationInput | CompanyAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyAdmins.
     */
    cursor?: CompanyAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyAdmins.
     */
    distinct?: CompanyAdminScalarFieldEnum | CompanyAdminScalarFieldEnum[]
  }

  /**
   * CompanyAdmin findMany
   */
  export type CompanyAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAdmin
     */
    select?: CompanyAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAdmin
     */
    omit?: CompanyAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAdminInclude<ExtArgs> | null
    /**
     * Filter, which CompanyAdmins to fetch.
     */
    where?: CompanyAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyAdmins to fetch.
     */
    orderBy?: CompanyAdminOrderByWithRelationInput | CompanyAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyAdmins.
     */
    cursor?: CompanyAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyAdmins.
     */
    skip?: number
    distinct?: CompanyAdminScalarFieldEnum | CompanyAdminScalarFieldEnum[]
  }

  /**
   * CompanyAdmin create
   */
  export type CompanyAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAdmin
     */
    select?: CompanyAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAdmin
     */
    omit?: CompanyAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAdminInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyAdmin.
     */
    data: XOR<CompanyAdminCreateInput, CompanyAdminUncheckedCreateInput>
  }

  /**
   * CompanyAdmin createMany
   */
  export type CompanyAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyAdmins.
     */
    data: CompanyAdminCreateManyInput | CompanyAdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyAdmin update
   */
  export type CompanyAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAdmin
     */
    select?: CompanyAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAdmin
     */
    omit?: CompanyAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAdminInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyAdmin.
     */
    data: XOR<CompanyAdminUpdateInput, CompanyAdminUncheckedUpdateInput>
    /**
     * Choose, which CompanyAdmin to update.
     */
    where: CompanyAdminWhereUniqueInput
  }

  /**
   * CompanyAdmin updateMany
   */
  export type CompanyAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyAdmins.
     */
    data: XOR<CompanyAdminUpdateManyMutationInput, CompanyAdminUncheckedUpdateManyInput>
    /**
     * Filter which CompanyAdmins to update
     */
    where?: CompanyAdminWhereInput
    /**
     * Limit how many CompanyAdmins to update.
     */
    limit?: number
  }

  /**
   * CompanyAdmin upsert
   */
  export type CompanyAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAdmin
     */
    select?: CompanyAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAdmin
     */
    omit?: CompanyAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAdminInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyAdmin to update in case it exists.
     */
    where: CompanyAdminWhereUniqueInput
    /**
     * In case the CompanyAdmin found by the `where` argument doesn't exist, create a new CompanyAdmin with this data.
     */
    create: XOR<CompanyAdminCreateInput, CompanyAdminUncheckedCreateInput>
    /**
     * In case the CompanyAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyAdminUpdateInput, CompanyAdminUncheckedUpdateInput>
  }

  /**
   * CompanyAdmin delete
   */
  export type CompanyAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAdmin
     */
    select?: CompanyAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAdmin
     */
    omit?: CompanyAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAdminInclude<ExtArgs> | null
    /**
     * Filter which CompanyAdmin to delete.
     */
    where: CompanyAdminWhereUniqueInput
  }

  /**
   * CompanyAdmin deleteMany
   */
  export type CompanyAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyAdmins to delete
     */
    where?: CompanyAdminWhereInput
    /**
     * Limit how many CompanyAdmins to delete.
     */
    limit?: number
  }

  /**
   * CompanyAdmin without action
   */
  export type CompanyAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyAdmin
     */
    select?: CompanyAdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyAdmin
     */
    omit?: CompanyAdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyAdminInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    level: number | null
  }

  export type SkillSumAggregateOutputType = {
    level: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    userId: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    userId: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    level: number
    userId: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    level?: true
  }

  export type SkillSumAggregateInputType = {
    level?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    level?: true
    userId?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    level?: true
    userId?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    level?: true
    userId?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    level: number
    userId: string
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>



  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    level?: boolean
    userId?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "level" | "userId", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      level: number
      userId: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly level: FieldRef<"Skill", 'Int'>
    readonly userId: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model Relation
   */

  export type AggregateRelation = {
    _count: RelationCountAggregateOutputType | null
    _min: RelationMinAggregateOutputType | null
    _max: RelationMaxAggregateOutputType | null
  }

  export type RelationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    status: boolean | null
    userId: string | null
    relationId: string | null
  }

  export type RelationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    status: boolean | null
    userId: string | null
    relationId: string | null
  }

  export type RelationCountAggregateOutputType = {
    id: number
    createdAt: number
    status: number
    userId: number
    relationId: number
    _all: number
  }


  export type RelationMinAggregateInputType = {
    id?: true
    createdAt?: true
    status?: true
    userId?: true
    relationId?: true
  }

  export type RelationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    status?: true
    userId?: true
    relationId?: true
  }

  export type RelationCountAggregateInputType = {
    id?: true
    createdAt?: true
    status?: true
    userId?: true
    relationId?: true
    _all?: true
  }

  export type RelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relation to aggregate.
     */
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Relations
    **/
    _count?: true | RelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelationMaxAggregateInputType
  }

  export type GetRelationAggregateType<T extends RelationAggregateArgs> = {
        [P in keyof T & keyof AggregateRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelation[P]>
      : GetScalarType<T[P], AggregateRelation[P]>
  }




  export type RelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationWhereInput
    orderBy?: RelationOrderByWithAggregationInput | RelationOrderByWithAggregationInput[]
    by: RelationScalarFieldEnum[] | RelationScalarFieldEnum
    having?: RelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelationCountAggregateInputType | true
    _min?: RelationMinAggregateInputType
    _max?: RelationMaxAggregateInputType
  }

  export type RelationGroupByOutputType = {
    id: string
    createdAt: Date
    status: boolean
    userId: string
    relationId: string
    _count: RelationCountAggregateOutputType | null
    _min: RelationMinAggregateOutputType | null
    _max: RelationMaxAggregateOutputType | null
  }

  type GetRelationGroupByPayload<T extends RelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelationGroupByOutputType[P]>
            : GetScalarType<T[P], RelationGroupByOutputType[P]>
        }
      >
    >


  export type RelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    status?: boolean
    userId?: boolean
    relationId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    relation?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relation"]>



  export type RelationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    status?: boolean
    userId?: boolean
    relationId?: boolean
  }

  export type RelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "status" | "userId" | "relationId", ExtArgs["result"]["relation"]>
  export type RelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    relation?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Relation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      relation: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      status: boolean
      userId: string
      relationId: string
    }, ExtArgs["result"]["relation"]>
    composites: {}
  }

  type RelationGetPayload<S extends boolean | null | undefined | RelationDefaultArgs> = $Result.GetResult<Prisma.$RelationPayload, S>

  type RelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelationCountAggregateInputType | true
    }

  export interface RelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Relation'], meta: { name: 'Relation' } }
    /**
     * Find zero or one Relation that matches the filter.
     * @param {RelationFindUniqueArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelationFindUniqueArgs>(args: SelectSubset<T, RelationFindUniqueArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Relation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelationFindUniqueOrThrowArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelationFindUniqueOrThrowArgs>(args: SelectSubset<T, RelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationFindFirstArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelationFindFirstArgs>(args?: SelectSubset<T, RelationFindFirstArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationFindFirstOrThrowArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelationFindFirstOrThrowArgs>(args?: SelectSubset<T, RelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Relations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relations
     * const relations = await prisma.relation.findMany()
     * 
     * // Get first 10 Relations
     * const relations = await prisma.relation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relationWithIdOnly = await prisma.relation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelationFindManyArgs>(args?: SelectSubset<T, RelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Relation.
     * @param {RelationCreateArgs} args - Arguments to create a Relation.
     * @example
     * // Create one Relation
     * const Relation = await prisma.relation.create({
     *   data: {
     *     // ... data to create a Relation
     *   }
     * })
     * 
     */
    create<T extends RelationCreateArgs>(args: SelectSubset<T, RelationCreateArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Relations.
     * @param {RelationCreateManyArgs} args - Arguments to create many Relations.
     * @example
     * // Create many Relations
     * const relation = await prisma.relation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelationCreateManyArgs>(args?: SelectSubset<T, RelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Relation.
     * @param {RelationDeleteArgs} args - Arguments to delete one Relation.
     * @example
     * // Delete one Relation
     * const Relation = await prisma.relation.delete({
     *   where: {
     *     // ... filter to delete one Relation
     *   }
     * })
     * 
     */
    delete<T extends RelationDeleteArgs>(args: SelectSubset<T, RelationDeleteArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Relation.
     * @param {RelationUpdateArgs} args - Arguments to update one Relation.
     * @example
     * // Update one Relation
     * const relation = await prisma.relation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelationUpdateArgs>(args: SelectSubset<T, RelationUpdateArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Relations.
     * @param {RelationDeleteManyArgs} args - Arguments to filter Relations to delete.
     * @example
     * // Delete a few Relations
     * const { count } = await prisma.relation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelationDeleteManyArgs>(args?: SelectSubset<T, RelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relations
     * const relation = await prisma.relation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelationUpdateManyArgs>(args: SelectSubset<T, RelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Relation.
     * @param {RelationUpsertArgs} args - Arguments to update or create a Relation.
     * @example
     * // Update or create a Relation
     * const relation = await prisma.relation.upsert({
     *   create: {
     *     // ... data to create a Relation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relation we want to update
     *   }
     * })
     */
    upsert<T extends RelationUpsertArgs>(args: SelectSubset<T, RelationUpsertArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationCountArgs} args - Arguments to filter Relations to count.
     * @example
     * // Count the number of Relations
     * const count = await prisma.relation.count({
     *   where: {
     *     // ... the filter for the Relations we want to count
     *   }
     * })
    **/
    count<T extends RelationCountArgs>(
      args?: Subset<T, RelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RelationAggregateArgs>(args: Subset<T, RelationAggregateArgs>): Prisma.PrismaPromise<GetRelationAggregateType<T>>

    /**
     * Group by Relation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelationGroupByArgs['orderBy'] }
        : { orderBy?: RelationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Relation model
   */
  readonly fields: RelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Relation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    relation<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Relation model
   */
  interface RelationFieldRefs {
    readonly id: FieldRef<"Relation", 'String'>
    readonly createdAt: FieldRef<"Relation", 'DateTime'>
    readonly status: FieldRef<"Relation", 'Boolean'>
    readonly userId: FieldRef<"Relation", 'String'>
    readonly relationId: FieldRef<"Relation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Relation findUnique
   */
  export type RelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relation to fetch.
     */
    where: RelationWhereUniqueInput
  }

  /**
   * Relation findUniqueOrThrow
   */
  export type RelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relation to fetch.
     */
    where: RelationWhereUniqueInput
  }

  /**
   * Relation findFirst
   */
  export type RelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relation to fetch.
     */
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relations.
     */
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relations.
     */
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
  }

  /**
   * Relation findFirstOrThrow
   */
  export type RelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relation to fetch.
     */
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relations.
     */
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relations.
     */
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
  }

  /**
   * Relation findMany
   */
  export type RelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relations to fetch.
     */
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Relations.
     */
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
  }

  /**
   * Relation create
   */
  export type RelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * The data needed to create a Relation.
     */
    data: XOR<RelationCreateInput, RelationUncheckedCreateInput>
  }

  /**
   * Relation createMany
   */
  export type RelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Relations.
     */
    data: RelationCreateManyInput | RelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Relation update
   */
  export type RelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * The data needed to update a Relation.
     */
    data: XOR<RelationUpdateInput, RelationUncheckedUpdateInput>
    /**
     * Choose, which Relation to update.
     */
    where: RelationWhereUniqueInput
  }

  /**
   * Relation updateMany
   */
  export type RelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Relations.
     */
    data: XOR<RelationUpdateManyMutationInput, RelationUncheckedUpdateManyInput>
    /**
     * Filter which Relations to update
     */
    where?: RelationWhereInput
    /**
     * Limit how many Relations to update.
     */
    limit?: number
  }

  /**
   * Relation upsert
   */
  export type RelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * The filter to search for the Relation to update in case it exists.
     */
    where: RelationWhereUniqueInput
    /**
     * In case the Relation found by the `where` argument doesn't exist, create a new Relation with this data.
     */
    create: XOR<RelationCreateInput, RelationUncheckedCreateInput>
    /**
     * In case the Relation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelationUpdateInput, RelationUncheckedUpdateInput>
  }

  /**
   * Relation delete
   */
  export type RelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter which Relation to delete.
     */
    where: RelationWhereUniqueInput
  }

  /**
   * Relation deleteMany
   */
  export type RelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relations to delete
     */
    where?: RelationWhereInput
    /**
     * Limit how many Relations to delete.
     */
    limit?: number
  }

  /**
   * Relation without action
   */
  export type RelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
  }


  /**
   * Model ProfileShow
   */

  export type AggregateProfileShow = {
    _count: ProfileShowCountAggregateOutputType | null
    _min: ProfileShowMinAggregateOutputType | null
    _max: ProfileShowMaxAggregateOutputType | null
  }

  export type ProfileShowMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    idUser1: string | null
    idUser2: string | null
  }

  export type ProfileShowMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    idUser1: string | null
    idUser2: string | null
  }

  export type ProfileShowCountAggregateOutputType = {
    id: number
    createdAt: number
    idUser1: number
    idUser2: number
    _all: number
  }


  export type ProfileShowMinAggregateInputType = {
    id?: true
    createdAt?: true
    idUser1?: true
    idUser2?: true
  }

  export type ProfileShowMaxAggregateInputType = {
    id?: true
    createdAt?: true
    idUser1?: true
    idUser2?: true
  }

  export type ProfileShowCountAggregateInputType = {
    id?: true
    createdAt?: true
    idUser1?: true
    idUser2?: true
    _all?: true
  }

  export type ProfileShowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileShow to aggregate.
     */
    where?: ProfileShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileShows to fetch.
     */
    orderBy?: ProfileShowOrderByWithRelationInput | ProfileShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfileShows
    **/
    _count?: true | ProfileShowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileShowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileShowMaxAggregateInputType
  }

  export type GetProfileShowAggregateType<T extends ProfileShowAggregateArgs> = {
        [P in keyof T & keyof AggregateProfileShow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfileShow[P]>
      : GetScalarType<T[P], AggregateProfileShow[P]>
  }




  export type ProfileShowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileShowWhereInput
    orderBy?: ProfileShowOrderByWithAggregationInput | ProfileShowOrderByWithAggregationInput[]
    by: ProfileShowScalarFieldEnum[] | ProfileShowScalarFieldEnum
    having?: ProfileShowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileShowCountAggregateInputType | true
    _min?: ProfileShowMinAggregateInputType
    _max?: ProfileShowMaxAggregateInputType
  }

  export type ProfileShowGroupByOutputType = {
    id: string
    createdAt: Date
    idUser1: string
    idUser2: string
    _count: ProfileShowCountAggregateOutputType | null
    _min: ProfileShowMinAggregateOutputType | null
    _max: ProfileShowMaxAggregateOutputType | null
  }

  type GetProfileShowGroupByPayload<T extends ProfileShowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileShowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileShowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileShowGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileShowGroupByOutputType[P]>
        }
      >
    >


  export type ProfileShowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    idUser1?: boolean
    idUser2?: boolean
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profileShow"]>



  export type ProfileShowSelectScalar = {
    id?: boolean
    createdAt?: boolean
    idUser1?: boolean
    idUser2?: boolean
  }

  export type ProfileShowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "idUser1" | "idUser2", ExtArgs["result"]["profileShow"]>
  export type ProfileShowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user1?: boolean | UserDefaultArgs<ExtArgs>
    user2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfileShowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfileShow"
    objects: {
      user1: Prisma.$UserPayload<ExtArgs>
      user2: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      idUser1: string
      idUser2: string
    }, ExtArgs["result"]["profileShow"]>
    composites: {}
  }

  type ProfileShowGetPayload<S extends boolean | null | undefined | ProfileShowDefaultArgs> = $Result.GetResult<Prisma.$ProfileShowPayload, S>

  type ProfileShowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileShowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileShowCountAggregateInputType | true
    }

  export interface ProfileShowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfileShow'], meta: { name: 'ProfileShow' } }
    /**
     * Find zero or one ProfileShow that matches the filter.
     * @param {ProfileShowFindUniqueArgs} args - Arguments to find a ProfileShow
     * @example
     * // Get one ProfileShow
     * const profileShow = await prisma.profileShow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileShowFindUniqueArgs>(args: SelectSubset<T, ProfileShowFindUniqueArgs<ExtArgs>>): Prisma__ProfileShowClient<$Result.GetResult<Prisma.$ProfileShowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfileShow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileShowFindUniqueOrThrowArgs} args - Arguments to find a ProfileShow
     * @example
     * // Get one ProfileShow
     * const profileShow = await prisma.profileShow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileShowFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileShowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileShowClient<$Result.GetResult<Prisma.$ProfileShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileShow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileShowFindFirstArgs} args - Arguments to find a ProfileShow
     * @example
     * // Get one ProfileShow
     * const profileShow = await prisma.profileShow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileShowFindFirstArgs>(args?: SelectSubset<T, ProfileShowFindFirstArgs<ExtArgs>>): Prisma__ProfileShowClient<$Result.GetResult<Prisma.$ProfileShowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfileShow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileShowFindFirstOrThrowArgs} args - Arguments to find a ProfileShow
     * @example
     * // Get one ProfileShow
     * const profileShow = await prisma.profileShow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileShowFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileShowFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileShowClient<$Result.GetResult<Prisma.$ProfileShowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfileShows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileShowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfileShows
     * const profileShows = await prisma.profileShow.findMany()
     * 
     * // Get first 10 ProfileShows
     * const profileShows = await prisma.profileShow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileShowWithIdOnly = await prisma.profileShow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileShowFindManyArgs>(args?: SelectSubset<T, ProfileShowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfileShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfileShow.
     * @param {ProfileShowCreateArgs} args - Arguments to create a ProfileShow.
     * @example
     * // Create one ProfileShow
     * const ProfileShow = await prisma.profileShow.create({
     *   data: {
     *     // ... data to create a ProfileShow
     *   }
     * })
     * 
     */
    create<T extends ProfileShowCreateArgs>(args: SelectSubset<T, ProfileShowCreateArgs<ExtArgs>>): Prisma__ProfileShowClient<$Result.GetResult<Prisma.$ProfileShowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfileShows.
     * @param {ProfileShowCreateManyArgs} args - Arguments to create many ProfileShows.
     * @example
     * // Create many ProfileShows
     * const profileShow = await prisma.profileShow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileShowCreateManyArgs>(args?: SelectSubset<T, ProfileShowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProfileShow.
     * @param {ProfileShowDeleteArgs} args - Arguments to delete one ProfileShow.
     * @example
     * // Delete one ProfileShow
     * const ProfileShow = await prisma.profileShow.delete({
     *   where: {
     *     // ... filter to delete one ProfileShow
     *   }
     * })
     * 
     */
    delete<T extends ProfileShowDeleteArgs>(args: SelectSubset<T, ProfileShowDeleteArgs<ExtArgs>>): Prisma__ProfileShowClient<$Result.GetResult<Prisma.$ProfileShowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfileShow.
     * @param {ProfileShowUpdateArgs} args - Arguments to update one ProfileShow.
     * @example
     * // Update one ProfileShow
     * const profileShow = await prisma.profileShow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileShowUpdateArgs>(args: SelectSubset<T, ProfileShowUpdateArgs<ExtArgs>>): Prisma__ProfileShowClient<$Result.GetResult<Prisma.$ProfileShowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfileShows.
     * @param {ProfileShowDeleteManyArgs} args - Arguments to filter ProfileShows to delete.
     * @example
     * // Delete a few ProfileShows
     * const { count } = await prisma.profileShow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileShowDeleteManyArgs>(args?: SelectSubset<T, ProfileShowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfileShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileShowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfileShows
     * const profileShow = await prisma.profileShow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileShowUpdateManyArgs>(args: SelectSubset<T, ProfileShowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProfileShow.
     * @param {ProfileShowUpsertArgs} args - Arguments to update or create a ProfileShow.
     * @example
     * // Update or create a ProfileShow
     * const profileShow = await prisma.profileShow.upsert({
     *   create: {
     *     // ... data to create a ProfileShow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileShow we want to update
     *   }
     * })
     */
    upsert<T extends ProfileShowUpsertArgs>(args: SelectSubset<T, ProfileShowUpsertArgs<ExtArgs>>): Prisma__ProfileShowClient<$Result.GetResult<Prisma.$ProfileShowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfileShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileShowCountArgs} args - Arguments to filter ProfileShows to count.
     * @example
     * // Count the number of ProfileShows
     * const count = await prisma.profileShow.count({
     *   where: {
     *     // ... the filter for the ProfileShows we want to count
     *   }
     * })
    **/
    count<T extends ProfileShowCountArgs>(
      args?: Subset<T, ProfileShowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileShowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfileShow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileShowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileShowAggregateArgs>(args: Subset<T, ProfileShowAggregateArgs>): Prisma.PrismaPromise<GetProfileShowAggregateType<T>>

    /**
     * Group by ProfileShow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileShowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileShowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileShowGroupByArgs['orderBy'] }
        : { orderBy?: ProfileShowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileShowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileShowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfileShow model
   */
  readonly fields: ProfileShowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileShow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileShowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfileShow model
   */
  interface ProfileShowFieldRefs {
    readonly id: FieldRef<"ProfileShow", 'String'>
    readonly createdAt: FieldRef<"ProfileShow", 'DateTime'>
    readonly idUser1: FieldRef<"ProfileShow", 'String'>
    readonly idUser2: FieldRef<"ProfileShow", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProfileShow findUnique
   */
  export type ProfileShowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileShow
     */
    select?: ProfileShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileShow
     */
    omit?: ProfileShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileShowInclude<ExtArgs> | null
    /**
     * Filter, which ProfileShow to fetch.
     */
    where: ProfileShowWhereUniqueInput
  }

  /**
   * ProfileShow findUniqueOrThrow
   */
  export type ProfileShowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileShow
     */
    select?: ProfileShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileShow
     */
    omit?: ProfileShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileShowInclude<ExtArgs> | null
    /**
     * Filter, which ProfileShow to fetch.
     */
    where: ProfileShowWhereUniqueInput
  }

  /**
   * ProfileShow findFirst
   */
  export type ProfileShowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileShow
     */
    select?: ProfileShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileShow
     */
    omit?: ProfileShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileShowInclude<ExtArgs> | null
    /**
     * Filter, which ProfileShow to fetch.
     */
    where?: ProfileShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileShows to fetch.
     */
    orderBy?: ProfileShowOrderByWithRelationInput | ProfileShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileShows.
     */
    cursor?: ProfileShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileShows.
     */
    distinct?: ProfileShowScalarFieldEnum | ProfileShowScalarFieldEnum[]
  }

  /**
   * ProfileShow findFirstOrThrow
   */
  export type ProfileShowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileShow
     */
    select?: ProfileShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileShow
     */
    omit?: ProfileShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileShowInclude<ExtArgs> | null
    /**
     * Filter, which ProfileShow to fetch.
     */
    where?: ProfileShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileShows to fetch.
     */
    orderBy?: ProfileShowOrderByWithRelationInput | ProfileShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfileShows.
     */
    cursor?: ProfileShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfileShows.
     */
    distinct?: ProfileShowScalarFieldEnum | ProfileShowScalarFieldEnum[]
  }

  /**
   * ProfileShow findMany
   */
  export type ProfileShowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileShow
     */
    select?: ProfileShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileShow
     */
    omit?: ProfileShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileShowInclude<ExtArgs> | null
    /**
     * Filter, which ProfileShows to fetch.
     */
    where?: ProfileShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfileShows to fetch.
     */
    orderBy?: ProfileShowOrderByWithRelationInput | ProfileShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfileShows.
     */
    cursor?: ProfileShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfileShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfileShows.
     */
    skip?: number
    distinct?: ProfileShowScalarFieldEnum | ProfileShowScalarFieldEnum[]
  }

  /**
   * ProfileShow create
   */
  export type ProfileShowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileShow
     */
    select?: ProfileShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileShow
     */
    omit?: ProfileShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileShowInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfileShow.
     */
    data: XOR<ProfileShowCreateInput, ProfileShowUncheckedCreateInput>
  }

  /**
   * ProfileShow createMany
   */
  export type ProfileShowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfileShows.
     */
    data: ProfileShowCreateManyInput | ProfileShowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfileShow update
   */
  export type ProfileShowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileShow
     */
    select?: ProfileShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileShow
     */
    omit?: ProfileShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileShowInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfileShow.
     */
    data: XOR<ProfileShowUpdateInput, ProfileShowUncheckedUpdateInput>
    /**
     * Choose, which ProfileShow to update.
     */
    where: ProfileShowWhereUniqueInput
  }

  /**
   * ProfileShow updateMany
   */
  export type ProfileShowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfileShows.
     */
    data: XOR<ProfileShowUpdateManyMutationInput, ProfileShowUncheckedUpdateManyInput>
    /**
     * Filter which ProfileShows to update
     */
    where?: ProfileShowWhereInput
    /**
     * Limit how many ProfileShows to update.
     */
    limit?: number
  }

  /**
   * ProfileShow upsert
   */
  export type ProfileShowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileShow
     */
    select?: ProfileShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileShow
     */
    omit?: ProfileShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileShowInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfileShow to update in case it exists.
     */
    where: ProfileShowWhereUniqueInput
    /**
     * In case the ProfileShow found by the `where` argument doesn't exist, create a new ProfileShow with this data.
     */
    create: XOR<ProfileShowCreateInput, ProfileShowUncheckedCreateInput>
    /**
     * In case the ProfileShow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileShowUpdateInput, ProfileShowUncheckedUpdateInput>
  }

  /**
   * ProfileShow delete
   */
  export type ProfileShowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileShow
     */
    select?: ProfileShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileShow
     */
    omit?: ProfileShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileShowInclude<ExtArgs> | null
    /**
     * Filter which ProfileShow to delete.
     */
    where: ProfileShowWhereUniqueInput
  }

  /**
   * ProfileShow deleteMany
   */
  export type ProfileShowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfileShows to delete
     */
    where?: ProfileShowWhereInput
    /**
     * Limit how many ProfileShows to delete.
     */
    limit?: number
  }

  /**
   * ProfileShow without action
   */
  export type ProfileShowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileShow
     */
    select?: ProfileShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfileShow
     */
    omit?: ProfileShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileShowInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    espiresAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    espiresAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    espiresAt: number
    ipAddress: number
    userAgent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    espiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    espiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    espiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    espiresAt: Date
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    espiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    espiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "espiresAt" | "ipAddress" | "userAgent" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      espiresAt: Date
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly espiresAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    accountId: string | null
    providerId: string | null
    accessToken: string | null
    refreshToken: string | null
    accessTokenExpireAt: Date | null
    refreshTokenExpireAt: Date | null
    scope: string | null
    idToken: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    accountId: string | null
    providerId: string | null
    accessToken: string | null
    refreshToken: string | null
    accessTokenExpireAt: Date | null
    refreshTokenExpireAt: Date | null
    scope: string | null
    idToken: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    accountId: number
    providerId: number
    accessToken: number
    refreshToken: number
    accessTokenExpireAt: number
    refreshTokenExpireAt: number
    scope: number
    idToken: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    accessTokenExpireAt?: true
    refreshTokenExpireAt?: true
    scope?: true
    idToken?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    accessTokenExpireAt?: true
    refreshTokenExpireAt?: true
    scope?: true
    idToken?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    accessTokenExpireAt?: true
    refreshTokenExpireAt?: true
    scope?: true
    idToken?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    accountId: string
    providerId: string
    accessToken: string | null
    refreshToken: string | null
    accessTokenExpireAt: Date | null
    refreshTokenExpireAt: Date | null
    scope: string | null
    idToken: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpireAt?: boolean
    refreshTokenExpireAt?: boolean
    scope?: boolean
    idToken?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    accessTokenExpireAt?: boolean
    refreshTokenExpireAt?: boolean
    scope?: boolean
    idToken?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "accountId" | "providerId" | "accessToken" | "refreshToken" | "accessTokenExpireAt" | "refreshTokenExpireAt" | "scope" | "idToken" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      accountId: string
      providerId: string
      accessToken: string | null
      refreshToken: string | null
      accessTokenExpireAt: Date | null
      refreshTokenExpireAt: Date | null
      scope: string | null
      idToken: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpireAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpireAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>



  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    firstName: 'firstName',
    lastName: 'lastName',
    isRoot: 'isRoot',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    activity: 'activity',
    image: 'image',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const WriterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyId: 'companyId'
  };

  export type WriterScalarFieldEnum = (typeof WriterScalarFieldEnum)[keyof typeof WriterScalarFieldEnum]


  export const FormationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    description: 'description',
    companyId: 'companyId',
    userId: 'userId'
  };

  export type FormationScalarFieldEnum = (typeof FormationScalarFieldEnum)[keyof typeof FormationScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    description: 'description',
    companyId: 'companyId',
    userId: 'userId'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    content: 'content',
    reactionId: 'reactionId',
    writerId: 'writerId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    writerId: 'writerId',
    postId: 'postId'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    url: 'url',
    altText: 'altText',
    description: 'description',
    type: 'type',
    postId: 'postId'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    votes: 'votes',
    postId: 'postId',
    commentId: 'commentId',
    writerId: 'writerId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const CompanyAdminScalarFieldEnum: {
    id: 'id',
    role: 'role',
    companyId: 'companyId',
    userId: 'userId'
  };

  export type CompanyAdminScalarFieldEnum = (typeof CompanyAdminScalarFieldEnum)[keyof typeof CompanyAdminScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    level: 'level',
    userId: 'userId'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const RelationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    status: 'status',
    userId: 'userId',
    relationId: 'relationId'
  };

  export type RelationScalarFieldEnum = (typeof RelationScalarFieldEnum)[keyof typeof RelationScalarFieldEnum]


  export const ProfileShowScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    idUser1: 'idUser1',
    idUser2: 'idUser2'
  };

  export type ProfileShowScalarFieldEnum = (typeof ProfileShowScalarFieldEnum)[keyof typeof ProfileShowScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    espiresAt: 'espiresAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accountId: 'accountId',
    providerId: 'providerId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    accessTokenExpireAt: 'accessTokenExpireAt',
    refreshTokenExpireAt: 'refreshTokenExpireAt',
    scope: 'scope',
    idToken: 'idToken',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    firstName: 'firstName',
    lastName: 'lastName'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const CompanyOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    activity: 'activity',
    image: 'image',
    description: 'description'
  };

  export type CompanyOrderByRelevanceFieldEnum = (typeof CompanyOrderByRelevanceFieldEnum)[keyof typeof CompanyOrderByRelevanceFieldEnum]


  export const WriterOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyId: 'companyId'
  };

  export type WriterOrderByRelevanceFieldEnum = (typeof WriterOrderByRelevanceFieldEnum)[keyof typeof WriterOrderByRelevanceFieldEnum]


  export const formationOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    companyId: 'companyId',
    userId: 'userId'
  };

  export type formationOrderByRelevanceFieldEnum = (typeof formationOrderByRelevanceFieldEnum)[keyof typeof formationOrderByRelevanceFieldEnum]


  export const ExperienceOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    companyId: 'companyId',
    userId: 'userId'
  };

  export type ExperienceOrderByRelevanceFieldEnum = (typeof ExperienceOrderByRelevanceFieldEnum)[keyof typeof ExperienceOrderByRelevanceFieldEnum]


  export const PostOrderByRelevanceFieldEnum: {
    id: 'id',
    content: 'content',
    reactionId: 'reactionId',
    writerId: 'writerId'
  };

  export type PostOrderByRelevanceFieldEnum = (typeof PostOrderByRelevanceFieldEnum)[keyof typeof PostOrderByRelevanceFieldEnum]


  export const VoteOrderByRelevanceFieldEnum: {
    id: 'id',
    writerId: 'writerId',
    postId: 'postId'
  };

  export type VoteOrderByRelevanceFieldEnum = (typeof VoteOrderByRelevanceFieldEnum)[keyof typeof VoteOrderByRelevanceFieldEnum]


  export const MediaOrderByRelevanceFieldEnum: {
    id: 'id',
    nom: 'nom',
    url: 'url',
    altText: 'altText',
    description: 'description',
    type: 'type',
    postId: 'postId'
  };

  export type MediaOrderByRelevanceFieldEnum = (typeof MediaOrderByRelevanceFieldEnum)[keyof typeof MediaOrderByRelevanceFieldEnum]


  export const CommentOrderByRelevanceFieldEnum: {
    id: 'id',
    content: 'content',
    postId: 'postId',
    commentId: 'commentId',
    writerId: 'writerId'
  };

  export type CommentOrderByRelevanceFieldEnum = (typeof CommentOrderByRelevanceFieldEnum)[keyof typeof CommentOrderByRelevanceFieldEnum]


  export const CompanyAdminOrderByRelevanceFieldEnum: {
    id: 'id',
    role: 'role',
    companyId: 'companyId',
    userId: 'userId'
  };

  export type CompanyAdminOrderByRelevanceFieldEnum = (typeof CompanyAdminOrderByRelevanceFieldEnum)[keyof typeof CompanyAdminOrderByRelevanceFieldEnum]


  export const SkillOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type SkillOrderByRelevanceFieldEnum = (typeof SkillOrderByRelevanceFieldEnum)[keyof typeof SkillOrderByRelevanceFieldEnum]


  export const RelationOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    relationId: 'relationId'
  };

  export type RelationOrderByRelevanceFieldEnum = (typeof RelationOrderByRelevanceFieldEnum)[keyof typeof RelationOrderByRelevanceFieldEnum]


  export const ProfileShowOrderByRelevanceFieldEnum: {
    id: 'id',
    idUser1: 'idUser1',
    idUser2: 'idUser2'
  };

  export type ProfileShowOrderByRelevanceFieldEnum = (typeof ProfileShowOrderByRelevanceFieldEnum)[keyof typeof ProfileShowOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const AccountOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    accountId: 'accountId',
    providerId: 'providerId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    scope: 'scope',
    idToken: 'idToken',
    password: 'password'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const VerificationOrderByRelevanceFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value'
  };

  export type VerificationOrderByRelevanceFieldEnum = (typeof VerificationOrderByRelevanceFieldEnum)[keyof typeof VerificationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    isRoot?: BoolNullableFilter<"User"> | boolean | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    session?: SessionListRelationFilter
    account?: AccountListRelationFilter
    relations?: RelationListRelationFilter
    relatedBy?: RelationListRelationFilter
    ProfileShowAsUser1?: ProfileShowListRelationFilter
    ProfileShowAsUser2?: ProfileShowListRelationFilter
    skill?: SkillListRelationFilter
    companyAdmin?: CompanyAdminListRelationFilter
    formation?: FormationListRelationFilter
    Experience?: ExperienceListRelationFilter
    Writer?: WriterListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    isRoot?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    session?: SessionOrderByRelationAggregateInput
    account?: AccountOrderByRelationAggregateInput
    relations?: RelationOrderByRelationAggregateInput
    relatedBy?: RelationOrderByRelationAggregateInput
    ProfileShowAsUser1?: ProfileShowOrderByRelationAggregateInput
    ProfileShowAsUser2?: ProfileShowOrderByRelationAggregateInput
    skill?: SkillOrderByRelationAggregateInput
    companyAdmin?: CompanyAdminOrderByRelationAggregateInput
    formation?: formationOrderByRelationAggregateInput
    Experience?: ExperienceOrderByRelationAggregateInput
    Writer?: WriterOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    isRoot?: BoolNullableFilter<"User"> | boolean | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    session?: SessionListRelationFilter
    account?: AccountListRelationFilter
    relations?: RelationListRelationFilter
    relatedBy?: RelationListRelationFilter
    ProfileShowAsUser1?: ProfileShowListRelationFilter
    ProfileShowAsUser2?: ProfileShowListRelationFilter
    skill?: SkillListRelationFilter
    companyAdmin?: CompanyAdminListRelationFilter
    formation?: FormationListRelationFilter
    Experience?: ExperienceListRelationFilter
    Writer?: WriterListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    isRoot?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    isRoot?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    activity?: StringNullableFilter<"Company"> | string | null
    image?: StringNullableFilter<"Company"> | string | null
    description?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    companyAdmin?: CompanyAdminListRelationFilter
    formation?: FormationListRelationFilter
    Experience?: ExperienceListRelationFilter
    Writer?: WriterListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    activity?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    companyAdmin?: CompanyAdminOrderByRelationAggregateInput
    formation?: formationOrderByRelationAggregateInput
    Experience?: ExperienceOrderByRelationAggregateInput
    Writer?: WriterOrderByRelationAggregateInput
    _relevance?: CompanyOrderByRelevanceInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    activity?: StringNullableFilter<"Company"> | string | null
    image?: StringNullableFilter<"Company"> | string | null
    description?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    companyAdmin?: CompanyAdminListRelationFilter
    formation?: FormationListRelationFilter
    Experience?: ExperienceListRelationFilter
    Writer?: WriterListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    activity?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    activity?: StringNullableWithAggregatesFilter<"Company"> | string | null
    image?: StringNullableWithAggregatesFilter<"Company"> | string | null
    description?: StringNullableWithAggregatesFilter<"Company"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type WriterWhereInput = {
    AND?: WriterWhereInput | WriterWhereInput[]
    OR?: WriterWhereInput[]
    NOT?: WriterWhereInput | WriterWhereInput[]
    id?: StringFilter<"Writer"> | string
    userId?: StringNullableFilter<"Writer"> | string | null
    companyId?: StringNullableFilter<"Writer"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    Post?: PostListRelationFilter
    Vote?: VoteListRelationFilter
    Comment?: CommentListRelationFilter
  }

  export type WriterOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
    Post?: PostOrderByRelationAggregateInput
    Vote?: VoteOrderByRelationAggregateInput
    Comment?: CommentOrderByRelationAggregateInput
    _relevance?: WriterOrderByRelevanceInput
  }

  export type WriterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WriterWhereInput | WriterWhereInput[]
    OR?: WriterWhereInput[]
    NOT?: WriterWhereInput | WriterWhereInput[]
    userId?: StringNullableFilter<"Writer"> | string | null
    companyId?: StringNullableFilter<"Writer"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    Post?: PostListRelationFilter
    Vote?: VoteListRelationFilter
    Comment?: CommentListRelationFilter
  }, "id">

  export type WriterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    _count?: WriterCountOrderByAggregateInput
    _max?: WriterMaxOrderByAggregateInput
    _min?: WriterMinOrderByAggregateInput
  }

  export type WriterScalarWhereWithAggregatesInput = {
    AND?: WriterScalarWhereWithAggregatesInput | WriterScalarWhereWithAggregatesInput[]
    OR?: WriterScalarWhereWithAggregatesInput[]
    NOT?: WriterScalarWhereWithAggregatesInput | WriterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Writer"> | string
    userId?: StringNullableWithAggregatesFilter<"Writer"> | string | null
    companyId?: StringNullableWithAggregatesFilter<"Writer"> | string | null
  }

  export type formationWhereInput = {
    AND?: formationWhereInput | formationWhereInput[]
    OR?: formationWhereInput[]
    NOT?: formationWhereInput | formationWhereInput[]
    id?: StringFilter<"formation"> | string
    name?: StringFilter<"formation"> | string
    startDate?: DateTimeFilter<"formation"> | Date | string
    endDate?: DateTimeNullableFilter<"formation"> | Date | string | null
    description?: StringNullableFilter<"formation"> | string | null
    companyId?: StringNullableFilter<"formation"> | string | null
    userId?: StringFilter<"formation"> | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type formationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    userId?: SortOrder
    company?: CompanyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: formationOrderByRelevanceInput
  }

  export type formationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: formationWhereInput | formationWhereInput[]
    OR?: formationWhereInput[]
    NOT?: formationWhereInput | formationWhereInput[]
    name?: StringFilter<"formation"> | string
    startDate?: DateTimeFilter<"formation"> | Date | string
    endDate?: DateTimeNullableFilter<"formation"> | Date | string | null
    description?: StringNullableFilter<"formation"> | string | null
    companyId?: StringNullableFilter<"formation"> | string | null
    userId?: StringFilter<"formation"> | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type formationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: formationCountOrderByAggregateInput
    _max?: formationMaxOrderByAggregateInput
    _min?: formationMinOrderByAggregateInput
  }

  export type formationScalarWhereWithAggregatesInput = {
    AND?: formationScalarWhereWithAggregatesInput | formationScalarWhereWithAggregatesInput[]
    OR?: formationScalarWhereWithAggregatesInput[]
    NOT?: formationScalarWhereWithAggregatesInput | formationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"formation"> | string
    name?: StringWithAggregatesFilter<"formation"> | string
    startDate?: DateTimeWithAggregatesFilter<"formation"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"formation"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"formation"> | string | null
    companyId?: StringNullableWithAggregatesFilter<"formation"> | string | null
    userId?: StringWithAggregatesFilter<"formation"> | string
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: StringFilter<"Experience"> | string
    name?: StringFilter<"Experience"> | string
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    description?: StringNullableFilter<"Experience"> | string | null
    companyId?: StringNullableFilter<"Experience"> | string | null
    userId?: StringFilter<"Experience"> | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    userId?: SortOrder
    company?: CompanyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: ExperienceOrderByRelevanceInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    name?: StringFilter<"Experience"> | string
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    description?: StringNullableFilter<"Experience"> | string | null
    companyId?: StringNullableFilter<"Experience"> | string | null
    userId?: StringFilter<"Experience"> | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Experience"> | string
    name?: StringWithAggregatesFilter<"Experience"> | string
    startDate?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Experience"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"Experience"> | string | null
    companyId?: StringNullableWithAggregatesFilter<"Experience"> | string | null
    userId?: StringWithAggregatesFilter<"Experience"> | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    content?: StringFilter<"Post"> | string
    reactionId?: StringNullableFilter<"Post"> | string | null
    writerId?: StringFilter<"Post"> | string
    writer?: XOR<WriterScalarRelationFilter, WriterWhereInput>
    media?: MediaListRelationFilter
    Comment?: CommentListRelationFilter
    Vote?: VoteListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    reactionId?: SortOrderInput | SortOrder
    writerId?: SortOrder
    writer?: WriterOrderByWithRelationInput
    media?: MediaOrderByRelationAggregateInput
    Comment?: CommentOrderByRelationAggregateInput
    Vote?: VoteOrderByRelationAggregateInput
    _relevance?: PostOrderByRelevanceInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    createdAt?: DateTimeFilter<"Post"> | Date | string
    content?: StringFilter<"Post"> | string
    reactionId?: StringNullableFilter<"Post"> | string | null
    writerId?: StringFilter<"Post"> | string
    writer?: XOR<WriterScalarRelationFilter, WriterWhereInput>
    media?: MediaListRelationFilter
    Comment?: CommentListRelationFilter
    Vote?: VoteListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    reactionId?: SortOrderInput | SortOrder
    writerId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    content?: StringWithAggregatesFilter<"Post"> | string
    reactionId?: StringNullableWithAggregatesFilter<"Post"> | string | null
    writerId?: StringWithAggregatesFilter<"Post"> | string
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id?: StringFilter<"Vote"> | string
    writerId?: StringFilter<"Vote"> | string
    postId?: StringFilter<"Vote"> | string
    writer?: XOR<WriterScalarRelationFilter, WriterWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder
    writerId?: SortOrder
    postId?: SortOrder
    writer?: WriterOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
    _relevance?: VoteOrderByRelevanceInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    writerId?: StringFilter<"Vote"> | string
    postId?: StringFilter<"Vote"> | string
    writer?: XOR<WriterScalarRelationFilter, WriterWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
  }, "id">

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder
    writerId?: SortOrder
    postId?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vote"> | string
    writerId?: StringWithAggregatesFilter<"Vote"> | string
    postId?: StringWithAggregatesFilter<"Vote"> | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    nom?: StringNullableFilter<"Media"> | string | null
    url?: StringFilter<"Media"> | string
    altText?: StringNullableFilter<"Media"> | string | null
    description?: StringNullableFilter<"Media"> | string | null
    type?: StringNullableFilter<"Media"> | string | null
    postId?: StringFilter<"Media"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrderInput | SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    postId?: SortOrder
    post?: PostOrderByWithRelationInput
    _relevance?: MediaOrderByRelevanceInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    nom?: StringNullableFilter<"Media"> | string | null
    url?: StringFilter<"Media"> | string
    altText?: StringNullableFilter<"Media"> | string | null
    description?: StringNullableFilter<"Media"> | string | null
    type?: StringNullableFilter<"Media"> | string | null
    postId?: StringFilter<"Media"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrderInput | SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    postId?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    nom?: StringNullableWithAggregatesFilter<"Media"> | string | null
    url?: StringWithAggregatesFilter<"Media"> | string
    altText?: StringNullableWithAggregatesFilter<"Media"> | string | null
    description?: StringNullableWithAggregatesFilter<"Media"> | string | null
    type?: StringNullableWithAggregatesFilter<"Media"> | string | null
    postId?: StringWithAggregatesFilter<"Media"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    votes?: IntNullableFilter<"Comment"> | number | null
    postId?: StringNullableFilter<"Comment"> | string | null
    commentId?: StringNullableFilter<"Comment"> | string | null
    writerId?: StringFilter<"Comment"> | string
    writer?: XOR<WriterScalarRelationFilter, WriterWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    comment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    votes?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    writerId?: SortOrder
    writer?: WriterOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
    _relevance?: CommentOrderByRelevanceInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    votes?: IntNullableFilter<"Comment"> | number | null
    postId?: StringNullableFilter<"Comment"> | string | null
    commentId?: StringNullableFilter<"Comment"> | string | null
    writerId?: StringFilter<"Comment"> | string
    writer?: XOR<WriterScalarRelationFilter, WriterWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    comment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    votes?: SortOrderInput | SortOrder
    postId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    writerId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    votes?: IntNullableWithAggregatesFilter<"Comment"> | number | null
    postId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    commentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    writerId?: StringWithAggregatesFilter<"Comment"> | string
  }

  export type CompanyAdminWhereInput = {
    AND?: CompanyAdminWhereInput | CompanyAdminWhereInput[]
    OR?: CompanyAdminWhereInput[]
    NOT?: CompanyAdminWhereInput | CompanyAdminWhereInput[]
    id?: StringFilter<"CompanyAdmin"> | string
    role?: StringFilter<"CompanyAdmin"> | string
    companyId?: StringFilter<"CompanyAdmin"> | string
    userId?: StringFilter<"CompanyAdmin"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CompanyAdminOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
    company?: CompanyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: CompanyAdminOrderByRelevanceInput
  }

  export type CompanyAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyAdminWhereInput | CompanyAdminWhereInput[]
    OR?: CompanyAdminWhereInput[]
    NOT?: CompanyAdminWhereInput | CompanyAdminWhereInput[]
    role?: StringFilter<"CompanyAdmin"> | string
    companyId?: StringFilter<"CompanyAdmin"> | string
    userId?: StringFilter<"CompanyAdmin"> | string
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CompanyAdminOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
    _count?: CompanyAdminCountOrderByAggregateInput
    _max?: CompanyAdminMaxOrderByAggregateInput
    _min?: CompanyAdminMinOrderByAggregateInput
  }

  export type CompanyAdminScalarWhereWithAggregatesInput = {
    AND?: CompanyAdminScalarWhereWithAggregatesInput | CompanyAdminScalarWhereWithAggregatesInput[]
    OR?: CompanyAdminScalarWhereWithAggregatesInput[]
    NOT?: CompanyAdminScalarWhereWithAggregatesInput | CompanyAdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanyAdmin"> | string
    role?: StringWithAggregatesFilter<"CompanyAdmin"> | string
    companyId?: StringWithAggregatesFilter<"CompanyAdmin"> | string
    userId?: StringWithAggregatesFilter<"CompanyAdmin"> | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    level?: IntFilter<"Skill"> | number
    userId?: StringFilter<"Skill"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SkillOrderByRelevanceInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    name?: StringFilter<"Skill"> | string
    level?: IntFilter<"Skill"> | number
    userId?: StringFilter<"Skill"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    userId?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    level?: IntWithAggregatesFilter<"Skill"> | number
    userId?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type RelationWhereInput = {
    AND?: RelationWhereInput | RelationWhereInput[]
    OR?: RelationWhereInput[]
    NOT?: RelationWhereInput | RelationWhereInput[]
    id?: StringFilter<"Relation"> | string
    createdAt?: DateTimeFilter<"Relation"> | Date | string
    status?: BoolFilter<"Relation"> | boolean
    userId?: StringFilter<"Relation"> | string
    relationId?: StringFilter<"Relation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    relation?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RelationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    relationId?: SortOrder
    user?: UserOrderByWithRelationInput
    relation?: UserOrderByWithRelationInput
    _relevance?: RelationOrderByRelevanceInput
  }

  export type RelationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_relationId?: RelationUserIdRelationIdCompoundUniqueInput
    AND?: RelationWhereInput | RelationWhereInput[]
    OR?: RelationWhereInput[]
    NOT?: RelationWhereInput | RelationWhereInput[]
    createdAt?: DateTimeFilter<"Relation"> | Date | string
    status?: BoolFilter<"Relation"> | boolean
    userId?: StringFilter<"Relation"> | string
    relationId?: StringFilter<"Relation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    relation?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_relationId">

  export type RelationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    relationId?: SortOrder
    _count?: RelationCountOrderByAggregateInput
    _max?: RelationMaxOrderByAggregateInput
    _min?: RelationMinOrderByAggregateInput
  }

  export type RelationScalarWhereWithAggregatesInput = {
    AND?: RelationScalarWhereWithAggregatesInput | RelationScalarWhereWithAggregatesInput[]
    OR?: RelationScalarWhereWithAggregatesInput[]
    NOT?: RelationScalarWhereWithAggregatesInput | RelationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Relation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Relation"> | Date | string
    status?: BoolWithAggregatesFilter<"Relation"> | boolean
    userId?: StringWithAggregatesFilter<"Relation"> | string
    relationId?: StringWithAggregatesFilter<"Relation"> | string
  }

  export type ProfileShowWhereInput = {
    AND?: ProfileShowWhereInput | ProfileShowWhereInput[]
    OR?: ProfileShowWhereInput[]
    NOT?: ProfileShowWhereInput | ProfileShowWhereInput[]
    id?: StringFilter<"ProfileShow"> | string
    createdAt?: DateTimeFilter<"ProfileShow"> | Date | string
    idUser1?: StringFilter<"ProfileShow"> | string
    idUser2?: StringFilter<"ProfileShow"> | string
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileShowOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    idUser1?: SortOrder
    idUser2?: SortOrder
    user1?: UserOrderByWithRelationInput
    user2?: UserOrderByWithRelationInput
    _relevance?: ProfileShowOrderByRelevanceInput
  }

  export type ProfileShowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfileShowWhereInput | ProfileShowWhereInput[]
    OR?: ProfileShowWhereInput[]
    NOT?: ProfileShowWhereInput | ProfileShowWhereInput[]
    createdAt?: DateTimeFilter<"ProfileShow"> | Date | string
    idUser1?: StringFilter<"ProfileShow"> | string
    idUser2?: StringFilter<"ProfileShow"> | string
    user1?: XOR<UserScalarRelationFilter, UserWhereInput>
    user2?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProfileShowOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    idUser1?: SortOrder
    idUser2?: SortOrder
    _count?: ProfileShowCountOrderByAggregateInput
    _max?: ProfileShowMaxOrderByAggregateInput
    _min?: ProfileShowMinOrderByAggregateInput
  }

  export type ProfileShowScalarWhereWithAggregatesInput = {
    AND?: ProfileShowScalarWhereWithAggregatesInput | ProfileShowScalarWhereWithAggregatesInput[]
    OR?: ProfileShowScalarWhereWithAggregatesInput[]
    NOT?: ProfileShowScalarWhereWithAggregatesInput | ProfileShowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProfileShow"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProfileShow"> | Date | string
    idUser1?: StringWithAggregatesFilter<"ProfileShow"> | string
    idUser2?: StringWithAggregatesFilter<"ProfileShow"> | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    espiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    espiresAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    espiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    espiresAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    espiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpireAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpireAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessTokenExpireAt?: SortOrderInput | SortOrder
    refreshTokenExpireAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpireAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpireAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessTokenExpireAt?: SortOrderInput | SortOrder
    refreshTokenExpireAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpireAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpireAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: VerificationOrderByRelevanceInput
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    account?: AccountCreateNestedManyWithoutUserInput
    relations?: RelationCreateNestedManyWithoutUserInput
    relatedBy?: RelationCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowCreateNestedManyWithoutUser2Input
    skill?: SkillCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminCreateNestedManyWithoutUserInput
    formation?: formationCreateNestedManyWithoutUserInput
    Experience?: ExperienceCreateNestedManyWithoutUserInput
    Writer?: WriterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    account?: AccountUncheckedCreateNestedManyWithoutUserInput
    relations?: RelationUncheckedCreateNestedManyWithoutUserInput
    relatedBy?: RelationUncheckedCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowUncheckedCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowUncheckedCreateNestedManyWithoutUser2Input
    skill?: SkillUncheckedCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminUncheckedCreateNestedManyWithoutUserInput
    formation?: formationUncheckedCreateNestedManyWithoutUserInput
    Experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    Writer?: WriterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    account?: AccountUpdateManyWithoutUserNestedInput
    relations?: RelationUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUpdateManyWithoutUser2NestedInput
    skill?: SkillUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUpdateManyWithoutUserNestedInput
    formation?: formationUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUpdateManyWithoutUserNestedInput
    Writer?: WriterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    relations?: RelationUncheckedUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUncheckedUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUncheckedUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUncheckedUpdateManyWithoutUser2NestedInput
    skill?: SkillUncheckedUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUncheckedUpdateManyWithoutUserNestedInput
    formation?: formationUncheckedUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    Writer?: WriterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    activity?: string | null
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    companyAdmin?: CompanyAdminCreateNestedManyWithoutCompanyInput
    formation?: formationCreateNestedManyWithoutCompanyInput
    Experience?: ExperienceCreateNestedManyWithoutCompanyInput
    Writer?: WriterCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    activity?: string | null
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    companyAdmin?: CompanyAdminUncheckedCreateNestedManyWithoutCompanyInput
    formation?: formationUncheckedCreateNestedManyWithoutCompanyInput
    Experience?: ExperienceUncheckedCreateNestedManyWithoutCompanyInput
    Writer?: WriterUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyAdmin?: CompanyAdminUpdateManyWithoutCompanyNestedInput
    formation?: formationUpdateManyWithoutCompanyNestedInput
    Experience?: ExperienceUpdateManyWithoutCompanyNestedInput
    Writer?: WriterUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyAdmin?: CompanyAdminUncheckedUpdateManyWithoutCompanyNestedInput
    formation?: formationUncheckedUpdateManyWithoutCompanyNestedInput
    Experience?: ExperienceUncheckedUpdateManyWithoutCompanyNestedInput
    Writer?: WriterUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    activity?: string | null
    image?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WriterCreateInput = {
    id?: string
    user?: UserCreateNestedOneWithoutWriterInput
    company?: CompanyCreateNestedOneWithoutWriterInput
    Post?: PostCreateNestedManyWithoutWriterInput
    Vote?: VoteCreateNestedManyWithoutWriterInput
    Comment?: CommentCreateNestedManyWithoutWriterInput
  }

  export type WriterUncheckedCreateInput = {
    id?: string
    userId?: string | null
    companyId?: string | null
    Post?: PostUncheckedCreateNestedManyWithoutWriterInput
    Vote?: VoteUncheckedCreateNestedManyWithoutWriterInput
    Comment?: CommentUncheckedCreateNestedManyWithoutWriterInput
  }

  export type WriterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutWriterNestedInput
    company?: CompanyUpdateOneWithoutWriterNestedInput
    Post?: PostUpdateManyWithoutWriterNestedInput
    Vote?: VoteUpdateManyWithoutWriterNestedInput
    Comment?: CommentUpdateManyWithoutWriterNestedInput
  }

  export type WriterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    Post?: PostUncheckedUpdateManyWithoutWriterNestedInput
    Vote?: VoteUncheckedUpdateManyWithoutWriterNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutWriterNestedInput
  }

  export type WriterCreateManyInput = {
    id?: string
    userId?: string | null
    companyId?: string | null
  }

  export type WriterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type WriterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type formationCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    company?: CompanyCreateNestedOneWithoutFormationInput
    user: UserCreateNestedOneWithoutFormationInput
  }

  export type formationUncheckedCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    companyId?: string | null
    userId: string
  }

  export type formationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneWithoutFormationNestedInput
    user?: UserUpdateOneRequiredWithoutFormationNestedInput
  }

  export type formationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type formationCreateManyInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    companyId?: string | null
    userId: string
  }

  export type formationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type formationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    company?: CompanyCreateNestedOneWithoutExperienceInput
    user: UserCreateNestedOneWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    companyId?: string | null
    userId: string
  }

  export type ExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneWithoutExperienceNestedInput
    user?: UserUpdateOneRequiredWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateManyInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    companyId?: string | null
    userId: string
  }

  export type ExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reactionId?: string | null
    writer: WriterCreateNestedOneWithoutPostInput
    media?: MediaCreateNestedManyWithoutPostInput
    Comment?: CommentCreateNestedManyWithoutPostInput
    Vote?: VoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reactionId?: string | null
    writerId: string
    media?: MediaUncheckedCreateNestedManyWithoutPostInput
    Comment?: CommentUncheckedCreateNestedManyWithoutPostInput
    Vote?: VoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reactionId?: NullableStringFieldUpdateOperationsInput | string | null
    writer?: WriterUpdateOneRequiredWithoutPostNestedInput
    media?: MediaUpdateManyWithoutPostNestedInput
    Comment?: CommentUpdateManyWithoutPostNestedInput
    Vote?: VoteUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reactionId?: NullableStringFieldUpdateOperationsInput | string | null
    writerId?: StringFieldUpdateOperationsInput | string
    media?: MediaUncheckedUpdateManyWithoutPostNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutPostNestedInput
    Vote?: VoteUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reactionId?: string | null
    writerId: string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reactionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reactionId?: NullableStringFieldUpdateOperationsInput | string | null
    writerId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteCreateInput = {
    id?: string
    writer: WriterCreateNestedOneWithoutVoteInput
    post?: PostCreateNestedOneWithoutVoteInput
  }

  export type VoteUncheckedCreateInput = {
    id?: string
    writerId: string
    postId: string
  }

  export type VoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    writer?: WriterUpdateOneRequiredWithoutVoteNestedInput
    post?: PostUpdateOneWithoutVoteNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    writerId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteCreateManyInput = {
    id?: string
    writerId: string
    postId: string
  }

  export type VoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    writerId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type MediaCreateInput = {
    id?: string
    nom?: string | null
    url: string
    altText?: string | null
    description?: string | null
    type?: string | null
    post: PostCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    nom?: string | null
    url: string
    altText?: string | null
    description?: string | null
    type?: string | null
    postId: string
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    post?: PostUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type MediaCreateManyInput = {
    id?: string
    nom?: string | null
    url: string
    altText?: string | null
    description?: string | null
    type?: string | null
    postId: string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    votes?: number | null
    writer: WriterCreateNestedOneWithoutCommentInput
    post?: PostCreateNestedOneWithoutCommentInput
    comment?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    votes?: number | null
    postId?: string | null
    commentId?: string | null
    writerId: string
    replies?: CommentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    writer?: WriterUpdateOneRequiredWithoutCommentNestedInput
    post?: PostUpdateOneWithoutCommentNestedInput
    comment?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    writerId?: StringFieldUpdateOperationsInput | string
    replies?: CommentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    votes?: number | null
    postId?: string | null
    commentId?: string | null
    writerId: string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    writerId?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyAdminCreateInput = {
    id?: string
    role: string
    company: CompanyCreateNestedOneWithoutCompanyAdminInput
    user: UserCreateNestedOneWithoutCompanyAdminInput
  }

  export type CompanyAdminUncheckedCreateInput = {
    id?: string
    role: string
    companyId: string
    userId: string
  }

  export type CompanyAdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    company?: CompanyUpdateOneRequiredWithoutCompanyAdminNestedInput
    user?: UserUpdateOneRequiredWithoutCompanyAdminNestedInput
  }

  export type CompanyAdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyAdminCreateManyInput = {
    id?: string
    role: string
    companyId: string
    userId: string
  }

  export type CompanyAdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyAdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    level: number
    user: UserCreateNestedOneWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    level: number
    userId: string
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
    level: number
    userId: string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RelationCreateInput = {
    id?: string
    createdAt?: Date | string
    status: boolean
    user: UserCreateNestedOneWithoutRelationsInput
    relation: UserCreateNestedOneWithoutRelatedByInput
  }

  export type RelationUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    status: boolean
    userId: string
    relationId: string
  }

  export type RelationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutRelationsNestedInput
    relation?: UserUpdateOneRequiredWithoutRelatedByNestedInput
  }

  export type RelationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    relationId?: StringFieldUpdateOperationsInput | string
  }

  export type RelationCreateManyInput = {
    id?: string
    createdAt?: Date | string
    status: boolean
    userId: string
    relationId: string
  }

  export type RelationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RelationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    relationId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileShowCreateInput = {
    id?: string
    createdAt?: Date | string
    user1: UserCreateNestedOneWithoutProfileShowAsUser1Input
    user2: UserCreateNestedOneWithoutProfileShowAsUser2Input
  }

  export type ProfileShowUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    idUser1: string
    idUser2: string
  }

  export type ProfileShowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutProfileShowAsUser1NestedInput
    user2?: UserUpdateOneRequiredWithoutProfileShowAsUser2NestedInput
  }

  export type ProfileShowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser1?: StringFieldUpdateOperationsInput | string
    idUser2?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileShowCreateManyInput = {
    id?: string
    createdAt?: Date | string
    idUser1: string
    idUser2: string
  }

  export type ProfileShowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileShowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser1?: StringFieldUpdateOperationsInput | string
    idUser2?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    espiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    espiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    espiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    espiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    espiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    espiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    espiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpireAt?: Date | string | null
    refreshTokenExpireAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpireAt?: Date | string | null
    refreshTokenExpireAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpireAt?: Date | string | null
    refreshTokenExpireAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id?: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type RelationListRelationFilter = {
    every?: RelationWhereInput
    some?: RelationWhereInput
    none?: RelationWhereInput
  }

  export type ProfileShowListRelationFilter = {
    every?: ProfileShowWhereInput
    some?: ProfileShowWhereInput
    none?: ProfileShowWhereInput
  }

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type CompanyAdminListRelationFilter = {
    every?: CompanyAdminWhereInput
    some?: CompanyAdminWhereInput
    none?: CompanyAdminWhereInput
  }

  export type FormationListRelationFilter = {
    every?: formationWhereInput
    some?: formationWhereInput
    none?: formationWhereInput
  }

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput
    some?: ExperienceWhereInput
    none?: ExperienceWhereInput
  }

  export type WriterListRelationFilter = {
    every?: WriterWhereInput
    some?: WriterWhereInput
    none?: WriterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileShowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyAdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type formationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WriterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isRoot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isRoot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    isRoot?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CompanyOrderByRelevanceInput = {
    fields: CompanyOrderByRelevanceFieldEnum | CompanyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    activity?: SortOrder
    image?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    activity?: SortOrder
    image?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    activity?: SortOrder
    image?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WriterOrderByRelevanceInput = {
    fields: WriterOrderByRelevanceFieldEnum | WriterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WriterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
  }

  export type WriterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
  }

  export type WriterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type formationOrderByRelevanceInput = {
    fields: formationOrderByRelevanceFieldEnum | formationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type formationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
  }

  export type formationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
  }

  export type formationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ExperienceOrderByRelevanceInput = {
    fields: ExperienceOrderByRelevanceFieldEnum | ExperienceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
  }

  export type WriterScalarRelationFilter = {
    is?: WriterWhereInput
    isNot?: WriterWhereInput
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelevanceInput = {
    fields: PostOrderByRelevanceFieldEnum | PostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    reactionId?: SortOrder
    writerId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    reactionId?: SortOrder
    writerId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    reactionId?: SortOrder
    writerId?: SortOrder
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type VoteOrderByRelevanceInput = {
    fields: VoteOrderByRelevanceFieldEnum | VoteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder
    writerId?: SortOrder
    postId?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder
    writerId?: SortOrder
    postId?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder
    writerId?: SortOrder
    postId?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type MediaOrderByRelevanceInput = {
    fields: MediaOrderByRelevanceFieldEnum | MediaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    description?: SortOrder
    type?: SortOrder
    postId?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    description?: SortOrder
    type?: SortOrder
    postId?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    description?: SortOrder
    type?: SortOrder
    postId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentOrderByRelevanceInput = {
    fields: CommentOrderByRelevanceFieldEnum | CommentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    votes?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
    writerId?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    votes?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    votes?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
    writerId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    votes?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
    writerId?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    votes?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type CompanyAdminOrderByRelevanceInput = {
    fields: CompanyAdminOrderByRelevanceFieldEnum | CompanyAdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CompanyAdminCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
  }

  export type CompanyAdminMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
  }

  export type CompanyAdminMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    companyId?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SkillOrderByRelevanceInput = {
    fields: SkillOrderByRelevanceFieldEnum | SkillOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    userId?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    userId?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    userId?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    level?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type RelationOrderByRelevanceInput = {
    fields: RelationOrderByRelevanceFieldEnum | RelationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RelationUserIdRelationIdCompoundUniqueInput = {
    userId: string
    relationId: string
  }

  export type RelationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    relationId?: SortOrder
  }

  export type RelationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    relationId?: SortOrder
  }

  export type RelationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    relationId?: SortOrder
  }

  export type ProfileShowOrderByRelevanceInput = {
    fields: ProfileShowOrderByRelevanceFieldEnum | ProfileShowOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProfileShowCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    idUser1?: SortOrder
    idUser2?: SortOrder
  }

  export type ProfileShowMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    idUser1?: SortOrder
    idUser2?: SortOrder
  }

  export type ProfileShowMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    idUser1?: SortOrder
    idUser2?: SortOrder
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    espiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    espiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    espiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    accessTokenExpireAt?: SortOrder
    refreshTokenExpireAt?: SortOrder
    scope?: SortOrder
    idToken?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    accessTokenExpireAt?: SortOrder
    refreshTokenExpireAt?: SortOrder
    scope?: SortOrder
    idToken?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    accessTokenExpireAt?: SortOrder
    refreshTokenExpireAt?: SortOrder
    scope?: SortOrder
    idToken?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationOrderByRelevanceInput = {
    fields: VerificationOrderByRelevanceFieldEnum | VerificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type RelationCreateNestedManyWithoutUserInput = {
    create?: XOR<RelationCreateWithoutUserInput, RelationUncheckedCreateWithoutUserInput> | RelationCreateWithoutUserInput[] | RelationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutUserInput | RelationCreateOrConnectWithoutUserInput[]
    createMany?: RelationCreateManyUserInputEnvelope
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
  }

  export type RelationCreateNestedManyWithoutRelationInput = {
    create?: XOR<RelationCreateWithoutRelationInput, RelationUncheckedCreateWithoutRelationInput> | RelationCreateWithoutRelationInput[] | RelationUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutRelationInput | RelationCreateOrConnectWithoutRelationInput[]
    createMany?: RelationCreateManyRelationInputEnvelope
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
  }

  export type ProfileShowCreateNestedManyWithoutUser1Input = {
    create?: XOR<ProfileShowCreateWithoutUser1Input, ProfileShowUncheckedCreateWithoutUser1Input> | ProfileShowCreateWithoutUser1Input[] | ProfileShowUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ProfileShowCreateOrConnectWithoutUser1Input | ProfileShowCreateOrConnectWithoutUser1Input[]
    createMany?: ProfileShowCreateManyUser1InputEnvelope
    connect?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
  }

  export type ProfileShowCreateNestedManyWithoutUser2Input = {
    create?: XOR<ProfileShowCreateWithoutUser2Input, ProfileShowUncheckedCreateWithoutUser2Input> | ProfileShowCreateWithoutUser2Input[] | ProfileShowUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ProfileShowCreateOrConnectWithoutUser2Input | ProfileShowCreateOrConnectWithoutUser2Input[]
    createMany?: ProfileShowCreateManyUser2InputEnvelope
    connect?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
  }

  export type SkillCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type CompanyAdminCreateNestedManyWithoutUserInput = {
    create?: XOR<CompanyAdminCreateWithoutUserInput, CompanyAdminUncheckedCreateWithoutUserInput> | CompanyAdminCreateWithoutUserInput[] | CompanyAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyAdminCreateOrConnectWithoutUserInput | CompanyAdminCreateOrConnectWithoutUserInput[]
    createMany?: CompanyAdminCreateManyUserInputEnvelope
    connect?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
  }

  export type formationCreateNestedManyWithoutUserInput = {
    create?: XOR<formationCreateWithoutUserInput, formationUncheckedCreateWithoutUserInput> | formationCreateWithoutUserInput[] | formationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: formationCreateOrConnectWithoutUserInput | formationCreateOrConnectWithoutUserInput[]
    createMany?: formationCreateManyUserInputEnvelope
    connect?: formationWhereUniqueInput | formationWhereUniqueInput[]
  }

  export type ExperienceCreateNestedManyWithoutUserInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type WriterCreateNestedManyWithoutUserInput = {
    create?: XOR<WriterCreateWithoutUserInput, WriterUncheckedCreateWithoutUserInput> | WriterCreateWithoutUserInput[] | WriterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WriterCreateOrConnectWithoutUserInput | WriterCreateOrConnectWithoutUserInput[]
    createMany?: WriterCreateManyUserInputEnvelope
    connect?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type RelationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RelationCreateWithoutUserInput, RelationUncheckedCreateWithoutUserInput> | RelationCreateWithoutUserInput[] | RelationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutUserInput | RelationCreateOrConnectWithoutUserInput[]
    createMany?: RelationCreateManyUserInputEnvelope
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
  }

  export type RelationUncheckedCreateNestedManyWithoutRelationInput = {
    create?: XOR<RelationCreateWithoutRelationInput, RelationUncheckedCreateWithoutRelationInput> | RelationCreateWithoutRelationInput[] | RelationUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutRelationInput | RelationCreateOrConnectWithoutRelationInput[]
    createMany?: RelationCreateManyRelationInputEnvelope
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
  }

  export type ProfileShowUncheckedCreateNestedManyWithoutUser1Input = {
    create?: XOR<ProfileShowCreateWithoutUser1Input, ProfileShowUncheckedCreateWithoutUser1Input> | ProfileShowCreateWithoutUser1Input[] | ProfileShowUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ProfileShowCreateOrConnectWithoutUser1Input | ProfileShowCreateOrConnectWithoutUser1Input[]
    createMany?: ProfileShowCreateManyUser1InputEnvelope
    connect?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
  }

  export type ProfileShowUncheckedCreateNestedManyWithoutUser2Input = {
    create?: XOR<ProfileShowCreateWithoutUser2Input, ProfileShowUncheckedCreateWithoutUser2Input> | ProfileShowCreateWithoutUser2Input[] | ProfileShowUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ProfileShowCreateOrConnectWithoutUser2Input | ProfileShowCreateOrConnectWithoutUser2Input[]
    createMany?: ProfileShowCreateManyUser2InputEnvelope
    connect?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type CompanyAdminUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompanyAdminCreateWithoutUserInput, CompanyAdminUncheckedCreateWithoutUserInput> | CompanyAdminCreateWithoutUserInput[] | CompanyAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyAdminCreateOrConnectWithoutUserInput | CompanyAdminCreateOrConnectWithoutUserInput[]
    createMany?: CompanyAdminCreateManyUserInputEnvelope
    connect?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
  }

  export type formationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<formationCreateWithoutUserInput, formationUncheckedCreateWithoutUserInput> | formationCreateWithoutUserInput[] | formationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: formationCreateOrConnectWithoutUserInput | formationCreateOrConnectWithoutUserInput[]
    createMany?: formationCreateManyUserInputEnvelope
    connect?: formationWhereUniqueInput | formationWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type WriterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WriterCreateWithoutUserInput, WriterUncheckedCreateWithoutUserInput> | WriterCreateWithoutUserInput[] | WriterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WriterCreateOrConnectWithoutUserInput | WriterCreateOrConnectWithoutUserInput[]
    createMany?: WriterCreateManyUserInputEnvelope
    connect?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type RelationUpdateManyWithoutUserNestedInput = {
    create?: XOR<RelationCreateWithoutUserInput, RelationUncheckedCreateWithoutUserInput> | RelationCreateWithoutUserInput[] | RelationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutUserInput | RelationCreateOrConnectWithoutUserInput[]
    upsert?: RelationUpsertWithWhereUniqueWithoutUserInput | RelationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RelationCreateManyUserInputEnvelope
    set?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    disconnect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    delete?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    update?: RelationUpdateWithWhereUniqueWithoutUserInput | RelationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RelationUpdateManyWithWhereWithoutUserInput | RelationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RelationScalarWhereInput | RelationScalarWhereInput[]
  }

  export type RelationUpdateManyWithoutRelationNestedInput = {
    create?: XOR<RelationCreateWithoutRelationInput, RelationUncheckedCreateWithoutRelationInput> | RelationCreateWithoutRelationInput[] | RelationUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutRelationInput | RelationCreateOrConnectWithoutRelationInput[]
    upsert?: RelationUpsertWithWhereUniqueWithoutRelationInput | RelationUpsertWithWhereUniqueWithoutRelationInput[]
    createMany?: RelationCreateManyRelationInputEnvelope
    set?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    disconnect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    delete?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    update?: RelationUpdateWithWhereUniqueWithoutRelationInput | RelationUpdateWithWhereUniqueWithoutRelationInput[]
    updateMany?: RelationUpdateManyWithWhereWithoutRelationInput | RelationUpdateManyWithWhereWithoutRelationInput[]
    deleteMany?: RelationScalarWhereInput | RelationScalarWhereInput[]
  }

  export type ProfileShowUpdateManyWithoutUser1NestedInput = {
    create?: XOR<ProfileShowCreateWithoutUser1Input, ProfileShowUncheckedCreateWithoutUser1Input> | ProfileShowCreateWithoutUser1Input[] | ProfileShowUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ProfileShowCreateOrConnectWithoutUser1Input | ProfileShowCreateOrConnectWithoutUser1Input[]
    upsert?: ProfileShowUpsertWithWhereUniqueWithoutUser1Input | ProfileShowUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: ProfileShowCreateManyUser1InputEnvelope
    set?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
    disconnect?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
    delete?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
    connect?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
    update?: ProfileShowUpdateWithWhereUniqueWithoutUser1Input | ProfileShowUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: ProfileShowUpdateManyWithWhereWithoutUser1Input | ProfileShowUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: ProfileShowScalarWhereInput | ProfileShowScalarWhereInput[]
  }

  export type ProfileShowUpdateManyWithoutUser2NestedInput = {
    create?: XOR<ProfileShowCreateWithoutUser2Input, ProfileShowUncheckedCreateWithoutUser2Input> | ProfileShowCreateWithoutUser2Input[] | ProfileShowUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ProfileShowCreateOrConnectWithoutUser2Input | ProfileShowCreateOrConnectWithoutUser2Input[]
    upsert?: ProfileShowUpsertWithWhereUniqueWithoutUser2Input | ProfileShowUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: ProfileShowCreateManyUser2InputEnvelope
    set?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
    disconnect?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
    delete?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
    connect?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
    update?: ProfileShowUpdateWithWhereUniqueWithoutUser2Input | ProfileShowUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: ProfileShowUpdateManyWithWhereWithoutUser2Input | ProfileShowUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: ProfileShowScalarWhereInput | ProfileShowScalarWhereInput[]
  }

  export type SkillUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutUserInput | SkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutUserInput | SkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutUserInput | SkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type CompanyAdminUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompanyAdminCreateWithoutUserInput, CompanyAdminUncheckedCreateWithoutUserInput> | CompanyAdminCreateWithoutUserInput[] | CompanyAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyAdminCreateOrConnectWithoutUserInput | CompanyAdminCreateOrConnectWithoutUserInput[]
    upsert?: CompanyAdminUpsertWithWhereUniqueWithoutUserInput | CompanyAdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompanyAdminCreateManyUserInputEnvelope
    set?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
    disconnect?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
    delete?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
    connect?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
    update?: CompanyAdminUpdateWithWhereUniqueWithoutUserInput | CompanyAdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompanyAdminUpdateManyWithWhereWithoutUserInput | CompanyAdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompanyAdminScalarWhereInput | CompanyAdminScalarWhereInput[]
  }

  export type formationUpdateManyWithoutUserNestedInput = {
    create?: XOR<formationCreateWithoutUserInput, formationUncheckedCreateWithoutUserInput> | formationCreateWithoutUserInput[] | formationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: formationCreateOrConnectWithoutUserInput | formationCreateOrConnectWithoutUserInput[]
    upsert?: formationUpsertWithWhereUniqueWithoutUserInput | formationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: formationCreateManyUserInputEnvelope
    set?: formationWhereUniqueInput | formationWhereUniqueInput[]
    disconnect?: formationWhereUniqueInput | formationWhereUniqueInput[]
    delete?: formationWhereUniqueInput | formationWhereUniqueInput[]
    connect?: formationWhereUniqueInput | formationWhereUniqueInput[]
    update?: formationUpdateWithWhereUniqueWithoutUserInput | formationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: formationUpdateManyWithWhereWithoutUserInput | formationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: formationScalarWhereInput | formationScalarWhereInput[]
  }

  export type ExperienceUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutUserInput | ExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutUserInput | ExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutUserInput | ExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type WriterUpdateManyWithoutUserNestedInput = {
    create?: XOR<WriterCreateWithoutUserInput, WriterUncheckedCreateWithoutUserInput> | WriterCreateWithoutUserInput[] | WriterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WriterCreateOrConnectWithoutUserInput | WriterCreateOrConnectWithoutUserInput[]
    upsert?: WriterUpsertWithWhereUniqueWithoutUserInput | WriterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WriterCreateManyUserInputEnvelope
    set?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
    disconnect?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
    delete?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
    connect?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
    update?: WriterUpdateWithWhereUniqueWithoutUserInput | WriterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WriterUpdateManyWithWhereWithoutUserInput | WriterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WriterScalarWhereInput | WriterScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type RelationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RelationCreateWithoutUserInput, RelationUncheckedCreateWithoutUserInput> | RelationCreateWithoutUserInput[] | RelationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutUserInput | RelationCreateOrConnectWithoutUserInput[]
    upsert?: RelationUpsertWithWhereUniqueWithoutUserInput | RelationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RelationCreateManyUserInputEnvelope
    set?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    disconnect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    delete?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    update?: RelationUpdateWithWhereUniqueWithoutUserInput | RelationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RelationUpdateManyWithWhereWithoutUserInput | RelationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RelationScalarWhereInput | RelationScalarWhereInput[]
  }

  export type RelationUncheckedUpdateManyWithoutRelationNestedInput = {
    create?: XOR<RelationCreateWithoutRelationInput, RelationUncheckedCreateWithoutRelationInput> | RelationCreateWithoutRelationInput[] | RelationUncheckedCreateWithoutRelationInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutRelationInput | RelationCreateOrConnectWithoutRelationInput[]
    upsert?: RelationUpsertWithWhereUniqueWithoutRelationInput | RelationUpsertWithWhereUniqueWithoutRelationInput[]
    createMany?: RelationCreateManyRelationInputEnvelope
    set?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    disconnect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    delete?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    update?: RelationUpdateWithWhereUniqueWithoutRelationInput | RelationUpdateWithWhereUniqueWithoutRelationInput[]
    updateMany?: RelationUpdateManyWithWhereWithoutRelationInput | RelationUpdateManyWithWhereWithoutRelationInput[]
    deleteMany?: RelationScalarWhereInput | RelationScalarWhereInput[]
  }

  export type ProfileShowUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: XOR<ProfileShowCreateWithoutUser1Input, ProfileShowUncheckedCreateWithoutUser1Input> | ProfileShowCreateWithoutUser1Input[] | ProfileShowUncheckedCreateWithoutUser1Input[]
    connectOrCreate?: ProfileShowCreateOrConnectWithoutUser1Input | ProfileShowCreateOrConnectWithoutUser1Input[]
    upsert?: ProfileShowUpsertWithWhereUniqueWithoutUser1Input | ProfileShowUpsertWithWhereUniqueWithoutUser1Input[]
    createMany?: ProfileShowCreateManyUser1InputEnvelope
    set?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
    disconnect?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
    delete?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
    connect?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
    update?: ProfileShowUpdateWithWhereUniqueWithoutUser1Input | ProfileShowUpdateWithWhereUniqueWithoutUser1Input[]
    updateMany?: ProfileShowUpdateManyWithWhereWithoutUser1Input | ProfileShowUpdateManyWithWhereWithoutUser1Input[]
    deleteMany?: ProfileShowScalarWhereInput | ProfileShowScalarWhereInput[]
  }

  export type ProfileShowUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: XOR<ProfileShowCreateWithoutUser2Input, ProfileShowUncheckedCreateWithoutUser2Input> | ProfileShowCreateWithoutUser2Input[] | ProfileShowUncheckedCreateWithoutUser2Input[]
    connectOrCreate?: ProfileShowCreateOrConnectWithoutUser2Input | ProfileShowCreateOrConnectWithoutUser2Input[]
    upsert?: ProfileShowUpsertWithWhereUniqueWithoutUser2Input | ProfileShowUpsertWithWhereUniqueWithoutUser2Input[]
    createMany?: ProfileShowCreateManyUser2InputEnvelope
    set?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
    disconnect?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
    delete?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
    connect?: ProfileShowWhereUniqueInput | ProfileShowWhereUniqueInput[]
    update?: ProfileShowUpdateWithWhereUniqueWithoutUser2Input | ProfileShowUpdateWithWhereUniqueWithoutUser2Input[]
    updateMany?: ProfileShowUpdateManyWithWhereWithoutUser2Input | ProfileShowUpdateManyWithWhereWithoutUser2Input[]
    deleteMany?: ProfileShowScalarWhereInput | ProfileShowScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput> | SkillCreateWithoutUserInput[] | SkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutUserInput | SkillCreateOrConnectWithoutUserInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutUserInput | SkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillCreateManyUserInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutUserInput | SkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutUserInput | SkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type CompanyAdminUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompanyAdminCreateWithoutUserInput, CompanyAdminUncheckedCreateWithoutUserInput> | CompanyAdminCreateWithoutUserInput[] | CompanyAdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyAdminCreateOrConnectWithoutUserInput | CompanyAdminCreateOrConnectWithoutUserInput[]
    upsert?: CompanyAdminUpsertWithWhereUniqueWithoutUserInput | CompanyAdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompanyAdminCreateManyUserInputEnvelope
    set?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
    disconnect?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
    delete?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
    connect?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
    update?: CompanyAdminUpdateWithWhereUniqueWithoutUserInput | CompanyAdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompanyAdminUpdateManyWithWhereWithoutUserInput | CompanyAdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompanyAdminScalarWhereInput | CompanyAdminScalarWhereInput[]
  }

  export type formationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<formationCreateWithoutUserInput, formationUncheckedCreateWithoutUserInput> | formationCreateWithoutUserInput[] | formationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: formationCreateOrConnectWithoutUserInput | formationCreateOrConnectWithoutUserInput[]
    upsert?: formationUpsertWithWhereUniqueWithoutUserInput | formationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: formationCreateManyUserInputEnvelope
    set?: formationWhereUniqueInput | formationWhereUniqueInput[]
    disconnect?: formationWhereUniqueInput | formationWhereUniqueInput[]
    delete?: formationWhereUniqueInput | formationWhereUniqueInput[]
    connect?: formationWhereUniqueInput | formationWhereUniqueInput[]
    update?: formationUpdateWithWhereUniqueWithoutUserInput | formationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: formationUpdateManyWithWhereWithoutUserInput | formationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: formationScalarWhereInput | formationScalarWhereInput[]
  }

  export type ExperienceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutUserInput | ExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutUserInput | ExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutUserInput | ExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type WriterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WriterCreateWithoutUserInput, WriterUncheckedCreateWithoutUserInput> | WriterCreateWithoutUserInput[] | WriterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WriterCreateOrConnectWithoutUserInput | WriterCreateOrConnectWithoutUserInput[]
    upsert?: WriterUpsertWithWhereUniqueWithoutUserInput | WriterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WriterCreateManyUserInputEnvelope
    set?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
    disconnect?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
    delete?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
    connect?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
    update?: WriterUpdateWithWhereUniqueWithoutUserInput | WriterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WriterUpdateManyWithWhereWithoutUserInput | WriterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WriterScalarWhereInput | WriterScalarWhereInput[]
  }

  export type CompanyAdminCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyAdminCreateWithoutCompanyInput, CompanyAdminUncheckedCreateWithoutCompanyInput> | CompanyAdminCreateWithoutCompanyInput[] | CompanyAdminUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyAdminCreateOrConnectWithoutCompanyInput | CompanyAdminCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyAdminCreateManyCompanyInputEnvelope
    connect?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
  }

  export type formationCreateNestedManyWithoutCompanyInput = {
    create?: XOR<formationCreateWithoutCompanyInput, formationUncheckedCreateWithoutCompanyInput> | formationCreateWithoutCompanyInput[] | formationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: formationCreateOrConnectWithoutCompanyInput | formationCreateOrConnectWithoutCompanyInput[]
    createMany?: formationCreateManyCompanyInputEnvelope
    connect?: formationWhereUniqueInput | formationWhereUniqueInput[]
  }

  export type ExperienceCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ExperienceCreateWithoutCompanyInput, ExperienceUncheckedCreateWithoutCompanyInput> | ExperienceCreateWithoutCompanyInput[] | ExperienceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCompanyInput | ExperienceCreateOrConnectWithoutCompanyInput[]
    createMany?: ExperienceCreateManyCompanyInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type WriterCreateNestedManyWithoutCompanyInput = {
    create?: XOR<WriterCreateWithoutCompanyInput, WriterUncheckedCreateWithoutCompanyInput> | WriterCreateWithoutCompanyInput[] | WriterUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WriterCreateOrConnectWithoutCompanyInput | WriterCreateOrConnectWithoutCompanyInput[]
    createMany?: WriterCreateManyCompanyInputEnvelope
    connect?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
  }

  export type CompanyAdminUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyAdminCreateWithoutCompanyInput, CompanyAdminUncheckedCreateWithoutCompanyInput> | CompanyAdminCreateWithoutCompanyInput[] | CompanyAdminUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyAdminCreateOrConnectWithoutCompanyInput | CompanyAdminCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyAdminCreateManyCompanyInputEnvelope
    connect?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
  }

  export type formationUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<formationCreateWithoutCompanyInput, formationUncheckedCreateWithoutCompanyInput> | formationCreateWithoutCompanyInput[] | formationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: formationCreateOrConnectWithoutCompanyInput | formationCreateOrConnectWithoutCompanyInput[]
    createMany?: formationCreateManyCompanyInputEnvelope
    connect?: formationWhereUniqueInput | formationWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ExperienceCreateWithoutCompanyInput, ExperienceUncheckedCreateWithoutCompanyInput> | ExperienceCreateWithoutCompanyInput[] | ExperienceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCompanyInput | ExperienceCreateOrConnectWithoutCompanyInput[]
    createMany?: ExperienceCreateManyCompanyInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type WriterUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<WriterCreateWithoutCompanyInput, WriterUncheckedCreateWithoutCompanyInput> | WriterCreateWithoutCompanyInput[] | WriterUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WriterCreateOrConnectWithoutCompanyInput | WriterCreateOrConnectWithoutCompanyInput[]
    createMany?: WriterCreateManyCompanyInputEnvelope
    connect?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
  }

  export type CompanyAdminUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyAdminCreateWithoutCompanyInput, CompanyAdminUncheckedCreateWithoutCompanyInput> | CompanyAdminCreateWithoutCompanyInput[] | CompanyAdminUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyAdminCreateOrConnectWithoutCompanyInput | CompanyAdminCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyAdminUpsertWithWhereUniqueWithoutCompanyInput | CompanyAdminUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyAdminCreateManyCompanyInputEnvelope
    set?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
    disconnect?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
    delete?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
    connect?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
    update?: CompanyAdminUpdateWithWhereUniqueWithoutCompanyInput | CompanyAdminUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyAdminUpdateManyWithWhereWithoutCompanyInput | CompanyAdminUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyAdminScalarWhereInput | CompanyAdminScalarWhereInput[]
  }

  export type formationUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<formationCreateWithoutCompanyInput, formationUncheckedCreateWithoutCompanyInput> | formationCreateWithoutCompanyInput[] | formationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: formationCreateOrConnectWithoutCompanyInput | formationCreateOrConnectWithoutCompanyInput[]
    upsert?: formationUpsertWithWhereUniqueWithoutCompanyInput | formationUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: formationCreateManyCompanyInputEnvelope
    set?: formationWhereUniqueInput | formationWhereUniqueInput[]
    disconnect?: formationWhereUniqueInput | formationWhereUniqueInput[]
    delete?: formationWhereUniqueInput | formationWhereUniqueInput[]
    connect?: formationWhereUniqueInput | formationWhereUniqueInput[]
    update?: formationUpdateWithWhereUniqueWithoutCompanyInput | formationUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: formationUpdateManyWithWhereWithoutCompanyInput | formationUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: formationScalarWhereInput | formationScalarWhereInput[]
  }

  export type ExperienceUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ExperienceCreateWithoutCompanyInput, ExperienceUncheckedCreateWithoutCompanyInput> | ExperienceCreateWithoutCompanyInput[] | ExperienceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCompanyInput | ExperienceCreateOrConnectWithoutCompanyInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutCompanyInput | ExperienceUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ExperienceCreateManyCompanyInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutCompanyInput | ExperienceUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutCompanyInput | ExperienceUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type WriterUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<WriterCreateWithoutCompanyInput, WriterUncheckedCreateWithoutCompanyInput> | WriterCreateWithoutCompanyInput[] | WriterUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WriterCreateOrConnectWithoutCompanyInput | WriterCreateOrConnectWithoutCompanyInput[]
    upsert?: WriterUpsertWithWhereUniqueWithoutCompanyInput | WriterUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: WriterCreateManyCompanyInputEnvelope
    set?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
    disconnect?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
    delete?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
    connect?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
    update?: WriterUpdateWithWhereUniqueWithoutCompanyInput | WriterUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: WriterUpdateManyWithWhereWithoutCompanyInput | WriterUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: WriterScalarWhereInput | WriterScalarWhereInput[]
  }

  export type CompanyAdminUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyAdminCreateWithoutCompanyInput, CompanyAdminUncheckedCreateWithoutCompanyInput> | CompanyAdminCreateWithoutCompanyInput[] | CompanyAdminUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyAdminCreateOrConnectWithoutCompanyInput | CompanyAdminCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyAdminUpsertWithWhereUniqueWithoutCompanyInput | CompanyAdminUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyAdminCreateManyCompanyInputEnvelope
    set?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
    disconnect?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
    delete?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
    connect?: CompanyAdminWhereUniqueInput | CompanyAdminWhereUniqueInput[]
    update?: CompanyAdminUpdateWithWhereUniqueWithoutCompanyInput | CompanyAdminUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyAdminUpdateManyWithWhereWithoutCompanyInput | CompanyAdminUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyAdminScalarWhereInput | CompanyAdminScalarWhereInput[]
  }

  export type formationUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<formationCreateWithoutCompanyInput, formationUncheckedCreateWithoutCompanyInput> | formationCreateWithoutCompanyInput[] | formationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: formationCreateOrConnectWithoutCompanyInput | formationCreateOrConnectWithoutCompanyInput[]
    upsert?: formationUpsertWithWhereUniqueWithoutCompanyInput | formationUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: formationCreateManyCompanyInputEnvelope
    set?: formationWhereUniqueInput | formationWhereUniqueInput[]
    disconnect?: formationWhereUniqueInput | formationWhereUniqueInput[]
    delete?: formationWhereUniqueInput | formationWhereUniqueInput[]
    connect?: formationWhereUniqueInput | formationWhereUniqueInput[]
    update?: formationUpdateWithWhereUniqueWithoutCompanyInput | formationUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: formationUpdateManyWithWhereWithoutCompanyInput | formationUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: formationScalarWhereInput | formationScalarWhereInput[]
  }

  export type ExperienceUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ExperienceCreateWithoutCompanyInput, ExperienceUncheckedCreateWithoutCompanyInput> | ExperienceCreateWithoutCompanyInput[] | ExperienceUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCompanyInput | ExperienceCreateOrConnectWithoutCompanyInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutCompanyInput | ExperienceUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ExperienceCreateManyCompanyInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutCompanyInput | ExperienceUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutCompanyInput | ExperienceUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type WriterUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<WriterCreateWithoutCompanyInput, WriterUncheckedCreateWithoutCompanyInput> | WriterCreateWithoutCompanyInput[] | WriterUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: WriterCreateOrConnectWithoutCompanyInput | WriterCreateOrConnectWithoutCompanyInput[]
    upsert?: WriterUpsertWithWhereUniqueWithoutCompanyInput | WriterUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: WriterCreateManyCompanyInputEnvelope
    set?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
    disconnect?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
    delete?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
    connect?: WriterWhereUniqueInput | WriterWhereUniqueInput[]
    update?: WriterUpdateWithWhereUniqueWithoutCompanyInput | WriterUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: WriterUpdateManyWithWhereWithoutCompanyInput | WriterUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: WriterScalarWhereInput | WriterScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWriterInput = {
    create?: XOR<UserCreateWithoutWriterInput, UserUncheckedCreateWithoutWriterInput>
    connectOrCreate?: UserCreateOrConnectWithoutWriterInput
    connect?: UserWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutWriterInput = {
    create?: XOR<CompanyCreateWithoutWriterInput, CompanyUncheckedCreateWithoutWriterInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutWriterInput
    connect?: CompanyWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutWriterInput = {
    create?: XOR<PostCreateWithoutWriterInput, PostUncheckedCreateWithoutWriterInput> | PostCreateWithoutWriterInput[] | PostUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: PostCreateOrConnectWithoutWriterInput | PostCreateOrConnectWithoutWriterInput[]
    createMany?: PostCreateManyWriterInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutWriterInput = {
    create?: XOR<VoteCreateWithoutWriterInput, VoteUncheckedCreateWithoutWriterInput> | VoteCreateWithoutWriterInput[] | VoteUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutWriterInput | VoteCreateOrConnectWithoutWriterInput[]
    createMany?: VoteCreateManyWriterInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutWriterInput = {
    create?: XOR<CommentCreateWithoutWriterInput, CommentUncheckedCreateWithoutWriterInput> | CommentCreateWithoutWriterInput[] | CommentUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutWriterInput | CommentCreateOrConnectWithoutWriterInput[]
    createMany?: CommentCreateManyWriterInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutWriterInput = {
    create?: XOR<PostCreateWithoutWriterInput, PostUncheckedCreateWithoutWriterInput> | PostCreateWithoutWriterInput[] | PostUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: PostCreateOrConnectWithoutWriterInput | PostCreateOrConnectWithoutWriterInput[]
    createMany?: PostCreateManyWriterInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutWriterInput = {
    create?: XOR<VoteCreateWithoutWriterInput, VoteUncheckedCreateWithoutWriterInput> | VoteCreateWithoutWriterInput[] | VoteUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutWriterInput | VoteCreateOrConnectWithoutWriterInput[]
    createMany?: VoteCreateManyWriterInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutWriterInput = {
    create?: XOR<CommentCreateWithoutWriterInput, CommentUncheckedCreateWithoutWriterInput> | CommentCreateWithoutWriterInput[] | CommentUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutWriterInput | CommentCreateOrConnectWithoutWriterInput[]
    createMany?: CommentCreateManyWriterInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutWriterNestedInput = {
    create?: XOR<UserCreateWithoutWriterInput, UserUncheckedCreateWithoutWriterInput>
    connectOrCreate?: UserCreateOrConnectWithoutWriterInput
    upsert?: UserUpsertWithoutWriterInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWriterInput, UserUpdateWithoutWriterInput>, UserUncheckedUpdateWithoutWriterInput>
  }

  export type CompanyUpdateOneWithoutWriterNestedInput = {
    create?: XOR<CompanyCreateWithoutWriterInput, CompanyUncheckedCreateWithoutWriterInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutWriterInput
    upsert?: CompanyUpsertWithoutWriterInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutWriterInput, CompanyUpdateWithoutWriterInput>, CompanyUncheckedUpdateWithoutWriterInput>
  }

  export type PostUpdateManyWithoutWriterNestedInput = {
    create?: XOR<PostCreateWithoutWriterInput, PostUncheckedCreateWithoutWriterInput> | PostCreateWithoutWriterInput[] | PostUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: PostCreateOrConnectWithoutWriterInput | PostCreateOrConnectWithoutWriterInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutWriterInput | PostUpsertWithWhereUniqueWithoutWriterInput[]
    createMany?: PostCreateManyWriterInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutWriterInput | PostUpdateWithWhereUniqueWithoutWriterInput[]
    updateMany?: PostUpdateManyWithWhereWithoutWriterInput | PostUpdateManyWithWhereWithoutWriterInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutWriterNestedInput = {
    create?: XOR<VoteCreateWithoutWriterInput, VoteUncheckedCreateWithoutWriterInput> | VoteCreateWithoutWriterInput[] | VoteUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutWriterInput | VoteCreateOrConnectWithoutWriterInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutWriterInput | VoteUpsertWithWhereUniqueWithoutWriterInput[]
    createMany?: VoteCreateManyWriterInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutWriterInput | VoteUpdateWithWhereUniqueWithoutWriterInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutWriterInput | VoteUpdateManyWithWhereWithoutWriterInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutWriterNestedInput = {
    create?: XOR<CommentCreateWithoutWriterInput, CommentUncheckedCreateWithoutWriterInput> | CommentCreateWithoutWriterInput[] | CommentUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutWriterInput | CommentCreateOrConnectWithoutWriterInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutWriterInput | CommentUpsertWithWhereUniqueWithoutWriterInput[]
    createMany?: CommentCreateManyWriterInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutWriterInput | CommentUpdateWithWhereUniqueWithoutWriterInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutWriterInput | CommentUpdateManyWithWhereWithoutWriterInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutWriterNestedInput = {
    create?: XOR<PostCreateWithoutWriterInput, PostUncheckedCreateWithoutWriterInput> | PostCreateWithoutWriterInput[] | PostUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: PostCreateOrConnectWithoutWriterInput | PostCreateOrConnectWithoutWriterInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutWriterInput | PostUpsertWithWhereUniqueWithoutWriterInput[]
    createMany?: PostCreateManyWriterInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutWriterInput | PostUpdateWithWhereUniqueWithoutWriterInput[]
    updateMany?: PostUpdateManyWithWhereWithoutWriterInput | PostUpdateManyWithWhereWithoutWriterInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutWriterNestedInput = {
    create?: XOR<VoteCreateWithoutWriterInput, VoteUncheckedCreateWithoutWriterInput> | VoteCreateWithoutWriterInput[] | VoteUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutWriterInput | VoteCreateOrConnectWithoutWriterInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutWriterInput | VoteUpsertWithWhereUniqueWithoutWriterInput[]
    createMany?: VoteCreateManyWriterInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutWriterInput | VoteUpdateWithWhereUniqueWithoutWriterInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutWriterInput | VoteUpdateManyWithWhereWithoutWriterInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutWriterNestedInput = {
    create?: XOR<CommentCreateWithoutWriterInput, CommentUncheckedCreateWithoutWriterInput> | CommentCreateWithoutWriterInput[] | CommentUncheckedCreateWithoutWriterInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutWriterInput | CommentCreateOrConnectWithoutWriterInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutWriterInput | CommentUpsertWithWhereUniqueWithoutWriterInput[]
    createMany?: CommentCreateManyWriterInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutWriterInput | CommentUpdateWithWhereUniqueWithoutWriterInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutWriterInput | CommentUpdateManyWithWhereWithoutWriterInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutFormationInput = {
    create?: XOR<CompanyCreateWithoutFormationInput, CompanyUncheckedCreateWithoutFormationInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFormationInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFormationInput = {
    create?: XOR<UserCreateWithoutFormationInput, UserUncheckedCreateWithoutFormationInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormationInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CompanyUpdateOneWithoutFormationNestedInput = {
    create?: XOR<CompanyCreateWithoutFormationInput, CompanyUncheckedCreateWithoutFormationInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutFormationInput
    upsert?: CompanyUpsertWithoutFormationInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutFormationInput, CompanyUpdateWithoutFormationInput>, CompanyUncheckedUpdateWithoutFormationInput>
  }

  export type UserUpdateOneRequiredWithoutFormationNestedInput = {
    create?: XOR<UserCreateWithoutFormationInput, UserUncheckedCreateWithoutFormationInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormationInput
    upsert?: UserUpsertWithoutFormationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFormationInput, UserUpdateWithoutFormationInput>, UserUncheckedUpdateWithoutFormationInput>
  }

  export type CompanyCreateNestedOneWithoutExperienceInput = {
    create?: XOR<CompanyCreateWithoutExperienceInput, CompanyUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutExperienceInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExperienceInput = {
    create?: XOR<UserCreateWithoutExperienceInput, UserUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: UserCreateOrConnectWithoutExperienceInput
    connect?: UserWhereUniqueInput
  }

  export type CompanyUpdateOneWithoutExperienceNestedInput = {
    create?: XOR<CompanyCreateWithoutExperienceInput, CompanyUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutExperienceInput
    upsert?: CompanyUpsertWithoutExperienceInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutExperienceInput, CompanyUpdateWithoutExperienceInput>, CompanyUncheckedUpdateWithoutExperienceInput>
  }

  export type UserUpdateOneRequiredWithoutExperienceNestedInput = {
    create?: XOR<UserCreateWithoutExperienceInput, UserUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: UserCreateOrConnectWithoutExperienceInput
    upsert?: UserUpsertWithoutExperienceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExperienceInput, UserUpdateWithoutExperienceInput>, UserUncheckedUpdateWithoutExperienceInput>
  }

  export type WriterCreateNestedOneWithoutPostInput = {
    create?: XOR<WriterCreateWithoutPostInput, WriterUncheckedCreateWithoutPostInput>
    connectOrCreate?: WriterCreateOrConnectWithoutPostInput
    connect?: WriterWhereUniqueInput
  }

  export type MediaCreateNestedManyWithoutPostInput = {
    create?: XOR<MediaCreateWithoutPostInput, MediaUncheckedCreateWithoutPostInput> | MediaCreateWithoutPostInput[] | MediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutPostInput | MediaCreateOrConnectWithoutPostInput[]
    createMany?: MediaCreateManyPostInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutPostInput = {
    create?: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput> | VoteCreateWithoutPostInput[] | VoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPostInput | VoteCreateOrConnectWithoutPostInput[]
    createMany?: VoteCreateManyPostInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<MediaCreateWithoutPostInput, MediaUncheckedCreateWithoutPostInput> | MediaCreateWithoutPostInput[] | MediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutPostInput | MediaCreateOrConnectWithoutPostInput[]
    createMany?: MediaCreateManyPostInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput> | VoteCreateWithoutPostInput[] | VoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPostInput | VoteCreateOrConnectWithoutPostInput[]
    createMany?: VoteCreateManyPostInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type WriterUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<WriterCreateWithoutPostInput, WriterUncheckedCreateWithoutPostInput>
    connectOrCreate?: WriterCreateOrConnectWithoutPostInput
    upsert?: WriterUpsertWithoutPostInput
    connect?: WriterWhereUniqueInput
    update?: XOR<XOR<WriterUpdateToOneWithWhereWithoutPostInput, WriterUpdateWithoutPostInput>, WriterUncheckedUpdateWithoutPostInput>
  }

  export type MediaUpdateManyWithoutPostNestedInput = {
    create?: XOR<MediaCreateWithoutPostInput, MediaUncheckedCreateWithoutPostInput> | MediaCreateWithoutPostInput[] | MediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutPostInput | MediaCreateOrConnectWithoutPostInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutPostInput | MediaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: MediaCreateManyPostInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutPostInput | MediaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutPostInput | MediaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutPostNestedInput = {
    create?: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput> | VoteCreateWithoutPostInput[] | VoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPostInput | VoteCreateOrConnectWithoutPostInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutPostInput | VoteUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: VoteCreateManyPostInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutPostInput | VoteUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutPostInput | VoteUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<MediaCreateWithoutPostInput, MediaUncheckedCreateWithoutPostInput> | MediaCreateWithoutPostInput[] | MediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutPostInput | MediaCreateOrConnectWithoutPostInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutPostInput | MediaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: MediaCreateManyPostInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutPostInput | MediaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutPostInput | MediaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput> | VoteCreateWithoutPostInput[] | VoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutPostInput | VoteCreateOrConnectWithoutPostInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutPostInput | VoteUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: VoteCreateManyPostInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutPostInput | VoteUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutPostInput | VoteUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type WriterCreateNestedOneWithoutVoteInput = {
    create?: XOR<WriterCreateWithoutVoteInput, WriterUncheckedCreateWithoutVoteInput>
    connectOrCreate?: WriterCreateOrConnectWithoutVoteInput
    connect?: WriterWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutVoteInput = {
    create?: XOR<PostCreateWithoutVoteInput, PostUncheckedCreateWithoutVoteInput>
    connectOrCreate?: PostCreateOrConnectWithoutVoteInput
    connect?: PostWhereUniqueInput
  }

  export type WriterUpdateOneRequiredWithoutVoteNestedInput = {
    create?: XOR<WriterCreateWithoutVoteInput, WriterUncheckedCreateWithoutVoteInput>
    connectOrCreate?: WriterCreateOrConnectWithoutVoteInput
    upsert?: WriterUpsertWithoutVoteInput
    connect?: WriterWhereUniqueInput
    update?: XOR<XOR<WriterUpdateToOneWithWhereWithoutVoteInput, WriterUpdateWithoutVoteInput>, WriterUncheckedUpdateWithoutVoteInput>
  }

  export type PostUpdateOneWithoutVoteNestedInput = {
    create?: XOR<PostCreateWithoutVoteInput, PostUncheckedCreateWithoutVoteInput>
    connectOrCreate?: PostCreateOrConnectWithoutVoteInput
    upsert?: PostUpsertWithoutVoteInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutVoteInput, PostUpdateWithoutVoteInput>, PostUncheckedUpdateWithoutVoteInput>
  }

  export type PostCreateNestedOneWithoutMediaInput = {
    create?: XOR<PostCreateWithoutMediaInput, PostUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PostCreateOrConnectWithoutMediaInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<PostCreateWithoutMediaInput, PostUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PostCreateOrConnectWithoutMediaInput
    upsert?: PostUpsertWithoutMediaInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutMediaInput, PostUpdateWithoutMediaInput>, PostUncheckedUpdateWithoutMediaInput>
  }

  export type WriterCreateNestedOneWithoutCommentInput = {
    create?: XOR<WriterCreateWithoutCommentInput, WriterUncheckedCreateWithoutCommentInput>
    connectOrCreate?: WriterCreateOrConnectWithoutCommentInput
    connect?: WriterWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCommentInput = {
    create?: XOR<PostCreateWithoutCommentInput, PostUncheckedCreateWithoutCommentInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentInput
    connect?: PostWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentCreateWithoutCommentInput, CommentUncheckedCreateWithoutCommentInput> | CommentCreateWithoutCommentInput[] | CommentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCommentInput | CommentCreateOrConnectWithoutCommentInput[]
    createMany?: CommentCreateManyCommentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentCreateWithoutCommentInput, CommentUncheckedCreateWithoutCommentInput> | CommentCreateWithoutCommentInput[] | CommentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCommentInput | CommentCreateOrConnectWithoutCommentInput[]
    createMany?: CommentCreateManyCommentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WriterUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<WriterCreateWithoutCommentInput, WriterUncheckedCreateWithoutCommentInput>
    connectOrCreate?: WriterCreateOrConnectWithoutCommentInput
    upsert?: WriterUpsertWithoutCommentInput
    connect?: WriterWhereUniqueInput
    update?: XOR<XOR<WriterUpdateToOneWithWhereWithoutCommentInput, WriterUpdateWithoutCommentInput>, WriterUncheckedUpdateWithoutCommentInput>
  }

  export type PostUpdateOneWithoutCommentNestedInput = {
    create?: XOR<PostCreateWithoutCommentInput, PostUncheckedCreateWithoutCommentInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentInput
    upsert?: PostUpsertWithoutCommentInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentInput, PostUpdateWithoutCommentInput>, PostUncheckedUpdateWithoutCommentInput>
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentCreateWithoutCommentInput, CommentUncheckedCreateWithoutCommentInput> | CommentCreateWithoutCommentInput[] | CommentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCommentInput | CommentCreateOrConnectWithoutCommentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutCommentInput | CommentUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentCreateManyCommentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutCommentInput | CommentUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutCommentInput | CommentUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentCreateWithoutCommentInput, CommentUncheckedCreateWithoutCommentInput> | CommentCreateWithoutCommentInput[] | CommentUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCommentInput | CommentCreateOrConnectWithoutCommentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutCommentInput | CommentUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentCreateManyCommentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutCommentInput | CommentUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutCommentInput | CommentUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutCompanyAdminInput = {
    create?: XOR<CompanyCreateWithoutCompanyAdminInput, CompanyUncheckedCreateWithoutCompanyAdminInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCompanyAdminInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCompanyAdminInput = {
    create?: XOR<UserCreateWithoutCompanyAdminInput, UserUncheckedCreateWithoutCompanyAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyAdminInput
    connect?: UserWhereUniqueInput
  }

  export type CompanyUpdateOneRequiredWithoutCompanyAdminNestedInput = {
    create?: XOR<CompanyCreateWithoutCompanyAdminInput, CompanyUncheckedCreateWithoutCompanyAdminInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCompanyAdminInput
    upsert?: CompanyUpsertWithoutCompanyAdminInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutCompanyAdminInput, CompanyUpdateWithoutCompanyAdminInput>, CompanyUncheckedUpdateWithoutCompanyAdminInput>
  }

  export type UserUpdateOneRequiredWithoutCompanyAdminNestedInput = {
    create?: XOR<UserCreateWithoutCompanyAdminInput, UserUncheckedCreateWithoutCompanyAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyAdminInput
    upsert?: UserUpsertWithoutCompanyAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompanyAdminInput, UserUpdateWithoutCompanyAdminInput>, UserUncheckedUpdateWithoutCompanyAdminInput>
  }

  export type UserCreateNestedOneWithoutSkillInput = {
    create?: XOR<UserCreateWithoutSkillInput, UserUncheckedCreateWithoutSkillInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSkillNestedInput = {
    create?: XOR<UserCreateWithoutSkillInput, UserUncheckedCreateWithoutSkillInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillInput
    upsert?: UserUpsertWithoutSkillInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillInput, UserUpdateWithoutSkillInput>, UserUncheckedUpdateWithoutSkillInput>
  }

  export type UserCreateNestedOneWithoutRelationsInput = {
    create?: XOR<UserCreateWithoutRelationsInput, UserUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRelationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRelatedByInput = {
    create?: XOR<UserCreateWithoutRelatedByInput, UserUncheckedCreateWithoutRelatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutRelatedByInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRelationsNestedInput = {
    create?: XOR<UserCreateWithoutRelationsInput, UserUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRelationsInput
    upsert?: UserUpsertWithoutRelationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRelationsInput, UserUpdateWithoutRelationsInput>, UserUncheckedUpdateWithoutRelationsInput>
  }

  export type UserUpdateOneRequiredWithoutRelatedByNestedInput = {
    create?: XOR<UserCreateWithoutRelatedByInput, UserUncheckedCreateWithoutRelatedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutRelatedByInput
    upsert?: UserUpsertWithoutRelatedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRelatedByInput, UserUpdateWithoutRelatedByInput>, UserUncheckedUpdateWithoutRelatedByInput>
  }

  export type UserCreateNestedOneWithoutProfileShowAsUser1Input = {
    create?: XOR<UserCreateWithoutProfileShowAsUser1Input, UserUncheckedCreateWithoutProfileShowAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutProfileShowAsUser1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProfileShowAsUser2Input = {
    create?: XOR<UserCreateWithoutProfileShowAsUser2Input, UserUncheckedCreateWithoutProfileShowAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutProfileShowAsUser2Input
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileShowAsUser1NestedInput = {
    create?: XOR<UserCreateWithoutProfileShowAsUser1Input, UserUncheckedCreateWithoutProfileShowAsUser1Input>
    connectOrCreate?: UserCreateOrConnectWithoutProfileShowAsUser1Input
    upsert?: UserUpsertWithoutProfileShowAsUser1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileShowAsUser1Input, UserUpdateWithoutProfileShowAsUser1Input>, UserUncheckedUpdateWithoutProfileShowAsUser1Input>
  }

  export type UserUpdateOneRequiredWithoutProfileShowAsUser2NestedInput = {
    create?: XOR<UserCreateWithoutProfileShowAsUser2Input, UserUncheckedCreateWithoutProfileShowAsUser2Input>
    connectOrCreate?: UserCreateOrConnectWithoutProfileShowAsUser2Input
    upsert?: UserUpsertWithoutProfileShowAsUser2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileShowAsUser2Input, UserUpdateWithoutProfileShowAsUser2Input>, UserUncheckedUpdateWithoutProfileShowAsUser2Input>
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountInput, UserUpdateWithoutAccountInput>, UserUncheckedUpdateWithoutAccountInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    espiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    espiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpireAt?: Date | string | null
    refreshTokenExpireAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpireAt?: Date | string | null
    refreshTokenExpireAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RelationCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    status: boolean
    relation: UserCreateNestedOneWithoutRelatedByInput
  }

  export type RelationUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    status: boolean
    relationId: string
  }

  export type RelationCreateOrConnectWithoutUserInput = {
    where: RelationWhereUniqueInput
    create: XOR<RelationCreateWithoutUserInput, RelationUncheckedCreateWithoutUserInput>
  }

  export type RelationCreateManyUserInputEnvelope = {
    data: RelationCreateManyUserInput | RelationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RelationCreateWithoutRelationInput = {
    id?: string
    createdAt?: Date | string
    status: boolean
    user: UserCreateNestedOneWithoutRelationsInput
  }

  export type RelationUncheckedCreateWithoutRelationInput = {
    id?: string
    createdAt?: Date | string
    status: boolean
    userId: string
  }

  export type RelationCreateOrConnectWithoutRelationInput = {
    where: RelationWhereUniqueInput
    create: XOR<RelationCreateWithoutRelationInput, RelationUncheckedCreateWithoutRelationInput>
  }

  export type RelationCreateManyRelationInputEnvelope = {
    data: RelationCreateManyRelationInput | RelationCreateManyRelationInput[]
    skipDuplicates?: boolean
  }

  export type ProfileShowCreateWithoutUser1Input = {
    id?: string
    createdAt?: Date | string
    user2: UserCreateNestedOneWithoutProfileShowAsUser2Input
  }

  export type ProfileShowUncheckedCreateWithoutUser1Input = {
    id?: string
    createdAt?: Date | string
    idUser2: string
  }

  export type ProfileShowCreateOrConnectWithoutUser1Input = {
    where: ProfileShowWhereUniqueInput
    create: XOR<ProfileShowCreateWithoutUser1Input, ProfileShowUncheckedCreateWithoutUser1Input>
  }

  export type ProfileShowCreateManyUser1InputEnvelope = {
    data: ProfileShowCreateManyUser1Input | ProfileShowCreateManyUser1Input[]
    skipDuplicates?: boolean
  }

  export type ProfileShowCreateWithoutUser2Input = {
    id?: string
    createdAt?: Date | string
    user1: UserCreateNestedOneWithoutProfileShowAsUser1Input
  }

  export type ProfileShowUncheckedCreateWithoutUser2Input = {
    id?: string
    createdAt?: Date | string
    idUser1: string
  }

  export type ProfileShowCreateOrConnectWithoutUser2Input = {
    where: ProfileShowWhereUniqueInput
    create: XOR<ProfileShowCreateWithoutUser2Input, ProfileShowUncheckedCreateWithoutUser2Input>
  }

  export type ProfileShowCreateManyUser2InputEnvelope = {
    data: ProfileShowCreateManyUser2Input | ProfileShowCreateManyUser2Input[]
    skipDuplicates?: boolean
  }

  export type SkillCreateWithoutUserInput = {
    id?: string
    name: string
    level: number
  }

  export type SkillUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    level: number
  }

  export type SkillCreateOrConnectWithoutUserInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput>
  }

  export type SkillCreateManyUserInputEnvelope = {
    data: SkillCreateManyUserInput | SkillCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompanyAdminCreateWithoutUserInput = {
    id?: string
    role: string
    company: CompanyCreateNestedOneWithoutCompanyAdminInput
  }

  export type CompanyAdminUncheckedCreateWithoutUserInput = {
    id?: string
    role: string
    companyId: string
  }

  export type CompanyAdminCreateOrConnectWithoutUserInput = {
    where: CompanyAdminWhereUniqueInput
    create: XOR<CompanyAdminCreateWithoutUserInput, CompanyAdminUncheckedCreateWithoutUserInput>
  }

  export type CompanyAdminCreateManyUserInputEnvelope = {
    data: CompanyAdminCreateManyUserInput | CompanyAdminCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type formationCreateWithoutUserInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    company?: CompanyCreateNestedOneWithoutFormationInput
  }

  export type formationUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    companyId?: string | null
  }

  export type formationCreateOrConnectWithoutUserInput = {
    where: formationWhereUniqueInput
    create: XOR<formationCreateWithoutUserInput, formationUncheckedCreateWithoutUserInput>
  }

  export type formationCreateManyUserInputEnvelope = {
    data: formationCreateManyUserInput | formationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExperienceCreateWithoutUserInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    company?: CompanyCreateNestedOneWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    companyId?: string | null
  }

  export type ExperienceCreateOrConnectWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput>
  }

  export type ExperienceCreateManyUserInputEnvelope = {
    data: ExperienceCreateManyUserInput | ExperienceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WriterCreateWithoutUserInput = {
    id?: string
    company?: CompanyCreateNestedOneWithoutWriterInput
    Post?: PostCreateNestedManyWithoutWriterInput
    Vote?: VoteCreateNestedManyWithoutWriterInput
    Comment?: CommentCreateNestedManyWithoutWriterInput
  }

  export type WriterUncheckedCreateWithoutUserInput = {
    id?: string
    companyId?: string | null
    Post?: PostUncheckedCreateNestedManyWithoutWriterInput
    Vote?: VoteUncheckedCreateNestedManyWithoutWriterInput
    Comment?: CommentUncheckedCreateNestedManyWithoutWriterInput
  }

  export type WriterCreateOrConnectWithoutUserInput = {
    where: WriterWhereUniqueInput
    create: XOR<WriterCreateWithoutUserInput, WriterUncheckedCreateWithoutUserInput>
  }

  export type WriterCreateManyUserInputEnvelope = {
    data: WriterCreateManyUserInput | WriterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    espiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpireAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpireAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type RelationUpsertWithWhereUniqueWithoutUserInput = {
    where: RelationWhereUniqueInput
    update: XOR<RelationUpdateWithoutUserInput, RelationUncheckedUpdateWithoutUserInput>
    create: XOR<RelationCreateWithoutUserInput, RelationUncheckedCreateWithoutUserInput>
  }

  export type RelationUpdateWithWhereUniqueWithoutUserInput = {
    where: RelationWhereUniqueInput
    data: XOR<RelationUpdateWithoutUserInput, RelationUncheckedUpdateWithoutUserInput>
  }

  export type RelationUpdateManyWithWhereWithoutUserInput = {
    where: RelationScalarWhereInput
    data: XOR<RelationUpdateManyMutationInput, RelationUncheckedUpdateManyWithoutUserInput>
  }

  export type RelationScalarWhereInput = {
    AND?: RelationScalarWhereInput | RelationScalarWhereInput[]
    OR?: RelationScalarWhereInput[]
    NOT?: RelationScalarWhereInput | RelationScalarWhereInput[]
    id?: StringFilter<"Relation"> | string
    createdAt?: DateTimeFilter<"Relation"> | Date | string
    status?: BoolFilter<"Relation"> | boolean
    userId?: StringFilter<"Relation"> | string
    relationId?: StringFilter<"Relation"> | string
  }

  export type RelationUpsertWithWhereUniqueWithoutRelationInput = {
    where: RelationWhereUniqueInput
    update: XOR<RelationUpdateWithoutRelationInput, RelationUncheckedUpdateWithoutRelationInput>
    create: XOR<RelationCreateWithoutRelationInput, RelationUncheckedCreateWithoutRelationInput>
  }

  export type RelationUpdateWithWhereUniqueWithoutRelationInput = {
    where: RelationWhereUniqueInput
    data: XOR<RelationUpdateWithoutRelationInput, RelationUncheckedUpdateWithoutRelationInput>
  }

  export type RelationUpdateManyWithWhereWithoutRelationInput = {
    where: RelationScalarWhereInput
    data: XOR<RelationUpdateManyMutationInput, RelationUncheckedUpdateManyWithoutRelationInput>
  }

  export type ProfileShowUpsertWithWhereUniqueWithoutUser1Input = {
    where: ProfileShowWhereUniqueInput
    update: XOR<ProfileShowUpdateWithoutUser1Input, ProfileShowUncheckedUpdateWithoutUser1Input>
    create: XOR<ProfileShowCreateWithoutUser1Input, ProfileShowUncheckedCreateWithoutUser1Input>
  }

  export type ProfileShowUpdateWithWhereUniqueWithoutUser1Input = {
    where: ProfileShowWhereUniqueInput
    data: XOR<ProfileShowUpdateWithoutUser1Input, ProfileShowUncheckedUpdateWithoutUser1Input>
  }

  export type ProfileShowUpdateManyWithWhereWithoutUser1Input = {
    where: ProfileShowScalarWhereInput
    data: XOR<ProfileShowUpdateManyMutationInput, ProfileShowUncheckedUpdateManyWithoutUser1Input>
  }

  export type ProfileShowScalarWhereInput = {
    AND?: ProfileShowScalarWhereInput | ProfileShowScalarWhereInput[]
    OR?: ProfileShowScalarWhereInput[]
    NOT?: ProfileShowScalarWhereInput | ProfileShowScalarWhereInput[]
    id?: StringFilter<"ProfileShow"> | string
    createdAt?: DateTimeFilter<"ProfileShow"> | Date | string
    idUser1?: StringFilter<"ProfileShow"> | string
    idUser2?: StringFilter<"ProfileShow"> | string
  }

  export type ProfileShowUpsertWithWhereUniqueWithoutUser2Input = {
    where: ProfileShowWhereUniqueInput
    update: XOR<ProfileShowUpdateWithoutUser2Input, ProfileShowUncheckedUpdateWithoutUser2Input>
    create: XOR<ProfileShowCreateWithoutUser2Input, ProfileShowUncheckedCreateWithoutUser2Input>
  }

  export type ProfileShowUpdateWithWhereUniqueWithoutUser2Input = {
    where: ProfileShowWhereUniqueInput
    data: XOR<ProfileShowUpdateWithoutUser2Input, ProfileShowUncheckedUpdateWithoutUser2Input>
  }

  export type ProfileShowUpdateManyWithWhereWithoutUser2Input = {
    where: ProfileShowScalarWhereInput
    data: XOR<ProfileShowUpdateManyMutationInput, ProfileShowUncheckedUpdateManyWithoutUser2Input>
  }

  export type SkillUpsertWithWhereUniqueWithoutUserInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutUserInput, SkillUncheckedUpdateWithoutUserInput>
    create: XOR<SkillCreateWithoutUserInput, SkillUncheckedCreateWithoutUserInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutUserInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutUserInput, SkillUncheckedUpdateWithoutUserInput>
  }

  export type SkillUpdateManyWithWhereWithoutUserInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutUserInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    level?: IntFilter<"Skill"> | number
    userId?: StringFilter<"Skill"> | string
  }

  export type CompanyAdminUpsertWithWhereUniqueWithoutUserInput = {
    where: CompanyAdminWhereUniqueInput
    update: XOR<CompanyAdminUpdateWithoutUserInput, CompanyAdminUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyAdminCreateWithoutUserInput, CompanyAdminUncheckedCreateWithoutUserInput>
  }

  export type CompanyAdminUpdateWithWhereUniqueWithoutUserInput = {
    where: CompanyAdminWhereUniqueInput
    data: XOR<CompanyAdminUpdateWithoutUserInput, CompanyAdminUncheckedUpdateWithoutUserInput>
  }

  export type CompanyAdminUpdateManyWithWhereWithoutUserInput = {
    where: CompanyAdminScalarWhereInput
    data: XOR<CompanyAdminUpdateManyMutationInput, CompanyAdminUncheckedUpdateManyWithoutUserInput>
  }

  export type CompanyAdminScalarWhereInput = {
    AND?: CompanyAdminScalarWhereInput | CompanyAdminScalarWhereInput[]
    OR?: CompanyAdminScalarWhereInput[]
    NOT?: CompanyAdminScalarWhereInput | CompanyAdminScalarWhereInput[]
    id?: StringFilter<"CompanyAdmin"> | string
    role?: StringFilter<"CompanyAdmin"> | string
    companyId?: StringFilter<"CompanyAdmin"> | string
    userId?: StringFilter<"CompanyAdmin"> | string
  }

  export type formationUpsertWithWhereUniqueWithoutUserInput = {
    where: formationWhereUniqueInput
    update: XOR<formationUpdateWithoutUserInput, formationUncheckedUpdateWithoutUserInput>
    create: XOR<formationCreateWithoutUserInput, formationUncheckedCreateWithoutUserInput>
  }

  export type formationUpdateWithWhereUniqueWithoutUserInput = {
    where: formationWhereUniqueInput
    data: XOR<formationUpdateWithoutUserInput, formationUncheckedUpdateWithoutUserInput>
  }

  export type formationUpdateManyWithWhereWithoutUserInput = {
    where: formationScalarWhereInput
    data: XOR<formationUpdateManyMutationInput, formationUncheckedUpdateManyWithoutUserInput>
  }

  export type formationScalarWhereInput = {
    AND?: formationScalarWhereInput | formationScalarWhereInput[]
    OR?: formationScalarWhereInput[]
    NOT?: formationScalarWhereInput | formationScalarWhereInput[]
    id?: StringFilter<"formation"> | string
    name?: StringFilter<"formation"> | string
    startDate?: DateTimeFilter<"formation"> | Date | string
    endDate?: DateTimeNullableFilter<"formation"> | Date | string | null
    description?: StringNullableFilter<"formation"> | string | null
    companyId?: StringNullableFilter<"formation"> | string | null
    userId?: StringFilter<"formation"> | string
  }

  export type ExperienceUpsertWithWhereUniqueWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutUserInput, ExperienceUncheckedUpdateWithoutUserInput>
    create: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutUserInput, ExperienceUncheckedUpdateWithoutUserInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutUserInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutUserInput>
  }

  export type ExperienceScalarWhereInput = {
    AND?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    OR?: ExperienceScalarWhereInput[]
    NOT?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    id?: StringFilter<"Experience"> | string
    name?: StringFilter<"Experience"> | string
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    description?: StringNullableFilter<"Experience"> | string | null
    companyId?: StringNullableFilter<"Experience"> | string | null
    userId?: StringFilter<"Experience"> | string
  }

  export type WriterUpsertWithWhereUniqueWithoutUserInput = {
    where: WriterWhereUniqueInput
    update: XOR<WriterUpdateWithoutUserInput, WriterUncheckedUpdateWithoutUserInput>
    create: XOR<WriterCreateWithoutUserInput, WriterUncheckedCreateWithoutUserInput>
  }

  export type WriterUpdateWithWhereUniqueWithoutUserInput = {
    where: WriterWhereUniqueInput
    data: XOR<WriterUpdateWithoutUserInput, WriterUncheckedUpdateWithoutUserInput>
  }

  export type WriterUpdateManyWithWhereWithoutUserInput = {
    where: WriterScalarWhereInput
    data: XOR<WriterUpdateManyMutationInput, WriterUncheckedUpdateManyWithoutUserInput>
  }

  export type WriterScalarWhereInput = {
    AND?: WriterScalarWhereInput | WriterScalarWhereInput[]
    OR?: WriterScalarWhereInput[]
    NOT?: WriterScalarWhereInput | WriterScalarWhereInput[]
    id?: StringFilter<"Writer"> | string
    userId?: StringNullableFilter<"Writer"> | string | null
    companyId?: StringNullableFilter<"Writer"> | string | null
  }

  export type CompanyAdminCreateWithoutCompanyInput = {
    id?: string
    role: string
    user: UserCreateNestedOneWithoutCompanyAdminInput
  }

  export type CompanyAdminUncheckedCreateWithoutCompanyInput = {
    id?: string
    role: string
    userId: string
  }

  export type CompanyAdminCreateOrConnectWithoutCompanyInput = {
    where: CompanyAdminWhereUniqueInput
    create: XOR<CompanyAdminCreateWithoutCompanyInput, CompanyAdminUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyAdminCreateManyCompanyInputEnvelope = {
    data: CompanyAdminCreateManyCompanyInput | CompanyAdminCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type formationCreateWithoutCompanyInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    user: UserCreateNestedOneWithoutFormationInput
  }

  export type formationUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    userId: string
  }

  export type formationCreateOrConnectWithoutCompanyInput = {
    where: formationWhereUniqueInput
    create: XOR<formationCreateWithoutCompanyInput, formationUncheckedCreateWithoutCompanyInput>
  }

  export type formationCreateManyCompanyInputEnvelope = {
    data: formationCreateManyCompanyInput | formationCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ExperienceCreateWithoutCompanyInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    user: UserCreateNestedOneWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    userId: string
  }

  export type ExperienceCreateOrConnectWithoutCompanyInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutCompanyInput, ExperienceUncheckedCreateWithoutCompanyInput>
  }

  export type ExperienceCreateManyCompanyInputEnvelope = {
    data: ExperienceCreateManyCompanyInput | ExperienceCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type WriterCreateWithoutCompanyInput = {
    id?: string
    user?: UserCreateNestedOneWithoutWriterInput
    Post?: PostCreateNestedManyWithoutWriterInput
    Vote?: VoteCreateNestedManyWithoutWriterInput
    Comment?: CommentCreateNestedManyWithoutWriterInput
  }

  export type WriterUncheckedCreateWithoutCompanyInput = {
    id?: string
    userId?: string | null
    Post?: PostUncheckedCreateNestedManyWithoutWriterInput
    Vote?: VoteUncheckedCreateNestedManyWithoutWriterInput
    Comment?: CommentUncheckedCreateNestedManyWithoutWriterInput
  }

  export type WriterCreateOrConnectWithoutCompanyInput = {
    where: WriterWhereUniqueInput
    create: XOR<WriterCreateWithoutCompanyInput, WriterUncheckedCreateWithoutCompanyInput>
  }

  export type WriterCreateManyCompanyInputEnvelope = {
    data: WriterCreateManyCompanyInput | WriterCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CompanyAdminUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompanyAdminWhereUniqueInput
    update: XOR<CompanyAdminUpdateWithoutCompanyInput, CompanyAdminUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanyAdminCreateWithoutCompanyInput, CompanyAdminUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyAdminUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompanyAdminWhereUniqueInput
    data: XOR<CompanyAdminUpdateWithoutCompanyInput, CompanyAdminUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanyAdminUpdateManyWithWhereWithoutCompanyInput = {
    where: CompanyAdminScalarWhereInput
    data: XOR<CompanyAdminUpdateManyMutationInput, CompanyAdminUncheckedUpdateManyWithoutCompanyInput>
  }

  export type formationUpsertWithWhereUniqueWithoutCompanyInput = {
    where: formationWhereUniqueInput
    update: XOR<formationUpdateWithoutCompanyInput, formationUncheckedUpdateWithoutCompanyInput>
    create: XOR<formationCreateWithoutCompanyInput, formationUncheckedCreateWithoutCompanyInput>
  }

  export type formationUpdateWithWhereUniqueWithoutCompanyInput = {
    where: formationWhereUniqueInput
    data: XOR<formationUpdateWithoutCompanyInput, formationUncheckedUpdateWithoutCompanyInput>
  }

  export type formationUpdateManyWithWhereWithoutCompanyInput = {
    where: formationScalarWhereInput
    data: XOR<formationUpdateManyMutationInput, formationUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ExperienceUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutCompanyInput, ExperienceUncheckedUpdateWithoutCompanyInput>
    create: XOR<ExperienceCreateWithoutCompanyInput, ExperienceUncheckedCreateWithoutCompanyInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutCompanyInput, ExperienceUncheckedUpdateWithoutCompanyInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutCompanyInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutCompanyInput>
  }

  export type WriterUpsertWithWhereUniqueWithoutCompanyInput = {
    where: WriterWhereUniqueInput
    update: XOR<WriterUpdateWithoutCompanyInput, WriterUncheckedUpdateWithoutCompanyInput>
    create: XOR<WriterCreateWithoutCompanyInput, WriterUncheckedCreateWithoutCompanyInput>
  }

  export type WriterUpdateWithWhereUniqueWithoutCompanyInput = {
    where: WriterWhereUniqueInput
    data: XOR<WriterUpdateWithoutCompanyInput, WriterUncheckedUpdateWithoutCompanyInput>
  }

  export type WriterUpdateManyWithWhereWithoutCompanyInput = {
    where: WriterScalarWhereInput
    data: XOR<WriterUpdateManyMutationInput, WriterUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserCreateWithoutWriterInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    account?: AccountCreateNestedManyWithoutUserInput
    relations?: RelationCreateNestedManyWithoutUserInput
    relatedBy?: RelationCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowCreateNestedManyWithoutUser2Input
    skill?: SkillCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminCreateNestedManyWithoutUserInput
    formation?: formationCreateNestedManyWithoutUserInput
    Experience?: ExperienceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWriterInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    account?: AccountUncheckedCreateNestedManyWithoutUserInput
    relations?: RelationUncheckedCreateNestedManyWithoutUserInput
    relatedBy?: RelationUncheckedCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowUncheckedCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowUncheckedCreateNestedManyWithoutUser2Input
    skill?: SkillUncheckedCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminUncheckedCreateNestedManyWithoutUserInput
    formation?: formationUncheckedCreateNestedManyWithoutUserInput
    Experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWriterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWriterInput, UserUncheckedCreateWithoutWriterInput>
  }

  export type CompanyCreateWithoutWriterInput = {
    id?: string
    name: string
    activity?: string | null
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    companyAdmin?: CompanyAdminCreateNestedManyWithoutCompanyInput
    formation?: formationCreateNestedManyWithoutCompanyInput
    Experience?: ExperienceCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutWriterInput = {
    id?: string
    name: string
    activity?: string | null
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    companyAdmin?: CompanyAdminUncheckedCreateNestedManyWithoutCompanyInput
    formation?: formationUncheckedCreateNestedManyWithoutCompanyInput
    Experience?: ExperienceUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutWriterInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutWriterInput, CompanyUncheckedCreateWithoutWriterInput>
  }

  export type PostCreateWithoutWriterInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reactionId?: string | null
    media?: MediaCreateNestedManyWithoutPostInput
    Comment?: CommentCreateNestedManyWithoutPostInput
    Vote?: VoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutWriterInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reactionId?: string | null
    media?: MediaUncheckedCreateNestedManyWithoutPostInput
    Comment?: CommentUncheckedCreateNestedManyWithoutPostInput
    Vote?: VoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutWriterInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutWriterInput, PostUncheckedCreateWithoutWriterInput>
  }

  export type PostCreateManyWriterInputEnvelope = {
    data: PostCreateManyWriterInput | PostCreateManyWriterInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutWriterInput = {
    id?: string
    post?: PostCreateNestedOneWithoutVoteInput
  }

  export type VoteUncheckedCreateWithoutWriterInput = {
    id?: string
    postId: string
  }

  export type VoteCreateOrConnectWithoutWriterInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutWriterInput, VoteUncheckedCreateWithoutWriterInput>
  }

  export type VoteCreateManyWriterInputEnvelope = {
    data: VoteCreateManyWriterInput | VoteCreateManyWriterInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutWriterInput = {
    id?: string
    content: string
    createdAt?: Date | string
    votes?: number | null
    post?: PostCreateNestedOneWithoutCommentInput
    comment?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutWriterInput = {
    id?: string
    content: string
    createdAt?: Date | string
    votes?: number | null
    postId?: string | null
    commentId?: string | null
    replies?: CommentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutWriterInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutWriterInput, CommentUncheckedCreateWithoutWriterInput>
  }

  export type CommentCreateManyWriterInputEnvelope = {
    data: CommentCreateManyWriterInput | CommentCreateManyWriterInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWriterInput = {
    update: XOR<UserUpdateWithoutWriterInput, UserUncheckedUpdateWithoutWriterInput>
    create: XOR<UserCreateWithoutWriterInput, UserUncheckedCreateWithoutWriterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWriterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWriterInput, UserUncheckedUpdateWithoutWriterInput>
  }

  export type UserUpdateWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    account?: AccountUpdateManyWithoutUserNestedInput
    relations?: RelationUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUpdateManyWithoutUser2NestedInput
    skill?: SkillUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUpdateManyWithoutUserNestedInput
    formation?: formationUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    relations?: RelationUncheckedUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUncheckedUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUncheckedUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUncheckedUpdateManyWithoutUser2NestedInput
    skill?: SkillUncheckedUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUncheckedUpdateManyWithoutUserNestedInput
    formation?: formationUncheckedUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompanyUpsertWithoutWriterInput = {
    update: XOR<CompanyUpdateWithoutWriterInput, CompanyUncheckedUpdateWithoutWriterInput>
    create: XOR<CompanyCreateWithoutWriterInput, CompanyUncheckedCreateWithoutWriterInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutWriterInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutWriterInput, CompanyUncheckedUpdateWithoutWriterInput>
  }

  export type CompanyUpdateWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyAdmin?: CompanyAdminUpdateManyWithoutCompanyNestedInput
    formation?: formationUpdateManyWithoutCompanyNestedInput
    Experience?: ExperienceUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyAdmin?: CompanyAdminUncheckedUpdateManyWithoutCompanyNestedInput
    formation?: formationUncheckedUpdateManyWithoutCompanyNestedInput
    Experience?: ExperienceUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutWriterInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutWriterInput, PostUncheckedUpdateWithoutWriterInput>
    create: XOR<PostCreateWithoutWriterInput, PostUncheckedCreateWithoutWriterInput>
  }

  export type PostUpdateWithWhereUniqueWithoutWriterInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutWriterInput, PostUncheckedUpdateWithoutWriterInput>
  }

  export type PostUpdateManyWithWhereWithoutWriterInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutWriterInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    content?: StringFilter<"Post"> | string
    reactionId?: StringNullableFilter<"Post"> | string | null
    writerId?: StringFilter<"Post"> | string
  }

  export type VoteUpsertWithWhereUniqueWithoutWriterInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutWriterInput, VoteUncheckedUpdateWithoutWriterInput>
    create: XOR<VoteCreateWithoutWriterInput, VoteUncheckedCreateWithoutWriterInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutWriterInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutWriterInput, VoteUncheckedUpdateWithoutWriterInput>
  }

  export type VoteUpdateManyWithWhereWithoutWriterInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutWriterInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id?: StringFilter<"Vote"> | string
    writerId?: StringFilter<"Vote"> | string
    postId?: StringFilter<"Vote"> | string
  }

  export type CommentUpsertWithWhereUniqueWithoutWriterInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutWriterInput, CommentUncheckedUpdateWithoutWriterInput>
    create: XOR<CommentCreateWithoutWriterInput, CommentUncheckedCreateWithoutWriterInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutWriterInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutWriterInput, CommentUncheckedUpdateWithoutWriterInput>
  }

  export type CommentUpdateManyWithWhereWithoutWriterInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutWriterInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    votes?: IntNullableFilter<"Comment"> | number | null
    postId?: StringNullableFilter<"Comment"> | string | null
    commentId?: StringNullableFilter<"Comment"> | string | null
    writerId?: StringFilter<"Comment"> | string
  }

  export type CompanyCreateWithoutFormationInput = {
    id?: string
    name: string
    activity?: string | null
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    companyAdmin?: CompanyAdminCreateNestedManyWithoutCompanyInput
    Experience?: ExperienceCreateNestedManyWithoutCompanyInput
    Writer?: WriterCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutFormationInput = {
    id?: string
    name: string
    activity?: string | null
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    companyAdmin?: CompanyAdminUncheckedCreateNestedManyWithoutCompanyInput
    Experience?: ExperienceUncheckedCreateNestedManyWithoutCompanyInput
    Writer?: WriterUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutFormationInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutFormationInput, CompanyUncheckedCreateWithoutFormationInput>
  }

  export type UserCreateWithoutFormationInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    account?: AccountCreateNestedManyWithoutUserInput
    relations?: RelationCreateNestedManyWithoutUserInput
    relatedBy?: RelationCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowCreateNestedManyWithoutUser2Input
    skill?: SkillCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminCreateNestedManyWithoutUserInput
    Experience?: ExperienceCreateNestedManyWithoutUserInput
    Writer?: WriterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFormationInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    account?: AccountUncheckedCreateNestedManyWithoutUserInput
    relations?: RelationUncheckedCreateNestedManyWithoutUserInput
    relatedBy?: RelationUncheckedCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowUncheckedCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowUncheckedCreateNestedManyWithoutUser2Input
    skill?: SkillUncheckedCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminUncheckedCreateNestedManyWithoutUserInput
    Experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    Writer?: WriterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFormationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFormationInput, UserUncheckedCreateWithoutFormationInput>
  }

  export type CompanyUpsertWithoutFormationInput = {
    update: XOR<CompanyUpdateWithoutFormationInput, CompanyUncheckedUpdateWithoutFormationInput>
    create: XOR<CompanyCreateWithoutFormationInput, CompanyUncheckedCreateWithoutFormationInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutFormationInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutFormationInput, CompanyUncheckedUpdateWithoutFormationInput>
  }

  export type CompanyUpdateWithoutFormationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyAdmin?: CompanyAdminUpdateManyWithoutCompanyNestedInput
    Experience?: ExperienceUpdateManyWithoutCompanyNestedInput
    Writer?: WriterUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutFormationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyAdmin?: CompanyAdminUncheckedUpdateManyWithoutCompanyNestedInput
    Experience?: ExperienceUncheckedUpdateManyWithoutCompanyNestedInput
    Writer?: WriterUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithoutFormationInput = {
    update: XOR<UserUpdateWithoutFormationInput, UserUncheckedUpdateWithoutFormationInput>
    create: XOR<UserCreateWithoutFormationInput, UserUncheckedCreateWithoutFormationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFormationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFormationInput, UserUncheckedUpdateWithoutFormationInput>
  }

  export type UserUpdateWithoutFormationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    account?: AccountUpdateManyWithoutUserNestedInput
    relations?: RelationUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUpdateManyWithoutUser2NestedInput
    skill?: SkillUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUpdateManyWithoutUserNestedInput
    Writer?: WriterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFormationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    relations?: RelationUncheckedUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUncheckedUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUncheckedUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUncheckedUpdateManyWithoutUser2NestedInput
    skill?: SkillUncheckedUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUncheckedUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    Writer?: WriterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CompanyCreateWithoutExperienceInput = {
    id?: string
    name: string
    activity?: string | null
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    companyAdmin?: CompanyAdminCreateNestedManyWithoutCompanyInput
    formation?: formationCreateNestedManyWithoutCompanyInput
    Writer?: WriterCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutExperienceInput = {
    id?: string
    name: string
    activity?: string | null
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    companyAdmin?: CompanyAdminUncheckedCreateNestedManyWithoutCompanyInput
    formation?: formationUncheckedCreateNestedManyWithoutCompanyInput
    Writer?: WriterUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutExperienceInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutExperienceInput, CompanyUncheckedCreateWithoutExperienceInput>
  }

  export type UserCreateWithoutExperienceInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    account?: AccountCreateNestedManyWithoutUserInput
    relations?: RelationCreateNestedManyWithoutUserInput
    relatedBy?: RelationCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowCreateNestedManyWithoutUser2Input
    skill?: SkillCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminCreateNestedManyWithoutUserInput
    formation?: formationCreateNestedManyWithoutUserInput
    Writer?: WriterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExperienceInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    account?: AccountUncheckedCreateNestedManyWithoutUserInput
    relations?: RelationUncheckedCreateNestedManyWithoutUserInput
    relatedBy?: RelationUncheckedCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowUncheckedCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowUncheckedCreateNestedManyWithoutUser2Input
    skill?: SkillUncheckedCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminUncheckedCreateNestedManyWithoutUserInput
    formation?: formationUncheckedCreateNestedManyWithoutUserInput
    Writer?: WriterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExperienceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExperienceInput, UserUncheckedCreateWithoutExperienceInput>
  }

  export type CompanyUpsertWithoutExperienceInput = {
    update: XOR<CompanyUpdateWithoutExperienceInput, CompanyUncheckedUpdateWithoutExperienceInput>
    create: XOR<CompanyCreateWithoutExperienceInput, CompanyUncheckedCreateWithoutExperienceInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutExperienceInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutExperienceInput, CompanyUncheckedUpdateWithoutExperienceInput>
  }

  export type CompanyUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyAdmin?: CompanyAdminUpdateManyWithoutCompanyNestedInput
    formation?: formationUpdateManyWithoutCompanyNestedInput
    Writer?: WriterUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyAdmin?: CompanyAdminUncheckedUpdateManyWithoutCompanyNestedInput
    formation?: formationUncheckedUpdateManyWithoutCompanyNestedInput
    Writer?: WriterUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithoutExperienceInput = {
    update: XOR<UserUpdateWithoutExperienceInput, UserUncheckedUpdateWithoutExperienceInput>
    create: XOR<UserCreateWithoutExperienceInput, UserUncheckedCreateWithoutExperienceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExperienceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExperienceInput, UserUncheckedUpdateWithoutExperienceInput>
  }

  export type UserUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    account?: AccountUpdateManyWithoutUserNestedInput
    relations?: RelationUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUpdateManyWithoutUser2NestedInput
    skill?: SkillUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUpdateManyWithoutUserNestedInput
    formation?: formationUpdateManyWithoutUserNestedInput
    Writer?: WriterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    relations?: RelationUncheckedUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUncheckedUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUncheckedUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUncheckedUpdateManyWithoutUser2NestedInput
    skill?: SkillUncheckedUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUncheckedUpdateManyWithoutUserNestedInput
    formation?: formationUncheckedUpdateManyWithoutUserNestedInput
    Writer?: WriterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WriterCreateWithoutPostInput = {
    id?: string
    user?: UserCreateNestedOneWithoutWriterInput
    company?: CompanyCreateNestedOneWithoutWriterInput
    Vote?: VoteCreateNestedManyWithoutWriterInput
    Comment?: CommentCreateNestedManyWithoutWriterInput
  }

  export type WriterUncheckedCreateWithoutPostInput = {
    id?: string
    userId?: string | null
    companyId?: string | null
    Vote?: VoteUncheckedCreateNestedManyWithoutWriterInput
    Comment?: CommentUncheckedCreateNestedManyWithoutWriterInput
  }

  export type WriterCreateOrConnectWithoutPostInput = {
    where: WriterWhereUniqueInput
    create: XOR<WriterCreateWithoutPostInput, WriterUncheckedCreateWithoutPostInput>
  }

  export type MediaCreateWithoutPostInput = {
    id?: string
    nom?: string | null
    url: string
    altText?: string | null
    description?: string | null
    type?: string | null
  }

  export type MediaUncheckedCreateWithoutPostInput = {
    id?: string
    nom?: string | null
    url: string
    altText?: string | null
    description?: string | null
    type?: string | null
  }

  export type MediaCreateOrConnectWithoutPostInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutPostInput, MediaUncheckedCreateWithoutPostInput>
  }

  export type MediaCreateManyPostInputEnvelope = {
    data: MediaCreateManyPostInput | MediaCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    content: string
    createdAt?: Date | string
    votes?: number | null
    writer: WriterCreateNestedOneWithoutCommentInput
    comment?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    content: string
    createdAt?: Date | string
    votes?: number | null
    commentId?: string | null
    writerId: string
    replies?: CommentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type VoteCreateWithoutPostInput = {
    id?: string
    writer: WriterCreateNestedOneWithoutVoteInput
  }

  export type VoteUncheckedCreateWithoutPostInput = {
    id?: string
    writerId: string
  }

  export type VoteCreateOrConnectWithoutPostInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput>
  }

  export type VoteCreateManyPostInputEnvelope = {
    data: VoteCreateManyPostInput | VoteCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type WriterUpsertWithoutPostInput = {
    update: XOR<WriterUpdateWithoutPostInput, WriterUncheckedUpdateWithoutPostInput>
    create: XOR<WriterCreateWithoutPostInput, WriterUncheckedCreateWithoutPostInput>
    where?: WriterWhereInput
  }

  export type WriterUpdateToOneWithWhereWithoutPostInput = {
    where?: WriterWhereInput
    data: XOR<WriterUpdateWithoutPostInput, WriterUncheckedUpdateWithoutPostInput>
  }

  export type WriterUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutWriterNestedInput
    company?: CompanyUpdateOneWithoutWriterNestedInput
    Vote?: VoteUpdateManyWithoutWriterNestedInput
    Comment?: CommentUpdateManyWithoutWriterNestedInput
  }

  export type WriterUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    Vote?: VoteUncheckedUpdateManyWithoutWriterNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutWriterNestedInput
  }

  export type MediaUpsertWithWhereUniqueWithoutPostInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutPostInput, MediaUncheckedUpdateWithoutPostInput>
    create: XOR<MediaCreateWithoutPostInput, MediaUncheckedCreateWithoutPostInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutPostInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutPostInput, MediaUncheckedUpdateWithoutPostInput>
  }

  export type MediaUpdateManyWithWhereWithoutPostInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutPostInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: StringFilter<"Media"> | string
    nom?: StringNullableFilter<"Media"> | string | null
    url?: StringFilter<"Media"> | string
    altText?: StringNullableFilter<"Media"> | string | null
    description?: StringNullableFilter<"Media"> | string | null
    type?: StringNullableFilter<"Media"> | string | null
    postId?: StringFilter<"Media"> | string
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type VoteUpsertWithWhereUniqueWithoutPostInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutPostInput, VoteUncheckedUpdateWithoutPostInput>
    create: XOR<VoteCreateWithoutPostInput, VoteUncheckedCreateWithoutPostInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutPostInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutPostInput, VoteUncheckedUpdateWithoutPostInput>
  }

  export type VoteUpdateManyWithWhereWithoutPostInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutPostInput>
  }

  export type WriterCreateWithoutVoteInput = {
    id?: string
    user?: UserCreateNestedOneWithoutWriterInput
    company?: CompanyCreateNestedOneWithoutWriterInput
    Post?: PostCreateNestedManyWithoutWriterInput
    Comment?: CommentCreateNestedManyWithoutWriterInput
  }

  export type WriterUncheckedCreateWithoutVoteInput = {
    id?: string
    userId?: string | null
    companyId?: string | null
    Post?: PostUncheckedCreateNestedManyWithoutWriterInput
    Comment?: CommentUncheckedCreateNestedManyWithoutWriterInput
  }

  export type WriterCreateOrConnectWithoutVoteInput = {
    where: WriterWhereUniqueInput
    create: XOR<WriterCreateWithoutVoteInput, WriterUncheckedCreateWithoutVoteInput>
  }

  export type PostCreateWithoutVoteInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reactionId?: string | null
    writer: WriterCreateNestedOneWithoutPostInput
    media?: MediaCreateNestedManyWithoutPostInput
    Comment?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutVoteInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reactionId?: string | null
    writerId: string
    media?: MediaUncheckedCreateNestedManyWithoutPostInput
    Comment?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutVoteInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutVoteInput, PostUncheckedCreateWithoutVoteInput>
  }

  export type WriterUpsertWithoutVoteInput = {
    update: XOR<WriterUpdateWithoutVoteInput, WriterUncheckedUpdateWithoutVoteInput>
    create: XOR<WriterCreateWithoutVoteInput, WriterUncheckedCreateWithoutVoteInput>
    where?: WriterWhereInput
  }

  export type WriterUpdateToOneWithWhereWithoutVoteInput = {
    where?: WriterWhereInput
    data: XOR<WriterUpdateWithoutVoteInput, WriterUncheckedUpdateWithoutVoteInput>
  }

  export type WriterUpdateWithoutVoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutWriterNestedInput
    company?: CompanyUpdateOneWithoutWriterNestedInput
    Post?: PostUpdateManyWithoutWriterNestedInput
    Comment?: CommentUpdateManyWithoutWriterNestedInput
  }

  export type WriterUncheckedUpdateWithoutVoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    Post?: PostUncheckedUpdateManyWithoutWriterNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutWriterNestedInput
  }

  export type PostUpsertWithoutVoteInput = {
    update: XOR<PostUpdateWithoutVoteInput, PostUncheckedUpdateWithoutVoteInput>
    create: XOR<PostCreateWithoutVoteInput, PostUncheckedCreateWithoutVoteInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutVoteInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutVoteInput, PostUncheckedUpdateWithoutVoteInput>
  }

  export type PostUpdateWithoutVoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reactionId?: NullableStringFieldUpdateOperationsInput | string | null
    writer?: WriterUpdateOneRequiredWithoutPostNestedInput
    media?: MediaUpdateManyWithoutPostNestedInput
    Comment?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutVoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reactionId?: NullableStringFieldUpdateOperationsInput | string | null
    writerId?: StringFieldUpdateOperationsInput | string
    media?: MediaUncheckedUpdateManyWithoutPostNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutMediaInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reactionId?: string | null
    writer: WriterCreateNestedOneWithoutPostInput
    Comment?: CommentCreateNestedManyWithoutPostInput
    Vote?: VoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutMediaInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reactionId?: string | null
    writerId: string
    Comment?: CommentUncheckedCreateNestedManyWithoutPostInput
    Vote?: VoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutMediaInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutMediaInput, PostUncheckedCreateWithoutMediaInput>
  }

  export type PostUpsertWithoutMediaInput = {
    update: XOR<PostUpdateWithoutMediaInput, PostUncheckedUpdateWithoutMediaInput>
    create: XOR<PostCreateWithoutMediaInput, PostUncheckedCreateWithoutMediaInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutMediaInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutMediaInput, PostUncheckedUpdateWithoutMediaInput>
  }

  export type PostUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reactionId?: NullableStringFieldUpdateOperationsInput | string | null
    writer?: WriterUpdateOneRequiredWithoutPostNestedInput
    Comment?: CommentUpdateManyWithoutPostNestedInput
    Vote?: VoteUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reactionId?: NullableStringFieldUpdateOperationsInput | string | null
    writerId?: StringFieldUpdateOperationsInput | string
    Comment?: CommentUncheckedUpdateManyWithoutPostNestedInput
    Vote?: VoteUncheckedUpdateManyWithoutPostNestedInput
  }

  export type WriterCreateWithoutCommentInput = {
    id?: string
    user?: UserCreateNestedOneWithoutWriterInput
    company?: CompanyCreateNestedOneWithoutWriterInput
    Post?: PostCreateNestedManyWithoutWriterInput
    Vote?: VoteCreateNestedManyWithoutWriterInput
  }

  export type WriterUncheckedCreateWithoutCommentInput = {
    id?: string
    userId?: string | null
    companyId?: string | null
    Post?: PostUncheckedCreateNestedManyWithoutWriterInput
    Vote?: VoteUncheckedCreateNestedManyWithoutWriterInput
  }

  export type WriterCreateOrConnectWithoutCommentInput = {
    where: WriterWhereUniqueInput
    create: XOR<WriterCreateWithoutCommentInput, WriterUncheckedCreateWithoutCommentInput>
  }

  export type PostCreateWithoutCommentInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reactionId?: string | null
    writer: WriterCreateNestedOneWithoutPostInput
    media?: MediaCreateNestedManyWithoutPostInput
    Vote?: VoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reactionId?: string | null
    writerId: string
    media?: MediaUncheckedCreateNestedManyWithoutPostInput
    Vote?: VoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentInput, PostUncheckedCreateWithoutCommentInput>
  }

  export type CommentCreateWithoutRepliesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    votes?: number | null
    writer: WriterCreateNestedOneWithoutCommentInput
    post?: PostCreateNestedOneWithoutCommentInput
    comment?: CommentCreateNestedOneWithoutRepliesInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    votes?: number | null
    postId?: string | null
    commentId?: string | null
    writerId: string
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutCommentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    votes?: number | null
    writer: WriterCreateNestedOneWithoutCommentInput
    post?: PostCreateNestedOneWithoutCommentInput
    replies?: CommentCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutCommentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    votes?: number | null
    postId?: string | null
    writerId: string
    replies?: CommentUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutCommentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutCommentInput, CommentUncheckedCreateWithoutCommentInput>
  }

  export type CommentCreateManyCommentInputEnvelope = {
    data: CommentCreateManyCommentInput | CommentCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type WriterUpsertWithoutCommentInput = {
    update: XOR<WriterUpdateWithoutCommentInput, WriterUncheckedUpdateWithoutCommentInput>
    create: XOR<WriterCreateWithoutCommentInput, WriterUncheckedCreateWithoutCommentInput>
    where?: WriterWhereInput
  }

  export type WriterUpdateToOneWithWhereWithoutCommentInput = {
    where?: WriterWhereInput
    data: XOR<WriterUpdateWithoutCommentInput, WriterUncheckedUpdateWithoutCommentInput>
  }

  export type WriterUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutWriterNestedInput
    company?: CompanyUpdateOneWithoutWriterNestedInput
    Post?: PostUpdateManyWithoutWriterNestedInput
    Vote?: VoteUpdateManyWithoutWriterNestedInput
  }

  export type WriterUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    Post?: PostUncheckedUpdateManyWithoutWriterNestedInput
    Vote?: VoteUncheckedUpdateManyWithoutWriterNestedInput
  }

  export type PostUpsertWithoutCommentInput = {
    update: XOR<PostUpdateWithoutCommentInput, PostUncheckedUpdateWithoutCommentInput>
    create: XOR<PostCreateWithoutCommentInput, PostUncheckedCreateWithoutCommentInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentInput, PostUncheckedUpdateWithoutCommentInput>
  }

  export type PostUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reactionId?: NullableStringFieldUpdateOperationsInput | string | null
    writer?: WriterUpdateOneRequiredWithoutPostNestedInput
    media?: MediaUpdateManyWithoutPostNestedInput
    Vote?: VoteUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reactionId?: NullableStringFieldUpdateOperationsInput | string | null
    writerId?: StringFieldUpdateOperationsInput | string
    media?: MediaUncheckedUpdateManyWithoutPostNestedInput
    Vote?: VoteUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    writer?: WriterUpdateOneRequiredWithoutCommentNestedInput
    post?: PostUpdateOneWithoutCommentNestedInput
    comment?: CommentUpdateOneWithoutRepliesNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    writerId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpsertWithWhereUniqueWithoutCommentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutCommentInput, CommentUncheckedUpdateWithoutCommentInput>
    create: XOR<CommentCreateWithoutCommentInput, CommentUncheckedCreateWithoutCommentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutCommentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutCommentInput, CommentUncheckedUpdateWithoutCommentInput>
  }

  export type CommentUpdateManyWithWhereWithoutCommentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCommentInput>
  }

  export type CompanyCreateWithoutCompanyAdminInput = {
    id?: string
    name: string
    activity?: string | null
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    formation?: formationCreateNestedManyWithoutCompanyInput
    Experience?: ExperienceCreateNestedManyWithoutCompanyInput
    Writer?: WriterCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutCompanyAdminInput = {
    id?: string
    name: string
    activity?: string | null
    image?: string | null
    description?: string | null
    createdAt?: Date | string
    formation?: formationUncheckedCreateNestedManyWithoutCompanyInput
    Experience?: ExperienceUncheckedCreateNestedManyWithoutCompanyInput
    Writer?: WriterUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutCompanyAdminInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutCompanyAdminInput, CompanyUncheckedCreateWithoutCompanyAdminInput>
  }

  export type UserCreateWithoutCompanyAdminInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    account?: AccountCreateNestedManyWithoutUserInput
    relations?: RelationCreateNestedManyWithoutUserInput
    relatedBy?: RelationCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowCreateNestedManyWithoutUser2Input
    skill?: SkillCreateNestedManyWithoutUserInput
    formation?: formationCreateNestedManyWithoutUserInput
    Experience?: ExperienceCreateNestedManyWithoutUserInput
    Writer?: WriterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyAdminInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    account?: AccountUncheckedCreateNestedManyWithoutUserInput
    relations?: RelationUncheckedCreateNestedManyWithoutUserInput
    relatedBy?: RelationUncheckedCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowUncheckedCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowUncheckedCreateNestedManyWithoutUser2Input
    skill?: SkillUncheckedCreateNestedManyWithoutUserInput
    formation?: formationUncheckedCreateNestedManyWithoutUserInput
    Experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    Writer?: WriterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyAdminInput, UserUncheckedCreateWithoutCompanyAdminInput>
  }

  export type CompanyUpsertWithoutCompanyAdminInput = {
    update: XOR<CompanyUpdateWithoutCompanyAdminInput, CompanyUncheckedUpdateWithoutCompanyAdminInput>
    create: XOR<CompanyCreateWithoutCompanyAdminInput, CompanyUncheckedCreateWithoutCompanyAdminInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutCompanyAdminInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutCompanyAdminInput, CompanyUncheckedUpdateWithoutCompanyAdminInput>
  }

  export type CompanyUpdateWithoutCompanyAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formation?: formationUpdateManyWithoutCompanyNestedInput
    Experience?: ExperienceUpdateManyWithoutCompanyNestedInput
    Writer?: WriterUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutCompanyAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formation?: formationUncheckedUpdateManyWithoutCompanyNestedInput
    Experience?: ExperienceUncheckedUpdateManyWithoutCompanyNestedInput
    Writer?: WriterUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserUpsertWithoutCompanyAdminInput = {
    update: XOR<UserUpdateWithoutCompanyAdminInput, UserUncheckedUpdateWithoutCompanyAdminInput>
    create: XOR<UserCreateWithoutCompanyAdminInput, UserUncheckedCreateWithoutCompanyAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompanyAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompanyAdminInput, UserUncheckedUpdateWithoutCompanyAdminInput>
  }

  export type UserUpdateWithoutCompanyAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    account?: AccountUpdateManyWithoutUserNestedInput
    relations?: RelationUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUpdateManyWithoutUser2NestedInput
    skill?: SkillUpdateManyWithoutUserNestedInput
    formation?: formationUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUpdateManyWithoutUserNestedInput
    Writer?: WriterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    relations?: RelationUncheckedUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUncheckedUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUncheckedUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUncheckedUpdateManyWithoutUser2NestedInput
    skill?: SkillUncheckedUpdateManyWithoutUserNestedInput
    formation?: formationUncheckedUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    Writer?: WriterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSkillInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    account?: AccountCreateNestedManyWithoutUserInput
    relations?: RelationCreateNestedManyWithoutUserInput
    relatedBy?: RelationCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowCreateNestedManyWithoutUser2Input
    companyAdmin?: CompanyAdminCreateNestedManyWithoutUserInput
    formation?: formationCreateNestedManyWithoutUserInput
    Experience?: ExperienceCreateNestedManyWithoutUserInput
    Writer?: WriterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSkillInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    account?: AccountUncheckedCreateNestedManyWithoutUserInput
    relations?: RelationUncheckedCreateNestedManyWithoutUserInput
    relatedBy?: RelationUncheckedCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowUncheckedCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowUncheckedCreateNestedManyWithoutUser2Input
    companyAdmin?: CompanyAdminUncheckedCreateNestedManyWithoutUserInput
    formation?: formationUncheckedCreateNestedManyWithoutUserInput
    Experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    Writer?: WriterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSkillInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillInput, UserUncheckedCreateWithoutSkillInput>
  }

  export type UserUpsertWithoutSkillInput = {
    update: XOR<UserUpdateWithoutSkillInput, UserUncheckedUpdateWithoutSkillInput>
    create: XOR<UserCreateWithoutSkillInput, UserUncheckedCreateWithoutSkillInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillInput, UserUncheckedUpdateWithoutSkillInput>
  }

  export type UserUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    account?: AccountUpdateManyWithoutUserNestedInput
    relations?: RelationUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUpdateManyWithoutUser2NestedInput
    companyAdmin?: CompanyAdminUpdateManyWithoutUserNestedInput
    formation?: formationUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUpdateManyWithoutUserNestedInput
    Writer?: WriterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    relations?: RelationUncheckedUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUncheckedUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUncheckedUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUncheckedUpdateManyWithoutUser2NestedInput
    companyAdmin?: CompanyAdminUncheckedUpdateManyWithoutUserNestedInput
    formation?: formationUncheckedUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    Writer?: WriterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRelationsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    account?: AccountCreateNestedManyWithoutUserInput
    relatedBy?: RelationCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowCreateNestedManyWithoutUser2Input
    skill?: SkillCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminCreateNestedManyWithoutUserInput
    formation?: formationCreateNestedManyWithoutUserInput
    Experience?: ExperienceCreateNestedManyWithoutUserInput
    Writer?: WriterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRelationsInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    account?: AccountUncheckedCreateNestedManyWithoutUserInput
    relatedBy?: RelationUncheckedCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowUncheckedCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowUncheckedCreateNestedManyWithoutUser2Input
    skill?: SkillUncheckedCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminUncheckedCreateNestedManyWithoutUserInput
    formation?: formationUncheckedCreateNestedManyWithoutUserInput
    Experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    Writer?: WriterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRelationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRelationsInput, UserUncheckedCreateWithoutRelationsInput>
  }

  export type UserCreateWithoutRelatedByInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    account?: AccountCreateNestedManyWithoutUserInput
    relations?: RelationCreateNestedManyWithoutUserInput
    ProfileShowAsUser1?: ProfileShowCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowCreateNestedManyWithoutUser2Input
    skill?: SkillCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminCreateNestedManyWithoutUserInput
    formation?: formationCreateNestedManyWithoutUserInput
    Experience?: ExperienceCreateNestedManyWithoutUserInput
    Writer?: WriterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRelatedByInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    account?: AccountUncheckedCreateNestedManyWithoutUserInput
    relations?: RelationUncheckedCreateNestedManyWithoutUserInput
    ProfileShowAsUser1?: ProfileShowUncheckedCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowUncheckedCreateNestedManyWithoutUser2Input
    skill?: SkillUncheckedCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminUncheckedCreateNestedManyWithoutUserInput
    formation?: formationUncheckedCreateNestedManyWithoutUserInput
    Experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    Writer?: WriterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRelatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRelatedByInput, UserUncheckedCreateWithoutRelatedByInput>
  }

  export type UserUpsertWithoutRelationsInput = {
    update: XOR<UserUpdateWithoutRelationsInput, UserUncheckedUpdateWithoutRelationsInput>
    create: XOR<UserCreateWithoutRelationsInput, UserUncheckedCreateWithoutRelationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRelationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRelationsInput, UserUncheckedUpdateWithoutRelationsInput>
  }

  export type UserUpdateWithoutRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    account?: AccountUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUpdateManyWithoutUser2NestedInput
    skill?: SkillUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUpdateManyWithoutUserNestedInput
    formation?: formationUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUpdateManyWithoutUserNestedInput
    Writer?: WriterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUncheckedUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUncheckedUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUncheckedUpdateManyWithoutUser2NestedInput
    skill?: SkillUncheckedUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUncheckedUpdateManyWithoutUserNestedInput
    formation?: formationUncheckedUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    Writer?: WriterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutRelatedByInput = {
    update: XOR<UserUpdateWithoutRelatedByInput, UserUncheckedUpdateWithoutRelatedByInput>
    create: XOR<UserCreateWithoutRelatedByInput, UserUncheckedCreateWithoutRelatedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRelatedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRelatedByInput, UserUncheckedUpdateWithoutRelatedByInput>
  }

  export type UserUpdateWithoutRelatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    account?: AccountUpdateManyWithoutUserNestedInput
    relations?: RelationUpdateManyWithoutUserNestedInput
    ProfileShowAsUser1?: ProfileShowUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUpdateManyWithoutUser2NestedInput
    skill?: SkillUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUpdateManyWithoutUserNestedInput
    formation?: formationUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUpdateManyWithoutUserNestedInput
    Writer?: WriterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRelatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    relations?: RelationUncheckedUpdateManyWithoutUserNestedInput
    ProfileShowAsUser1?: ProfileShowUncheckedUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUncheckedUpdateManyWithoutUser2NestedInput
    skill?: SkillUncheckedUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUncheckedUpdateManyWithoutUserNestedInput
    formation?: formationUncheckedUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    Writer?: WriterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProfileShowAsUser1Input = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    account?: AccountCreateNestedManyWithoutUserInput
    relations?: RelationCreateNestedManyWithoutUserInput
    relatedBy?: RelationCreateNestedManyWithoutRelationInput
    ProfileShowAsUser2?: ProfileShowCreateNestedManyWithoutUser2Input
    skill?: SkillCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminCreateNestedManyWithoutUserInput
    formation?: formationCreateNestedManyWithoutUserInput
    Experience?: ExperienceCreateNestedManyWithoutUserInput
    Writer?: WriterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileShowAsUser1Input = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    account?: AccountUncheckedCreateNestedManyWithoutUserInput
    relations?: RelationUncheckedCreateNestedManyWithoutUserInput
    relatedBy?: RelationUncheckedCreateNestedManyWithoutRelationInput
    ProfileShowAsUser2?: ProfileShowUncheckedCreateNestedManyWithoutUser2Input
    skill?: SkillUncheckedCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminUncheckedCreateNestedManyWithoutUserInput
    formation?: formationUncheckedCreateNestedManyWithoutUserInput
    Experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    Writer?: WriterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileShowAsUser1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileShowAsUser1Input, UserUncheckedCreateWithoutProfileShowAsUser1Input>
  }

  export type UserCreateWithoutProfileShowAsUser2Input = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    account?: AccountCreateNestedManyWithoutUserInput
    relations?: RelationCreateNestedManyWithoutUserInput
    relatedBy?: RelationCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowCreateNestedManyWithoutUser1Input
    skill?: SkillCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminCreateNestedManyWithoutUserInput
    formation?: formationCreateNestedManyWithoutUserInput
    Experience?: ExperienceCreateNestedManyWithoutUserInput
    Writer?: WriterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileShowAsUser2Input = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    account?: AccountUncheckedCreateNestedManyWithoutUserInput
    relations?: RelationUncheckedCreateNestedManyWithoutUserInput
    relatedBy?: RelationUncheckedCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowUncheckedCreateNestedManyWithoutUser1Input
    skill?: SkillUncheckedCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminUncheckedCreateNestedManyWithoutUserInput
    formation?: formationUncheckedCreateNestedManyWithoutUserInput
    Experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    Writer?: WriterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileShowAsUser2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileShowAsUser2Input, UserUncheckedCreateWithoutProfileShowAsUser2Input>
  }

  export type UserUpsertWithoutProfileShowAsUser1Input = {
    update: XOR<UserUpdateWithoutProfileShowAsUser1Input, UserUncheckedUpdateWithoutProfileShowAsUser1Input>
    create: XOR<UserCreateWithoutProfileShowAsUser1Input, UserUncheckedCreateWithoutProfileShowAsUser1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileShowAsUser1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileShowAsUser1Input, UserUncheckedUpdateWithoutProfileShowAsUser1Input>
  }

  export type UserUpdateWithoutProfileShowAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    account?: AccountUpdateManyWithoutUserNestedInput
    relations?: RelationUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser2?: ProfileShowUpdateManyWithoutUser2NestedInput
    skill?: SkillUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUpdateManyWithoutUserNestedInput
    formation?: formationUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUpdateManyWithoutUserNestedInput
    Writer?: WriterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileShowAsUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    relations?: RelationUncheckedUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUncheckedUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser2?: ProfileShowUncheckedUpdateManyWithoutUser2NestedInput
    skill?: SkillUncheckedUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUncheckedUpdateManyWithoutUserNestedInput
    formation?: formationUncheckedUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    Writer?: WriterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutProfileShowAsUser2Input = {
    update: XOR<UserUpdateWithoutProfileShowAsUser2Input, UserUncheckedUpdateWithoutProfileShowAsUser2Input>
    create: XOR<UserCreateWithoutProfileShowAsUser2Input, UserUncheckedCreateWithoutProfileShowAsUser2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileShowAsUser2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileShowAsUser2Input, UserUncheckedUpdateWithoutProfileShowAsUser2Input>
  }

  export type UserUpdateWithoutProfileShowAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    account?: AccountUpdateManyWithoutUserNestedInput
    relations?: RelationUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUpdateManyWithoutUser1NestedInput
    skill?: SkillUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUpdateManyWithoutUserNestedInput
    formation?: formationUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUpdateManyWithoutUserNestedInput
    Writer?: WriterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileShowAsUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    relations?: RelationUncheckedUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUncheckedUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUncheckedUpdateManyWithoutUser1NestedInput
    skill?: SkillUncheckedUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUncheckedUpdateManyWithoutUserNestedInput
    formation?: formationUncheckedUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    Writer?: WriterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedManyWithoutUserInput
    relations?: RelationCreateNestedManyWithoutUserInput
    relatedBy?: RelationCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowCreateNestedManyWithoutUser2Input
    skill?: SkillCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminCreateNestedManyWithoutUserInput
    formation?: formationCreateNestedManyWithoutUserInput
    Experience?: ExperienceCreateNestedManyWithoutUserInput
    Writer?: WriterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountUncheckedCreateNestedManyWithoutUserInput
    relations?: RelationUncheckedCreateNestedManyWithoutUserInput
    relatedBy?: RelationUncheckedCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowUncheckedCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowUncheckedCreateNestedManyWithoutUser2Input
    skill?: SkillUncheckedCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminUncheckedCreateNestedManyWithoutUserInput
    formation?: formationUncheckedCreateNestedManyWithoutUserInput
    Experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    Writer?: WriterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateManyWithoutUserNestedInput
    relations?: RelationUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUpdateManyWithoutUser2NestedInput
    skill?: SkillUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUpdateManyWithoutUserNestedInput
    formation?: formationUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUpdateManyWithoutUserNestedInput
    Writer?: WriterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    relations?: RelationUncheckedUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUncheckedUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUncheckedUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUncheckedUpdateManyWithoutUser2NestedInput
    skill?: SkillUncheckedUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUncheckedUpdateManyWithoutUserNestedInput
    formation?: formationUncheckedUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    Writer?: WriterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionCreateNestedManyWithoutUserInput
    relations?: RelationCreateNestedManyWithoutUserInput
    relatedBy?: RelationCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowCreateNestedManyWithoutUser2Input
    skill?: SkillCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminCreateNestedManyWithoutUserInput
    formation?: formationCreateNestedManyWithoutUserInput
    Experience?: ExperienceCreateNestedManyWithoutUserInput
    Writer?: WriterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    firstName?: string | null
    lastName?: string | null
    isRoot?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session?: SessionUncheckedCreateNestedManyWithoutUserInput
    relations?: RelationUncheckedCreateNestedManyWithoutUserInput
    relatedBy?: RelationUncheckedCreateNestedManyWithoutRelationInput
    ProfileShowAsUser1?: ProfileShowUncheckedCreateNestedManyWithoutUser1Input
    ProfileShowAsUser2?: ProfileShowUncheckedCreateNestedManyWithoutUser2Input
    skill?: SkillUncheckedCreateNestedManyWithoutUserInput
    companyAdmin?: CompanyAdminUncheckedCreateNestedManyWithoutUserInput
    formation?: formationUncheckedCreateNestedManyWithoutUserInput
    Experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    Writer?: WriterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type UserUpsertWithoutAccountInput = {
    update: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateManyWithoutUserNestedInput
    relations?: RelationUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUpdateManyWithoutUser2NestedInput
    skill?: SkillUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUpdateManyWithoutUserNestedInput
    formation?: formationUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUpdateManyWithoutUserNestedInput
    Writer?: WriterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    isRoot?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    relations?: RelationUncheckedUpdateManyWithoutUserNestedInput
    relatedBy?: RelationUncheckedUpdateManyWithoutRelationNestedInput
    ProfileShowAsUser1?: ProfileShowUncheckedUpdateManyWithoutUser1NestedInput
    ProfileShowAsUser2?: ProfileShowUncheckedUpdateManyWithoutUser2NestedInput
    skill?: SkillUncheckedUpdateManyWithoutUserNestedInput
    companyAdmin?: CompanyAdminUncheckedUpdateManyWithoutUserNestedInput
    formation?: formationUncheckedUpdateManyWithoutUserNestedInput
    Experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    Writer?: WriterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    espiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    accessTokenExpireAt?: Date | string | null
    refreshTokenExpireAt?: Date | string | null
    scope?: string | null
    idToken?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelationCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    status: boolean
    relationId: string
  }

  export type RelationCreateManyRelationInput = {
    id?: string
    createdAt?: Date | string
    status: boolean
    userId: string
  }

  export type ProfileShowCreateManyUser1Input = {
    id?: string
    createdAt?: Date | string
    idUser2: string
  }

  export type ProfileShowCreateManyUser2Input = {
    id?: string
    createdAt?: Date | string
    idUser1: string
  }

  export type SkillCreateManyUserInput = {
    id?: string
    name: string
    level: number
  }

  export type CompanyAdminCreateManyUserInput = {
    id?: string
    role: string
    companyId: string
  }

  export type formationCreateManyUserInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    companyId?: string | null
  }

  export type ExperienceCreateManyUserInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    companyId?: string | null
  }

  export type WriterCreateManyUserInput = {
    id?: string
    companyId?: string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    espiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    espiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    espiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    relation?: UserUpdateOneRequiredWithoutRelatedByNestedInput
  }

  export type RelationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    relationId?: StringFieldUpdateOperationsInput | string
  }

  export type RelationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    relationId?: StringFieldUpdateOperationsInput | string
  }

  export type RelationUpdateWithoutRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutRelationsNestedInput
  }

  export type RelationUncheckedUpdateWithoutRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RelationUncheckedUpdateManyWithoutRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileShowUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user2?: UserUpdateOneRequiredWithoutProfileShowAsUser2NestedInput
  }

  export type ProfileShowUncheckedUpdateWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser2?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileShowUncheckedUpdateManyWithoutUser1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser2?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileShowUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user1?: UserUpdateOneRequiredWithoutProfileShowAsUser1NestedInput
  }

  export type ProfileShowUncheckedUpdateWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser1?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileShowUncheckedUpdateManyWithoutUser2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idUser1?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type SkillUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type SkillUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
  }

  export type CompanyAdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    company?: CompanyUpdateOneRequiredWithoutCompanyAdminNestedInput
  }

  export type CompanyAdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyAdminUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type formationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneWithoutFormationNestedInput
  }

  export type formationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type formationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    company?: CompanyUpdateOneWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperienceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WriterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: CompanyUpdateOneWithoutWriterNestedInput
    Post?: PostUpdateManyWithoutWriterNestedInput
    Vote?: VoteUpdateManyWithoutWriterNestedInput
    Comment?: CommentUpdateManyWithoutWriterNestedInput
  }

  export type WriterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    Post?: PostUncheckedUpdateManyWithoutWriterNestedInput
    Vote?: VoteUncheckedUpdateManyWithoutWriterNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutWriterNestedInput
  }

  export type WriterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyAdminCreateManyCompanyInput = {
    id?: string
    role: string
    userId: string
  }

  export type formationCreateManyCompanyInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    userId: string
  }

  export type ExperienceCreateManyCompanyInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    userId: string
  }

  export type WriterCreateManyCompanyInput = {
    id?: string
    userId?: string | null
  }

  export type CompanyAdminUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCompanyAdminNestedInput
  }

  export type CompanyAdminUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyAdminUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type formationUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutFormationNestedInput
  }

  export type formationUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type formationUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WriterUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutWriterNestedInput
    Post?: PostUpdateManyWithoutWriterNestedInput
    Vote?: VoteUpdateManyWithoutWriterNestedInput
    Comment?: CommentUpdateManyWithoutWriterNestedInput
  }

  export type WriterUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    Post?: PostUncheckedUpdateManyWithoutWriterNestedInput
    Vote?: VoteUncheckedUpdateManyWithoutWriterNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutWriterNestedInput
  }

  export type WriterUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateManyWriterInput = {
    id?: string
    createdAt?: Date | string
    content: string
    reactionId?: string | null
  }

  export type VoteCreateManyWriterInput = {
    id?: string
    postId: string
  }

  export type CommentCreateManyWriterInput = {
    id?: string
    content: string
    createdAt?: Date | string
    votes?: number | null
    postId?: string | null
    commentId?: string | null
  }

  export type PostUpdateWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reactionId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUpdateManyWithoutPostNestedInput
    Comment?: CommentUpdateManyWithoutPostNestedInput
    Vote?: VoteUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reactionId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: MediaUncheckedUpdateManyWithoutPostNestedInput
    Comment?: CommentUncheckedUpdateManyWithoutPostNestedInput
    Vote?: VoteUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    reactionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoteUpdateWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    post?: PostUpdateOneWithoutVoteNestedInput
  }

  export type VoteUncheckedUpdateWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    post?: PostUpdateOneWithoutCommentNestedInput
    comment?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutWriterInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaCreateManyPostInput = {
    id?: string
    nom?: string | null
    url: string
    altText?: string | null
    description?: string | null
    type?: string | null
  }

  export type CommentCreateManyPostInput = {
    id?: string
    content: string
    createdAt?: Date | string
    votes?: number | null
    commentId?: string | null
    writerId: string
  }

  export type VoteCreateManyPostInput = {
    id?: string
    writerId: string
  }

  export type MediaUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    writer?: WriterUpdateOneRequiredWithoutCommentNestedInput
    comment?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    writerId?: StringFieldUpdateOperationsInput | string
    replies?: CommentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    writerId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    writer?: WriterUpdateOneRequiredWithoutVoteNestedInput
  }

  export type VoteUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    writerId?: StringFieldUpdateOperationsInput | string
  }

  export type VoteUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    writerId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyCommentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    votes?: number | null
    postId?: string | null
    writerId: string
  }

  export type CommentUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    writer?: WriterUpdateOneRequiredWithoutCommentNestedInput
    post?: PostUpdateOneWithoutCommentNestedInput
    replies?: CommentUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    writerId?: StringFieldUpdateOperationsInput | string
    replies?: CommentUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: NullableIntFieldUpdateOperationsInput | number | null
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    writerId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}