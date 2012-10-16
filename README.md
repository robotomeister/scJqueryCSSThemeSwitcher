# scThemeSwitch.jquery.js

A simple, lightweight jQuery plugin for div theme switching

## Installation

Download and include jQuery library.

Also download and include jquery.cookie:

    https://raw.github.com/carhartl/jquery-cookie

Now download and include this script:

    <script src="/path/to/scThemeSwitch.jquery.js"></script>

## Usage

Sample HTML:
    
    <div>
        <div class="scClickableThemeSwitcher"></div>
    </div>  
    
    <div class="scClickableTheme1 scThemeSwitchClass"></div>
    <div class="scClickableTheme2 scThemeSwitchClass"></div>      

Create switchable theme and initialize theme switcher component (marked by the scClickableThemeSwitcher class -- this is configurable):

    $(document).scThemeSwitch({'theme1':'scClickableTheme1','theme2':'scClickableTheme2'});


## Configuration

The following default configuration values can be overrided:

    this.defaults = {
        switchAnimation: "fade", //options: fade/toggle
        switchAnimationTime: 800, //options: jQuery duration values
        switchHandler: "scClickableThemeSwitcher", //CSS class for all clickable theme switchers
        switchCookieName: "scThemeSwitchCookie", //cookie name for this theme switch page loads
        switchThemeClass: "scThemeSwitchClass" //CSS class for all affected elements
    };
    
## Authors

[William Lee](https://github.com/robotomeister)