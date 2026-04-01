First Error:

![first error](./images/sdk_error.png)

The first error is caused beacuse the module not found.
We can see in the my-app\package.json the dependencies and the sdk called 'my-sdk' and not './my-sdk'.
In the app we should import using the package name and not a relative path.
