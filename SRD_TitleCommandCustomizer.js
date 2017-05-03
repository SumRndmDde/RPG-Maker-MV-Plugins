/*:
 * @plugindesc Allows customization over the Title Command Window.
 * Can customize size, position, rows, columns, and commands.
 * @author SumRndmDde
 *
 * @param Command Order
 * @desc The order of the commands on the Window.
 * List each one by its symbol and seperate with commas.
 * @default newGame, continue, options, shutdown
 *
 * @param Allow Text Codes
 * @desc If 'true', Text Codes can be used in the command text; however, the text alignment will be forced to the left.
 * @default true
 *
 * @param Command Text Alignment
 * @desc The alignment of the command text.
 * Choices are: left | right | center
 * @default left
 *
 * @param Command Text Font
 * @desc The font used for the command text.
 * @default GameFont
 *
 * @param Window Opacity
 * @desc The opacity of the Command Window.
 * @default 255
 *
 * @param Window Padding
 * @desc The padding of the Command Window.
 * @default 18
 *
 * @param  == Position/Size ==
 * @default
 *
 * @param Window X
 * @desc The X Position of the Title Command Window.
 * @default (Graphics.boxWidth - this.width) / 2
 *
 * @param Window Y
 * @desc The Y Position of the Title Command Window.
 * @default Graphics.boxHeight - this.height - 96
 *
 * @param Window Width
 * @desc The width of the Title Command Window.
 * @default 240 * this.maxCols()
 *
 * @param Window Height
 * @desc The height of the Title Command Window.
 * @default this.fittingHeight(this.numVisibleRows())
 *
 * @param Window Rows
 * @desc The number of rows of the Title Command Window.
 * @default 2
 *
 * @param Window Columns
 * @desc The number of columns of the Title Command Window.
 * @default 2
 *
 * @param  == Command 1 ==
 * @default
 *
 * @param Com. 1 Used
 * @desc If you wish to have Command 1 on your Title's Command Window, set this to 'true'.
 * @default true
 *
 * @param Com. 1 Text
 * @desc This is the text shown for Command 1.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default EVAL: "\\i[73] " + TextManager.newGame
 *
 * @param Com. 1 Symbol
 * @desc This is Command 1's symbol.
 * @default newGame
 *
 * @param Com. 1 Action
 * @desc This is the code that binds a function to Command 1.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default this.commandNewGame.bind(this)
 *
 * @param Com. 1 Enabled
 * @desc This is a JavaScript eval that determines whether Command 1 is enabled.
 * @default true
 *
 * @param Com. 1 Visible
 * @desc This is a JavaScript eval that determines whether Command 1 is visible.
 * @default true
 *
 * @param  == Command 2 ==
 * @default
 *
 * @param Com. 2 Used
 * @desc If you wish to have Command 2 on your Title's Command Window, set this to 'true'.
 * @default true
 *
 * @param Com. 2 Text
 * @desc This is the text shown for Command 2.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default EVAL: this.isContinueEnabled() ? "\\i[75] " + TextManager.continue_ : "\\i[74] No Saves"
 *
 * @param Com. 2 Symbol
 * @desc This is Command 2's symbol.
 * @default continue
 *
 * @param Com. 2 Action
 * @desc This is the code that binds a function to Command 2.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default this.commandContinue.bind(this)
 *
 * @param Com. 2 Enabled
 * @desc This is a JavaScript eval that determines whether Command 2 is enabled.
 * @default this.isContinueEnabled()
 *
 * @param Com. 2 Visible
 * @desc This is a JavaScript eval that determines whether Command 2 is visible.
 * @default true
 *
 * @param  == Command 3 ==
 * @default
 *
 * @param Com. 3 Used
 * @desc If you wish to have Command 3 on your Title's Command Window, set this to 'true'.
 * @default true
 *
 * @param Com. 3 Text
 * @desc This is the text shown for Command 3.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default EVAL: "\\i[83] " + TextManager.options
 *
 * @param Com. 3 Symbol
 * @desc This is Command 3's symbol.
 * @default options
 *
 * @param Com. 3 Action
 * @desc This is the code that binds a function to Command 3.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default this.commandOptions.bind(this)
 *
 * @param Com. 3 Enabled
 * @desc This is a JavaScript eval that determines whether Command 3 is enabled.
 * @default true
 *
 * @param Com. 3 Visible
 * @desc This is a JavaScript eval that determines whether Command 3 is visible.
 * @default true
 *
 * @param  == Command 4 ==
 * @default
 *
 * @param Com. 4 Used
 * @desc If you wish to have Command 4 on your Title's Command Window, set this to 'true'.
 * @default true
 *
 * @param Com. 4 Text
 * @desc This is the text shown for Command 4.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default \i[82] Shutdown
 *
 * @param Com. 4 Symbol
 * @desc This is Command 4's symbol.
 * @default shutdown
 *
 * @param Com. 4 Action
 * @desc This is the code that binds a function to Command 4.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default close.bind(window)
 *
 * @param Com. 4 Enabled
 * @desc This is a JavaScript eval that determines whether Command 4 is enabled.
 * @default true
 *
 * @param Com. 4 Visible
 * @desc This is a JavaScript eval that determines whether Command 4 is visible.
 * @default true
 *
 * @param  == Command 5 ==
 * @default
 *
 * @param Com. 5 Used
 * @desc If you wish to have Command 5 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 5 Text
 * @desc This is the text shown for Command 5.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default Common Event 1
 *
 * @param Com. 5 Symbol
 * @desc This is Command 5's symbol.
 * @default common-event-1
 *
 * @param Com. 5 Action
 * @desc This is the code that binds a function to Command 5.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default this.playCommonEvent.bind(this, 1)
 *
 * @param Com. 5 Enabled
 * @desc This is a JavaScript eval that determines whether Command 5 is enabled.
 * @default true
 *
 * @param Com. 5 Visible
 * @desc This is a JavaScript eval that determines whether Command 5 is visible.
 * @default true
 *
 * @param  == Command 6 ==
 * @default
 *
 * @param Com. 6 Used
 * @desc If you wish to have Command 6 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 6 Text
 * @desc This is the text shown for Command 6.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 6 Symbol
 * @desc This is Command 6's symbol.
 * @default
 *
 * @param Com. 6 Action
 * @desc This is the code that binds a function to Command 6.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 6 Enabled
 * @desc This is a JavaScript eval that determines whether Command 6 is enabled.
 * @default true
 *
 * @param Com. 6 Visible
 * @desc This is a JavaScript eval that determines whether Command 6 is visible.
 * @default true
 *
 * @param  == Command 7 ==
 * @default
 *
 * @param Com. 7 Used
 * @desc If you wish to have Command 7 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 7 Text
 * @desc This is the text shown for Command 7.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 7 Symbol
 * @desc This is Command 7's symbol.
 * @default
 *
 * @param Com. 7 Action
 * @desc This is the code that binds a function to Command 7.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 7 Enabled
 * @desc This is a JavaScript eval that determines whether Command 7 is enabled.
 * @default true
 *
 * @param Com. 7 Visible
 * @desc This is a JavaScript eval that determines whether Command 7 is visible.
 * @default true
 *
 * @param  == Command 8 ==
 * @default
 *
 * @param Com. 8 Used
 * @desc If you wish to have Command 8 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 8 Text
 * @desc This is the text shown for Command 8.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 8 Symbol
 * @desc This is Command 8's symbol.
 * @default
 *
 * @param Com. 8 Action
 * @desc This is the code that binds a function to Command 8.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 8 Enabled
 * @desc This is a JavaScript eval that determines whether Command 8 is enabled.
 * @default true
 *
 * @param Com. 8 Visible
 * @desc This is a JavaScript eval that determines whether Command 8 is visible.
 * @default true
 *
 * @param  == Command 9 ==
 * @default
 *
 * @param Com. 9 Used
 * @desc If you wish to have Command 9 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 9 Text
 * @desc This is the text shown for Command 9.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 9 Symbol
 * @desc This is Command 9's symbol.
 * @default
 *
 * @param Com. 9 Action
 * @desc This is the code that binds a function to Command 9.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 9 Enabled
 * @desc This is a JavaScript eval that determines whether Command 9 is enabled.
 * @default true
 *
 * @param Com. 9 Visible
 * @desc This is a JavaScript eval that determines whether Command 9 is visible.
 * @default true
 *
 * @param  == Command 10 ==
 * @default
 *
 * @param Com. 10 Used
 * @desc If you wish to have Command 10 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 10 Text
 * @desc This is the text shown for Command 10.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 10 Symbol
 * @desc This is Command 10's symbol.
 * @default
 *
 * @param Com. 10 Action
 * @desc This is the code that binds a function to Command 10.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 10 Enabled
 * @desc This is a JavaScript eval that determines whether Command 10 is enabled.
 * @default true
 *
 * @param Com. 10 Visible
 * @desc This is a JavaScript eval that determines whether Command 10 is visible.
 * @default true
 *
 * @param  == Command 11 ==
 * @default
 *
 * @param Com. 11 Used
 * @desc If you wish to have Command 11 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 11 Text
 * @desc This is the text shown for Command 11.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 11 Symbol
 * @desc This is Command 11's symbol.
 * @default
 *
 * @param Com. 11 Action
 * @desc This is the code that binds a function to Command 11.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 11 Enabled
 * @desc This is a JavaScript eval that determines whether Command 11 is enabled.
 * @default true
 *
 * @param Com. 11 Visible
 * @desc This is a JavaScript eval that determines whether Command 11 is visible.
 * @default true
 *
 * @param  == Command 12 ==
 * @default
 *
 * @param Com. 12 Used
 * @desc If you wish to have Command 12 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 12 Text
 * @desc This is the text shown for Command 12.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 12 Symbol
 * @desc This is Command 12's symbol.
 * @default
 *
 * @param Com. 12 Action
 * @desc This is the code that binds a function to Command 12.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 12 Enabled
 * @desc This is a JavaScript eval that determines whether Command 12 is enabled.
 * @default true
 *
 * @param Com. 12 Visible
 * @desc This is a JavaScript eval that determines whether Command 12 is visible.
 * @default true
 *
 * @param  == Command 13 ==
 * @default
 *
 * @param Com. 13 Used
 * @desc If you wish to have Command 13 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 13 Text
 * @desc This is the text shown for Command 13.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 13 Symbol
 * @desc This is Command 13's symbol.
 * @default
 *
 * @param Com. 13 Action
 * @desc This is the code that binds a function to Command 13.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 13 Enabled
 * @desc This is a JavaScript eval that determines whether Command 13 is enabled.
 * @default true
 *
 * @param Com. 13 Visible
 * @desc This is a JavaScript eval that determines whether Command 13 is visible.
 * @default true
 *
 * @param  == Command 14 ==
 * @default
 *
 * @param Com. 14 Used
 * @desc If you wish to have Command 14 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 14 Text
 * @desc This is the text shown for Command 14.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 14 Symbol
 * @desc This is Command 14's symbol.
 * @default
 *
 * @param Com. 14 Action
 * @desc This is the code that binds a function to Command 14.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 14 Enabled
 * @desc This is a JavaScript eval that determines whether Command 14 is enabled.
 * @default true
 *
 * @param Com. 14 Visible
 * @desc This is a JavaScript eval that determines whether Command 14 is visible.
 * @default true
 *
 * @param  == Command 15 ==
 * @default
 *
 * @param Com. 15 Used
 * @desc If you wish to have Command 15 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 15 Text
 * @desc This is the text shown for Command 15.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 15 Symbol
 * @desc This is Command 15's symbol.
 * @default
 *
 * @param Com. 15 Action
 * @desc This is the code that binds a function to Command 15.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 15 Enabled
 * @desc This is a JavaScript eval that determines whether Command 15 is enabled.
 * @default true
 *
 * @param Com. 15 Visible
 * @desc This is a JavaScript eval that determines whether Command 15 is visible.
 * @default true
 *
 * @param  == Command 16 ==
 * @default
 *
 * @param Com. 16 Used
 * @desc If you wish to have Command 16 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 16 Text
 * @desc This is the text shown for Command 16.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 16 Symbol
 * @desc This is Command 16's symbol.
 * @default
 *
 * @param Com. 16 Action
 * @desc This is the code that binds a function to Command 16.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 16 Enabled
 * @desc This is a JavaScript eval that determines whether Command 16 is enabled.
 * @default true
 *
 * @param Com. 16 Visible
 * @desc This is a JavaScript eval that determines whether Command 16 is visible.
 * @default true
 *
 * @param  == Command 17 ==
 * @default
 *
 * @param Com. 17 Used
 * @desc If you wish to have Command 17 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 17 Text
 * @desc This is the text shown for Command 17.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 17 Symbol
 * @desc This is Command 17's symbol.
 * @default
 *
 * @param Com. 17 Action
 * @desc This is the code that binds a function to Command 17.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 17 Enabled
 * @desc This is a JavaScript eval that determines whether Command 17 is enabled.
 * @default true
 *
 * @param Com. 17 Visible
 * @desc This is a JavaScript eval that determines whether Command 17 is visible.
 * @default true
 *
 * @param  == Command 18 ==
 * @default
 *
 * @param Com. 18 Used
 * @desc If you wish to have Command 18 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 18 Text
 * @desc This is the text shown for Command 18.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 18 Symbol
 * @desc This is Command 18's symbol.
 * @default
 *
 * @param Com. 18 Action
 * @desc This is the code that binds a function to Command 18.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 18 Enabled
 * @desc This is a JavaScript eval that determines whether Command 18 is enabled.
 * @default true
 *
 * @param Com. 18 Visible
 * @desc This is a JavaScript eval that determines whether Command 18 is visible.
 * @default true
 *
 * @param  == Command 19 ==
 * @default
 *
 * @param Com. 19 Used
 * @desc If you wish to have Command 19 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 19 Text
 * @desc This is the text shown for Command 19.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 19 Symbol
 * @desc This is Command 19's symbol.
 * @default
 *
 * @param Com. 19 Action
 * @desc This is the code that binds a function to Command 19.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 19 Enabled
 * @desc This is a JavaScript eval that determines whether Command 19 is enabled.
 * @default true
 *
 * @param Com. 19 Visible
 * @desc This is a JavaScript eval that determines whether Command 19 is visible.
 * @default true
 *
 * @param  == Command 20 ==
 * @default
 *
 * @param Com. 20 Used
 * @desc If you wish to have Command 20 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 20 Text
 * @desc This is the text shown for Command 20.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 20 Symbol
 * @desc This is Command 20's symbol.
 * @default
 *
 * @param Com. 20 Action
 * @desc This is the code that binds a function to Command 20.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 20 Enabled
 * @desc This is a JavaScript eval that determines whether Command 20 is enabled.
 * @default true
 *
 * @param Com. 20 Visible
 * @desc This is a JavaScript eval that determines whether Command 20 is visible.
 * @default true
 *
 * @param  == Command 21 ==
 * @default
 *
 * @param Com. 21 Used
 * @desc If you wish to have Command 21 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 21 Text
 * @desc This is the text shown for Command 21.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 21 Symbol
 * @desc This is Command 21's symbol.
 * @default
 *
 * @param Com. 21 Action
 * @desc This is the code that binds a function to Command 21.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 21 Enabled
 * @desc This is a JavaScript eval that determines whether Command 21 is enabled.
 * @default true
 *
 * @param Com. 21 Visible
 * @desc This is a JavaScript eval that determines whether Command 21 is visible.
 * @default true
 *
 * @param  == Command 22 ==
 * @default
 *
 * @param Com. 22 Used
 * @desc If you wish to have Command 22 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 22 Text
 * @desc This is the text shown for Command 22.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 22 Symbol
 * @desc This is Command 22's symbol.
 * @default
 *
 * @param Com. 22 Action
 * @desc This is the code that binds a function to Command 22.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 22 Enabled
 * @desc This is a JavaScript eval that determines whether Command 22 is enabled.
 * @default true
 *
 * @param Com. 22 Visible
 * @desc This is a JavaScript eval that determines whether Command 22 is visible.
 * @default true
 *
 * @param  == Command 23 ==
 * @default
 *
 * @param Com. 23 Used
 * @desc If you wish to have Command 23 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 23 Text
 * @desc This is the text shown for Command 23.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 23 Symbol
 * @desc This is Command 23's symbol.
 * @default
 *
 * @param Com. 23 Action
 * @desc This is the code that binds a function to Command 23.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 23 Enabled
 * @desc This is a JavaScript eval that determines whether Command 23 is enabled.
 * @default true
 *
 * @param Com. 23 Visible
 * @desc This is a JavaScript eval that determines whether Command 23 is visible.
 * @default true
 *
 * @param  == Command 24 ==
 * @default
 *
 * @param Com. 24 Used
 * @desc If you wish to have Command 24 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 24 Text
 * @desc This is the text shown for Command 24.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 24 Symbol
 * @desc This is Command 24's symbol.
 * @default
 *
 * @param Com. 24 Action
 * @desc This is the code that binds a function to Command 24.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 24 Enabled
 * @desc This is a JavaScript eval that determines whether Command 24 is enabled.
 * @default true
 *
 * @param Com. 24 Visible
 * @desc This is a JavaScript eval that determines whether Command 24 is visible.
 * @default true
 *
 * @param  == Command 25 ==
 * @default
 *
 * @param Com. 25 Used
 * @desc If you wish to have Command 25 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 25 Text
 * @desc This is the text shown for Command 25.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 25 Symbol
 * @desc This is Command 25's symbol.
 * @default
 *
 * @param Com. 25 Action
 * @desc This is the code that binds a function to Command 25.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 25 Enabled
 * @desc This is a JavaScript eval that determines whether Command 25 is enabled.
 * @default true
 *
 * @param Com. 25 Visible
 * @desc This is a JavaScript eval that determines whether Command 25 is visible.
 * @default true
 *
 * @param  == Command 26 ==
 * @default
 *
 * @param Com. 26 Used
 * @desc If you wish to have Command 26 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 26 Text
 * @desc This is the text shown for Command 26.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 26 Symbol
 * @desc This is Command 26's symbol.
 * @default
 *
 * @param Com. 26 Action
 * @desc This is the code that binds a function to Command 26.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 26 Enabled
 * @desc This is a JavaScript eval that determines whether Command 26 is enabled.
 * @default true
 *
 * @param Com. 26 Visible
 * @desc This is a JavaScript eval that determines whether Command 26 is visible.
 * @default true
 *
 * @param  == Command 27 ==
 * @default
 *
 * @param Com. 27 Used
 * @desc If you wish to have Command 27 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 27 Text
 * @desc This is the text shown for Command 27.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 27 Symbol
 * @desc This is Command 27's symbol.
 * @default
 *
 * @param Com. 27 Action
 * @desc This is the code that binds a function to Command 27.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 27 Enabled
 * @desc This is a JavaScript eval that determines whether Command 27 is enabled.
 * @default true
 *
 * @param Com. 27 Visible
 * @desc This is a JavaScript eval that determines whether Command 27 is visible.
 * @default true
 *
 * @param  == Command 28 ==
 * @default
 *
 * @param Com. 28 Used
 * @desc If you wish to have Command 28 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 28 Text
 * @desc This is the text shown for Command 28.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 28 Symbol
 * @desc This is Command 28's symbol.
 * @default
 *
 * @param Com. 28 Action
 * @desc This is the code that binds a function to Command 28.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 28 Enabled
 * @desc This is a JavaScript eval that determines whether Command 28 is enabled.
 * @default true
 *
 * @param Com. 28 Visible
 * @desc This is a JavaScript eval that determines whether Command 28 is visible.
 * @default true
 *
 * @param  == Command 29 ==
 * @default
 *
 * @param Com. 29 Used
 * @desc If you wish to have Command 29 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 29 Text
 * @desc This is the text shown for Command 29.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 29 Symbol
 * @desc This is Command 29's symbol.
 * @default
 *
 * @param Com. 29 Action
 * @desc This is the code that binds a function to Command 29.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 29 Enabled
 * @desc This is a JavaScript eval that determines whether Command 29 is enabled.
 * @default true
 *
 * @param Com. 29 Visible
 * @desc This is a JavaScript eval that determines whether Command 29 is visible.
 * @default true
 *
 * @param  == Command 30 ==
 * @default
 *
 * @param Com. 30 Used
 * @desc If you wish to have Command 30 on your Title's Command Window, set this to 'true'.
 * @default false
 *
 * @param Com. 30 Text
 * @desc This is the text shown for Command 30.
 * If using a JavaScript eval, place EVAL: at the beginning.
 * @default
 *
 * @param Com. 30 Symbol
 * @desc This is Command 30's symbol.
 * @default
 *
 * @param Com. 30 Action
 * @desc This is the code that binds a function to Command 30.
 * Input a JavaScript eval that binds a function to 'this'.
 * @default
 *
 * @param Com. 30 Enabled
 * @desc This is a JavaScript eval that determines whether Command 30 is enabled.
 * @default true
 *
 * @param Com. 30 Visible
 * @desc This is a JavaScript eval that determines whether Command 30 is visible.
 * @default true
 *
 * @help
 *
 * Title Command Customizer
 * Version 1.01
 * SumRndmDde
 *
 *
 * This Plugin allows customization over the Title Command Window!
 * You can customize the size, position, rows, columns, and commands!
 *
 * If you wish to customize the X, Y, Width, Height, Rows, Columns, or 
 * Text Alignment of the Command Window, simply use the first Parameters.
 *
 *
 * ==========================================================================
 *  How to Set up Command Order
 * ==========================================================================
 *
 * While this Plugin allows you to add more commands, it doesn't overwrite
 * commands added through other Plugins.
 *
 * If you wish to customize the order of the commands, including both commands
 * that you have created and commands added through other Plugins, you can
 * use the Command Order Parameter to list the order of the commands using
 * their symbols.
 *
 * For example:
 *
 *    newGame, continue, common-event-1, common-event-2, options, shutdown
 *
 *
 * ==========================================================================
 *  How to Create a Command
 * ==========================================================================
 *
 * Similar to Yanfly's Main Menu Manager, you can customize extra commands
 * to be added to the Command Window using the Parameters.
 *
 * Each group of Parameters customize aspects of the command:
 *
 * ==========================================================================
 *
 * Used:
 *
 *    Determines whether the command will be on the Window.
 *    Set to either 'true' or 'false'.
 *
 * ==========================================================================
 *
 * Text:
 *
 *    The text shown on the command.
 *    You can use Text Commands if the Parameter is set to 'true'.
 *
 * ==========================================================================
 *
 * Symbol:
 *
 *    A string of text which is unique for each command and defines it.
 *
 * ==========================================================================
 *
 * Action:
 *
 *    A function to be binded to the command.
 *
 *    Examples:
 *
 *    this.commandNewGame.bind(this)     -  Starts New Game
 *    this.commandContinue.bind(this)    -  Brings up Loading Screen
 *    this.commandOptions.bind(this)     -  Brings up Options Window
 *    close.bind(window)                 -  Closes the Game Window
 *    this.playCommonEvent.bind(this, x) -  Plays Common Event ID x
 *
 * ==========================================================================
 *
 * Enabled:
 *
 *    A JavaScript eval that determines whether the command is enabled.
 *
 * ==========================================================================
 *
 * Visible:
 *
 *    A JavaScript eval that determines whether the command is visible.
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
SRD.TitleCommandCustomizer = SRD.TitleCommandCustomizer || {};

var Imported = Imported || {};
Imported["SumRndmDde Title Command Customizer"] = 1.00;

(function(_) {

//-----------------------------------------------------------------------------
// SRD.TitleCommandCustomizer
//-----------------------------------------------------------------------------

var params = PluginManager.parameters('SRD_TitleCommandCustomizer');

_.order = String(params['Command Order']).split(/\s*,\s*/);
_.textCodes = String(params['Allow Text Codes']).trim().toLowerCase() === 'true';
_.alignment = String(params['Command Text Alignment']).trim().toLowerCase();
_.font = String(params['Command Text Font']);
_.opacity = parseInt(params['Window Opacity']);
_.padding = parseInt(params['Window Padding']);

