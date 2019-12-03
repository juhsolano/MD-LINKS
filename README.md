# Markdown Links

Library that reads and analyze markdown files (.md) to verify the content’s links.
***
## Summary
* [Install](#1-install)
* [Usage - CLI (Command Line INterface)](#2-usage)

***
## Install
 
To use this library it’s require the previously  install of NodeJs in your machine. 
Once the NodeJs was installed you can execute it on npm:

    npm install https://github.com/juhsolano/SAP003-md-links

***
## Usage - CLI (Command Line Interface) 

This application can be executed at terminal using the following command:

    md-links <path-to-file>

Example:

    $ md-links ./file_path/example_file.md

It will return a Promise consisting of an Object {key, value}, whose elements  are the properties:

    * href: URL 
    * text: URLs title 

