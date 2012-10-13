/*
 * 
 * jQuery CSS Theme Switcher
 * Version 1.0.0
 * @requires jQuery v1.2.3 or higher, jquery.cookie.js
 * 
 * Copyright (c) 2012 William Lee
 * Examples and docs at: https://github.com/robotomeister/scJqueryCSSThemeSwitcher
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 */
/**
 * 
 * @description More lightweight than ThemeRoller, targetted towards hiding/showing groups of HTML elements as opposed to font-switching, etc.
 * 
 * @example $(document).scThemeSwitch([]'cssClass1','cssClass2']);
 * @desc Create and initialize with default settings
 * 
 * @example $(document).scThemeSwitch(['cssClass1','cssClass2'],{switchAnimation:'fade',switchHandler:'specificCSSClass'});
 * @desc Create and initialize with specific settings
 * 
 * @type jQuery
 * 
 * @name scThemeSwitch
 * 
 * @cat Plugins/scThemeSwitch
 * 
 * @author William Lee/william@solidcoding.com/http://www.solidcoding.com 
 */

(function( $ ){
    $.extend({
        scThemeSwitch: new
        function () {
            
            this.defaults = {
                switchAnimation: "fade", //options: fade/toggle
                switchAnimationTime: 800, //options: jQuery duration values
                switchHandler: "scClickableThemeSwitcher", //CSS class for all clickable theme switchers
            };
            
            this.construct = function (themes, settings) {
                
                return this.each(function () {
                    var scope = $(this);
                
                    //themes is array of strings representing CSS classes that should be triggered on/off
                    scope.themes = themes;
                    scope.currentTheme = null;
                        
                    //load cookie if exists. if exists, load and set theme
                    
                    //if not, try to load first theme, if not exist, quit
                    if( typeof themes["theme1"] != "undefined" ) {   
                        setTheme(scope, themes["theme1"]);   
                    }
                    else {                   
                        return;    
                    } 
                    
                    // new blank config object
                    scope.config = {};
                    // merge and extend.
                    config = $.extend(scope.config, $.scThemeSwitch.defaults, settings);
                    
                    //enable all switchers
                    scope.find('.' + config['switchHandler']).click(
                        function() {
                            switchTheme(scope);    
                        }
                    );                     
                                               
                });
            };     

            function switchTheme(scope) {
                //determine theme to switch to
                //find current theme, iterate to next theme
                var nextVal = false;
                var wasSet = false;
                for(var key in scope.themes) {
                    var val = scope.themes[key];
                   
                    if(nextVal == true) {
                        setTheme(scope,val);
                        wasSet = true;
                        break;    
                    }
                   
                    if(val == scope.currentTheme) {
                        nextVal = true;    
                    }
                }
                
                //loop back to first element if not yet set ('switched')
                if(wasSet == false) {
                    if( typeof scope.themes["theme1"] != "undefined" ) {   
                        setTheme(scope, scope.themes["theme1"]);   
                    }
                    else {                   
                        return;    
                    }                     
                }
            }               
            
            function setTheme(scope,theme) {
                //if no current theme, just toggle
                if(scope.currentTheme == null) {
                    scope.find('.' + theme).each(
                        function() {
                            $(this).show();      
                        }
                    );        
                    
                }
                else {
                    //animateOut currentTheme
                    //animateIn newTheme                                    
                    if(scope.config['switchAnimation'] == 'toggle') {
                        scope.find('.' + scope.currentTheme).each(
                            function() {
                                $(this).hide();      
                            }
                        );    
                        
                        scope.find('.' + theme).each(
                            function() {
                                $(this).show();      
                            }
                        );                                                 
                    }
                    else if(scope.config['switchAnimation'] == 'fade') {
                        scope.find('.' + scope.currentTheme).each(
                            function() {
                                $(this).fadeOut(scope.config['switchAnimationTime']);          
                            }
                        );    
                        
                        scope.find('.' + theme).each(
                            function() {
                                $(this).fadeIn(scope.config['switchAnimationTime']);      
                            }
                        );                            
                    }
                }
                
                //set theme and cookie
                scope.currentTheme = theme;
                
            }   
                                               
        }
    });
      
// extend plugin scope
$.fn.extend({
    scThemeSwitch: $.scThemeSwitch.construct
});      
      
})( jQuery );