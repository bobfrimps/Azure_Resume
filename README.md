# Frimpong's Azure Resume

## Prerequisites
- Azure Account
- Github account
- Visula studio code
- Azure CLI
- .NET core 8.0
- Azure functions core tools
- Visual Studio code Extensions
    - Azure functions extension
    - C# extension
    - Azure storage extension
    - Github actions extension

## Front-end
The front-end is a static site with HTML, CSS, and Javascript. Even though it is a static site, it has a visitor counter. The visitor counter data is fetched via an API call to an Azure function.

## Backend
The back-end is an HTTP triggered Azure Function with Cosmos DB input and output binding. When the Function is triggered, it retrieves the CosmosDB item, adds +1 to it, saves it and returns the value to the caller.

## CI/CD
I created a CI/CD pipeline using github actions. I also used github for version control and storing my app secrets.
