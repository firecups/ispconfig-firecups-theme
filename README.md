# Theme for ISP Config 3.2 based on Bootstrap 4.

Changes between the orgin and the firecups theme:

 - Based on Bootstrap v4.1.0
 - Used bootbox.js for error messages
 - Different Color Scheme: default, dark, blue, red, green
 - Complete redesign of all templates and forms

## Installation

Copy the template, the assets folder and the ispconfig_version file into a seperate folder under /var/ispconfig/theme/

Switch the theme in the user settings.

## Theme selection

Open the file templates/main.tpl and change the `<html lang="en">` agains `<html  lang='en' data-theme="COLOR-OPTION">`

You can use dark, blue, red, green as option. Without changes, the theme use the default color scheme.

## Screenshots

### Default Theme
![default 1](screenshots/default1.PNG)

![default 2](screenshots/default2.PNG)

### Dark Theme
![dark 1](screenshots/dark1.PNG)

![dark2](screenshots/dark2.PNG)

### Green Theme
![green 1](screenshots/green1.PNG)

![green 2](screenshots/green2.PNG)