_.x = String(params['Window X']);
_.y = String(params['Window Y']);
_.width = String(params['Window Width']);
_.height = String(params['Window Height']);
_.rows = String(params['Window Rows']);
_.cols = String(params['Window Columns']);

_.commands = [];
for(var i = 1; i <= 30; i++) {
	if(params['Com. ' + i + ' Used'].trim().toLowerCase() === 'true') {
		var command = {};
		command.text = String(params['Com. ' + i + ' Text']);
		command.symbol = String(params['Com. ' + i + ' Symbol']);
		command.action = String(params['Com. ' + i + ' Action']);
		command.enabled = String(params['Com. ' + i + ' Enabled']);
		command.visible = String(params['Com. ' + i + ' Visible']);
		_.commands.push(command);
	}
}

//-----------------------------------------------------------------------------
// Scene_Title
//-----------------------------------------------------------------------------

var _Scene_Title_initialize = Scene_Title.prototype.initialize;
Scene_Title.prototype.initialize = function() {
	_Scene_Title_initialize.call(this);
	this._TCCInterpreter = new Game_Interpreter();
	this._TCCCommonEvent = 0;
};

var _Scene_Title_create = Scene_Title.prototype.create;
Scene_Title.prototype.create = function() {
	_Scene_Title_create.call(this);
	this.createMessageWindow();
	this.createScrollTextWindow();
};

