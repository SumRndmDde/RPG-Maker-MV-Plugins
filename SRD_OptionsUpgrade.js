/*:
 * @plugindesc Upgrades the Options Menu. Commands are placed into different categories and a description window has been added.
 * @author SumRndmDde
 *
 * @param Categories
 * @desc A list of all of the categories in the Options Menu.
 * Separate each with a comma.
 * @default General, Volume, Window
 *
 * @param Default Category
 * @desc If an option does not have a category specified for it, it will use this category.
 * @default General
 *
 * @param Add Window Colors?
 * @desc If 'true', then the Window Color options will be added.
 * Symbols are: "windowRed" | "windowGreen" | "windowBlue"
 * @default true
 *
 * @param == Reset Option ==
 * @default
 *
 * @param Add Reset Option?
 * @desc If 'true', then a "Reset" option will be added to the Category Window.
 * @default true
 *
 * @param Reset Option Name
 * @desc The name of the "Reset" option on the Category Window.
 * @default Reset Options
 *
 * @param Reset Option SE
 * @desc The sound effect played when the "Reset" option is used.
 * @default Save
 *
 * @param == Category Window ==
 * @default
 *
 * @param Category Window Cols
 * @desc The amount of columns on the Category Window.
 * @default 4
 *
 * @param Category Window Rows
 * @desc The amount of rows on the Category Window.
 * @default 1
 *
 * @param Category Window X
 * @desc The X position of the Category Window.
 * @default 0
 *
 * @param Category Window Y
 * @desc The Y position of the Category Window.
 * @default this._helpWindow.y + this._helpWindow.height
 *
 * @param Category Window Width
 * @desc The width of the Category Window.
 * @default Graphics.boxWidth
 *
 * @param Category Text Align
 * @desc The alignment of the text on the Category Window.
 * Choices are: left | center | right
 * @default center
 *
 * @param == Options Window ==
 * @default
 *
 * @param Options Window X
 * @desc The X position of the Options Window.
 * @default (Graphics.boxWidth - this.width) / 2
 *
 * @param Options Window Y
 * @desc The Y position of the Options Window.
 * @default this._categoryWindow.y + this._categoryWindow.height
 *
 * @param Options Window Width
 * @desc The width of the Options Window.
 * @default 500
 *
 * @param == Help Window ==
 * @default
 *
 * @param Help Window X
 * @desc The X position of the Help Window.
 * @default 0
 *
 * @param Help Window Y
 * @desc The Y position of the Help Window.
 * @default 0
  *
 * @param == Option 1 ==
 * @default
 *
 * @param Option 1 Symbol
 * @desc The symbol of the option that will use the info defined for Option 1.
 * @default alwaysDash
 *
 * @param Option 1 Category
 * @desc The category that Option 1 will be placed in.
 * @default General
 *
 * @param Option 1 Description
 * @desc The description shown when Option 1 is highlighted.
 * Use \n to create a new line
 * @default If this is turned ON, then you will dash automatically; \notherwise, you will have to hold SHIFT.
 *
 * @param == Option 2 ==
 * @default
 *
 * @param Option 2 Symbol
 * @desc The symbol of the option that will use the info defined for Option 2.
 * @default commandRemember
 *
 * @param Option 2 Category
 * @desc The category that Option 2 will be placed in.
 * @default General
 *
 * @param Option 2 Description
 * @desc The description shown when Option 2 is highlighted.
 * Use \n to create a new line
 * @default If this is turned ON, then the position of the \ncommand cursor will be saved throughout battle.
 *
 * @param == Option 3 ==
 * @default
 *
 * @param Option 3 Symbol
 * @desc The symbol of the option that will use the info defined for Option 3.
 * @default bgmVolume
 *
 * @param Option 3 Category
 * @desc The category that Option 3 will be placed in.
 * @default Volume
 *
 * @param Option 3 Description
 * @desc The description shown when Option 3 is highlighted.
 * Use \n to create a new line
 * @default This changes the volume of the background music.
 *
 * @param == Option 4 ==
 * @default
 *
 * @param Option 4 Symbol
 * @desc The symbol of the option that will use the info defined for Option 4.
 * @default bgsVolume
 *
 * @param Option 4 Category
 * @desc The category that Option 4 will be placed in.
 * @default Volume
 *
 * @param Option 4 Description
 * @desc The description shown when Option 4 is highlighted.
 * Use \n to create a new line
 * @default This changes the volume of the background sound.
 *
 * @param == Option 5 ==
 * @default
 *
 * @param Option 5 Symbol
 * @desc The symbol of the option that will use the info defined for Option 5.
 * @default meVolume
 *
 * @param Option 5 Category
 * @desc The category that Option 5 will be placed in.
 * @default Volume
 *
 * @param Option 5 Description
 * @desc The description shown when Option 5 is highlighted.
 * Use \n to create a new line
 * @default This changes the volume of music effects.
 *
 * @param == Option 6 ==
 * @default
 *
 * @param Option 6 Symbol
 * @desc The symbol of the option that will use the info defined for Option 6.
 * @default seVolume
 *
 * @param Option 6 Category
 * @desc The category that Option 6 will be placed in.
 * @default Volume
 *
 * @param Option 6 Description
 * @desc The description shown when Option 6 is highlighted.
 * Use \n to create a new line
 * @default This changes the volume of sound effects.
  *
 * @param == Option 7 ==
 * @default
 *
 * @param Option 7 Symbol
 * @desc The symbol of the option that will use the info defined for Option 7.
 * @default windowRed
 *
 * @param Option 7 Category
 * @desc The category that Option 7 will be placed in.
 * @default Window
 *
 * @param Option 7 Description
 * @desc The description shown when Option 7 is highlighted.
 * Use \n to create a new line
 * @default This determines the amount of \c[2]red\c[0] tone within \nthe window's base color.
 *
 * @param == Option 8 ==
 * @default
 *
 * @param Option 8 Symbol
 * @desc The symbol of the option that will use the info defined for Option 8.
 * @default windowGreen
 *
 * @param Option 8 Category
 * @desc The category that Option 8 will be placed in.
 * @default Window
 *
 * @param Option 8 Description
 * @desc The description shown when Option 8 is highlighted.
 * Use \n to create a new line
 * @default This determines the amount of \c[3]green\c[0] tone within \nthe window's base color.
 *
 * @param == Option 9 ==
 * @default
 *
 * @param Option 9 Symbol
 * @desc The symbol of the option that will use the info defined for Option 9.
 * @default windowBlue
 *
 * @param Option 9 Category
 * @desc The category that Option 9 will be placed in.
 * @default Window
 *
 * @param Option 9 Description
 * @desc The description shown when Option 9 is highlighted.
 * Use \n to create a new line
 * @default This determines the amount of \c[1]blue\c[0] tone within \nthe window's base color.
 *
 * @param == Option 10 ==
 * @default
 *
 * @param Option 10 Symbol
 * @desc The symbol of the option that will use the info defined for Option 10.
 * @default windowSkin
 *
 * @param Option 10 Category
 * @desc The category that Option 10 will be placed in.
 * @default Window
 *
 * @param Option 10 Description
 * @desc The description shown when Option 10 is highlighted.
 * Use \n to create a new line
 * @default This game's window style can be selected from a list \nof available choices using this option.
 *
 * @param == Option 11 ==
 * @default
 *
 * @param Option 11 Symbol
 * @desc The symbol of the option that will use the info defined for Option 11.
 * @default fullscreen
 *
 * @param Option 11 Category
 * @desc The category that Option 11 will be placed in.
 * @default General
 *
 * @param Option 11 Description
 * @desc The description shown when Option 11 is highlighted.
 * Use \n to create a new line
 * @default If this is turned ON, the game will be switched \nto full-screen mode.
 *
 * @param == Option 12 ==
 * @default
 *
 * @param Option 12 Symbol
 * @desc The symbol of the option that will use the info defined for Option 12.
 * @default
 *
 * @param Option 12 Category
 * @desc The category that Option 12 will be placed in.
 * @default
 *
 * @param Option 12 Description
 * @desc The description shown when Option 12 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 13 ==
 * @default
 *
 * @param Option 13 Symbol
 * @desc The symbol of the option that will use the info defined for Option 13.
 * @default
 *
 * @param Option 13 Category
 * @desc The category that Option 13 will be placed in.
 * @default
 *
 * @param Option 13 Description
 * @desc The description shown when Option 13 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 14 ==
 * @default
 *
 * @param Option 14 Symbol
 * @desc The symbol of the option that will use the info defined for Option 14.
 * @default
 *
 * @param Option 14 Category
 * @desc The category that Option 14 will be placed in.
 * @default
 *
 * @param Option 14 Description
 * @desc The description shown when Option 14 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 15 ==
 * @default
 *
 * @param Option 15 Symbol
 * @desc The symbol of the option that will use the info defined for Option 15.
 * @default
 *
 * @param Option 15 Category
 * @desc The category that Option 15 will be placed in.
 * @default
 *
 * @param Option 15 Description
 * @desc The description shown when Option 15 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 16 ==
 * @default
 *
 * @param Option 16 Symbol
 * @desc The symbol of the option that will use the info defined for Option 16.
 * @default
 *
 * @param Option 16 Category
 * @desc The category that Option 16 will be placed in.
 * @default
 *
 * @param Option 16 Description
 * @desc The description shown when Option 16 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 17 ==
 * @default
 *
 * @param Option 17 Symbol
 * @desc The symbol of the option that will use the info defined for Option 17.
 * @default
 *
 * @param Option 17 Category
 * @desc The category that Option 17 will be placed in.
 * @default
 *
 * @param Option 17 Description
 * @desc The description shown when Option 17 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 18 ==
 * @default
 *
 * @param Option 18 Symbol
 * @desc The symbol of the option that will use the info defined for Option 18.
 * @default
 *
 * @param Option 18 Category
 * @desc The category that Option 18 will be placed in.
 * @default
 *
 * @param Option 18 Description
 * @desc The description shown when Option 18 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 19 ==
 * @default
 *
 * @param Option 19 Symbol
 * @desc The symbol of the option that will use the info defined for Option 19.
 * @default
 *
 * @param Option 19 Category
 * @desc The category that Option 19 will be placed in.
 * @default
 *
 * @param Option 19 Description
 * @desc The description shown when Option 19 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 20 ==
 * @default
 *
 * @param Option 20 Symbol
 * @desc The symbol of the option that will use the info defined for Option 20.
 * @default
 *
 * @param Option 20 Category
 * @desc The category that Option 20 will be placed in.
 * @default
 *
 * @param Option 20 Description
 * @desc The description shown when Option 20 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 21 ==
 * @default
 *
 * @param Option 21 Symbol
 * @desc The symbol of the option that will use the info defined for Option 21.
 * @default
 *
 * @param Option 21 Category
 * @desc The category that Option 21 will be placed in.
 * @default
 *
 * @param Option 21 Description
 * @desc The description shown when Option 21 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 22 ==
 * @default
 *
 * @param Option 22 Symbol
 * @desc The symbol of the option that will use the info defined for Option 22.
 * @default
 *
 * @param Option 22 Category
 * @desc The category that Option 22 will be placed in.
 * @default
 *
 * @param Option 22 Description
 * @desc The description shown when Option 22 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 23 ==
 * @default
 *
 * @param Option 23 Symbol
 * @desc The symbol of the option that will use the info defined for Option 23.
 * @default
 *
 * @param Option 23 Category
 * @desc The category that Option 23 will be placed in.
 * @default
 *
 * @param Option 23 Description
 * @desc The description shown when Option 23 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 24 ==
 * @default
 *
 * @param Option 24 Symbol
 * @desc The symbol of the option that will use the info defined for Option 24.
 * @default
 *
 * @param Option 24 Category
 * @desc The category that Option 24 will be placed in.
 * @default
 *
 * @param Option 24 Description
 * @desc The description shown when Option 24 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 25 ==
 * @default
 *
 * @param Option 25 Symbol
 * @desc The symbol of the option that will use the info defined for Option 25.
 * @default
 *
 * @param Option 25 Category
 * @desc The category that Option 25 will be placed in.
 * @default
 *
 * @param Option 25 Description
 * @desc The description shown when Option 25 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 26 ==
 * @default
 *
 * @param Option 26 Symbol
 * @desc The symbol of the option that will use the info defined for Option 26.
 * @default
 *
 * @param Option 26 Category
 * @desc The category that Option 26 will be placed in.
 * @default
 *
 * @param Option 26 Description
 * @desc The description shown when Option 26 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 27 ==
 * @default
 *
 * @param Option 27 Symbol
 * @desc The symbol of the option that will use the info defined for Option 27.
 * @default
 *
 * @param Option 27 Category
 * @desc The category that Option 27 will be placed in.
 * @default
 *
 * @param Option 27 Description
 * @desc The description shown when Option 27 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 28 ==
 * @default
 *
 * @param Option 28 Symbol
 * @desc The symbol of the option that will use the info defined for Option 28.
 * @default
 *
 * @param Option 28 Category
 * @desc The category that Option 28 will be placed in.
 * @default
 *
 * @param Option 28 Description
 * @desc The description shown when Option 28 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 29 ==
 * @default
 *
 * @param Option 29 Symbol
 * @desc The symbol of the option that will use the info defined for Option 29.
 * @default
 *
 * @param Option 29 Category
 * @desc The category that Option 29 will be placed in.
 * @default
 *
 * @param Option 29 Description
 * @desc The description shown when Option 29 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 30 ==
 * @default
 *
 * @param Option 30 Symbol
 * @desc The symbol of the option that will use the info defined for Option 30.
 * @default
 *
 * @param Option 30 Category
 * @desc The category that Option 30 will be placed in.
 * @default
 *
 * @param Option 30 Description
 * @desc The description shown when Option 30 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 31 ==
 * @default
 *
 * @param Option 31 Symbol
 * @desc The symbol of the option that will use the info defined for Option 31.
 * @default
 *
 * @param Option 31 Category
 * @desc The category that Option 31 will be placed in.
 * @default
 *
 * @param Option 31 Description
 * @desc The description shown when Option 31 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 32 ==
 * @default
 *
 * @param Option 32 Symbol
 * @desc The symbol of the option that will use the info defined for Option 32.
 * @default
 *
 * @param Option 32 Category
 * @desc The category that Option 32 will be placed in.
 * @default
 *
 * @param Option 32 Description
 * @desc The description shown when Option 32 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 33 ==
 * @default
 *
 * @param Option 33 Symbol
 * @desc The symbol of the option that will use the info defined for Option 33.
 * @default
 *
 * @param Option 33 Category
 * @desc The category that Option 33 will be placed in.
 * @default
 *
 * @param Option 33 Description
 * @desc The description shown when Option 33 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 34 ==
 * @default
 *
 * @param Option 34 Symbol
 * @desc The symbol of the option that will use the info defined for Option 34.
 * @default
 *
 * @param Option 34 Category
 * @desc The category that Option 34 will be placed in.
 * @default
 *
 * @param Option 34 Description
 * @desc The description shown when Option 34 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 35 ==
 * @default
 *
 * @param Option 35 Symbol
 * @desc The symbol of the option that will use the info defined for Option 35.
 * @default
 *
 * @param Option 35 Category
 * @desc The category that Option 35 will be placed in.
 * @default
 *
 * @param Option 35 Description
 * @desc The description shown when Option 35 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 36 ==
 * @default
 *
 * @param Option 36 Symbol
 * @desc The symbol of the option that will use the info defined for Option 36.
 * @default
 *
 * @param Option 36 Category
 * @desc The category that Option 36 will be placed in.
 * @default
 *
 * @param Option 36 Description
 * @desc The description shown when Option 36 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 37 ==
 * @default
 *
 * @param Option 37 Symbol
 * @desc The symbol of the option that will use the info defined for Option 37.
 * @default
 *
 * @param Option 37 Category
 * @desc The category that Option 37 will be placed in.
 * @default
 *
 * @param Option 37 Description
 * @desc The description shown when Option 37 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 38 ==
 * @default
 *
 * @param Option 38 Symbol
 * @desc The symbol of the option that will use the info defined for Option 38.
 * @default
 *
 * @param Option 38 Category
 * @desc The category that Option 38 will be placed in.
 * @default
 *
 * @param Option 38 Description
 * @desc The description shown when Option 38 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 39 ==
 * @default
 *
 * @param Option 39 Symbol
 * @desc The symbol of the option that will use the info defined for Option 39.
 * @default
 *
 * @param Option 39 Category
 * @desc The category that Option 39 will be placed in.
 * @default
 *
 * @param Option 39 Description
 * @desc The description shown when Option 39 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 40 ==
 * @default
 *
 * @param Option 40 Symbol
 * @desc The symbol of the option that will use the info defined for Option 40.
 * @default
 *
 * @param Option 40 Category
 * @desc The category that Option 40 will be placed in.
 * @default
 *
 * @param Option 40 Description
 * @desc The description shown when Option 40 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 41 ==
 * @default
 *
 * @param Option 41 Symbol
 * @desc The symbol of the option that will use the info defined for Option 41.
 * @default
 *
 * @param Option 41 Category
 * @desc The category that Option 41 will be placed in.
 * @default
 *
 * @param Option 41 Description
 * @desc The description shown when Option 41 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 42 ==
 * @default
 *
 * @param Option 42 Symbol
 * @desc The symbol of the option that will use the info defined for Option 42.
 * @default
 *
 * @param Option 42 Category
 * @desc The category that Option 42 will be placed in.
 * @default
 *
 * @param Option 42 Description
 * @desc The description shown when Option 42 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 43 ==
 * @default
 *
 * @param Option 43 Symbol
 * @desc The symbol of the option that will use the info defined for Option 43.
 * @default
 *
 * @param Option 43 Category
 * @desc The category that Option 43 will be placed in.
 * @default
 *
 * @param Option 43 Description
 * @desc The description shown when Option 43 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 44 ==
 * @default
 *
 * @param Option 44 Symbol
 * @desc The symbol of the option that will use the info defined for Option 44.
 * @default
 *
 * @param Option 44 Category
 * @desc The category that Option 44 will be placed in.
 * @default
 *
 * @param Option 44 Description
 * @desc The description shown when Option 44 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 45 ==
 * @default
 *
 * @param Option 45 Symbol
 * @desc The symbol of the option that will use the info defined for Option 45.
 * @default
 *
 * @param Option 45 Category
 * @desc The category that Option 45 will be placed in.
 * @default
 *
 * @param Option 45 Description
 * @desc The description shown when Option 45 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 46 ==
 * @default
 *
 * @param Option 46 Symbol
 * @desc The symbol of the option that will use the info defined for Option 46.
 * @default
 *
 * @param Option 46 Category
 * @desc The category that Option 46 will be placed in.
 * @default
 *
 * @param Option 46 Description
 * @desc The description shown when Option 46 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 47 ==
 * @default
 *
 * @param Option 47 Symbol
 * @desc The symbol of the option that will use the info defined for Option 47.
 * @default
 *
 * @param Option 47 Category
 * @desc The category that Option 47 will be placed in.
 * @default
 *
 * @param Option 47 Description
 * @desc The description shown when Option 47 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 48 ==
 * @default
 *
 * @param Option 48 Symbol
 * @desc The symbol of the option that will use the info defined for Option 48.
 * @default
 *
 * @param Option 48 Category
 * @desc The category that Option 48 will be placed in.
 * @default
 *
 * @param Option 48 Description
 * @desc The description shown when Option 48 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 49 ==
 * @default
 *
 * @param Option 49 Symbol
 * @desc The symbol of the option that will use the info defined for Option 49.
 * @default
 *
 * @param Option 49 Category
 * @desc The category that Option 49 will be placed in.
 * @default
 *
 * @param Option 49 Description
 * @desc The description shown when Option 49 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @param == Option 50 ==
 * @default
 *
 * @param Option 50 Symbol
 * @desc The symbol of the option that will use the info defined for Option 50.
 * @default
 *
 * @param Option 50 Category
 * @desc The category that Option 50 will be placed in.
 * @default
 *
 * @param Option 50 Description
 * @desc The description shown when Option 50 is highlighted.
 * Use \n to create a new line
 * @default
 *
 * @help
 *
 * Options Upgrade
 * Version 1.01
 * SumRndmDde
 *
 *
 * This Plugin upgrades the Options Menu!
 * The options are placed into different categories and a description window 
 * has been added.
 *
 * One may also manipulate the various positions of all the windows, and can
 * control the rows/colums for the category window.
 *
 *
 * ==========================================================================
 *  Setting up Categories/Descriptions
 * ==========================================================================
 *
 * By default, all of the default options have descriptions and categories
 * set up for them. These are all customized through the Parameters.
 *
 * If an option does not have a category assigned to it, it will be placed
 * in the default category. If an option does not have a description, one
 * will not be used.
 *
 *
 * In order to assign a category or description, you'll need the symbol
 * for the command.
 *
 * First, place the command in an Option X Symbol Parameter.
 *
 * Once you do so, then the Option X Category and Option X Description will
 * be used with the option associated with this symbol.
 *
 *
 * ==========================================================================
 *  Window Color Customizers
 * ==========================================================================
 *
 * This plugin also adds options to change the tone of the game's windows.
 *
 * You can remove these by setting the "Add Window Colors?" parameter to false.
 *
 * Keep in mind that doing so may leave the "Window" category blank. Be sure
 * to remove the category from the list if that happens. However, you could
 * simply add other options to it if necessary.
 *
 *
 * ==========================================================================
 *  End of Help File
 * ==========================================================================
 * 
 * Welcome to the bottom of the Help file.
 *
 *
 * Thanks for reading!
 * If you have questions, or if you enjoyed this Plugin, please check
 * out my YouTube channel!
 *
 * https://www.youtube.com/c/SumRndmDde
 *
 *
 * Until next time,
 *   ~ SumRndmDde
 *
 */

