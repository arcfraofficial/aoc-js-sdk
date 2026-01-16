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
