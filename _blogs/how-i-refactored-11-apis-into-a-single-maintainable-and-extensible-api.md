---
title: "How I refactored 11 APIs into a single extensible and maintainable API"
date: "2025-08-29T09:42:00Z"
---

Today's blog is about design patterns, and how I used the strategy design pattern to refactor 11 APIs in a legacy codebase into a single, highly extensible, and maintainable API.

This blog is to show how design patterns are really a useful thing to learn as a software engineer and as a great tool to have in your toolbox.

## Design patterns

Design patterns are simply a predefined solution for a given problem. so all you have to do is just implement it to solve your problem.

## Problem

The codebase I'm refactoring is about 3 years old and is used in production by real users.

The business component we’ll look at here is the _projects_ component. We have 8 different roles, and each role can take a specific set of actions on a _project_. It works as a workflow: role X can request edits from role Y, and role Y can return it back or reject the project, etc.

each action for each role is in a separate API endpoint. Some endpoints just use long if/else statements to check the role, all in a single place.

This makes things harder not only for the backend but also for frontend developers, who must keep track of all roles and call a specific endpoint for each specific action. It's just a mess.

## Solution

The solution was straightforward. We have a single entity `User` that can take a set of actions. The [strategy pattern](https://refactoring.guru/design-patterns/strategy) was a natural fit here.

![Solution diagram](/blog/strategy_pattern_tndr.png)

For the implementation, as long as you are solving the problem you are good, you don't have to suffix your classes, interfaces and folder names with _strategy_. keep it simple.

First, we start with the main interface that all actions should implement:

```ts
export interface ChangeProjectStateActionStrategy {
  execute(
    user: LoggedInUser,
    payload: ChangeProjectStatePayloadDto
  ): Promise<void>;
}
```

Since we have 8 different roles, each role implements the interface based on the actions it can take.

for example, we have the _manager_ role, he can request edit from role X.

the implementation will be like this

```ts
// <RoleName><Action>ActionHandler
export class ManagerRequestEditActionHandler
  implements ChangeProjectStateActionStrategy
{
  execute(user: LoggedInUser, payload: ChangeProjectStatePayloadDto) {
    // business logic here
  }
}
```

this is the folder structure of the `change-project-state` command

```ts
change-project-state
├── actions
│   ├── accept
│   │   ├── role-x.handler.ts
│   ├── mark-complete
│   │   └── role-y.handler.ts
│   ├── reject
│   │   └── role-x.handler.ts
│   │   └── role-y.handler.ts
│   │   └── role-z.handler.ts
│   ├── request-edit
│   │   ├── role-x.handler.ts
│   │   ├── role-y.handler.ts
│   │   ├── role-x.handler.ts
│   ├── ect...
│   ├── action-handler.registery.ts
```

Notice the `action-handler.registry.ts` file. I created it to register the actions for each role and make it easy to call the right action.

The implementation looks like this:

```ts
export class ChangeProjectStateActionHandlerRegistery {
  constructor() {} // inject actions

  private actionHandlerMap: Record<
    ChangeStateActionEnum,
    Partial<Record<UserRole, ChangeProjectStateActionStrategy>>
  > = {
    Accept: {
      roleX: this.RoleXAcceptActionHandler,
    },
    Reject: {
      roleY: this.RoleXRejectActionHandler,
    },
    RequestEdit: {
      roleZ: this.RoleXRequestEditActionHandler,
    },
    // ect...
  };

  get(
    action: ChangeStateActionEnum,
    role: UserRole
  ): ChangeProjectStateActionStrategy {
    const handler = this.actionHandlerMap[action][role];

    if (!handler) {
      throw new NotImplementedException(
        `${action} for ${role} is not implemented`
      );
    }

    console.log(`executing ${action} for ${role}`);

    return handler;
  }
}
```

Now I can simply pass the action and role and get the appropriate handler:

```ts
const handler = this.changeProjectStateActionHandlerRegistery.get(
  payload.action,
  user.role
);

await handler.execute(user, payload);
```

This approach not only simplifies the addition of new roles and actions but also improves maintainability by eliminating bloated endpoints and if/else statements.

It also makes frontend development easier, since we remove the need for multiple endpoints per role. A single endpoint now streamlines the entire UI logic.

> [!NOTE]
> Since the project is built with Nest.js, dependency injection makes this approach very straightforward.

---

Hopefully, this blog about the strategy design pattern has shown how it can simplify complex problems and make a developer's job easier. By recognizing the power of design patterns in real-world applications, you'll see how they can dramatically streamline your work and boost your confidence as a developer.