Scene_Title.prototype.createMessageWindow = function() {
	this._messageWindow = new Window_Message();
	this.addWindow(this._messageWindow);
	this._messageWindow.subWindows().forEach(function(window) {
		this.addWindow(window);
	}, this);
};

Scene_Title.prototype.createScrollTextWindow = function() {
	this._scrollTextWindow = new Window_ScrollText();
	this.addWindow(this._scrollTextWindow);
};

Scene_Title.prototype.createCommandWindow = function() {
	this._commandWindow = new Window_TitleCommand();
	for(var i = 0; i < _.commands.length; i++) {
		if(_.commands[i].action.trim().length > 0) {
			this._commandWindow.setHandler(_.commands[i].symbol,  eval(_.commands[i].action));
		}
	}
	this.addWindow(this._commandWindow);
};

Scene_Title.prototype.playCommonEvent = function(ceID) {
	this._TCCCommonEvent = ceID;
};

var _Scene_Title_update = Scene_Title.prototype.update;
Scene_Title.prototype.update = function() {
	_Scene_Title_update.call(this);
	this.updateTCCInterpreter();
};

Scene_Title.prototype.updateTCCInterpreter = function() {
	if(this._TCCInterpreter && this._TCCCommonEvent !== 0) {
		if(!this._TCCInterpreter.isRunning()) {
			if(this._TCCCommonEvent > -1) {
				this._TCCInterpreter.setup($dataCommonEvents[this._TCCCommonEvent].list, this._eventId);
				this._TCCCommonEvent = -1;
			} else {
				this._TCCCommonEvent = 0;
				this._commandWindow.activate();
				return;
			}
		}
		this._TCCInterpreter.update();
	}
};

