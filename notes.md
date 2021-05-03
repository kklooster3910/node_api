Remove MD notes before publishing to prod

- We might want to update that babel config, copied it from another project
- add any dependencies you want, just added a few to start
- add scripts to package.json, if you want. I haven't added any yet
- we're using yarn, faster than npm, open to discussion

Auth

- JWT web token for auth -- how long should we set the cookie for?
- auth middleware fn - check if logged/redirect to login page
- entire app is private - create demo user so people can test w/o logging
- demo user can't delete tasks, can only create and rearrange
- middleware to check for demo user not return fail if deletion attempt
- Session based auth for non demo users

RESEARCH TO DO AND LOOK INTO - tasks/comments websocket based -
websockets so that we can see update/complete status of tasks live w/o refreshing
websocket.io

Mongo Collections

// keys

- user
  - name
  - email
  - etc
- organization
  - users - belongs to organization - array
  - projects - array
- projects
  - projectSections - obj
    - tasks - keys on projectSections
- tasks
  - subtasks - obj
    - assignee
    - due date
  - assignee
  - due date
  - project
  - description
  - dependencies
  - priority
  - taskStatuses - array? - custom user created tasks of task info [eg: QA Status, ]
  - comments