var SRD = SRD || {};
SRD.OptionsUpgrade = SRD.OptionsUpgrade || {};

var Imported = Imported || {};
Imported["SumRndmDde Options Upgrade"] = 1.01;

function Window_OptionsCategory() {
	this.initialize.apply(this, arguments);
}

(function(_) {
	
"use strict";

var params = PluginManager.parameters('SRD_OptionsUpgrade');

_.categories = String(params['Categories']).split(/\s*,\s*/);
_.default = String(params['Default Category']);
_.addColors = String(params['Add Window Colors?']).trim().toLowerCase() === 'true';
_.addReset = String(params['Add Reset Option?']).trim().toLowerCase() === 'true';
_.resetName = String(params['Reset Option Name']);
_.resetSE = String(params['Reset Option SE']);


_.categoryCols = String(params['Category Window Cols']);
_.categoryRows = String(params['Category Window Rows']);
_.categoryX = String(params['Category Window X']);
_.categoryY = String(params['Category Window Y']);
_.categoryWidth = String(params['Category Window Width']);
_.categoryAlign = String(params['Category Text Align']);

_.optionsX = String(params['Options Window X']);
_.optionsY = String(params['Options Window Y']);
_.optionsWidth = String(params['Options Window Width']);

_.helpX = String(params['Help Window X']);
_.helpY = String(params['Help Window Y']);

_.commands = [];
_.comCategories = [];
_.comDescriptions = [];

for(var i = 1; i <= 50; i++) {
	var symbol = String(params['Option ' + i + ' Symbol']);
	if(symbol.trim().length > 0) {
		var category = String(params['Option ' + i + ' Category']);
		var description = String(params['Option ' + i + ' Description']).replace('\\n', '\n');
		_.commands[i - 1] = symbol;
		_.comCategories[i - 1] = category;
		_.comDescriptions[i - 1] = description;
	}
}

//-----------------------------------------------------------------------------
// Scene_Options
//-----------------------------------------------------------------------------

var _Scene_Options_create = Scene_Options.prototype.create;
Scene_Options.prototype.create = function() {
	_Scene_Options_create.apply(this, arguments);
	this.createMessageWindow();
	this._optionsWindow.deactivate();
	this._optionsWindow.deselect();
	this.createCategoryWindow();
	this.createHelpWindow();
	for(var i = 0; i < 2; i++) {
		this._helpWindow.x = eval(_.helpX);
		this._helpWindow.y = eval(_.helpY);
		this._categoryWindow.x = eval(_.categoryX);
		this._categoryWindow.y = eval(_.categoryY);
	}
	this._optionsWindow.setCategoryWindow(this._categoryWindow);
};

Scene_Options.prototype.onCategoryOk = function() {
	this._optionsWindow.activate();
	this._optionsWindow.select(0);
};

Scene_Options.prototype.onCategoryCancel = function() {
	//$gameMessage.add('Do you wish to save these settings?');
	this.popScene();
};

Scene_Options.prototype.onCategoryReset = function() {
	ConfigManager.applyData({});
	this._optionsWindow.deselect();
	this._categoryWindow.activate();
	this._helpWindow.clear();
};

Scene_Options.prototype.onOptionsCancel = function() {
	this._optionsWindow.deselect();
	this._categoryWindow.activate();
	this._helpWindow.clear();
};

var _Scene_Options_createOptionsWindow = Scene_Options.prototype.createOptionsWindow;
Scene_Options.prototype.createOptionsWindow = function() {
	_Scene_Options_createOptionsWindow.apply(this, arguments);
	this._optionsWindow.setHandler('cancel', this.onOptionsCancel.bind(this));
};

Scene_Options.prototype.createCategoryWindow = function() {
	this._categoryWindow = new Window_OptionsCategory();
	this._categoryWindow.setHandler('ok', this.onCategoryOk.bind(this));
	this._categoryWindow.setHandler('cancel', this.onCategoryCancel.bind(this));
	this._categoryWindow.setHandler('srd-reset-and-stuff', this.onCategoryReset.bind(this));
	this._categoryWindow.setOptionsWindow(this._optionsWindow);
	this.addWindow(this._categoryWindow);
};

Scene_Options.prototype.createHelpWindow = function() {
	this._helpWindow = new Window_Help();
	this._optionsWindow.setHelpWindow(this._helpWindow);
	this.addWindow(this._helpWindow);
};

Scene_Options.prototype.createMessageWindow = function() {
	this._messageWindow = new Window_Message();
	this.addWindow(this._messageWindow);
	this._messageWindow.subWindows().forEach(function(window) {
		this.addWindow(window);
	}, this);
};

//-----------------------------------------------------------------------------
// Window_OptionsCategory
//-----------------------------------------------------------------------------

Window_OptionsCategory.prototype = Object.create(Window_HorzCommand.prototype);
Window_OptionsCategory.prototype.constructor = Window_OptionsCategory;

Window_OptionsCategory.prototype.initialize = function() {
	Window_HorzCommand.prototype.initialize.call(this, 0, 0);
};

Window_OptionsCategory.prototype.windowWidth = function() {
	return eval(_.categoryWidth);
};

Window_OptionsCategory.prototype.maxCols = function() {
	return eval(_.categoryCols);
};

Window_OptionsCategory.prototype.numVisibleRows = function() {
	return eval(_.categoryRows);
};

Window_OptionsCategory.prototype.update = function() {
	Window_HorzCommand.prototype.update.call(this);
	if (this._optionsWindow && this.currentSymbol() != this._optionsWindow.getCategory()) {
		this._optionsWindow.setCategory(this.currentSymbol());
	}
};

Window_OptionsCategory.prototype.makeCommandList = function() {
	for(var i = 0; i < _.categories.length; i++) {
		this.addCommand(_.categories[i], _.categories[i]);
	}
	if(_.addReset) this.addCommand(_.resetName, 'srd-reset-and-stuff');
};

Window_OptionsCategory.prototype.setOptionsWindow = function(optionsWindow) {
	this._optionsWindow = optionsWindow;
	this.update();
};

Window_OptionsCategory.prototype.playOkSound = function() {
	if(this.currentSymbol() != 'srd-reset-and-stuff') {
		SoundManager.playOk();
	} else {
		AudioManager.playSe({"name":_.resetSE,"pan":0,"pitch":100,"volume":100});
	}
};

Window_OptionsCategory.prototype.itemTextAlign = function() {
	return _.categoryAlign;
};

//-----------------------------------------------------------------------------
// Window_Options
//-----------------------------------------------------------------------------

var _Window_Options_initialize = Window_Options.prototype.initialize;
Window_Options.prototype.initialize = function() {
	this._category = _.comCategories[0];
	_Window_Options_initialize.apply(this, arguments);
	this.refresh();
};

Window_Options.prototype.windowWidth = function() {
	return eval(_.optionsWidth);
};

Window_Options.prototype.setCategory = function(category) {
	this._category = category;
	this.refresh();
};

Window_Options.prototype.getCategory = function() {
	return this._category;
};

Window_Options.prototype.updatePlacement = function() {
	if(this._helpWindow && this._categoryWindow) {
		this.x = eval(_.optionsX);
		this.y = eval(_.optionsY);
	}
};

var _Window_Command_addCommand = Window_Command.prototype.addCommand;
Window_Options.prototype.addCommand = function(name, symbol, enabled, ext) {
	var index = _.commands.indexOf(symbol);
	if(index < 0 && this._category != _.default) return;
	if(index >= 0 && this._category != _.comCategories[index]) return;
	_Window_Command_addCommand.apply(this, arguments);
};

Window_Options.prototype.makeCommandList = function() {
	this.addGeneralOptions();
	this.addVolumeOptions();
	if(_.addColors) {
		this.addCommand('Window Red', 'windowRed');
		this.addCommand('Window Green', 'windowGreen');
		this.addCommand('Window Blue', 'windowBlue');
	}
};

Window_Options.prototype.updateHelp = function() {
	if(this._helpWindow) {
		var index = _.commands.indexOf(this.currentData() ? this.currentData().symbol : '');
		this._helpWindow.setText(_.comDescriptions[index]);
	}
};

Window_Options.prototype.updateHeight = function() {
	if(this.height != this.windowHeight()) {
		this.height = this.windowHeight();
	}
	if(this._list.length <= 0) {
		this.visible = false;
	} else {
		this.visible = true;
	}
};

Window_Options.prototype.setHelpWindow = function(window) {
	this._helpWindow = window;
	this.updateHelp();
};

Window_Options.prototype.setCategoryWindow = function(window) {
	this._categoryWindow = window;
	this.updatePlacement();
};

Window_Options.prototype.refresh = function() {
	this.clearCommandList();
	this.makeCommandList();
	this.updateHeight();
	this.createContents();
	this.drawAllItems();
};

if(_.addColors) {

var _Window_Options_statusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
	var symbol = this.commandSymbol(index);
	var value = this.getConfigValue(symbol);
	if (this.isWindowColorSymbol(symbol)) {
		return this.windowColorStatusText(value);
	} else {
		return _Window_Options_statusText.apply(this, arguments);
	}
};

Window_Options.prototype.isWindowColorSymbol = function(symbol) {
	return symbol === 'windowRed' || symbol === 'windowGreen' || symbol === 'windowBlue';
};

Window_Options.prototype.windowColorStatusText = function(value) {
	return value;
};

var _Window_Options_processOk = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
	var index = this.index();
	var symbol = this.commandSymbol(index);
	var value = this.getConfigValue(symbol);
	if (this.isWindowColorSymbol(symbol)) {
		value += 5;
		if (value > 255) {
			value = 0;
		}
		value = value.clamp(-255, 255);
		this.changeValue(symbol, value);
	} else {
		_Window_Options_processOk.apply(this, arguments);
	}
};

var _Window_Options_cursorRight = Window_Options.prototype.cursorRight;
Window_Options.prototype.cursorRight = function(wrap) {
	var index = this.index();
	var symbol = this.commandSymbol(index);
	var value = this.getConfigValue(symbol);
	if (this.isWindowColorSymbol(symbol)) {
		value += 5;
		value = value.clamp(-255, 255);
		this.changeValue(symbol, value);
	} else {
		_Window_Options_cursorRight.apply(this, arguments);
	}
};

var _Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
Window_Options.prototype.cursorLeft = function(wrap) {
	var index = this.index();
	var symbol = this.commandSymbol(index);
	var value = this.getConfigValue(symbol);
	if (this.isWindowColorSymbol(symbol)) {
		value -= 5;
		value = value.clamp(-255, 255);
		this.changeValue(symbol, value);
	} else {
		_Window_Options_cursorLeft.apply(this, arguments);
	}
};

//-----------------------------------------------------------------------------
// Game_System
//-----------------------------------------------------------------------------

var _Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_Game_System_initialize.apply(this, arguments);
	this.setWindowTone([ConfigManager._windowRed, ConfigManager._windowGreen, ConfigManager._windowBlue]);
};