//-----------------------------------------------------------------------------
// Window_TitleCommand
//-----------------------------------------------------------------------------

Window_TitleCommand.prototype.standardFontFace = function() {
	return _.font;
};

Window_TitleCommand.prototype.standardPadding = function() {
	return _.padding;
};

Window_TitleCommand.prototype.windowWidth = function() {
	return eval(_.width);
};

Window_TitleCommand.prototype.windowHeight = function() {
	return eval(_.height);
};

Window_TitleCommand.prototype.updatePlacement = function() {
	this.x = eval(_.x);
	this.y = eval(_.y);
};

Window_TitleCommand.prototype.maxCols = function() {
	return eval(_.cols);
};

Window_TitleCommand.prototype.numVisibleRows = function() {
	return eval(_.rows);
};

var _Window_TitleCommand_initialize = Window_TitleCommand.prototype.initialize;
Window_TitleCommand.prototype.initialize = function() {
	this._addedSymbols = [];
	_Window_TitleCommand_initialize.call(this);
	this.opacity = _.opacity;
	this.reorganizeTitleCommandList();
};

Window_TitleCommand.prototype.reorganizeTitleCommandList = function() {
	var temp = [];
	var temp2 = this._list.clone();
	for(var i = 0; i < _.order.length; i++) {
		var symbol = _.order[i];
		for(var j = 0; j < this._list.length; j++) {
			if(symbol === this._list[j].symbol) {
				temp.push(this._list[j]);
			}
		}
	}
	var force = true;
	for(var i = 0; i < temp2.length; i++) {
		for(var j = 0; j < temp.length; j++) {
			if(temp2[i].symbol === temp[j].symbol) {
				force = false;
			}
		}
		if(force) {
			temp.push(temp2[i]);
		}
		force = true;
	}
	this._list = temp.clone();
};

Window_TitleCommand.prototype.makeCommandList = function() {
	for(var i = 0; i < _.commands.length; i++) {
		var text = (_.commands[i].text.match(/EVAL:\s*(.*)/i)) ? eval(RegExp.$1) : _.commands[i].text;
		this.addCommand(text, _.commands[i].symbol, eval(_.commands[i].enabled));
	}
};

Window_TitleCommand.prototype.refresh = function() {
	this.clearCommandList();
	this.makeCommandList();
	this.reorganizeTitleCommandList();
	this.createContents();
	Window_Selectable.prototype.refresh.call(this);
};

Window_TitleCommand.prototype.drawItem = function(index) {
	var rect = this.itemRectForText(index);
	var align = this.itemTextAlign();
	this.resetTextColor();
	this.changePaintOpacity(this.isCommandEnabled(index));
	if(_.textCodes) {
		this.drawTextEx(this.commandName(index), rect.x, rect.y);
	} else {
		this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
	}
};

Window_TitleCommand.prototype.itemTextAlign = function() {
	return _.alignment;
};

})(SRD.TitleCommandCustomizer);