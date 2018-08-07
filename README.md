# What is a Key Performance Indicator (KPI)?
A Key Performance Indicator (KPI) is a measurable value that demonstrates how effectively a company is achieving key business objectives. Organizations use KPIs at multiple levels to evaluate their success at reaching targets. High-level KPIs may focus on the overall performance of the enterprise, while low-level KPIs may focus on processes or employees in departments such as sales, marketing or a call center.

# What am I building?
An extension for Microsoft's Visual Studio Team Services (VSTS), which is a cloud service for collaborating on code development, to manage KPIs within an organization. This extension package includes a hub that takes KPI inputs from the user and stores them into a storage that is shared within the project workspace and a dashboard widget that displays all the KPI information of the project.

## Get started

If you plan to package the extension, get:

1. [Node.js](https://nodejs.org)
2. [Team Foundation command line interface](https://github.com/Microsoft/tfs-cli) (`npm install -g tfx-cli`)
3. If the extension uses bower (look for bower.json), [Bower](https://npmjs.com/package/bower) (`npm install -g bower`)

### Get the web extension SDK

Each web extension sample has a `bower.json` or `package.json` file, which references third-party libraries used by the sample, including the [Visual Studio Services Web Extension SDK](https://github.com/Microsoft/vss-web-extension-sdk). This SDK JavaScript file is required by all web extensions.

From the directory of the sample, run:

If there is a bower.json file present
```
bower install
```
or if there is only a package.json file present
```
npm install
```
