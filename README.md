# Aoc JavaScript Sdk

Aoc javascript sdk in typescript.

## Installation

```
npm install aoc-js-sdk
```

## Usage

### create authenticated AocClient instance

```typescript
import { AocClient, UserSource } from "aoc-js-sdk";

const client = new AocClient(
  {
    username: "username",
    password: "password",
    source: UserSource.LOCAL,
  },
  {
    baseURL: "http://<path-to-aoc>/v2/api",
  },
);
```

### Sending Request

```typescript
const api = new VmApi(client);
const data = await api.getVms({
  first: 10,
});
console.log(data);
```

### Create `ActivePassiveClient` instance

AOC introduced multi-management-IP active-passive deployment in version 4.9.0. To access such AOC deployments, you can use `ActivePassiveClient` to configure multiple endpoints for the same active-passive cluster. At any given time, it is expected that at most one active endpoint exists. The order of endpoints passed in does not represent the active-passive relationship; the client will select the current active endpoint based on probing results.

```typescript
import { ActivePassiveClient, UserSource } from "aoc-js-sdk";

const client = new ActivePassiveClient(
  {
    username: "username",
    password: "password",
    source: UserSource.LOCAL,
  },
  {
    endpoints: ["https://aoc-a.example.com", "https://aoc-b.example.com"],
  },
);
```

### Failover strategies

`ActivePassiveClient` supports the following failover strategies:

- `AUTO_FAILOVER`: The default strategy. When there is no cached active endpoint, it attempts to probe and cache the current active endpoint; after a request returns 307, it automatically re-probes and retries once; after a network I/O exception occurs, it clears the cache but does not automatically retry.
- `MANUAL_FAILOVER`: After a request returns 307, it does not automatically re-probe or retry. Clearing the cache is handled by the caller for failover. The rest of the business logic is consistent with `AUTO_FAILOVER`.
- `ALWAYS_PROBE`: Does not cache the active endpoint. Re-probes the active endpoint before each request; after a request returns 307, it does not automatically retry.

If you need to specify a failover strategy, you can pass it in when creating the instance:

```typescript
import {
  ActivePassiveClient,
  UserSource,
  ActivePassiveFailoverStrategy,
} from "aoc-js-sdk";

const client = new ActivePassiveClient(
  {
    username: "username",
    password: "password",
    source: UserSource.LOCAL,
  },
  {
    endpoints: ["https://aoc-a.example.com", "https://aoc-b.example.com"],
    failoverStrategy: ActivePassiveFailoverStrategy.ManualFailover,
  },
);
```