//-----------------------------------------------------------------------------
// ConfigManager
//-----------------------------------------------------------------------------

ConfigManager._windowRed = 0;
ConfigManager._windowGreen = 0;
ConfigManager._windowBlue = 0;

Object.defineProperty(ConfigManager, 'windowRed', {
	get: function() {
		return $gameSystem ? $gameSystem.windowTone()[0] : this._windowRed;
	},
	set: function(value) {
		if($gameSystem) {
			$gameSystem.windowTone()[0] = value;
		} else {
			this._windowRed = value;
		}
	},
	configurable: true
});

Object.defineProperty(ConfigManager, 'windowGreen', {
	get: function() {
		return $gameSystem ? $gameSystem.windowTone()[1] : this._windowGreen;
	},
	set: function(value) {
		if($gameSystem) {
			$gameSystem.windowTone()[1] = value;
		} else {
			this._windowGreen = value;
		}
	},
	configurable: true
});

Object.defineProperty(ConfigManager, 'windowBlue', {
	get: function() {
		return $gameSystem ? $gameSystem.windowTone()[2] : this._windowBlue;
	},
	set: function(value) {
		if($gameSystem) {
			$gameSystem.windowTone()[2] = value;
		} else {
			this._windowBlue = value;
		}
	},
	configurable: true
});

var _ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
	var config = _ConfigManager_makeData.apply(this, arguments);
	config.windowRed = this.windowRed;
	config.windowGreen = this.windowGreen;
	config.windowBlue = this.windowBlue;
	return config;
};

var _ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
	_ConfigManager_applyData.apply(this, arguments);
	this.windowRed = this.readWindowColors(config, 'windowRed');
	this.windowGreen = this.readWindowColors(config, 'windowGreen');
	this.windowBlue = this.readWindowColors(config, 'windowBlue');
};

ConfigManager.readWindowColors = function(config, name) {
	var value = config[name];
	if (value !== undefined) {
		return parseInt(value).clamp(-255, 255);
	} else {
		return 0;
	}
};

}

})(SRD.OptionsUpgrade);