/*:
 * @plugindesc (PART 2) The second part of the Battle Status Customizer. This allows you to manipulate gauges.
 * @author SumRndmDde
 *
 * @param == Global Settings ==
 * @default
 *
 * @param Gauge X Offset
 * @desc An X offset used by all gauges.
 * @default 0
 *
 * @param Gauge Y Offset
 * @desc A Y offset used by all gauges.
 * @default -10
 *
 * @param Text X Pos
 * @desc The X position of the gauge's text.
 * Use "x" to represent the gauge's X position. 
 * @default x + 4
 *
 * @param Text Y Pos
 * @desc The Y position of the gauge's text.
 * Use "y" to represent the gauge's Y position. 
 * @default y + 5
 *
 * @param Gauge Font
 * @desc The font used by the gauges.
 * @default Gamefont
 *
 * @param Gauge Font Size
 * @desc The font size used by the text.
 * Can be a number or JavaScript code.
 * @default height - 4
 *
 * @param Gauge Italic
 * @desc Whether or not italics are used on the gauge text.
 * @default false
 *
 * @param Gauge Text Color
 * @desc The text color used by the gauge.
 * @default #ffffff
 *
 * @param Gauge Outline Color
 * @desc The outline color used by the gauge.
 * @default rgba(0, 0, 0, 0.5)
 *
 * @param Gauge Outline Width
 * @desc The size of the outline used by the gauge's text.
 * @default 4
 *
 *
 * @param == Gauge 1 ==
 * @default
 *
 * @param Gauge 1 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default TextManager.hpA
 *
 * @param Gauge 1 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default actor.hp
 *
 * @param Gauge 1 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default actor.mhp
 *
 * @param Gauge 1 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default 2 | boxHeight - 56
 *
 * @param Gauge 1 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default boxWidth - 4 | 22
 *
 * @param Gauge 1 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default this.hpGaugeColor1() | this.hpGaugeColor2()
 *
 * @param Gauge 1 Back Color
 * @desc The color used for the background of the gauge.
 * @default "#202040"
 *
 * @param Gauge 1 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default true
 *
 * @param == Gauge 2 ==
 * @default
 *
 * @param Gauge 2 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default TextManager.mpA
 *
 * @param Gauge 2 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default actor.mp
 *
 * @param Gauge 2 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default actor.mmp
 *
 * @param Gauge 2 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default 2 | boxHeight - 32
 *
 * @param Gauge 2 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default boxWidth / 2 | 22
 *
 * @param Gauge 2 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default this.mpGaugeColor1() | this.mpGaugeColor2()
 *
 * @param Gauge 2 Back Color
 * @desc The color used for the background of the gauge.
 * @default "#202040"
 *
 * @param Gauge 2 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default true
 *
 * @param == Gauge 3 ==
 * @default
 *
 * @param Gauge 3 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default TextManager.tpA
 *
 * @param Gauge 3 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default actor.tp
 *
 * @param Gauge 3 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default actor.maxTp()
 *
 * @param Gauge 3 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default (boxWidth / 2) + 4 | boxHeight - 32
 *
 * @param Gauge 3 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default (boxWidth / 2) - 6 | 22
 *
 * @param Gauge 3 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default this.tpGaugeColor1() | this.tpGaugeColor2()
 *
 * @param Gauge 3 Back Color
 * @desc The color used for the background of the gauge.
 * @default "#202040"
 *
 * @param Gauge 3 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default true
  *
 * @param == Gauge 4 ==
 * @default
 *
 * @param Gauge 4 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default TextManager.mpA
 *
 * @param Gauge 4 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default actor.mp
 *
 * @param Gauge 4 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default actor.mmp
 *
 * @param Gauge 4 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default 2 | boxHeight - 32
 *
 * @param Gauge 4 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default boxWidth - 4 | 22
 *
 * @param Gauge 4 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default this.mpGaugeColor1() | this.mpGaugeColor2()
 *
 * @param Gauge 4 Back Color
 * @desc The color used for the background of the gauge.
 * @default "#202040"
 *
 * @param Gauge 4 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default true
 *
 * @param == Gauge 5 ==
 * @default
 *
 * @param Gauge 5 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 5 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 5 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 5 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 5 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 5 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 5 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 5 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 6 ==
 * @default
 *
 * @param Gauge 6 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 6 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 6 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 6 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 6 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 6 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 6 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 6 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 7 ==
 * @default
 *
 * @param Gauge 7 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 7 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 7 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 7 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 7 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 7 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 7 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 7 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 8 ==
 * @default
 *
 * @param Gauge 8 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 8 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 8 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 8 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 8 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 8 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 8 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 8 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 9 ==
 * @default
 *
 * @param Gauge 9 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 9 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 9 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 9 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 9 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 9 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 9 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 9 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 10 ==
 * @default
 *
 * @param Gauge 10 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 10 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 10 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 10 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 10 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 10 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 10 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 10 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 11 ==
 * @default
 *
 * @param Gauge 11 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 11 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 11 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 11 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 11 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 11 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 11 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 11 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 12 ==
 * @default
 *
 * @param Gauge 12 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 12 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 12 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 12 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 12 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 12 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 12 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 12 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 13 ==
 * @default
 *
 * @param Gauge 13 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 13 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 13 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 13 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 13 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 13 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 13 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 13 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 14 ==
 * @default
 *
 * @param Gauge 14 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 14 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 14 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 14 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 14 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 14 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 14 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 14 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 15 ==
 * @default
 *
 * @param Gauge 15 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 15 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 15 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 15 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 15 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 15 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 15 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 15 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 16 ==
 * @default
 *
 * @param Gauge 16 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 16 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 16 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 16 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 16 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 16 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 16 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 16 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 17 ==
 * @default
 *
 * @param Gauge 17 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 17 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 17 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 17 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 17 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 17 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 17 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 17 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 18 ==
 * @default
 *
 * @param Gauge 18 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 18 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 18 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 18 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 18 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 18 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 18 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 18 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 19 ==
 * @default
 *
 * @param Gauge 19 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 19 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 19 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 19 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 19 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 19 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 19 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 19 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 20 ==
 * @default
 *
 * @param Gauge 20 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 20 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 20 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 20 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 20 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 20 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 20 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 20 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 21 ==
 * @default
 *
 * @param Gauge 21 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 21 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 21 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 21 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 21 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 21 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 21 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 21 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 22 ==
 * @default
 *
 * @param Gauge 22 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 22 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 22 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 22 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 22 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 22 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 22 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 22 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 23 ==
 * @default
 *
 * @param Gauge 23 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 23 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 23 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 23 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 23 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 23 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 23 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 23 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 24 ==
 * @default
 *
 * @param Gauge 24 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 24 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 24 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 24 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 24 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 24 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 24 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 24 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 25 ==
 * @default
 *
 * @param Gauge 25 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 25 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 25 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 25 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 25 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 25 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 25 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 25 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 26 ==
 * @default
 *
 * @param Gauge 26 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 26 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 26 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 26 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 26 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 26 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 26 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 26 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 27 ==
 * @default
 *
 * @param Gauge 27 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 27 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 27 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 27 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 27 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 27 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 27 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 27 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 28 ==
 * @default
 *
 * @param Gauge 28 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 28 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 28 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 28 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 28 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 28 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 28 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 28 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 29 ==
 * @default
 *
 * @param Gauge 29 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 29 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 29 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 29 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 29 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 29 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 29 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 29 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 30 ==
 * @default
 *
 * @param Gauge 30 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 30 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 30 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 30 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 30 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 30 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 30 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 30 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 31 ==
 * @default
 *
 * @param Gauge 31 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 31 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 31 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 31 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 31 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 31 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 31 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 31 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 32 ==
 * @default
 *
 * @param Gauge 32 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 32 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 32 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 32 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 32 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 32 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 32 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 32 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 33 ==
 * @default
 *
 * @param Gauge 33 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 33 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 33 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 33 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 33 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 33 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 33 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 33 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 34 ==
 * @default
 *
 * @param Gauge 34 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 34 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 34 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 34 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 34 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 34 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 34 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 34 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 35 ==
 * @default
 *
 * @param Gauge 35 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 35 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 35 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 35 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 35 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 35 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 35 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 35 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 36 ==
 * @default
 *
 * @param Gauge 36 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 36 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 36 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 36 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 36 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 36 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 36 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 36 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 37 ==
 * @default
 *
 * @param Gauge 37 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 37 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 37 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 37 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 37 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 37 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 37 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 37 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 38 ==
 * @default
 *
 * @param Gauge 38 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 38 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 38 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 38 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 38 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 38 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 38 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 38 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 39 ==
 * @default
 *
 * @param Gauge 39 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 39 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 39 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 39 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 39 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 39 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 39 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 39 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 40 ==
 * @default
 *
 * @param Gauge 40 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 40 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 40 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 40 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 40 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 40 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 40 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 40 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 41 ==
 * @default
 *
 * @param Gauge 41 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 41 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 41 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 41 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 41 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 41 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 41 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 41 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 42 ==
 * @default
 *
 * @param Gauge 42 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 42 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 42 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 42 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 42 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 42 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 42 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 42 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 43 ==
 * @default
 *
 * @param Gauge 43 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 43 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 43 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 43 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 43 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 43 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 43 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 43 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 44 ==
 * @default
 *
 * @param Gauge 44 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 44 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 44 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 44 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 44 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 44 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 44 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 44 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 45 ==
 * @default
 *
 * @param Gauge 45 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 45 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 45 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 45 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 45 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 45 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 45 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 45 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 46 ==
 * @default
 *
 * @param Gauge 46 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 46 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 46 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 46 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 46 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 46 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 46 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 46 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 47 ==
 * @default
 *
 * @param Gauge 47 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 47 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 47 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 47 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 47 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 47 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 47 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 47 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 48 ==
 * @default
 *
 * @param Gauge 48 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 48 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 48 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 48 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 48 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 48 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 48 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 48 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 49 ==
 * @default
 *
 * @param Gauge 49 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 49 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 49 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 49 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 49 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 49 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 49 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 49 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @param == Gauge 50 ==
 * @default
 *
 * @param Gauge 50 Text
 * @desc The text shown on the gauge. Use this to describe what the gauge means.
 * @default
 *
 * @param Gauge 50 Current
 * @desc The JavaScript evaluation that determines how much the current value is.
 * @default
 *
 * @param Gauge 50 Max
 * @desc The JavaScript evaluation that determines the maximum amount of the gauge's value can be.
 * @default
 *
 * @param Gauge 50 Position
 * @desc The position in the Actor's "section" this gauge appears.
 * Use the format:  [X Position] | [Y Position]
 * @default
 *
 * @param Gauge 50 Size
 * @desc The width and height of the gauge.
 * Use the format:  [Width] | [Height]
 * @default
 *
 * @param Gauge 50 Colors
 * @desc The two colors used to create the gauge gradient.
 * Use the format:  [Color 1] | [Color 2]
 * @default
 *
 * @param Gauge 50 Back Color
 * @desc The color used for the background of the gauge.
 * @default
 *
 * @param Gauge 50 Draw C/M
 * @desc If 'true', then the current and max values will be drawn on the gauge.
 * @default
 *
 * @help
 *
 * Battle Status Customizer (Part 2)
 * Version 1.00
 * SumRndmDde
 *
 *
 * Read the Help Section of Part 1 for the information.
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
SRD.BattleStatusCustomizer = SRD.BattleStatusCustomizer || {};

var Imported = Imported || {};
Imported["SumRndmDde Battle Status Customizer 2"] = 1.00;

(function(_) {

"use strict";

})(SRD.BattleStatusCustomizer);