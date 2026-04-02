Final Report:

1. Total Issues Found:

   There is 8 issues that founded overall. The issues:

    * Dependency Error: 
        * The app tried to call the SDK using a relative path (./my-sdk) instead of the registered package name (my-sdk), causing an immediate crash.

    * Missing Functions / Naming Mismatch:
        * "greet"
        * "formatDate"
        * "subtract"
        all these functions are missing in the SDK but documented.

    * Functional Bugs:
        * "calculateAverage" rounds the result to an integer (e.g. 1 instead of 1.5), losing mathematical precision.
        * "getTimestamp" returns a raw number instead of the formatted string promised.
        
    * Missing Documtation:
        * "sayHello" - This function exists in the code but is documented as greet, creating a naming mismatch
        * "uniqueValues" - That is missing in the documtation.

3. 
    * Which issues are critical?
        * The dependency error and the missing functions/ wrong name function name are the crictical issues. These issues are classified as critical in my opinion because they cause the application to crash immediately.
        * for the dependency error if the app can not find the module it won't even start.
        * and for missing functions/ wrong name function (subtract, formatDate, greet) these cause runtime Errors (TypeErrors). When a developer calls a documented function that doesn't exist, the JavaScript engine throws an unhandled exception, causing the specific process or the entire app to crash.

    * Which issues are minor?
        * The timestep format - The data is provided, but in the wrong format. It creates extra work for the developer but doesn't break logic.
        * The avg round - It is an edge case if it not for rocket science it sould be minor :) 
        * The missing documentation for uniqueValues will not crash the app, although it is unfortunate that we might be asked to implement something that already exists.

4. If you were the team lead, which 3 issues would you fix first? Why?
    The critical issues are the ones that can crash the app or break expected SDK usage:

    * Wrong SDK import path in the app (./my-sdk instead of my-sdk)
    This is critical because the app cannot load the SDK and fails immediately with a module resolution error.

    * Missing documented function: greet(name)
    This is critical because the app/documentation calls greet, but the SDK exports sayHello instead. Calling greet throws a runtime TypeError.

    * Missing documented function: formatDate(date)
    This is critical because consumers following the docs will call a function that does not exist, causing runtime error.

5. This assignment taught me that documentation is very importent. it should be acurete cause even a small naming mismatch or a missing function can cause a total system crash. I realized that high-quality code is useless without accurate docs, as inconsistencies lead to developer frustration and "silent" data bugs. Ultimately, I learned that automated validation is essential to ensure the code always honors the promises made in the docs. I belive it is importent to maintain the doc in the same level of code.
